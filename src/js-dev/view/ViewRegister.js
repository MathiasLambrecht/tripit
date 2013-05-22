/*globals Util:true */

var ViewRegister = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.register,

    initialize: function()
    {
        _.bindAll(this);
    },
    events:
    {
        'click #btnSubmit': 'submitClickHandler',
        'click #btnClose': 'closeClickHandler'
    },

    closeClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_register');
    },

    submitClickHandler: function(e)
    {
        e.preventDefault();

        var data = new Object
        ({
            username: $('#txtUsername').val(),
            password: $('#txtPassword').val()
        });

        $.ajax
        ({
            url: Util.api + '/register',
            type: 'post',
            data: data,
            success: function(id)
            {
                $.cookie('isLoggedIn', true);
                $.cookie('user', data.username);
                $.cookie('userId', id);

                this.trigger('register_done');
            },
            error: function()
            {
                console.log(arguments);
            }
        });
    },

    render: function()
    {
        this.$el.html(this.template());
        return this;
    }
});