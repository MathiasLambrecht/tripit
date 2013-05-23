/* globals ModelUser:true, Util:true */
var CollectionUsers = Backbone.Collection.extend
({
    model: ModelUser,
    url: Util.api + '/users'
});