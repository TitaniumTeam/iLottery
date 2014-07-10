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
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
}

function createUI(sv) {
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
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	sv.ui.IconNap = Titanium.UI.createImageView({
		width : Ti.App.size(158),
		height : Ti.App.size(158),
		top : Ti.App.size(30),
		image : "/assets/icon/icon_giao_dich_thanh_cong.png"
	});
	sv.ui.ViewIconClose = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(90),
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		top : Ti.App.size(150),
		right : 0,
		zIndex : 10
	});
	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/icon/btn_cancel.png',
		width : Ti.App.size(45),
		height : Ti.App.size(45),
		right : 0,
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		left : Ti.App.size(80),
		top : Ti.App.size(240),
		text : "GIAO DỊCH THÀNH CÔNG"
	});
	sv.ui.Note = Titanium.UI.createLabel({
		width : Ti.App.size(525),
		height : Ti.UI.SIZE,
		top : Ti.App.size(308),
		color : Ti.App.Color.nauden,
		textAlign : "center",
		font : {
			fontSize : Ti.App.size(30),
		},
		textAlign : "center",
		text : "Chúc mừng bạn đã hoàn thành giao dịch"
	});
	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.ViewIconClose.addEventListener('click', sv.fu.eventClickIcon);

	sv.ui.ViewIconClose.add(sv.ui.Icon);
	sv.ui.Window.add(sv.ui.ViewIconClose);
	sv.ui.ViewPopUp.add(sv.ui.Note);
	sv.ui.ViewPopUp.add(sv.ui.IconNap);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.Window.add(sv.ui.ViewPopUp);
}

function createUI_Event(sv) {
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconClose.removeEventListener('click', sv.fu.eventClickIcon);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window pop up thanh cong, sv=' + sv);
	};
}
