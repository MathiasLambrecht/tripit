/* globals ModelTrip:true, Util:true */
var CollectionTrips = Backbone.Collection.extend
({
    model: ModelTrip,
    url: Util.api + '/trips/' + $.cookie('userId')
});
