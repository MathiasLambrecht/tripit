/*globals ViewTrip:true*/
var ViewTrips = Backbone.View.extend
({
    id: 'content',
    tagName: 'div',
    template: tpl.trips,

    initialize: function()
    {
        _.bindAll(this);

        this.collection.on("sync reset", this.render);
    },

    events:
    {
        'click .btnTrip': 'tripClickHandler'
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