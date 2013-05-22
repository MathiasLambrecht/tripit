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
        'click #btnClose': 'btnCloseHandler'
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