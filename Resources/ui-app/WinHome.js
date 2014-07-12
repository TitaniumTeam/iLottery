module.exports = function() {
	var db = Ti.Database.open('userinfo');
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER);');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Soxo(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Bongda(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Soxo_free(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Bongda_free(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	var userinfo = db.execute("SELECT * FROM SaveInfo");
	if (userinfo.isValidRow()) {
		Ti.API.info('du lieu user:' + userinfo.getRowCount() + userinfo.fieldByName("username") + "/" + userinfo.fieldByName("type") + "/" + userinfo.fieldByName("balance"));
	}
	var win = Ti.UI.createWindow({
		backgroundImage : "/assets/icon/100_Main_screen.png",
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'Bóng đá',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white",
		top : Ti.App.size(702),
		left : Ti.App.size(125)
	});
	var bButton = Ti.UI.createButton({
		title : 'Xổ Số',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white",
		top : Ti.App.size(702),
		right : Ti.App.size(125)

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
		win.removeEventListener('open', evt_openWin);
		aButton.removeEventListener('click', evt_btnBongda);
		bButton.removeEventListener('click', evt_btnSoxo);
		win.removeEventListener('android:back',fn_BackDevicePress);
		win.removeEventListener('close', evt_closeWin);
		Ti.API.info('remove su kien win home');
	};
	aButton.addEventListener('click', evt_btnBongda);
	bButton.addEventListener('click', evt_btnSoxo);
	win.addEventListener('open', evt_openWin);
	win.addEventListener('close', evt_closeWin);
	win.addEventListener('android:back',fn_BackDevicePress);
	win.add(aButton);
	win.add(bButton);

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
