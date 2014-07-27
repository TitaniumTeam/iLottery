module.exports = function() {
	var db = Ti.Database.open('userinfo');
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER);');
	///////////
	db.execute('CREATE TABLE IF NOT EXISTS Menucap1_bongda(id TEXT PRIMARY KEY,name TEXT)');
	db.execute('CREATE TABLE IF NOT EXISTS Menucap2_bongda(id TEXT PRIMARY KEY,name TEXT,act TEXT,thamso TEXT,dauso TEXT,price INTERGER,parentid INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS Menucap3_bongda(id TEXT PRIMARY KEY,name TEXT,act TEXT,thamso TEXT,dauso TEXT,price INTERGER,parentid INTERGER)');
	//////////
	db.execute('CREATE TABLE IF NOT EXISTS Menucap1_xoso(id TEXT PRIMARY KEY,name TEXT)');
	db.execute('CREATE TABLE IF NOT EXISTS Menucap2_xoso(id TEXT PRIMARY KEY,name TEXT,act TEXT,thamso TEXT,dauso TEXT,price INTERGER,parentid INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS Menucap3_xoso(id TEXT PRIMARY KEY,name TEXT,act TEXT,thamso TEXT,dauso TEXT,price INTERGER,parentid INTERGER)');
	var userinfo = db.execute("SELECT * FROM SaveInfo");
	if (userinfo.isValidRow()) {
		Ti.API.info('du lieu user:' + userinfo.getRowCount() + userinfo.fieldByName("username") + "/" + userinfo.fieldByName("type") + "/" + userinfo.fieldByName("balance"));
	}
	var customView = require('ui-controller/customView');
	var win = Ti.UI.createWindow({
		backgroundImage : "/assets/icon/bg_login.png",
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
	});
	win.orientationModes = [Ti.UI.PORTRAIT];
	var AppIcon = Ti.UI.createImageView({
		width : Ti.App.size(640),
		height : Ti.App.size(721),
		image : "/assets/icon/icon_splash.png",
		top : Ti.App.size(-140),
		touchEnabled : false,
		zIndex : 0
	});
	var TenApp = Ti.UI.createLabel({
		top : Ti.App.size(400),
		width : Ti.UI.SIZE,
		text : "XỔ SỐ BÓNG ĐÁ",
		font : {
			fontSize : Ti.App.size(68),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false
	});
	var WelCome = Ti.UI.createLabel({
		top : Ti.App.size(480),
		width : Ti.UI.SIZE,
		text : "Welcome to Xổ Số Bóng Đá ",
		font : {
			fontSize : Ti.App.size(20),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.red,
		touchEnabled : false,
	});
	var viewButton = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(93),
		top : Ti.App.size(580),
		backgroundColor : "transparent",
		left : 0
	});
	// Create a Button.
	var aButton = customView({
		top : 0,
		left : Ti.App.size(45),
		backgroundImage : "/assets/icon/btn_bongda.png",
		backgroundSelectedImage : "/assets/icon/btn_bongda_select.png",
		width : Ti.App.size(256),
		height : Ti.App.size(93)
	});
	var bButton = customView({
		top : 0,
		right : Ti.App.size(45),
		backgroundImage : "/assets/icon/btn_xoso.png",
		backgroundSelectedImage : "/assets/icon/btn_xoso_select.png",
		width : Ti.App.size(256),
		height : Ti.App.size(93)
	});
	var Hoac = Ti.UI.createLabel({
		width : Ti.App.size(128),
		height : Ti.App.size(93),
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		left : Ti.App.size(256),
		textAlign : "center",
		backgroundColor : "transparent",
		touchEnabled : false,
		top : 0,
		text : "Hoặc"
	});
	var evt_btnBongda = function(e) {
		userinfo.close();
		db.close();
		var win = new (require('/ui-bongda/WinBongDa'));
		win.open();
	};
	var evt_btnSoxo = function(e) {
		userinfo.close();
		db.close();
		var win = new (require('/ui-soxo/WinSoXo'));
		win.open();
	};
	var evt_openWin = function(e) {
		push_notification();
		Ti.API.info('open window home');
	};
	var fn_BackDevicePress = function() {
		var dialog = Ti.UI.createAlertDialog({
			cancel : 1,
			buttonNames : ['Có', 'Không'],
			message : 'Bạn thực sự muốn thoát ứng dụng?',
			title : 'Thoát ứng dụng'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.cancel) {
				Ti.API.info('The cancel button was clicked');
			} else {
				win.close();
				var activity = Titanium.Android.currentActivity;
				activity.finish();
			}
		});
		dialog.show();
		return false;
	};
	var evt_closeWin = function(e) {
		userinfo.close();
		db.close();
		win.removeEventListener('open', evt_openWin);
		aButton.removeEventListener('click', evt_btnBongda);
		bButton.removeEventListener('click', evt_btnSoxo);
		win.removeEventListener('android:back', fn_BackDevicePress);
		win.removeEventListener('close', evt_closeWin);
		Ti.API.info('remove su kien win home');
	};
	aButton.addEventListener('click', evt_btnBongda);
	bButton.addEventListener('click', evt_btnSoxo);
	win.addEventListener('open', evt_openWin);
	win.addEventListener('close', evt_closeWin);
	win.addEventListener('android:back', fn_BackDevicePress);

	win.add(AppIcon);
	win.add(TenApp);
	win.add(WelCome);
	viewButton.add(Hoac);
	viewButton.add(aButton);
	viewButton.add(bButton);
	win.add(viewButton);
	// Listen for click events.

	return win;
};
function push_notification() {
	var deviceToken = null;
	var Cloud = require("ti.cloud");

	if (Ti.Platform.osname == 'android') {
		var CloudPush = require('ti.cloudpush');
		//fetch device token

		CloudPush.retrieveDeviceToken({
			success : function deviceTokenSuccess(e) {
				deviceToken = e.deviceToken;
				Ti.API.info('Device Token: ' + deviceToken);
				Ti.API.info('Device Token: ' + e.deviceToken);
				subscribeToChannel(deviceToken);
			},
			error : function deviceTokenError(e) {
				Ti.API.info('Failed to register for push! ' + e.error);
			}
		});

		CloudPush.debug = true;
		CloudPush.enabled = true;
		CloudPush.showTrayNotificationsWhenFocused = true;
		CloudPush.focusAppOnPush = false;

		CloudPush.addEventListener('callback', function(evt) {
			receivePush(evt);
		});
		CloudPush.addEventListener('trayClickLaunchedApp', function(evt) {
			// Ti.API.info('@@## Tray Click Launched App (app was not running)');
		});
		CloudPush.addEventListener('trayClickFocusedApp', function(evt) {
			Ti.API.info('@@## Tray Click Focused App (app was already running)');
		});
	} else {
		Ti.Network.registerForPushNotifications({
			// Specifies which notifications to receive
			types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_SOUND],
			success : deviceTokenSuccess,
			error : deviceTokenError,
			// callback : receivePush
		});
		// Process incoming push notifications

		// Save the device token for subsequent API calls
		function deviceTokenSuccess(e) {
			deviceToken = e.deviceToken;
			subscribeToChannel(deviceToken);
		}

		function receivePush(e) {
			Ti.API.info('Received push: ' + JSON.stringify(e));
		}

		function deviceTokenError(e) {
			Ti.API.info('Failed to register for push notifications! ' + e.error);
		}

	}
	function subscribeToChannel(device) {
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		Cloud.PushNotifications.subscribeToken({
			device_token : device,
			channel : 'ifootball',
			type : Ti.Platform.name == 'android' ? 'gcm' : 'ios'
		}, function(e) {
			if (e.success) {
				Ti.API.info('dang ki thanh cong');
			} else {
				Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}

};
