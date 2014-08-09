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
		fullscreen : isAndroid?false:true,
		backgroundColor : Ti.App.Color.nauden,
		orientationModes : [Ti.UI.PORTRAIT],
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
				sv.vari.db = Ti.Database.open('userinfo');
				sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
				if (sv.vari.user_info.isValidRow()) {
					sv.vari.tk_user = sv.vari.user_info.fieldByName("type");
				}
				sv.vari.user_info.close();
				sv.vari.db.close();
				if (sv.vari.tk_user == 0) {
					sv.vari.wdNangCap = new (require('/ui-user/PopUpNangCapVip'))();
					sv.vari.wdNangCap.setThongBao("Bạn phải nâng cấp VIP mới sử dụng được chức năng này");
					sv.vari.wdNangCap.ui.Window.open({
						modal : Ti.Platform.osname == 'android' ? true : false
					});
					// Ti.API.info('state' + sv.vari.wdNangCap.getState());
					sv.vari.user_info.close();
					sv.vari.db.close();
				} else {
					if (sv.vari.tk_user == 1) {
						sv.vari.user_info.close();
						sv.vari.db.close();
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
							sv.vari.ViewHT = new (require('/ui-soxo/VTuVan'))();
							sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
						}

					} else {
						sv.vari.user_info.close();
						sv.vari.db.close();
						sv.vari.WinPopUpDangNhap = new (require('ui-user/PopUpDangNhap'))();
						sv.vari.WinPopUpDangNhap.open({
							modal : Ti.Platform.osname == 'android' ? true : false
						});
					}
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
		if (sv.vari.flag == 0) {
			sv.vari.ViewHT.removeAllEvent();
		}
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
