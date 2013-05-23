/*globals Util:true */

var ViewLogin = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.login,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnSubmit': 'loginClickHandler',
        'click #btnRegister': 'registerClickHandler'
    },

    registerClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('show_register');
    },

    loginClickHandler: function(e)
    {
        var self = this;

        e.preventDefault();

        var data = new Object
        ({
            username: $('#txtUsername').val(),
            password: $('#txtPassword').val()
        });

        $.ajax
        ({
            url: Util.api + '/login',
            type: 'post',
            data: data,
            success: function(data)
            {
                $.cookie('isLoggedIn', true, {path: '/'});
                $.cookie('user', data[0]['username'], {path: '/'});
                $.cookie('userId', data[0]['id'], {path: '/'});

                self.trigger('login_done');
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