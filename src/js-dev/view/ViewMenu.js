var ViewMenu = Backbone.View.extend
({
    template: tpl.menu,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnMenu': 'btnMenuClickHandler',
        'click #btnCloseMenu': 'btnCloseMenuClickHandler',
        'click #btnLogout': 'btnLogoutClickHandler',
        'click #btnMenuTrips': 'btnTripsClickHandler'
    },

    btnMenuClickHandler: function(e)
    {
        e.preventDefault();

        $('#menu').removeClass('close');
        $('#menu').addClass('open');
    },

    btnCloseMenuClickHandler: function(e)
    {
        e.preventDefault();

        $('#menu').removeClass('open');
        $('#menu').addClass('close');
    },

    btnLogoutClickHandler: function(e)
    {
        e.preventDefault();

        $.removeCookie('isLoggedIn', {path: '/'});
        $.removeCookie('user', {path: '/'});
        $.removeCookie('userId', {path: '/'});

        this.trigger('logout_done');
    },

    btnTripsClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('trips_clicked');
    },

    render: function()
    {
        this.$el.append(this.template({username: $.cookie('user')}));
        return this;
    }
});