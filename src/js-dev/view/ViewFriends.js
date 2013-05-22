var ViewFriends = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.friends,

    initialize: function()
    {
        _.bindAll(this);
        
        console.log(this.model.toJSON());
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});