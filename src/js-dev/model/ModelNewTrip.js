/* globals Util:true */
var ModelNewTrip = Backbone.Model.extend
({
    defaults:
    {
        name: undefined,
        startpoint: undefined,
        startdate: undefined,
        starttime: undefined,
        userid: undefined
    },

    url: Util.api + '/newtrip'
});