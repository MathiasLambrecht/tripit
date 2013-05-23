/*globals ViewTrip:true*/
var ViewTrips = Backbone.View.extend
({
    id: 'content',
    tagName: 'div',
    template: tpl.trips,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click .btnTrip': 'tripClickHandler',
        'click #btnAdd': 'btnAddClickHandler'
    },

    btnAddClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('add_trip_clicked');
    },

    tripClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('trip_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.html(this.template({trips: this.collection.toJSON()}));

        return this;
    }
});