module.exports = function(_currWin) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, _currWin);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
	// sv.vari.dangki = require('/ui_user/WindowDK');
	// sv.vari.wd_dn = require('/ui_user/DangNhap');
}

function createUI(sv, _currWin) {
	sv.ui.Window = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
	});

	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(700),
		backgroundColor : Ti.App.Color.superwhite,
		width : Ti.App.size(560)
	});

	sv.ui.ViewIcon = Ti.UI.createView({
		top : Ti.App.size(0),
		height : Ti.App.size(215),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor : Ti.App.Color.red,

	});

	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/icon/btn_cancel.png',
		top : Ti.App.size(45),
		left : Ti.App.size(215),
		right : Ti.App.size(215),
		bottom : Ti.App.size(45),
		backgroundSelectedColor : Ti.App.Color.nauden
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		text : 'CHỨC NĂNG BỊ KHÓA',
		top : Ti.App.size(230),
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
		},
		textAlign : 'center'
	});

	sv.ui.ThongBao2 = Ti.UI.createLabel({
		text : 'Bạn chưa đăng nhập!',
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		width : Ti.UI.SIZE,
		top : Ti.App.size(330),
		textAlign : 'center'
	});
	sv.ui.button_dk = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.nauden,
		width : Ti.App.size(300),
		height : Ti.App.size(95),
		text : "ĐĂNG KÝ",
		textAlign : "center",
		bottom : Ti.App.size(150),
		font : {
			fontSize : Ti.App.size(30)
		},
		borderRadius : Ti.App.size(5),
		color : Ti.App.Color.superwhite,
		backgroundSelectedColor : Ti.App.Color.xanhnhat
	});

	sv.ui.button_dn = Ti.UI.createLabel({
		width : Ti.App.size(300),
		height : Ti.App.size(95),
		text : "ĐĂNG NHẬP",
		textAlign : "center",
		bottom : Ti.App.size(30),
		font : {
			fontSize : Ti.App.size(30)
		},
		borderRadius : Ti.App.size(5),
		backgroundColor : Ti.App.Color.gray,
		backgroundSelectedColor : Ti.App.Color.magenta,
		color : Ti.App.Color.superwhite
	});

	createUI_Event(sv, _currWin);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.button_dk.addEventListener('click', sv.fu.evt_dangki);
	sv.ui.button_dn.addEventListener('click', sv.fu.evt_dangnhap);

	sv.ui.Window.add(sv.ui.ViewPopUp);

	sv.ui.ViewPopUp.add(sv.ui.ViewIcon);

	sv.ui.ViewIcon.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.button_dk);
	sv.ui.ViewPopUp.add(sv.ui.button_dn);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao2);

	sv.ui.ViewPopUp.add(sv.ui.ThongBao2);

}

function createUI_Event(sv, _currWin) {
	sv.fu.evt_dangki = function(e) {
		var winDangnhap = new (require('/ui-user/WinDangNhap'))(_currWin);
		winDangnhap.open();
		sv.ui.Window.close();
		// _currWin.close();

	};
	sv.fu.evt_dangnhap = function(e) {
		var winDangnhap = new (require('/ui-user/WinDangNhap'))(_currWin);
		winDangnhap.open();
		sv.ui.Window.close();
		// _currWin.close();
	};
	sv.fu.eventClickIcon = function() {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.button_dk.removeEventListener('click', sv.fu.evt_dangki);
		sv.ui.button_dn.removeEventListener('click', sv.fu.evt_dangnhap);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window popup dang nhap');
	};
}

