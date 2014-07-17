module.exports = function() {
	var win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
		modal : Ti.Platform.osname == "android" ? true : false
	});
	win.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	var fb = require('facebook');
	fb.appid = "134793934930";
	fb.permissions = ['publish_stream', 'read_stream'];
	fb.forceDialogAuth = false;
	ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(504),
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	win.add(ViewPopUp);
	ViewPopUp.add(fb.createLoginButton({
		style : fb.BUTTON_STYLE_WIDE,
		top : 50
	}));

	var event_facebook = function(e) {
		if (e.success) {
			fb.requestWithGraphPath('me', {}, 'GET', function(e) {
				if (e.success) {
					var data = JSON.parse(e.result);
					Ti.API.info("Name:" + data.name);
					Ti.API.info("email:" + data.email);
					Ti.API.info("facebook Id:" + data.id);
				} else if (e.error) {
					alert(e.error);
				} else {
					alert('Unknown response.');
				}
			});
		} else {
			if (e.error) {
				alert(e.error);
			} else {
				alert("Unkown error while trying to login to facebook.");
			}
		}
	};
	var event_openWin = function(e) {
		Ti.API.info('open window fb');
	};
	var event_closeWin = function(e) {
		win.removeEventListener('open', event_openWin);
		win.removeEventListener('close', event_closeWin);
	};
	////event
	fb.addEventListener('click', event_facebook);

	return win;
};
