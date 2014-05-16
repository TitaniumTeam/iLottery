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
		createRemove(sv);
	})();

	return sv;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
}

function createUI(sv) {
	// sv.ui.Window = Ti.UI.createWindow({
	// backgroundColor : Ti.App.Color.magenta,
	// // width : Ti.App.widthScreen,
	// // height : Ti.App.heightScreen,
	// navBarHidden : true,
	// fullscreen : true,
	// keepScreenOn : true,
	// top : 0,
	// });
	sv.ui.ViewTong = Titanium.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
	});
	sv.ui.scrollview = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(500),
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		showVerticalScrollIndicator : true
	});

	
	sv.ui.viewAvatar = Titanium.UI.createView({
		top : 0,
		left : 0,
		height : Ti.App.size(500),
		backgroundColor : Ti.App.Color.red
	});
	sv.ui.circle = Titanium.UI.createImageView({
		image : '/assets/images/icon/xxxjav.png',
		top : -Ti.App.size(70),
		width : Ti.App.size(420),
		height : Ti.App.size(420),
		left : Ti.App.size(150)
	});
	sv.ui.viewAvatar.add(sv.ui.circle);
	sv.ui.Avatar = Ti.UI.createImageView({
		image : '/assets/images/icon/avatar-defaut.png',
		top : Ti.App.size(45),
		// right : Ti.App.size(250),
		left : Ti.App.size(265),
		//bottom : Ti.App.size(280),
		height : Ti.App.size(190),
		width : Ti.App.size(190),
		zIndex : 10
	});
	sv.ui.LabelName = Ti.UI.createLabel({
		text : 'LinhSon93',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		top : Ti.App.size(260),
		// bottom : Ti.App.size(210),
		color : Ti.App.Color.superwhite,
	});

	sv.ui.LabelThongTin = Ti.UI.createLabel({
		text : 'Siêu pro vừa đi chơi - ID: 9999999999',
		font : {
			fontSize : Ti.App.size(25),
		},
		top : Ti.App.size(300),
		bottom : Ti.App.size(170),
		color : Ti.App.Color.superwhite
	});

	sv.ui.ViewBut = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-5.png',
		top : Ti.App.size(325),
		right : Ti.App.size(25),
		left : Ti.App.size(665),
		bottom : Ti.App.size(145),
	});

	sv.ui.ViewThongSo = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		top : Ti.App.size(380),
		zIndex : 0
	});
	sv.ui.Viewcontain = Ti.UI.createView({
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		top : Ti.App.size(380),
		zIndex : 1,
		backgroundColor : 'transparent'
	});
	sv.ui.vThongso1 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : 0,
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso1);
	sv.ui.lbltest = Titanium.UI.createLabel({
		text : "Tỷ lệ trúng loto",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.lbl_tyle = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '20%',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso1.add(sv.ui.lbltest);
	sv.ui.vThongso1.add(sv.ui.lbl_tyle);
	//
	sv.ui.vThongso2 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : Ti.App.size(235),
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso2);
	sv.ui.lbl_soxu = Titanium.UI.createLabel({
		text : "Số xu hiện tại",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.lbl_xu = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '10.000Xu',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso2.add(sv.ui.lbl_soxu);
	sv.ui.vThongso2.add(sv.ui.lbl_xu);
	//
	sv.ui.vThongso3 = Titanium.UI.createView({
		width : Ti.App.size(235),
		height : Ti.App.size(120),
		left : Ti.App.size(470),
		top : 0
	});
	sv.ui.Viewcontain.add(sv.ui.vThongso3);
	sv.ui.tyletrungdb = Titanium.UI.createLabel({
		text : "Tỷ lệ trúng đặc biệt",
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(25)
		},
		top : Ti.App.size(10),
		textAlign : 'center'
	});
	sv.ui.tyle_db = Titanium.UI.createLabel({
		top : Ti.App.size(60),
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 5,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(25)
		},
		text : '0%',
		color : Ti.App.Color.superwhite,
		width : Ti.App.size(135),
		height : Ti.App.size(40)
	});
	sv.ui.vThongso3.add(sv.ui.tyletrungdb);
	sv.ui.vThongso3.add(sv.ui.tyle_db);

	//tao view ung dung
	sv.ui.ViewUngDung = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top : 0,
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.UngDung = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		height : Ti.App.size(495),
		top : Ti.App.size(35),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
	});

	sv.ui.Row1 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow1 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow1 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-1.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
	});

	sv.ui.LabelRow1 = Ti.UI.createLabel({
		text : 'Nạp Xu',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row2 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(99),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow2 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow2 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-2.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow2 = Ti.UI.createLabel({
		text : 'Con số đã chơi',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row3 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(198),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow3 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow3 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-3.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow3 = Ti.UI.createLabel({
		text : 'Lịch sử giao dịch',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row4 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(297),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow4 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow4 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-4.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow4 = Ti.UI.createLabel({
		text : 'Hòm thư',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	sv.ui.Row5 = Ti.UI.createView({
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta,
		height : Ti.App.size(99),
		top : Ti.App.size(396),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
	});

	sv.ui.ViewIconRow5 = Ti.UI.createView({
		bottom : Ti.App.size(0),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(580),
	});

	sv.ui.IconRow5 = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-info-5.png',
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
	});

	sv.ui.LabelRow5 = Ti.UI.createLabel({
		text : 'Nâng cấp tài khoản VIP',
		font : {
			fontSize : Ti.App.size(20),
			textAlign : 'left',
			fontFamily : 'Aria'
		},
		bottom : Ti.App.size(30),
		top : Ti.App.size(30),
		left : Ti.App.size(100),
		right : Ti.App.size(0),
		color : 'black'
	});

	createUI_Event(sv);

	// sv.ui.IconMenu.addEventListener('click', sv.fu.eventClickIconMenu);
	// sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	// sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	// sv.ui.Window.add(sv.ui.ViewTong);
	// sv.ui.Window.add(sv.ui.ViewHeader);

	sv.ui.scrollview.add(sv.ui.ViewUngDung);
	sv.ui.ViewTong.add(sv.ui.scrollview);
	sv.ui.ViewTong.add(sv.ui.viewAvatar);
	// sv.ui.viewAvatar.add(sv.ui.Avatar);
	sv.ui.viewAvatar.add(sv.ui.LabelName);
	sv.ui.viewAvatar.add(sv.ui.LabelThongTin);
	sv.ui.viewAvatar.add(sv.ui.ViewBut);
	sv.ui.viewAvatar.add(sv.ui.ViewThongSo);
	sv.ui.viewAvatar.add(sv.ui.Viewcontain);
	sv.ui.ViewUngDung.add(sv.ui.UngDung);

	sv.ui.UngDung.add(sv.ui.Row1);
	sv.ui.UngDung.add(sv.ui.Row2);
	sv.ui.UngDung.add(sv.ui.Row3);
	sv.ui.UngDung.add(sv.ui.Row4);
	sv.ui.UngDung.add(sv.ui.Row5);

	sv.ui.Row1.add(sv.ui.ViewIconRow1);
	sv.ui.Row1.add(sv.ui.LabelRow1);

	sv.ui.Row2.add(sv.ui.ViewIconRow2);
	sv.ui.Row2.add(sv.ui.LabelRow2);

	sv.ui.Row3.add(sv.ui.ViewIconRow3);
	sv.ui.Row3.add(sv.ui.LabelRow3);

	sv.ui.Row4.add(sv.ui.ViewIconRow4);
	sv.ui.Row4.add(sv.ui.LabelRow4);

	sv.ui.Row5.add(sv.ui.ViewIconRow5);
	sv.ui.Row5.add(sv.ui.LabelRow5);

	sv.ui.ViewIconRow1.add(sv.ui.IconRow1);
	sv.ui.ViewIconRow2.add(sv.ui.IconRow2);
	sv.ui.ViewIconRow3.add(sv.ui.IconRow3);
	sv.ui.ViewIconRow4.add(sv.ui.IconRow4);
	sv.ui.ViewIconRow5.add(sv.ui.IconRow5);

}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconMenu = function(e) {
		var newWindow = new (require('ui/DangNhap'))();
		newWindow.open();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		// sv.ui.IconMenu.removeEventListener('click', sv.fu.eventClickIconMenu);
		// sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		// sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('da remove xong ');
	};
}
