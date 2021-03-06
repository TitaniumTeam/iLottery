// Auxiliar methods of the sample app

function log(msg) {
  Titanium.API.log('[RevMob Sample App] ' + msg);
}

log('Platform name: ' + Ti.Platform.name);

var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  layout: 'vertical',
  title: 'RevMob Titanium'
});

var label1 = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:25 },
  text: 'RevMob Titanium-Android Sample App',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 30,
  width: 'auto', height: 'auto'
});
win.add(label1);

var scrollView = Ti.UI.createScrollView({
    layout:     'vertical',
    height:     '100%',
    contentWidth:   'auto',
    contentHeight:  'auto',
    showVerticalScrollIndicator: true,
    touchEnabled:   true
});
win.add(scrollView);

function addButton(label, callback) {
  var button = Titanium.UI.createButton({
     title: label,
     top: 10,
     width: 310,
     height: 70
  });
  button.addEventListener('click', function (e) { log("[RevMob Sample App] " + label); });
  button.addEventListener('click', callback);
  scrollView.add(button);
}

function dateToStr(date) {
    var dateStr = padStr(date.getFullYear()) + "/" +
                  padStr(1 + date.getMonth()) + "/" +
                  padStr(date.getDate()) + " " +
                  padStr(date.getHours()) + ":" +
                  padStr(date.getMinutes()) + ":" +
                  padStr(date.getSeconds());
   return dateStr;
}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

// RevMob sample code

function RevMob(appId) {
  var moduleNames = { 'iPhone OS': 'com.revmob.titanium',  'android': 'com.revmob.ti.android' }
  var revmobModule = require(moduleNames[Ti.Platform.name]);
  revmobModule.startSession(appId);
  return revmobModule;
}

if (Ti.Platform.osname === 'android') {
  var revmob = new RevMob("5106bea78e5bd71500000098");
}
else if (Ti.Platform.osname === 'iphone') {
  var revmob = new RevMob("5106be9d0639b41100000052");
}

revmob.addEventListener('sessionIsStarted', function(e) { log('Session is started.'); });
revmob.addEventListener('sessionNotStarted', function(e) { log('Session failed to start.'); });
revmob.addEventListener('adReceived', function(e) { log('Ad received.'); });
revmob.addEventListener('adNotReceived', function(e) { log('Ad not received.'); });
revmob.addEventListener('adDisplayed', function(e) { log('Ad displayed.'); });
revmob.addEventListener('adClicked', function(e) { log('Ad clicked.'); });
revmob.addEventListener('adClosed', function(e) { log('Ad closed.'); });
revmob.addEventListener('eulaIsShown', function(e) { log('Eula is shown.'); });
revmob.addEventListener('eulaAccepted', function(e) { log('Eula was accepted.'); });
revmob.addEventListener('eulaRejected', function(e) { log('Eula was rejected.'); });

addButton('Disable testing mode', function(e) { revmob.setTestingMode(revmob.testingMode.disabled); });
addButton('Testing with ads', function(e) { revmob.setTestingMode(revmob.testingMode.withAds); });
addButton('Testing without ads', function(e) { revmob.setTestingMode(revmob.testingMode.withoutAds); });
addButton('Create fullscreen', function(e) { revmob.createFullscreen(); });
addButton('Show fullscreen', function(e) { revmob.showFullscreen(); });
addButton('Create popup', function(e) { revmob.createPopup(); });
addButton('Show popup', function(e) { revmob.showPopup(); });
addButton('Show banner', function(e) { revmob.showBanner(); });
addButton('Hide banner', function(e) { revmob.hideBanner(); });
addButton('Create link', function(e) { revmob.createAdLink(); });
addButton('Open link', function(e) { revmob.openAdLink(); });
addButton('Print environment info', function(e) { revmob.printEnvironmentInformation(); });
addButton('Custom timeout (5s)', function(e) { revmob.setTimeoutInSeconds(5); });

win.open();
