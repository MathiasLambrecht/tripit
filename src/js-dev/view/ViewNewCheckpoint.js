/* globals ModelNewCheckpoint:true */

var ViewNewCheckpoint = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.newcheckpoint,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'btnCloseHandler',
        'click #btnSubmit': 'addHandler'
    },

    btnCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked', $.cookie('tripId'));
    },

    addHandler: function(e)
    {
        e.preventDefault();

        var modelNewCheckpoint = new ModelNewCheckpoint
        ({
            checkpoint: $('#txtCheckpoint').val(),
            tripid: $.cookie('tripId'),
            cost: $('#txtCost').val(),
            distance: $('#txtDistance').val(),
            time: $('#txtTime').val(),
            transport: $('#txtTransport').val()
        });

        var self = this;

        modelNewCheckpoint.save({}, {success: function(req, res)
        {
            console.log(req);

            self.trigger('checkpoint_added', $.cookie('tripId'));
        }});
    },

    render: function()
    {
        this.$el.append(this.template());
        return this;
    }
});