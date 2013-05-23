/* globals Util:true */

var ModelNewUserTrip = Backbone.Model.extend
({
    defaults:
    {
        tripid: null,
        userid: null
    },

    url: Util.api + '/newusertrip'
});