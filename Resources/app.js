if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
new (require('/ui-controller/AllData'));

var home = new (require('ui-app/WinHome'))();
home.open();
