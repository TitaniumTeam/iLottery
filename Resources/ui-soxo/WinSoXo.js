module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv.ui.Win;
};
////
function tao_bien(sv) {
	
	if (Ti.Platform.osname == 'android'){
		sv.vari.revemob = new (require('/ui-controller/revmob'))();
		sv.vari.revemob.showBan();
	}
	sv.arr.ViewChucNang = [];
	sv.arr.LabelChucNang = [];
	sv.arr.LineChucNang = [];
	sv.arr.evtChucNang = [];
	sv.arr.TenChucNang = ["Sổ kết quả", "Thống kê", "Tư vấn", "VIP"];
	sv.vari.ViewHT
	sv.vari.db = null;
	sv.vari.user_info = null;
	sv.vari.tk_user = null;
	///
	sv.vari.flag = 0;
}

////
function tao_ui(sv) {
	var customButton = require('ui-controller/customButton');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.Win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid ? false : true,
		backgroundColor : Ti.App.Color.nauden,
		orientationModes : [Ti.UI.PORTRAIT],
		zIndex : 10
	});
	//////header
	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		left : 0,
	});

	sv.ui.ViewIconBack = customButton({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		left : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(90),
	});

	sv.ui.IconBack = Ti.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});

	sv.ui.ViewIconUser = customButton({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		right : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(90),
	});
	sv.ui.IconUser = Ti.UI.createImageView({
		image : '/assets/icon/icon_account.png',
		touchEnabled : false,
		width : Ti.App.size(54),
		height : Ti.App.size(54)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		width : Ti.App.size(360),
		text : "XỔ SỐ",
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		height : Ti.App.size(88),
		backgroundColor : 'transparent',
		touchEnabled : false,
		color : Ti.App.Color.superwhite

	});

	/////thanh chuc nang
	sv.ui.ViewTab = Ti.UI.createView({
		left : 0,
		top : Ti.App.size(86),
		height : Ti.App.size(75),
		width : Ti.App.size(640),
		layout : 'horizontal',
		backgroundImage : "/assets/icon/bg_tabbar.png"
	});
	sv.ui.LineTab = Ti.UI.createView({
		left : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(2),
		backgroundColor : Ti.App.Color.red_press,
		bottom : 0,
		zIndex : 10,
		touchEnabled : false
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.ViewChucNang[i] = Ti.UI.createView({
			width : Ti.App.size(160),
			height : Ti.App.size(75),
			backgroundColor : "transparent",
			top : 0,
			backgroundSelectedImage : "/assets/icon/selected_tab.png"
		});
		sv.arr.LabelChucNang[i] = Ti.UI.createLabel({
			text : sv.arr.TenChucNang[i],
			font : {
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			},
			color : set_color(i),
			// color : Ti.App.Color.superwhite,
			width : Ti.App.size(160),
			height : Ti.App.size(72),
			touchEnabled : false,
			textAlign : 'center',
			backgroundColor : 'transparent'
		});
		if (i == 3) {
			sv.ui.iconVip = Ti.UI.createImageView({
				top : 0,
				right : Ti.App.size(20),
				width : Ti.App.size(52),
				height : Ti.App.size(52),
				image : "/assets/icon/icon_star.png",
				zIndex : 10,
				touchEnabled : false
			});
			sv.arr.ViewChucNang[i].add(sv.ui.iconVip);
		}
		sv.arr.ViewChucNang[i].add(sv.arr.LabelChucNang[i]);
		sv.ui.ViewTab.add(sv.arr.ViewChucNang[i]);
	}

	////iad view

		if (!isAndroid) {
			Ti.API.info('dung iads');
			sv.ui.adView = Ti.UI.iOS.createAdView({
				width :Ti.App.size(640),
				height : Ti.App.size(100),
				bottom : 0,
				borderColor : '#000000',
				backgroundColor : '#000000',
				zIndex : 100
			});
			sv.ui.Win.add(sv.ui.adView);
		}


	/////////
	sv.ui.ViewIconUser.add(sv.ui.IconUser);
	sv.ui.ViewHeader.add(sv.ui.ViewIconUser);

	sv.ui.ViewIconBack.add(sv.ui.IconBack);
	sv.ui.ViewHeader.add(sv.ui.ViewIconBack);

	sv.ui.ViewHeader.add(sv.ui.LabelHeader);
	sv.ui.Win.add(sv.ui.ViewHeader);
	///////
	sv.ui.ViewTab.add(sv.ui.LineTab);
	sv.ui.Win.add(sv.ui.ViewTab);
	tao_sukien(sv);
	sv.ui.ViewIconBack.addEventListener('click', sv.fu.evtIconBack);
	sv.ui.ViewIconUser.addEventListener('click', sv.fu.evtOpenWinUser);
	sv.ui.Win.addEventListener('open', sv.fu.evtOpenWin);
	for (var i = 0; i < 4; i++) {
		sv.arr.ViewChucNang[i].addEventListener('click', sv.arr.evtChucNang[i]);
	}
	sv.ui.Win.addEventListener('close', sv.fu.evtCloseWin);
	sv.ui.Win.addEventListener('android:back', sv.fu.evtIconBack);
}

function tao_sukien(sv) {
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evtChucNang[i] = function(e) {
				if (sv.vari.flag != 0) {
					for (var j = 0; j < 4; j++) {
						if (j == 0)
							sv.arr.ViewChucNang[j].setBackgroundImage("/assets/icon/selected_tab.png");
						else {
							sv.arr.ViewChucNang[j].setBackgroundImage("transparent");
						}
					}
					sv.vari.flag = 0;
					sv.vari.ViewHT.removeAllEvent();
					sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
					sv.vari.ViewHT = null;
					sv.vari.ViewHT = new (require('/ui-soxo/VSoKQ'))();
					sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
				}
			};
		}
		if (i == 1) {
			sv.arr.evtChucNang[i] = function(e) {
				if (sv.vari.flag != 1) {
					for (var j = 0; j < 4; j++) {
						if (j == 1)
							sv.arr.ViewChucNang[j].setBackgroundImage("/assets/icon/selected_tab.png");
						else {
							sv.arr.ViewChucNang[j].setBackgroundImage("transparent");
						}
					}
					sv.vari.flag = 1;
					sv.vari.ViewHT.removeAllEvent();
					sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
					sv.vari.ViewHT = null;
					sv.vari.ViewHT = new (require('/ui-soxo/VThongKe'))();
					sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
				}
			};
		}
		if (i == 2) {
			sv.arr.evtChucNang[i] = function(e) {
				if (sv.vari.flag != 2) {
					for (var j = 0; j < 4; j++) {
						if (j == 2)
							sv.arr.ViewChucNang[j].setBackgroundImage("/assets/icon/selected_tab.png");
						else {
							sv.arr.ViewChucNang[j].setBackgroundImage("transparent");
						}
					}
					sv.vari.flag = 2;
					sv.vari.ViewHT.removeAllEvent();
					sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
					sv.vari.ViewHT = null;
					sv.vari.ViewHT = new (require('/ui-soxo/VTuVan'))();
					sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
				}

			};
		}
		if (i == 3) {
			sv.arr.evtChucNang[i] = function(e) {
				if (sv.vari.flag != 3) {
					for (var j = 0; j < 4; j++) {
						if (j == 3)
							sv.arr.ViewChucNang[j].setBackgroundImage("/assets/icon/selected_tab.png");
						else {
							sv.arr.ViewChucNang[j].setBackgroundImage("transparent");
						}
					}
					sv.vari.flag = 3;
					sv.vari.ViewHT.removeAllEvent();
					sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
					sv.vari.ViewHT = null;
					sv.vari.ViewHT = new (require('/ui-soxo/VTuVanVip'))();
					sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
				}

			};
		}
	}
	sv.fu.evtOpenWinUser = function(e) {
		sv.vari.database = Titanium.Database.open('userinfo');
		sv.vari.userinfo = sv.vari.database.execute("SELECT * FROM SaveInfo");
		if (sv.vari.userinfo.isValidRow()) {
			sv.vari.userinfo.close();
			sv.vari.database.close();
			sv.vari.WinUser = new (require('/ui-user/WinUser'))();
			sv.vari.WinUser.open();
		} else {
			sv.vari.userinfo.close();
			sv.vari.database.close();
			sv.vari.WinPopUpDangNhap = new (require('ui-user/PopUpDangNhap'))(sv.ui.Win);
			sv.vari.WinPopUpDangNhap.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		}

	};
	sv.fu.evtOpenWin = function(e) {
		sv.arr.ViewChucNang[0].setBackgroundImage("/assets/icon/selected_tab.png");
		sv.vari.flag = 0;
		sv.vari.ViewHT = new (require('/ui-soxo/VSoKQ'))();
		sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);

	};
	sv.fu.evtIconBack = function(e) {
		sv.ui.Win.close();
	};
	sv.fu.evtCloseWin = function(e) {
		sv.ui.ViewIconBack.removeEventListener('click', sv.fu.evtIconBack);
		sv.ui.Win.removeEventListener('open', sv.fu.evtOpenWin);
		for (var i = 0; i < 4; i++) {
			sv.arr.ViewChucNang[i].removeEventListener('click', sv.arr.evtChucNang[i]);
		}
		sv.vari.ViewHT.removeAllEvent();
		sv.ui.Win.removeEventListener('close', sv.fu.evtCloseWin);
		sv.ui.ViewIconUser.removeEventListener('click', sv.fu.evtOpenWinUser);
		sv.ui.Win.removeEventListener('android:back', sv.fu.evtIconBack);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window So xo, sv=' + sv);
	};
};

function set_color(i) {
	if (i == 3)
		return "yellow";
	else
		return Ti.App.Color.superwhite;
};
