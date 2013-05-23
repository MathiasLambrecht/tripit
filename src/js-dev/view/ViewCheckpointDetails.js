/* globals Util:true */
var ViewCheckpointDetails = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.checkpointdetails,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'btnCloseHandler',
        'click #btnDelete': 'btnDeleteHandler'
    },

    btnDeleteHandler: function(e)
    {
        e.preventDefault();

        var self = this;

        $.ajax
        ({
            url: Util.api + '/deletecheckpoint/' + $(e.currentTarget).attr('href'),
            type: 'delete',
            success: function(res)
            {
                self.trigger('delete_done', $.cookie('tripId'));
            }
        });
    },

    btnCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.append(this.template({details: this.model}));
        return this;
    }
});