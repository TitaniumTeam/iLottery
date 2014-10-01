var isAndroid = Ti.Platform.osname === 'android';

module.exports = function() {
	var revmob = null;
		function log(msg) {
			Titanium.API.log('[RevMob] ' + msg);
		}

		var dem = 0;
		var interval = null;
		function RevMob(appId) {
			var moduleNames = {
				'iPhone OS' : 'com.revmob.titanium',
				'android' : 'com.revmob.ti.android'
			}
			var revmobModule = require(moduleNames[Ti.Platform.name]);
			revmobModule.startSession(appId);
			return revmobModule;
		}

		if (Ti.Platform.osname === 'android') {
			revmob = new RevMob("53f182a9cadd4ff25b6cffd5");
		} else {
			revmob = new RevMob('53f197a1dfa480476e931799');
		}
		revmob.setTestingMode(revmob.testingMode.disabled);
		revmob.addEventListener('sessionIsStarted', function(e) {
			log('Session is started.');
		});
		function check_banner() {
			interval = setInterval(function() {
				dem++;
				revmob.showBanner();
				if (dem == 2) {
					dem = 0;
					clearInterval(interval);
				}
			}, 100);
		};
		revmob.showBan = function() {

			setTimeout(function() {
				check_banner();
			}, 3000);

		};
		revmob.showFull=function(){
			if(isAndroid)
			revmob.createFullscreen();
			revmob.showFullscreen();
		};
		revmob.hideBan = function() {
			revmob.hideBanner();
			if (interval != null) {
				dem = 0;
				clearInterval(interval);
			}

		};
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
		});
		revmob.addEventListener('adClosed', function(e) {
			log('Ad closed.');
		});
	return revmob;
};
