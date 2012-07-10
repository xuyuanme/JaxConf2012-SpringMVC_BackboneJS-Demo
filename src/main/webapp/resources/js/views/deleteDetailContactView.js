MyApp.Views.EditDetailContact = Backbone.View.extend({
	
	className: 'wrapper',

	initialize: function(){
		_.bindAll(this, 'save');
	},

	events: {
		"click a.save": "save"
	},

	render: function(){
		var template = ich.editDetailTemplate(this.model.toJSON());

		$('#editContact').html(this.$el.html(template));
	},

	save: function(e){
		var self = this;
		self.model.set({
			firstName: this.$('.firstName').val(),
			lastName: this.$('.lastName').val(),
			phoneNumber: this.$('.phoneNumber').val()
		});

		this.model.save({
			success: function(){
				self.close();
				return true;
			},
			error: function(){}
		});
	},

	close: function(){
		this.$el.unbind();
		this.$el.hide();
	}
});
