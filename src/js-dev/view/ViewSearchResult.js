var ViewSearchResult = Backbone.View.extend
({
    class:'button brown',
    tagName: 'li',
    template: tpl.searchresult,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
      'click .btnResult': 'resultClickHandler'
    },

    resultClickHandler: function(e)
    {
        e.preventDefault();
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});