/* globals Util:true */
var ModelNewCheckpoint = Backbone.Model.extend
({
    defaults:
    {
        checkpoint: undefined,
        tripid: null,
        cost: undefined,
        distance: undefined,
        time: undefined,
        transport: undefined
    },

    url: Util.api + '/newcheckpoint'
});