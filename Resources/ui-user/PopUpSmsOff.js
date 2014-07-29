module.exports = function(_dauso,_noidung,_text) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv,_dauso,_noidung,_text);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
}

function createUI(sv,_dauso,_noidung,_text) {
	var customButton = require('ui-controller/customButton');
	sv.ui.Window = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(406),
		backgroundColor : Ti.App.Color.superwhite,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	sv.ui.IconNap = Titanium.UI.createImageView({
		width : Ti.App.size(178),
		height : Ti.App.size(119),
		top : Ti.App.size(30),
		image : "/assets/icon/icon_no_internet.png",
		touchEnabled:false
	});
	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/icon/btn_cancel.png',
		width : Ti.App.size(90),
		height : Ti.App.size(90),
		right : 0,
		top : Ti.App.size(150),
		zIndex : 10
	});
	sv.ui.ThongBao1 = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		// left : Ti.App.size(80),
		top : Ti.App.size(200),
		width:Ti.UI.SIZE,
		text : "Không có kết nối mạng - Bấm vào thông báo để soạn tin nhắn và gửi ",
		touchEnabled:false
	});
	sv.ui.Note = Titanium.UI.createLabel({
		width : Ti.App.size(590),
		height : Ti.UI.SIZE,
		top : Ti.App.size(308),
		color : Ti.App.Color.nauden,
		textAlign : "center",
		font : {
			fontSize : Ti.App.size(30),
		},
		textAlign : "center",
		text : _text,
		touchEnabled:false
	});
	createUI_Event(sv,_dauso,_noidung);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.ViewPopUp.addEventListener('click', sv.fu.evt_sms);
	sv.ui.Window.addEventListener('android:back', sv.fu.eventClickIcon);
	sv.ui.Window.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.Note);
	sv.ui.ViewPopUp.add(sv.ui.IconNap);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.Window.add(sv.ui.ViewPopUp);
}

function createUI_Event(sv,_dauso,_noidung) {
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	sv.fu.evt_sms = function(e) {
		var sms = new (require('/ui-controller/showSmsDialog'))(_dauso,_noidung);
		sv.ui.Window.close();
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.ViewPopUp.removeEventListener('click', sv.fu.evt_sms);
		sv.ui.Window.removeEventListener('android:back', sv.fu.eventClickIcon);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window pop up thanh cong, sv=' + sv);
	};
}
