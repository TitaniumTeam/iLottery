module.exports = function() {
	function log(msg) {
		Titanium.API.log('[RevMob] ' + msg);
	}

	var revmob = null;
	var dem = 0;
	function RevMob(appId) {
		var moduleNames = {
			'iPhone OS' : 'com.revmob.titanium',
			'android' : 'com.revmob.ti.android'
		};
		var revmobModule = require(moduleNames[Ti.Platform.name]);
		revmobModule.startSession(appId);
		return revmobModule;
	}

	if (Ti.Platform.osname === 'android') {
		revmob = new RevMob("5106bea78e5bd71500000098");
	} else if (Ti.Platform.osname === 'iphone') {
		Ti.API.info('nhay vao day');
		revmob = new RevMob("5106be9d0639b41100000052");
	}
	revmob.addEventListener('sessionIsStarted', function(e) {
		log('Session is started.');
		revmob.showBanner();
	});
	revmob.addEventListener('sessionNotStarted', function(e) {
		log('Session failed to start.');
	});
	revmob.addEventListener('adReceived', function(e) {
		log('Ad received.');
	});
	revmob.addEventListener('adNotReceived', function(e) {
		log('Ad not received.');
	});
	revmob.addEventListener('adDisplayed', function(e) {
		log('Ad displayed.');
	});
	revmob.addEventListener('adClicked', function(e) {
		log('Ad clicked.');
		revmob.openAdLink();
	});
	revmob.addEventListener('adClosed', function(e) {
		log('Ad closed.');
	});
	return revmob;
};
