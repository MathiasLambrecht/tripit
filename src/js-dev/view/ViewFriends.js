/* globals ViewSearchResult:true */
/* globals ModelNewUserTrip:true */
/* globals Util:true */

var ViewFriends = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.friends,

    initialize: function()
    {
        _.bindAll(this);

        $('#searchresults').addClass('display-none');
    },

    events:
    {
        'click #btnClose': 'closeHandler',
        'keyup #txtSearch': 'searchHandler',
        'click .btnResult': 'addUserHandler',
        'click .btnDelete': 'deleteHandler'
    },

    deleteHandler: function(e)
    {
        e.preventDefault();

        var self = this;

        $.ajax
        ({
            url: Util.api + '/deleteusertrip/' + $(e.currentTarget).attr('href') + '/' + $.cookie('tripId'),
            type: 'delete',
            success: function(res)
            {
                self.trigger('delete_done', $.cookie('tripId'));
            }
        });
    },

    addUserHandler: function(e)
    {
        e.preventDefault();

        var userId = $(e.currentTarget).attr('href');
        
        var modelNewUserTrip = new ModelNewUserTrip
        ({
            tripid: $.cookie('tripId'),
            userid: userId
        });

        var self = this;

        modelNewUserTrip.save({}, {success: function(model, res)
        {
            self.trigger('user_added', $.cookie('tripId'));
        }});
    },

    closeHandler: function(e)
    {
        e.preventDefault();
        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    searchHandler: function()
    {
        $('#searchresults').html('');

        var searchTerm = $('#txtSearch').val();
        var results = this.collection.search(searchTerm);

        results.each(function(result, index)
        {
            if(result.id !== $.cookie('userId'))
            {
                this.renderResult(result);
            }
        }, this);
    },

    renderResult: function(result)
    {
        this.viewSearchResult = new ViewSearchResult({model: result});
        $('#searchresults').append(this.viewSearchResult.render().$el);
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});