var ViewCheckpoints = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.checkpoints,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'bntCloseHandler',
        'click .btnCheckpoint': 'checkPointClickHandler'
    },

    checkPointClickHandler: function(e)
    {
        e.preventDefault();

        var checkpoint_id = $(e.currentTarget).attr('href');

        var checkpointDetails = _.findWhere(this.model.get('checkpoints'), {id: checkpoint_id});

        this.trigger('checkpoint_clicked', checkpointDetails);
    },

    bntCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});