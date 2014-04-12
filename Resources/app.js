//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
	new (require('ui-controller/AllData'));

	var Window = new (require('ui/WindowMain'))();
	Window.open();
})();
