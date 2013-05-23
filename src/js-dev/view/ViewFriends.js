/* globals ViewSearchResult:true */

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
        'keyup #txtSearch': 'searchHandler'
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