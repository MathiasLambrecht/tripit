var ViewAddFriend = Backbone.View.extend
({
    template: tpl.addfriend,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
    },

    render: function()
    {
        this.$el.append(this.template());
        return this;
    }
});