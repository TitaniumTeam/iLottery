//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
	new (require('ui-controller/AllData'));
	if (Ti.Platform.osname == 'android') {
		var home = new (require('/ui/slide_menu_android'))();
		home.open();
	} else {
		var home = new (require('/ui/slide_menu'))();
		home.open();
	}

})();
