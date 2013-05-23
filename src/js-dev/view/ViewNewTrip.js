/* globals ModelNewTrip:true */

var ViewNewTrip = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.newtrip,

    initialize: function ()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'btnCloseHandler',
        'click #btnSubmit': 'btnSubmitClickHandler'
    },

    btnSubmitClickHandler: function(e)
    {
        e.preventDefault();

        var modelNewTrip = new ModelNewTrip
        ({
            name: $('#txtName').val(),
            startpoint: $('#txtPoint').val(),
            startdate: $('#txtDate').val(),
            starttime: $('#txtTime').val(),
            userid: $.cookie('userId')
        });

        var self = this;

        modelNewTrip.save({}, {success: function()
        {
            self.trigger('trip_added');
        }});
    },

    btnCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked');
    },

    render: function ()
    {
        this.$el.append(this.template());
        return this;
    }
});