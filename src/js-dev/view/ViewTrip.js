var ViewTrip = Backbone.View.extend
({
    id: 'content',
    tagName: 'div',
    template: tpl.trip,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnCheckpoints': 'checkPointsClickHandler',
        'click #btnFriends': 'friendsClickHandler',
        'click #btnBasics': 'basicsClickHandler',
        'click #btnDelete': 'deleteClickHandler',
        'click #btnClose': 'closeClickHandler'
    },

    closeClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked');
    },

    checkPointsClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('checkpoints_clicked', $(e.currentTarget).attr('href'));
    },

    friendsClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('friends_clicked', $(e.currentTarget).attr('href'));
    },

    basicsClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('basics_clicked', $(e.currentTarget).attr('href'));
    },

    deleteClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('delete_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});