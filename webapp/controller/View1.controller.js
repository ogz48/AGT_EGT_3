sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.egitim.RoutingExample.controller.View1", {
		onInit: function () {

		},
		onIkiyeGit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2", {
				value1: "oguzhan"
			});
		}
	});
});