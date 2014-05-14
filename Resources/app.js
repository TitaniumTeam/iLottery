if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

//(function() {
new (require('ui-controller/AllData'));
var home=new (require('ui_app/ui_app'));
home.ui.win_app.open();

