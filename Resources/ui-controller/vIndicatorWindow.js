var vIndicatorWindow = function(text) {
	var SizeMultiScreen = new (require('ui-controller/SizeMultiScreen'))(2);
	Ti.App.widthScreen = SizeMultiScreen.widthApp;
	Ti.App.heightScreen = SizeMultiScreen.heightApp;
	Ti.App.size = SizeMultiScreen.size;
	var message = text || 'Loading...';

	var _isAndroid = (Ti.Platform.osname === 'android' );
	var _padding = '25dp';
	var _style;

	var bgWidth = '320dp';
	var bgHeight = (_isAndroid ) ? '200dp' : '120dp';

	var textWidth = (message.length > 13 ) ? '260dp' : Ti.UI.SIZE;

	var height = Ti.App.size(1280);
	var width = Ti.App.size(720);
	this.background1 = Ti.UI.createView({
		height : height,
		width : width,
		backgroundColor : '#000',
		borderRadius : 10,
		opacity : 0.5,
		touchEnabled : false,
		layout : 'vertical'
	});
	this.background = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		backgroundColor : '#000',
		borderRadius : 10,
		opacity : 0.8,
		touchEnabled : false,
		layout : 'vertical'
	});

	if (_isAndroid || Ti.Platform.osname === 'mobileweb') {
		_style = Ti.UI.ActivityIndicatorStyle.BIG;
	} else {
		_style = Ti.UI.iPhone.ActivityIndicatorStyle.BIG;
	}

	this.activityIndicator = Ti.UI.createActivityIndicator({
		style : _style,
		top : '15dp',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		zIndex : 10000
	});

	this.background.add(this.activityIndicator);

	this.message = Ti.UI.createLabel({
		text : message,
		top : '10dp',
		left : _padding,
		right : _padding,
		color : '#fff',
		textAlign : 'center',
		font : {
			fontFamily : (_isAndroid) ? 'Droid Sans' : 'Helvetica Neue',
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		wordwrap : false,
		height : '44dp',
		width : textWidth
	});
	this.background.add(this.message);

	// this.infoWindow.add(this.background);
};

vIndicatorWindow.prototype.openIndicator = function(_curWindow) {
	if (_curWindow == null)
		return;
	var curWindow = _curWindow || Ti.UI.currentWindow;
	this.activityIndicator.show();
	curWindow.add(this.background1);
	curWindow.add(this.background);
	curWindow.touchEnabled = false;
};
vIndicatorWindow.prototype.openIndicator4AddView = function(_curWindow) {
	if (_curWindow == null)
		return;
	var curWindow = _curWindow || Ti.UI.getCurrentWindow();
	this.activityIndicator.show();
	curWindow.add(this.background1);
	curWindow.add(this.background);
	curWindow.touchEnabled = false;
};

vIndicatorWindow.prototype.closeIndicator = function(_curWindow) {
	if (_curWindow == null)
		return;
	this.activityIndicator.hide();
	var curWindow = _curWindow || Ti.UI.currentWindow;
	curWindow.touchEnabled = true;
	curWindow.remove(this.background1);
	curWindow.remove(this.background);

};

module.exports = vIndicatorWindow;
