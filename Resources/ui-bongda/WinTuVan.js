module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
		setURL(sv);
	})();

	return sv;
};

function createVariable(sv) {
}

function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	sv.ui.winTuVan = Titanium.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		backgroundColor : Ti.App.Color.nauden,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(90),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});
	sv.ui.winTuVan.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "TƯ VẤN ",
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);

	/////
	sv.ui.View_Back = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(90),
		top : 0,
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
	});
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.webview = Titanium.UI.createWebView({
		width : Ti.App.size(640),
		height : Ti.App.size(1136),
		showScrollbars : false,
		scalesPageToFit : false,
		touchEnabled : true,
		enableZoomControls : true,
		top : Ti.App.size(86),
		loading:true,
	});

	sv.ui.winTuVan.add(sv.ui.webview);

	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winTuVan.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winTuVan.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winTuVan.addEventListener('android:back', sv.fu.event_androidback);
	Ti.App.addEventListener('web:appendMsg', function(e) {
		Ti.API.info('sms content ****' + e.smsContent + e.smsNumber);
		var showSmsDialog = new (require('/ui-controller/showSmsDialog'))(e.smsNumber, e.smsContent);
	});
	// sv.ui.ViewTong.add(sv.ui.ViewToolBar);
	// sv.ui.ViewTong.add(sv.ui.ViewListTeam);
}

function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winTuVan.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winTuVan.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winTuVan.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.View_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winTuVan.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.winTuVan.removeEventListener('android:back', sv.fu.event_androidback);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}

function setURL(sv) {
	sv.setLink = function(url) {
		sv.ui.webview.setHtml(url);
	};
};
