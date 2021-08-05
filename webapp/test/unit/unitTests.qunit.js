/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cicdcf/clouddeploycicd/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
