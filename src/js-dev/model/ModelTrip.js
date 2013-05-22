var ModelTrip = Backbone.Model.extend
({
    defaults:
    {
        id: null,
        name: undefined,
        startpoint: undefined,
        startdate: undefined,
        starttime: undefined,
        checkpoints: [],
        friends: []
    }
});