if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

//(function() {
new (require('ui-controller/AllData'));
if (Ti.Platform.osname == "iphone") {
	var home = new (require('/ui/slide_menu'))();
	home.open();
} else {
	if (Ti.Platform.osname == "android") {
		var home_android = new (require('ui/slide_menu_android'))();
		home_android.open();
	}
}