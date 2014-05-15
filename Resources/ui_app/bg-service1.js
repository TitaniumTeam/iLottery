
Ti.API.info("hello from a background service!");

var alertCount = 0;
var notification = null;

function notify(resp) {
	// This creates the notification alert on a 'paused' app
	notification = Ti.App.iOS.scheduleLocalNotification({
		alertBody : resp,
		alertAction : "OK",
		userInfo : {
			"hello" : "world"
		},
		badge : alertCount,
		date : new Date(new Date().getTime() + 10)
	});
}

function checkFeed() {

	// silently ignore this if there's no network connection
	if (Titanium.Network.online == false) {
		return;
	}

	var t = new Date().getTime();
	Ti.API.info('checking feed in bg.. ' + t);

	var xhr = Titanium.Network.createHTTPClient();
	xhr.timeout = 1000000;
	xhr.onerror = function(e) {
		Ti.API.info('IN ERROR ' + e.error);
	};
	xhr.onload = function() {
		var xml = this.responseXML.documentElement;
		// demo to increase the badge number...
		alertCount++;
		var items = xml.getElementsByTagName("item");
		var dataTitle = [];
		var dataThongtin = [];
		for (var i = 0; i < items.length; i++) {
			var title = items.item(i).getElementsByTagName("title").item(0).text;
			var thongtin = items.item(i).getElementsByTagName("description").item(0).text;
			dataTitle.push(title);
			dataThongtin.push(thongtin);
		}
		// open the notification
		notify(dataTitle[0]+": "+dataThongtin[0]);
	};

	xhr.open('GET', 'http://xskt.com.vn/rss-feed/mien-bac-xsmb.rss');
	xhr.send();
}

Ti.App.iOS.addEventListener('notification', function() {
	Ti.API.info('background event received = ' + notification);
	Ti.App.currentService.stop();
	Ti.App.currentService.unregister();
});
checkFeed();
// Kick off a timer to trigger a function called 'checkFeed' every 10 seconds (= 10000 ms)
//var timer = setInterval(checkFeed, 10000);

