module.exports = function() {
	var db = Ti.Database.open('userinfo');
	var newdb = Ti.Database.install('/assets/database/servicedb', 'servicedb');
	Ti.API.info('du lieu menu cap 1:-----' + (newdb.execute("SELECT * FROM Menucap1_xoso").getRowCount()));
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER);');
	db.execute('CREATE TABLE IF NOT EXISTS RS_CACHE(date_time text,result text);');
	var date_time = db.execute("SELECT * FROM RS_CACHE");
	var date_now = (new Date().getDate()) + (new Date().getMonth() + 1) + (new Date().getYear());
	var hour_now=new Date().getHours();
	if (date_time.isValidRow()) {
		if (date_time.fieldByName("date_time") == date_now.toString()) {
			Ti.API.info('du lieu da co');
		} else {
			Ti.API.info('du lieu cua ngay khac roi');
			db.execute("DELETE FROM RS_CACHE");
		}
	} else {
		Ti.API.info('khong co du lieu nao trong cache');
	}

	var userinfo = db.execute("SELECT * FROM SaveInfo");
	if (userinfo.isValidRow()) {
		Ti.API.info('du lieu user:' + userinfo.getRowCount() + userinfo.fieldByName("username") + "/" + userinfo.fieldByName("type") + "/" + userinfo.fieldByName("balance"));
	}
	var isAndroid = Titanium.Platform.osname === 'android';
	var customView = require('ui-controller/customView');
	var win = Ti.UI.createWindow({
		backgroundImage : "/assets/icon/bg_login.png",
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid ? false : true,
		orientationModes : [Ti.UI.PORTRAIT]
	});
	////////////
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
	var _isAndroid = (Ti.Platform.osname === 'android' );
	var _style = null;
	if (_isAndroid || Ti.Platform.osname === 'mobileweb') {
		_style = Ti.UI.ActivityIndicatorStyle.PLAIN;
	} else {
		_style = Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	}
	var view_indicatior = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		bottom : Ti.App.size(30),
		layout : "horizontal"
	});
	var label = Ti.UI.createLabel({
		text : "Đang tải dữ liệu",
		color : '#fff',
		textAlign : 'center',
		font : {
			fontFamily : (_isAndroid) ? 'Droid Sans' : 'Helvetica Neue',
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		wordwrap : false,
		height : '44dp',
		width : Ti.UI.SIZE
	});
	var activityIndicator = Ti.UI.createActivityIndicator({
		style : _style,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		zIndex : 1000,
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
	var timeout = null;
	var evt_btnBongda = function(e) {
		userinfo.close();
		db.close();
		newdb.close();
		var winbongda = new (require('/ui-bongda/WinBongDa'));
		win.add(view_indicatior);
		activityIndicator.show();
		timeout = setTimeout(function() {
			win.remove(view_indicatior);
			activityIndicator.hide();
			winbongda.open();
			clearTimeout(timeout);
		}, 500);
	};
	var evt_btnSoxo = function(e) {
		userinfo.close();
		db.close();
		newdb.close();
		var winxoso = new (require('/ui-soxo/WinSoXo'));
		win.add(view_indicatior);
		activityIndicator.show();
		timeout = setTimeout(function() {
			win.remove(view_indicatior);
			activityIndicator.hide();
			winxoso.open();
			clearTimeout(timeout);
		}, 500);
	};
	var evt_openWin = function(e) {
		// push_notification();
		push_notifi_mod();
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
		newdb.close();
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

	viewButton.add(Hoac);
	viewButton.add(aButton);
	viewButton.add(bButton);

	view_indicatior.add(activityIndicator);
	view_indicatior.add(label);

	win.add(AppIcon);
	win.add(TenApp);
	win.add(WelCome);
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
		var isAndroid = Ti.Platform.osname === 'android';
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		Cloud.PushNotifications.subscribeToken({
			device_token : device,
			channel : 'iLotery',
			type : isAndroid ? 'gcm' : 'ios'
		}, function(e) {
			if (e.success) {
				Ti.API.info('dang ki thanh cong');
			} else {
				Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}

};
function push_notifi_mod() {
	var androidOptions = {
		focusAppOnPush : false,
		showAppOnTrayClick : true,
		showTrayNotification : true,
		showTrayNotificationsWhenFocused : false,
		singleCallback : true
	};

	// set cross-platform event
	var onReceive = function(evt) {
		Ti.API.info('A push notification was received!');
		console.log('A push notification was received!' + JSON.stringify(evt));
	};
	// set android-only event
	var onLaunched = function(evt) {
		Ti.API.info('A push notification was received - onLaunched');
		console.log('A push notification was received!' + JSON.stringify(evt));
	};
	// set android-only event
	var onFocused = function(evt) {
		Ti.API.info('A push notification was received - onFocused');
		console.log('A push notification was received!' + JSON.stringify(evt));
	};
	// load library
	var ACSP = require('/ui-controller/acspush');

	// create instance with your own or the user's username and password
	var ACSPush = new ACSP.ACSPush('user_free', 'mjnhmap');

	// or make it as guest
	//var ACSPush=new ACSP.ACSPush();

	// set the channel to subscribe to
	var channel = 'iLotery';

	// register this device
	ACSPush.registerDevice(channel, onReceive, onLaunched, onFocused, androidOptions);
};
