sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

		},
		login: function () {
			console.log('Login clicked');
			sap.ui.core.UIComponent.getRouterFor(this).navTo("about");
		}
	});
});