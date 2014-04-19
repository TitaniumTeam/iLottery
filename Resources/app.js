//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
	new (require('ui-controller/AllData'));

	// var Window = new (require('ui/WindowMain'))();
	// Window.open();
	// var Window=new(require('ui/DangNhap'))();
	// Window.open();
	var home=new (require('/ui/slide_menu'))(1);
	home.open();
})();
