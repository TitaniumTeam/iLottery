/*
 ACSPush : Module to register iOS or Android device for ACS Push Notifications
 Based on code by Pablo Rodríguez from lineartpr.com
 Modified by Ricardo Alcocer - @ricardoalcocer
 Blackberry support added by Hazem Khaled - @hazemkhaled

 Before being able to use this module you need to obtain your push notification keys:
 http://docs.appcelerator.com/titanium/3.0/#!/guide/Push_Notifications
 */

var Cloud = require('ti.cloud');

function ACSPush(acsuid, acspwd) {
	this.acsuid = acsuid || false;
	this.acspwd = acspwd || false;
	this.token = '';
}

ACSPush.prototype.registerDevice = function(channel_name, onReceive, onLaunched, onFocused, androidOptions) {
	var that = this;
	var token = '';
	var isAndroid = Ti.Platform.osname === 'android';
	if (isAndroid) {
		var CloudPush = require('ti.cloudpush');
		CloudPush.retrieveDeviceToken({
			success : function deviceTokenSuccess(e) {
				console.log('Device Token: ' + e.deviceToken);
				token = e.deviceToken;
				that.token = token;
				loginToACS(that.acsuid, that.acspwd, token, channel_name);
			},
			error : function deviceTokenError(e) {
				console.log('Token Error: ' + e.error);
			}
		});

		CloudPush.focusAppOnPush = androidOptions.focusAppOnPush || false;
		CloudPush.showAppOnTrayClick = androidOptions.showAppOnTrayClick || false;
		CloudPush.showTrayNotification = androidOptions.showTrayNotification || false;
		CloudPush.showTrayNotificationsWhenFocused = androidOptions.showTrayNotificationsWhenFocused || false;
		CloudPush.singleCallback = androidOptions.singleCallback || true;
		CloudPush.addEventListener('callback', onReceive);
		CloudPush.addEventListener('trayClickLaunchedApp', onLaunched);
		CloudPush.addEventListener('trayClickFocusedApp', onFocused);
	} else
	{
		Titanium.Network.registerForPushNotifications({
			types : [Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_SOUND],
			success : function(e) {
				token = e.deviceToken;
				that.token = token;
				console.log("Device Token: " + token);
				loginToACS(that.acsuid, that.acspwd, token, channel_name);
			},
			error : function(e) {
				console.log("Token Error: " + e.message);
			},
			callback : function(e) {
				onReceive(e.data);
				console.log("push notification received: " + JSON.stringify(e.data));
			}
		});
	}
};

ACSPush.prototype.unsubscribeFromChannel = function(channel_name, token, onSuccess, onFail) {
	// this method is not yet working

	/*var that=this;
	 Cloud.PushNotifications.unsubscribeToken({
	 channel: channel_name,
	 device_token: token,
	 user_id: that.acsuid
	 }, function (e) {
	 if (e.success) {
	 onSuccess(e);
	 } else {
	 onFail(e);
	 }
	 });*/
};

ACSPush.prototype.getToken = function() {
	return this.token;
};

function loginToACS(acsuid, acspwd, token, channel_name) {
	if (!acsuid && !acspwd) {
		console.log("loginToACS -> subscribe as guest");
		subscribeForPushNotifications(token, channel_name, true);
		return;
	}
	Cloud.Users.login({
		login : acsuid,
		password : acspwd
	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			console.log("loginToACS -> Status: Successful");
			subscribeForPushNotifications(token, channel_name);
		} else {
			console.log("loginToACS -> Error :" + e.message);
		}
	});
};

function subscribeForPushNotifications(token, channel_name, subscribeAsGuest) {
	var isAndroid=Ti.Platform.osname==='android';
	var prams = {
		channel : channel_name,
		type : isAndroid ? 'gcm' : 'ios', // osname return iphone / ipad on iOS
		device_token : token
	};
	var callBack = function(e) {
		if (e.success) {
			console.log('subscribeForPushNotifications -> Status: Successful [' + channel_name + ']');
		} else {
			console.log('subscribeForPushNotifications -> Error ' + token + '(subscribeToServerPush) :\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	};
	if (subscribeAsGuest) {
		Cloud.PushNotifications.subscribeToken(prams, callBack);
	} else {
		Cloud.PushNotifications.subscribe(prams, callBack);
	}
};

exports.ACSPush = ACSPush;
