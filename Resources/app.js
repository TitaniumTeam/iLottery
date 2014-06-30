if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
new (require('/ui-controller/AllData'));

var win = new (require('/ui-bongda/WinBongDa'));
win.open();
