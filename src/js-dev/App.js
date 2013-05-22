/*globals ViewLogin:true, ViewTrips:true, ViewRegister:true, ViewMenu:true, ViewTrip:true, ViewCheckpoints:true, ViewCheckpointDetails, ViewFriends:true */
/*globals CollectionTrips:true*/
/*globals ModelTrip:true*/
/*globals Util:true*/

var App = Backbone.View.extend
({
    id: 'container',
    tagName: 'div',
    template: tpl.app,

    initialize:function()
    {
        _.bindAll(this);

        this.collectionTrips = new CollectionTrips();
        this.collectionTrips.fetch();
    },

    showLoginHandler: function()
    {
        this.viewLogin = new ViewLogin();
        this.$el.html(this.viewLogin.render().$el);
        this.viewLogin.on('show_register', this.showRegisterHandler);
        this.viewLogin.on('login_done', this.showTripsHandler);
    },

    showRegisterHandler: function()
    {
        this.viewRegister = new ViewRegister();
        this.$el.html(this.viewRegister.render().$el);
        this.viewRegister.on('close_register', this.showLoginHandler);
        this.viewRegister.on('register_done', this.showTripsHandler);
    },

    showTripsHandler: function()
    {
        this.collectionTrips = new CollectionTrips();
        this.collectionTrips.fetch();
        this.viewTrips = new ViewTrips({collection: this.collectionTrips});
        this.$el.html(this.viewTrips.render().$el);
        this.viewTrips.on('trip_clicked', this.loadTripOverview);

        this.showMenu();
    },

    loadTripOverview: function(trip_id)
    {
        var modelTrip = this.collectionTrips.findWhere({id: trip_id});
        this.viewTrip = new ViewTrip({model: modelTrip});
        this.$el.html(this.viewTrip.render().$el);
        this.viewTrip.on('checkpoints_clicked', this.checkpointsHandler);
        this.viewTrip.on('friends_clicked', this.friendsHandler);
        this.viewTrip.on('basics_clicked', this.basicsHandler);
        this.viewTrip.on('delete_clicked', this.deleteHandler);
        this.viewTrip.on('close_clicked', this.showTripsHandler);

        this.showMenu();
    },

    checkpointsHandler: function($trip_id)
    {
        var modelCheckpoints = this.collectionTrips.findWhere({id: $trip_id});
        this.viewCheckpoints = new ViewCheckpoints({model: modelCheckpoints});
        this.$el.html(this.viewCheckpoints.render().$el);
        this.viewCheckpoints.on('close_clicked', this.loadTripOverview);
        this.viewCheckpoints.on('checkpoint_clicked', this.loadCheckPointDetails);

        this.showMenu();
    },

    friendsHandler: function($trip_id)
    {
        var modelFriends = this.collectionTrips.findWhere({id: $trip_id});
        this.viewFriends = new ViewFriends({model: modelFriends});
        this.$el.html(this.viewFriends.render().$el);

        this.showMenu();
    },

    basicsHandler: function($trip_id)
    {

    },

    deleteHandler: function($trip_id)
    {

    },

    loadCheckPointDetails: function(checkpointDetails)
    {
        this.viewCheckpointDetails = new ViewCheckpointDetails({model: checkpointDetails});
        this.$el.html(this.viewCheckpointDetails.render().$el);
        this.viewCheckpointDetails.on('close_clicked', this.checkpointsHandler);

        this.showMenu();
    },

    showMenu: function()
    {
        this.viewMenu = new ViewMenu();
        this.$el.append(this.viewMenu.render().$el);
        this.viewMenu.on('logout_done', this.showLoginHandler);
        this.viewMenu.on('trips_clicked', this.showTripsHandler);
    },

    render: function()
    {
        if($.cookie('isLoggedIn'))
        {
            this.showTripsHandler();
        }
        else
        {
            this.showLoginHandler();
        }

        this.$el.append(this.template());

        return this;
    }
});