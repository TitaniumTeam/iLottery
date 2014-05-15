if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

//(function() {
new (require('ui-controller/AllData'));
var home=new (require('ui_app/ui_app'));
home.ui.win_app.open();

function isiOS4Plus() {
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0]);
		if (major >= 4) {
			return true;
		}
	}
	return false;
}

if (isiOS4Plus()) {

	var service;
	Ti.App.addEventListener('resume', function(e) {
		Ti.API.info("app is resuming from the background");
	});
	Ti.App.addEventListener('resumed', function(e) {
		Ti.API.info("app has resumed from the background");
		// this will unregister the service if the user just opened the app
		// is: not via the notification 'OK' button..
		if (service != null) {
			service.stop();
			service.unregister();
		}
		Titanium.UI.iPhone.appBadge = null;
	});
	Ti.App.addEventListener('pause', function(e) {
		Ti.API.info("app was paused from the foreground");

		service = Ti.App.iOS.registerBackgroundService({
			url : '/ui_app/bg-service1.js'
		});
		Ti.API.info("registered background service = " + service);

	});
}