sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (
	Controller
) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.About", {
		onInit: function () {
			this.user = {
				email: "",
				password: ""
			}
			// var userModel = new sap.ui.model.json.JSONMoel();
			// userModel.setData({ 'user': this.user });
			// new sap.ui.getCore().setModel(userModel);

		},

		onBeforeRendering: function () {
			console.log(this.getView().byId('output'));
		},

		onAfterRendering: function () {
			this.getUsers();
		},
		getUsers: function () {
			var aboutView = this.getView(); // .byId('idAbout');
			$.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
				console.log(res);
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({ 'users': res });
				// new sap.ui.getCore().setModel(oModel);
				aboutView.setModel(oModel)
				console.log(oModel.oData);


			})
		},
		onExit: function () {

		}

	});
});