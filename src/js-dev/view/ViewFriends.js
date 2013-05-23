var ViewFriends = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.friends,

    initialize: function()
    {
        _.bindAll(this);
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});