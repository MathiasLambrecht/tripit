(function(){

this["tpl"] = this["tpl"] || {};

this["tpl"]["addfriend"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form id=\"formaddfriend\">\n    <fieldset>\n        <input type=\"text\" name=\"txtSearch\" id=\"txtSearch\" tabindex=\"1\" placeholder=\"Search...\" class=\"button heightthird third\" />\n    </fieldset>\n</form>\n";
  });

this["tpl"]["app"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "";


  return buffer;
  });

this["tpl"]["checkpointdetails"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"button heightfifth\">\n    <h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.checkpoint)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span class=\"spanicon closer\" data-icon=\"&#xe007;\"></span></h1>\n</header>\n\n<p class=\"button black heightfifth\"></p>\n\n<a href=\"#\" class=\"button heightfiftheen first\"><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.cost)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n<a href=\"#\" class=\"button heightfiftheen second\"><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.distance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n<a href=\"#\" class=\"button heightfiftheen third\"><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.time)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n<a href=\"#\" class=\"button heightfiftheen fourth\"><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.transport)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a>\n\n<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"btnDelete\" class=\"button heightfifth red\"><span>Delete <span data-icon=\"&#xe002;\"></span></span></a>\n\n<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.trip_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n\n";
  return buffer;
  });

this["tpl"]["checkpoints"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p class=\"button black heightfifth\"></p>\n\n    ";
  stack1 = helpers.each.call(depth0, depth0.checkpoints, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btnCheckpoint button first heightfifth\"><span>";
  if (stack1 = helpers.checkpoint) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkpoint; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n    ";
  return buffer;
  }

  buffer += "<header class=\"button heightfifth\">\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"spanicon closer\" data-icon=\"&#xe007;\"></span></h1>\n</header>\n\n<a href=\"#\" id=\"btnAdd\" class=\"button heightfifth orange fixed\"><span>Add checkpoint<span class=\"spanicon closer\" data-icon=\"&#xe003;\"></span></span></a>\n\n";
  stack1 = helpers['if'].call(depth0, depth0.checkpoints, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<p class=\"button black heightfifth\"></p>\n\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n\n";
  return buffer;
  });

this["tpl"]["friends"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btnDelete button first heightfifth\"><span>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"spanicon closer\" data-icon=\"&#xe002;\"></span></span></a>\n";
  return buffer;
  }

  buffer += "<header class=\"button heightfifth\">\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"spanicon closer\" data-icon=\"&#xe008;\"></span></h1>\n</header>\n\n<input type=\"text\" name=\"txtSearch\" id=\"txtSearch\" placeholder=\"Add a friend...\" class=\"button heightfifth orange fixed\" />\n\n<p class=\"button black heightfifth\"></p>\n\n<ul id=\"searchresults\"></ul>\n\n";
  stack1 = helpers.each.call(depth0, depth0.friends, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<p class=\"button black heightfifth\"></p>\n\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n\n";
  return buffer;
  });

this["tpl"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header class=\"button heightfifth\">\n    <h1>Tripin'</h1>\n</header>\n\n<p class=\"button black heightfifth\"></p>\n\n<form action=\"/login\" method=\"post\">\n    <fieldset>\n        <input type=\"text\" name=\"txtUsername\" id=\"txtUsername\" tabindex=\"1\"  placeholder=\"Username\" class=\"button heightthird first\" />\n        <input type=\"password\" name=\"txtPassword\" id=\"txtPassword\" tabindex=\"2\" placeholder=\"Password\" class=\"button heightthird second\" />\n        <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\" tabindex=\"3\" value=\"Sign in\" class=\"button heightthird orange\" />\n    </fieldset>\n</form>\n\n<a href=\"#\" id=\"btnRegister\" class=\"button heightfifth black\"><span>Sign up<span class=\"spanicon closer\" data-icon=\"&#xe004;\"></span></span></a>\n\n";
  });

this["tpl"]["menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"menu\" class=\"close\">\n    <ul>\n        <li id=\"liCloseMenu\">\n            <a href=\"#\" id=\"btnCloseMenu\" data-icon=\"&#xe002;\"></a>\n        </li>\n        <li>Hi there, ";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ".</li>\n        <li><a href=\"#\" id=\"btnMenuTrips\">Trips</a></li>\n        <li><a href=\"#\" id=\"btnMenuSummary\">Trip summary</a></li>\n        <li><a href=\"#\" id=\"btnLogout\">Logout</a></li>\n    </ul>\n</div>\n\n<a href=\"#\" id=\"btnMenu\"><span data-icon=\"&#xe000;\"></span></a>";
  return buffer;
  });

this["tpl"]["newcheckpoint"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form action=\"/login\" method=\"post\">\n    <fieldset>\n        <input type=\"text\" name=\"txtCheckpoint\" id=\"txtCheckpoint\" tabindex=\"1\" placeholder=\"Name\" class=\"button heightthird black\" />\n        <input type=\"text\" name=\"txtCost\" id=\"txtCost\" tabindex=\"2\"  placeholder=\"Costs\" class=\"button heightquarter first\" />\n        <input type=\"date\" name=\"txtDistance\" id=\"txtDistance\" tabindex=\"3\" placeholder=\"Distance\" class=\"button heightquarter second\" />\n        <input type=\"time\" name=\"txtTime\" id=\"txtTime\" tabindex=\"4\" placeholder=\"Time\" class=\"button heightquarter third\" />\n        <input type=\"text\" name=\"txtTransport\" id=\"txtTransport\" tabindex=\"5\" placeholder=\"Transport\" class=\"button heightquarter fourth\" />\n\n        <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\" tabindex=\"6\" value=\"Add checkpoint\" class=\"button heightthird orange\" />\n    </fieldset>\n</form>\n\n<a href=\"#\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n";
  });

this["tpl"]["newtrip"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form action=\"/login\" method=\"post\">\n    <fieldset>\n        <input type=\"text\" name=\"txtName\" id=\"txtName\" tabindex=\"1\" placeholder=\"Name\" class=\"button heightthird first black\" />\n        <input type=\"text\" name=\"txtPoint\" id=\"txtPoint\" tabindex=\"2\"  placeholder=\"Startpoint\" class=\"button heightthird first\" />\n        <input type=\"date\" name=\"txtDate\" id=\"txtDate\" tabindex=\"3\" placeholder=\"Start date\" class=\"button heightthird second\" />\n        <input type=\"time\" name=\"txtTime\" id=\"txtTime\" tabindex=\"4\" placeholder=\"Start time\" class=\"button heightthird third\" />\n        <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\" tabindex=\"5\" value=\"Add trip\" class=\"button heightthird orange\" />\n    </fieldset>\n</form>\n\n<a href=\"#\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n";
  });

this["tpl"]["register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header class=\"heightfifth button\">\n    <!--<h1 id=\"logo\"><span class=\"display-none\">Tripin'</span></h1>-->\n    <h1>Tripin'</h1>\n</header>\n\n<p class=\"button black heightfifth\"></p>\n\n<form action=\"/login\" method=\"post\">\n    <fieldset>\n        <input type=\"text\" name=\"txtUsername\" id=\"txtUsername\" tabindex=\"1\"  placeholder=\"Username\" class=\"button heightthird first\" />\n        <input type=\"password\" name=\"txtPassword\" id=\"txtPassword\" tabindex=\"2\" placeholder=\"Password\" class=\"button heightthird second\" />\n        <input type=\"password\" name=\"txtPassword2\" id=\"txtPassword2\" tabindex=\"3\" placeholder=\"Confirm password\" class=\"button heightthird third\" />\n        <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\" tabindex=\"3\" value=\"Sign up\" class=\"button heightthird orange\" />\n    </fieldset>\n</form>\n\n<a href=\"#\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n\n";
  });

this["tpl"]["searchresult"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"btnResult\" href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"spanicon\" data-icon=\"&#xe003;\"></span></a>\n";
  return buffer;
  });

this["tpl"]["trip"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"button heightfifth\">\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"spanicon closer\" data-icon=\"&#xe006;\"></span></h1>\n</header>\n\n<p class=\"button black heightfifth\"></p>\n\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnCheckpoints\" class=\"button heightfifth first\"><span>Checkpoints<span class=\"spanicon closer\" data-icon=\"&#xe007;\"></span></span></a>\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnFriends\" class=\"button heightfifth second\"><span>Friends<span class=\"spanicon closer\" data-icon=\"&#xe008;\"></span></span></a>\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnBasics\" class=\"button heightfifth third\"><span>Basics<span class=\"spanicon closer\" data-icon=\"&#xe009;\"></span></span></a>\n<a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"btnDelete\" class=\"button heightfifth red\"><span>Delete <span data-icon=\"&#xe002;\"></span></span></a>\n\n<a href=\"#\" id=\"btnClose\"><span data-icon=\"&#xe002;\"></span></a>\n";
  return buffer;
  });

this["tpl"]["trips"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btnTrip button first heightfifth\"><span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n";
  return buffer;
  }

  buffer += "<header class=\"button heightfifth\">\n    <h1>Trips<span class=\"spanicon closer\" data-icon=\"&#xe006;\"></span></h1>\n</header>\n\n<a href=\"#\" id=\"btnAdd\" class=\"button heightfifth orange fixed\"><span>Add trip<span class=\"spanicon closer\" data-icon=\"&#xe003;\"></span></span></a>\n\n<p class=\"button black heightfifth\"></p>\n\n";
  stack1 = helpers.each.call(depth0, depth0.trips, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<p class=\"button black heightfifth\"></p>\n\n";
  return buffer;
  });

var Util = (function()
{
    function Util(){}

//    Util.api = 'http://192.168.123.196/2DEV1_lambrechtMathias_RMD2_TRIPIT/api';
    Util.api = 'http://localhost/2DEV1_lambrechtMathias_RMD2_TRIPIT/api';

    return Util;
})();


/* globals Util:true */
var ModelNewCheckpoint = Backbone.Model.extend
({
    defaults:
    {
        checkpoint: undefined,
        tripid: null,
        cost: undefined,
        distance: undefined,
        time: undefined,
        transport: undefined
    },

    url: Util.api + '/newcheckpoint'
});

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

var ModelTrip = Backbone.Model.extend
({
    defaults:
    {
        id: null,
        name: undefined,
        startpoint: undefined,
        startdate: undefined,
        starttime: undefined,
        checkpoints: [],
        friends: []
    }
});

var ModelUser = Backbone.Model.extend
({
    defaults:
    {
        id: null,
        username: undefined
    }
});

var ViewAddFriend = Backbone.View.extend
({
    template: tpl.addfriend,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
    },

    render: function()
    {
        this.$el.append(this.template());
        return this;
    }
});

/* globals Util:true */
var ViewCheckpointDetails = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.checkpointdetails,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'btnCloseHandler',
        'click #btnDelete': 'btnDeleteHandler'
    },

    btnDeleteHandler: function(e)
    {
        e.preventDefault();

        var self = this;

        $.ajax
        ({
            url: Util.api + '/deletecheckpoint/' + $(e.currentTarget).attr('href') + '/' + $.cookie('userId'),
            type: 'delete',
            success: function(res)
            {
                self.trigger('delete_done', $.cookie('tripId'));
            }
        });
    },

    btnCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.append(this.template({details: this.model}));
        return this;
    }
});

var ViewCheckpoints = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.checkpoints,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnClose': 'bntCloseHandler',
        'click .btnCheckpoint': 'checkPointClickHandler',
        'click #btnAdd': 'btnAddClickHandler'
    },

    btnAddClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('add_clicked');
    },

    checkPointClickHandler: function(e)
    {
        e.preventDefault();

        var checkpoint_id = $(e.currentTarget).attr('href');

        var checkpointDetails = _.findWhere(this.model.get('checkpoints'), {id: checkpoint_id});

        this.trigger('checkpoint_clicked', checkpointDetails);
    },

    bntCloseHandler: function(e)
    {
        e.preventDefault();

        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

/* globals ViewSearchResult:true */
/* globals ModelNewUserTrip:true */
/* globals Util:true */

var ViewFriends = Backbone.View.extend
({
    id:'content',
    tagName: 'div',
    template: tpl.friends,

    initialize: function()
    {
        _.bindAll(this);

        $('#searchresults').addClass('display-none');
    },

    events:
    {
        'click #btnClose': 'closeHandler',
        'keyup #txtSearch': 'searchHandler',
        'click .btnResult': 'addUserHandler',
        'click .btnDelete': 'deleteHandler'
    },

    deleteHandler: function(e)
    {
        e.preventDefault();

        var self = this;

        $.ajax
        ({
            url: Util.api + '/deleteusertrip/' + $(e.currentTarget).attr('href') + '/' + $.cookie('tripId'),
            type: 'delete',
            success: function(res)
            {
                self.trigger('delete_done', $.cookie('tripId'));
            }
        });
    },

    addUserHandler: function(e)
    {
        e.preventDefault();

        var userId = $(e.currentTarget).attr('href');
        
        var modelNewUserTrip = new ModelNewUserTrip
        ({
            tripid: $.cookie('tripId'),
            userid: userId
        });

        var self = this;

        modelNewUserTrip.save({}, {success: function(model, res)
        {
            self.trigger('user_added', $.cookie('tripId'));
        }});
    },

    closeHandler: function(e)
    {
        e.preventDefault();
        this.trigger('close_clicked', $(e.currentTarget).attr('href'));
    },

    searchHandler: function()
    {
        $('#searchresults').html('');

        var searchTerm = $('#txtSearch').val();
        var results = this.collection.search(searchTerm);

        results.each(function(result, index)
        {
            if(result.id !== $.cookie('userId'))
            {
                this.renderResult(result);
            }
        }, this);
    },

    renderResult: function(result)
    {
        this.viewSearchResult = new ViewSearchResult({model: result});
        $('#searchresults').append(this.viewSearchResult.render().$el);
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

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
                if(data.length > 0)
                {
                    $.cookie('isLoggedIn', true, {path: '/'});
                    $.cookie('user', data[0]['username'], {path: '/'});
                    $.cookie('userId', data[0]['id'], {path: '/'});

                    self.trigger('login_done');
                }
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

var ViewMenu = Backbone.View.extend
({
    template: tpl.menu,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
        'click #btnMenu': 'btnMenuClickHandler',
        'click #btnCloseMenu': 'btnCloseMenuClickHandler',
        'click #btnLogout': 'btnLogoutClickHandler',
        'click #btnMenuTrips': 'btnTripsClickHandler'
    },

    btnMenuClickHandler: function(e)
    {
        e.preventDefault();

        $('#menu').removeClass('close');
        $('#menu').addClass('open');
    },

    btnCloseMenuClickHandler: function(e)
    {
        e.preventDefault();

        $('#menu').removeClass('open');
        $('#menu').addClass('close');
    },

    btnLogoutClickHandler: function(e)
    {
        e.preventDefault();

        $.removeCookie('isLoggedIn', {path: '/'});
        $.removeCookie('user', {path: '/'});
        $.removeCookie('userId', {path: '/'});
        $.removeCookie('tripId', {path: '/'});

        this.trigger('logout_done');
    },

    btnTripsClickHandler: function(e)
    {
        e.preventDefault();

        this.trigger('trips_clicked');
    },

    render: function()
    {
        this.$el.append(this.template({username: $.cookie('user')}));
        return this;
    }
});

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

var ViewSearchResult = Backbone.View.extend
({
    class:'button brown',
    tagName: 'li',
    template: tpl.searchresult,

    initialize: function()
    {
        _.bindAll(this);
    },

    events:
    {
      'click .btnResult': 'resultClickHandler'
    },

    resultClickHandler: function(e)
    {
        e.preventDefault();
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

/* globals Util:true */
var ViewTrip = Backbone.View.extend
({
    id: 'content',
    tagName: 'div',
    template: tpl.trip,

    initialize: function()
    {
        _.bindAll(this);

        $.cookie('tripId', this.model.get('id'));
    },

    events:
    {
        'click #btnCheckpoints': 'checkPointsClickHandler',
        'click #btnFriends': 'friendsClickHandler',
        'click #btnBasics': 'basicsClickHandler',
        'click #btnDelete': 'deleteClickHandler',
        'click #btnClose': 'closeClickHandler'
    },

    closeClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('close_clicked');
    },

    checkPointsClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('checkpoints_clicked', $(e.currentTarget).attr('href'));
    },

    friendsClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('friends_clicked', $(e.currentTarget).attr('href'));
    },

    basicsClickHandler: function(e)
    {
        e.preventDefault();
        this.trigger('basics_clicked', $(e.currentTarget).attr('href'));
    },

    deleteClickHandler: function(e)
    {
        e.preventDefault();

        var self = this;

        $.ajax
        ({
            url: Util.api + '/deletetrip/' + $(e.currentTarget).attr('href'),
            type: 'delete',
            success: function(res)
            {
                self.trigger('delete_done');
            }
        });
    },

    render: function()
    {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

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

var CollectionTripUsers = Backbone.Collection.extend
({

});

/* globals ModelTrip:true, Util:true */
var CollectionTrips = Backbone.Collection.extend
({
    model: ModelTrip,
    url: Util.api + '/trips/' + $.cookie('userId')
});


/* globals ModelUser:true, Util:true */
var CollectionUsers = Backbone.Collection.extend
({
    model: ModelUser,
    url: Util.api + '/users'
});

/*globals ViewLogin:true, ViewTrips:true, ViewRegister:true, ViewMenu:true, ViewTrip:true, ViewCheckpoints:true, ViewCheckpointDetails, ViewFriends:true */
/*globals ViewNewTrip:true, ViewNewCheckpoint:true */
/*globals CollectionTrips:true, CollectionUsers:true */
/*globals ModelTrip:true*/
/*globals Util:true*/

var App = Backbone.View.extend
({
    id: 'container',
    tagName: 'div',
    template: tpl.app,

    initialize:function()
    {
        _.bindAll(this);

        this.collectionTrips = new CollectionTrips();
        if($.cookie('isLoggedIn'))
        {
            this.fetchCollection();
        }

        this.collectionUsers = new CollectionUsers();
        this.collectionUsers.fetch({async: false});
    },

    showLoginHandler: function()
    {
        this.viewLogin = new ViewLogin();
        this.$el.html(this.viewLogin.render().$el);
        this.viewLogin.on('show_register', this.showRegisterHandler);
        this.viewLogin.on('login_done', this.showTripsHandler);
    },

    showRegisterHandler: function()
    {
        this.viewRegister = new ViewRegister();
        this.$el.html(this.viewRegister.render().$el);
        this.viewRegister.on('close_register', this.showLoginHandler);
        this.viewRegister.on('register_done', this.showTripsHandler);
    },

    showTripsHandler: function()
    {
        this.fetchCollection();
        this.viewTrips = new ViewTrips({collection: this.collectionTrips});
        this.$el.html(this.viewTrips.render().$el);
        this.viewTrips.on('trip_clicked', this.loadTripOverview);
        this.viewTrips.on('add_trip_clicked', this.addTripClickHandler);

        this.showMenu();
    },

    fetchCollection: function()
    {
        this.collectionTrips.fetch({async: false});
    },

    addTripClickHandler: function()
    {
        this.viewNewTrip = new ViewNewTrip();
        this.$el.html(this.viewNewTrip.render().$el);
        this.viewNewTrip.on('close_clicked', this.showTripsHandler);
        this.viewNewTrip.on('trip_added', this.showTripsHandler);
        this.showMenu();
    },

    loadTripOverview: function(trip_id)
    {
        var modelTrip = this.collectionTrips.findWhere({id: trip_id});
        this.viewTrip = new ViewTrip({model: modelTrip});
        this.$el.html(this.viewTrip.render().$el);
        this.viewTrip.on('checkpoints_clicked', this.checkpointsHandler);
        this.viewTrip.on('friends_clicked', this.friendsHandler);
        this.viewTrip.on('basics_clicked', this.basicsHandler);
        this.viewTrip.on('delete_clicked', this.deleteHandler);
        this.viewTrip.on('close_clicked', this.showTripsHandler);
        this.viewTrip.on('delete_done', this.showTripsHandler);

        this.showMenu();
    },

    checkpointsHandler: function($trip_id)
    {
        this.fetchCollection();
        var modelCheckpoints = this.collectionTrips.findWhere({id: $trip_id});
        this.viewCheckpoints = new ViewCheckpoints({model: modelCheckpoints});
        this.$el.html(this.viewCheckpoints.render().$el);
        this.viewCheckpoints.on('close_clicked', this.loadTripOverview);
        this.viewCheckpoints.on('checkpoint_clicked', this.loadCheckPointDetails);
        this.viewCheckpoints.on('add_clicked', this.loadNewCheckpointHandler);
        this.showMenu();
    },

    loadNewCheckpointHandler: function()
    {
        this.viewNewCheckpoint = new ViewNewCheckpoint();
        this.$el.html(this.viewNewCheckpoint.render().$el);
        this.viewNewCheckpoint.on('close_clicked', this.checkpointsHandler);
        this.viewNewCheckpoint.on('checkpoint_added', this.checkpointsHandler);
        this.showMenu();
    },

    friendsHandler: function($trip_id)
    {
        this.fetchCollection();
        var modelFriends = this.collectionTrips.findWhere({id: $trip_id});
        this.viewFriends = new ViewFriends({model: modelFriends, collection:this.collectionUsers});
        this.$el.html(this.viewFriends.render().$el);
        this.viewFriends.on('close_clicked', this.loadTripOverview);
        this.viewFriends.on('user_added', this.friendsHandler);
        this.viewFriends.on('delete_done', this.friendsHandler);
        this.showMenu();
    },

    basicsHandler: function($trip_id)
    {

    },

    loadCheckPointDetails: function(checkpointDetails)
    {
        this.viewCheckpointDetails = new ViewCheckpointDetails({model: checkpointDetails});
        this.$el.html(this.viewCheckpointDetails.render().$el);
        this.viewCheckpointDetails.on('close_clicked', this.checkpointsHandler);
        this.viewCheckpointDetails.on('delete_done', this.checkpointsHandler);
        this.showMenu();
    },

    showMenu: function()
    {
        this.viewMenu = new ViewMenu();
        this.$el.append(this.viewMenu.render().$el);
        this.viewMenu.on('logout_done', this.showLoginHandler);
        this.viewMenu.on('trips_clicked', this.showTripsHandler);
    },

    render: function()
    {
        if($.cookie('isLoggedIn'))
        {
            this.showTripsHandler();
        }
        else
        {
            this.showLoginHandler();
        }

        this.$el.append(this.template());

        return this;
    }
});

/* globals App:true */
var app = new App();
$('body').prepend(app.render().$el);




})();