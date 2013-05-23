/*globals ViewLogin:true, ViewTrips:true, ViewRegister:true, ViewMenu:true, ViewTrip:true, ViewCheckpoints:true, ViewCheckpointDetails, ViewFriends:true */
/*globals ViewNewTrip:true, ViewNewCheckpoint:true */
/*globals CollectionTrips:true, CollectionUsers:true */
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
        if($.cookie('isLoggedIn'))
        {
            this.fetchCollection();
        }

        this.collectionUsers = new CollectionUsers();
        this.collectionUsers.fetch({async: false});
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
        this.fetchCollection();
        this.viewTrips = new ViewTrips({collection: this.collectionTrips});
        this.$el.html(this.viewTrips.render().$el);
        this.viewTrips.on('trip_clicked', this.loadTripOverview);
        this.viewTrips.on('add_trip_clicked', this.addTripClickHandler);

        this.showMenu();
    },

    fetchCollection: function()
    {
        this.collectionTrips.fetch({async: false});
    },

    addTripClickHandler: function()
    {
        this.viewNewTrip = new ViewNewTrip();
        this.$el.html(this.viewNewTrip.render().$el);
        this.viewNewTrip.on('close_clicked', this.showTripsHandler);
        this.viewNewTrip.on('trip_added', this.showTripsHandler);
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
        this.viewTrip.on('delete_done', this.showTripsHandler);

        this.showMenu();
    },

    checkpointsHandler: function($trip_id)
    {
        this.fetchCollection();
        var modelCheckpoints = this.collectionTrips.findWhere({id: $trip_id});
        this.viewCheckpoints = new ViewCheckpoints({model: modelCheckpoints});
        this.$el.html(this.viewCheckpoints.render().$el);
        this.viewCheckpoints.on('close_clicked', this.loadTripOverview);
        this.viewCheckpoints.on('checkpoint_clicked', this.loadCheckPointDetails);
        this.viewCheckpoints.on('add_clicked', this.loadNewCheckpointHandler);
        this.showMenu();
    },

    loadNewCheckpointHandler: function()
    {
        this.viewNewCheckpoint = new ViewNewCheckpoint();
        this.$el.html(this.viewNewCheckpoint.render().$el);
        this.viewNewCheckpoint.on('close_clicked', this.checkpointsHandler);
        this.viewNewCheckpoint.on('checkpoint_added', this.checkpointsHandler);
        this.showMenu();
    },

    friendsHandler: function($trip_id)
    {
        var modelFriends = this.collectionTrips.findWhere({id: $trip_id});
        this.viewFriends = new ViewFriends({model: modelFriends, collection:this.collectionUsers});
        this.$el.html(this.viewFriends.render().$el);
        this.showMenu();
    },

    basicsHandler: function($trip_id)
    {

    },

    loadCheckPointDetails: function(checkpointDetails)
    {
        this.viewCheckpointDetails = new ViewCheckpointDetails({model: checkpointDetails});
        this.$el.html(this.viewCheckpointDetails.render().$el);
        this.viewCheckpointDetails.on('close_clicked', this.checkpointsHandler);
        this.viewCheckpointDetails.on('delete_done', this.checkpointsHandler);
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