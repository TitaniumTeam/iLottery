var NappDrawerModule = require('dk.napp.drawer');
module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv.ui.drawer;
};
function tao_bien(sv) {
	sv.arr = {};
	sv.vari = {};
	sv.vari.flag_txtfield = false;
	///cac mang menu ben phai
	sv.arr.ten_menu_right = ['Thông tin tài khoản', 'Thay đổi mật khẩu', 'Hòm thư', 'Nạp trực tiếp', 'Nạp bằng SMS', 'Bảng quy đổi', 'Lịch sử giao dịch', 'Con số đã chơi'];
	sv.arr.ten_right = ['THÔNG TIN TÀI KHOẢN', 'NẠP XU', 'LỊCH SỬ'];
	sv.arr.icon_right = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-lichsu.png', '/assets/images/icon/icon-napxu.png'];
	sv.arr.datatbl_right1 = [];
	sv.arr.datatbl_right2 = [];
	sv.arr.datatbl_right3 = [];
	///cac mang menu ben trai
	sv.arr.ten = ['XEM KẾT QUẢ SỔ XỐ', 'TƯ VẤN', 'CHỨC NĂNG VIP'];
	sv.arr.icon = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-1.png', '/assets/images/icon/icon-3.png'];
	sv.arr.ten_menu = ['Lựa chọn', 'Kết quả sổ xố miền Bắc', 'Kết quả sổ xố miền Nam', 'Kết quả sổ xố miền Trung', 'Xem dãy số lâu về', 'Xem dãy số hay về', 'Cầu đang ăn', 'Xem số Vip'];
	sv.arr.datatbl = [];
	sv.arr.datatbl1 = [];
	sv.arr.datatbl3 = [];
}

function tao_ui(sv) {
	sv.ui = {};
	///////
	/*win right
	*
	*/
	sv.ui.win_right = Ti.UI.createView({
		backgroundColor : Ti.App.Color.brown
	});
	sv.ui.viewavatar = Titanium.UI.createView({
		width : Ti.App.size(480),
		height : Ti.App.size(200),
		backgroundColor : Ti.App.Color.magenta,
		top : 0,
		left : 0,
	});
	sv.ui.view_user_avatar = Titanium.UI.createView({
		left : 0,
		height : Ti.App.size(200),
		width : Ti.App.size(160),
		top : 0
	});
	sv.ui.img_user_avatar = Ti.UI.createImageView({
		image : '/assets/images/icon/avatar-defaut.png',
		height : Ti.App.size(112),
		width : Ti.App.size(112),
		top : Ti.App.size(20),
		left : Ti.App.size(20),
	});
	sv.ui.view_user_avatar.add(sv.ui.img_user_avatar);
	sv.ui.viewavatar.add(sv.ui.view_user_avatar);
	sv.ui.view_info = Titanium.UI.createView({
		left : Ti.App.size(160),
		top : Ti.App.size(30),
		height : Ti.App.size(140),
		bottom : Ti.App.size(30),
	});
	sv.ui.viewavatar.add(sv.ui.view_info);
	sv.ui.lblten_user = Ti.UI.createLabel({
		left : 0,
		top : 0,
		text : "Elisa Sana",
		font : {
			fontSize : Ti.App.size(50)
		},
		color : Ti.App.Color.nauden
	});
	sv.ui.view_info.add(sv.ui.lblten_user);
	sv.ui.lblID_user = Ti.UI.createLabel({
		left : 0,
		top : Ti.App.size(70),
		text : "ID: 150D25",
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden
	});
	sv.ui.view_info.add(sv.ui.lblID_user);
	sv.ui.lblXu_user = Ti.UI.createLabel({
		left : 0,
		top : Ti.App.size(110),
		text : "Xu: 2.000.000",
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden
	});
	sv.ui.view_info.add(sv.ui.lblXu_user);
	sv.ui.win_right.add(sv.ui.viewavatar);
	////////////////
	sv.ui.scrollView_right = Ti.UI.createScrollView({
		top : Ti.App.size(200),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		bottom : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		scrollsToTop : true,
		horizontalBounce : true,
	});
	sv.ui.view_menulist_right = Titanium.UI.createView({
		width : Ti.App.size(500),
		height : Ti.UI.SIZE,
		left : 0,
		top : 0,
		right : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.scrollView_right.add(sv.ui.view_menulist_right);
	sv.ui.row_slide = require('/ui/rowheader');
	sv.ui.row_header1r = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten_right[0], sv.arr.icon_right[0]);
	sv.ui.view_menulist_right.add(sv.ui.row_header1r);
	sv.ui.row_header2r = new sv.ui.row_slide(Ti.App.size(348), sv.arr.ten_right[1], sv.arr.icon_right[1]);
	sv.ui.view_menulist_right.add(sv.ui.row_header2r);
	sv.ui.row_header3r = new sv.ui.row_slide(Ti.App.size(695), sv.arr.ten_right[2], sv.arr.icon_right[2]);
	sv.ui.view_menulist_right.add(sv.ui.row_header3r);

	for (var i = 0; i < 3; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu_right[i],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.arr.datatbl_right1.push(sv.ui.row);
	}
	sv.ui.tableView_r = Ti.UI.createTableView({
		data : sv.arr.datatbl_right1,
		top : Ti.App.size(60),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r);
	for (var i = 0; i < 3; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu_right[i + 3],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.arr.datatbl_right2.push(sv.ui.row);
	}
	sv.ui.tableView_r2 = Ti.UI.createTableView({
		data : sv.arr.datatbl_right2,
		top : Ti.App.size(410),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r2);
	for (var i = 0; i < 2; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu_right[6 + i],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.arr.datatbl_right3.push(sv.ui.row);
	}
	sv.ui.tableView_r3 = Ti.UI.createTableView({
		data : sv.arr.datatbl_right3,
		top : Ti.App.size(760),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r3);
	sv.ui.win_right.add(sv.ui.scrollView_right);
	/*win left
	 */
	sv.ui.win_left = Ti.UI.createView({
		backgroundColor : Ti.App.Color.brown
	});
	sv.ui.view_timkiem = Titanium.UI.createView({
		width : Ti.App.size(500),
		height : Ti.App.size(120),
		backgroundColor : Ti.App.Color.magenta,
		top : 0,
		left : 0
	});
	sv.ui.txtTimkiem = Titanium.UI.createTextField({
		width : Ti.App.size(450),
		height : Ti.App.size(75),
		color : Ti.App.Color.nauden,
		hintText : 'Tìm kiếm ...',
		textAlign : 'center',
		top : Ti.App.size(20),
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(30)
		}
	});
	sv.ui.view_timkiem.add(sv.ui.txtTimkiem);
	sv.ui.win_left.add(sv.ui.view_timkiem);
	////////////////
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(120),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		bottom : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		scrollsToTop : true,
		horizontalBounce : true,
	});
	sv.ui.view_menulist = Titanium.UI.createView({
		width : Ti.App.size(500),
		height : Ti.UI.SIZE,
		left : 0,
		top : 0,
		right : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.scrollView.add(sv.ui.view_menulist);
	sv.ui.matrix = Titanium.UI.create2DMatrix();
	sv.ui.matrix = sv.ui.matrix.rotate(180);
	sv.ui.row_slide = require('/ui/rowheader');
	sv.ui.row_header1 = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten[0], sv.arr.icon[0]);
	sv.ui.view_menulist.add(sv.ui.row_header1);
	sv.ui.row_header2 = new sv.ui.row_slide(Ti.App.size(445), sv.arr.ten[1], sv.arr.icon[1]);
	sv.ui.view_menulist.add(sv.ui.row_header2);
	sv.ui.row_header3 = new sv.ui.row_slide(Ti.App.size(790), sv.arr.ten[2], sv.arr.icon[2]);
	sv.ui.view_menulist.add(sv.ui.row_header3);
	for (var i = 0; i < 4; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu[i],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.ui.lblrow = Ti.UI.createImageView({
			width : Ti.App.size(27),
			height : Ti.App.size(46),
			right : Ti.App.size(25),
			backgroundImage : '/assets/images/icon/arrow.png',
			transform : sv.ui.matrix
		});
		sv.ui.row.add(sv.ui.lblrow);

		sv.arr.datatbl.push(sv.ui.row);
	}
	sv.ui.tableView = Ti.UI.createTableView({
		data : sv.arr.datatbl,
		top : Ti.App.size(60),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist.add(sv.ui.tableView);
	for (var i = 0; i < 3; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu[i + 4],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row.add(sv.ui.lblgiai);
		sv.ui.lblrow = Ti.UI.createImageView({
			width : Ti.App.size(27),
			height : Ti.App.size(46),
			right : Ti.App.size(25),
			backgroundImage : '/assets/images/icon/arrow.png',
			transform : sv.ui.matrix
		});
		sv.ui.row.add(sv.ui.lblrow);

		sv.arr.datatbl1.push(sv.ui.row);
	}
	sv.ui.tableView2 = Ti.UI.createTableView({
		data : sv.arr.datatbl1,
		top : Ti.App.size(505),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist.add(sv.ui.tableView2); {
		sv.ui.row3 = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row3.add(sv.ui.cham);
		sv.ui.lblgiai = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : sv.arr.ten_menu[7],
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row3.add(sv.ui.lblgiai);
		sv.ui.lblrow = Ti.UI.createImageView({
			width : Ti.App.size(27),
			height : Ti.App.size(46),
			right : Ti.App.size(25),
			backgroundImage : '/assets/images/icon/arrow.png',
			transform : sv.ui.matrix
		});
		sv.ui.row3.add(sv.ui.lblrow);
	}
	sv.arr.datatbl3 = [sv.ui.row3];
	sv.ui.tableView3 = Ti.UI.createTableView({
		data : sv.arr.datatbl3,
		top : Ti.App.size(854),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist.add(sv.ui.tableView3);
	sv.ui.win_left.add(sv.ui.scrollView);

	/*
	 window tong
	 * */
	sv.ui.WindowSoXo = Ti.UI.createView({
		backgroundColor : Ti.App.Color.superwhite,
	});
	sv.ui.View1 = Ti.UI.createView({
		backgroundColor : 'red',
		width : Ti.App.size(720),
		height : Ti.App.size(120),
		top : 0
	});
	sv.ui.view_menu_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : 0,
		top : 0,
		backgroundSelectedColor : 'blue',
		backgroundFocusedColor : 'blue',
	});
	sv.ui.menu_icon = Ti.UI.createImageView({
		width : Ti.App.size(56),
		heigth : Ti.App.size(37),
		image : '/assets/images/icon/menu.png',
	});
	sv.ui.view_user_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		right : 0,
		top : 0,
		backgroundSelectedColor : 'blue',
		backgroundFocusedColor : 'blue',
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/images/icon/user.png',
		// top : Ti.App.size(30)
	});
	sv.ui.lbl_GiaiSX = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		text : 'Xổ số Miền Bắc',
		color : Ti.App.Color.white,
		top : Ti.App.size(10),
		font : {
			fontSize : Ti.App.size(50)
		}
	});
	sv.ui.lbl_Ngay = Ti.UI.createLabel({
		width : Ti.App.size(220),
		text : '(12/4/2014)',
		color : Ti.App.Color.white,
		top : Ti.App.size(60),
		font : {
			fontSize : Ti.App.size(40),
		},
		left : Ti.App.size(260)
	});
	sv.ui.Viewtong = Titanium.UI.createView({
		top : Ti.App.size(120),
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent'
	});
	sv.ui.WindowSoXo.add(sv.ui.Viewtong);
	sv.ui.View1.add(sv.ui.view_menu_icon);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.View1.add(sv.ui.view_user_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.View1.add(sv.ui.lbl_GiaiSX);
	sv.ui.View1.add(sv.ui.lbl_Ngay);
	sv.ui.WindowSoXo.add(sv.ui.View1);
	sv.ui.v = require('/ui/WindowKQSX');
	sv.ui.wdKQSX = new sv.ui.v();
	sv.ui.Viewtong.add(sv.ui.wdKQSX);
	sv.ui.windowRealTime = require('/ui/WindowRealTime');
	sv.ui.wdRealTime = new sv.ui.windowRealTime();
	sv.ui.windowChoose = require('/ui/WindowChoose');
	sv.ui.wdChoose = new sv.ui.windowChoose();
	sv.ui.windowSupport = require('/ui/WindowSupport');
	sv.ui.wdSupport = new sv.ui.windowSupport();
	sv.ui.windowInfoUser = require('/ui/Info');
	sv.ui.wdInfoUser = new sv.ui.windowInfoUser();
	sv.ui.windowLichsuGD = require('/ui/LichSuGiaoDich');
	sv.ui.wdLSGD = new sv.ui.windowLichsuGD();
	sv.ui.windowThongtincanhan = require('/ui/ThongTinCaNhan');
	sv.ui.wdTTCN = new sv.ui.windowThongtincanhan();
	/*
	navcontroller win
	* */
	////
	sv.ui.drawer = NappDrawerModule.createDrawer({
		fullscreen : true,
		leftWindow : sv.ui.win_left,
		centerWindow : sv.ui.WindowSoXo,
		rightWindow : sv.ui.win_right,
		fading : 0.2, // 0-1
		parallaxAmount : 0.2, //0-1
		shadowWidth : "40dp",
		leftDrawerWidth : Ti.App.size(500),
		rightDrawerWidth : Ti.App.size(480),
		animationMode : NappDrawerModule.ANIMATION_NONE,
		closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_MARGIN,
		openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT],
		top : 0
	});
	///
	tao_event(sv);
	sv.ui.drawer.addEventListener('open', sv.fu.onNavDrawerWinOpen);
	sv.ui.drawer.addEventListener('windowDidOpen', sv.fu.evt_draw_open);
	sv.ui.drawer.addEventListener('windowDidClose', sv.fu.evt_draw_close);
	sv.ui.tableView_r3.addEventListener('click', sv.fu.evt_tblviewright3_click);
	sv.ui.tableView.addEventListener('click', sv.fu.evt_tblview_click);
	sv.ui.tableView_r.addEventListener('click', sv.fu.evt_tblviewright1_click);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventSlideleft);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventSlideright);
	sv.ui.WindowSoXo.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.WindowSoXo.addEventListener('close', sv.fu.eventCloseWindow);
};
function tao_event(sv) {
	sv.fu = {};
	//su kien click nut 3gach
	sv.fu.eventSlideleft = function(e) {
		sv.ui.scrollView.scrollTo(0, 0);
		sv.ui.drawer.toggleLeftWindow();
	};
	//su kien click nut user icon
	sv.fu.eventSlideright = function(e) {
		sv.ui.scrollView_right.scrollTo(0, 0);
		sv.ui.drawer.toggleRightWindow();
	};
	///su kien table view3 menu right
	sv.fu.evt_tblviewright3_click = function(e) {
		Ti.API.info('is righwindowopen' + sv.ui.drawer.isRightWindowOpen());
		switch(e.index) {
			case 0:
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				set_label(sv, "LỊCH SỬ GIAO DỊCH", false);
				sv.ui.Viewtong.add(sv.ui.wdLSGD);
				break;
		};
	};
	//su kien table view 1 menu right
	sv.fu.evt_tblviewright1_click = function(e) {
		Ti.API.info('is righwindowopen' + sv.ui.drawer.isRightWindowOpen());
		switch(e.index) {
			case 0:
				set_label(sv, "", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				sv.ui.wdInfoUser.ui.scrollview.scrollTo(0, 0);
				sv.ui.Viewtong.add(sv.ui.wdInfoUser.ui.ViewTong);
				break;
			case 1:
				sv.vari.flag_txtfield = true;
				set_label(sv, "THÔNG TIN CÁ NHÂN", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				sv.ui.Viewtong.add(sv.ui.wdTTCN.ui.ViewTong);
				break;
		};
	};
	///su kien table view 1 menu left
	sv.fu.evt_tblview_click = function(e) {
		Ti.API.info("isLeftWindowOpen: " + sv.ui.drawer.isLeftWindowOpen());
		switch(e.index) {
			case 0:
				sv.ui.wdRealTime.ui.scrollView.scrollTo(0, 0);
				set_label(sv, "TRỰC TIẾP", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.ui.Viewtong.add(sv.ui.wdRealTime.ui.Viewtong);
				break;
			case 1:
				set_label(sv, "LỰA CHỌN", false);
				sv.ui.wdChoose.ui.table_view.visible = false;
				sv.ui.wdChoose.ui.table_view1.visible = false;
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.ui.Viewtong.add(sv.ui.wdChoose.ui.ViewTong);
				break;
			case 2:
				sv.ui.wdKQSX.scrollTo(0, 0);
				set_label(sv, "Xổ số Miền Bắc", true);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.ui.Viewtong.add(sv.ui.wdKQSX);

				break;
			case 3:
				set_label(sv, "DÃY SỐ LÂU VỀ", false);
				sv.ui.wdSupport.ui.scrollView.scrollTo(0, 0);
				sv.ui.wdSupport.ui.table_view.visible = false;
				sv.ui.wdSupport.ui.table_view1.visible = false;
				sv.ui.wdSupport.ui.table_view2.visible = false;
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.ui.Viewtong.add(sv.ui.wdSupport.ui.scrollView);
				break;
		}
	};
	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	//su kien dong slide
	sv.fu.evt_draw_close = function(e) {
		sv.ui.txtTimkiem.blur();
		sv.ui.txtTimkiem.value = '';
		sv.ui.scrollView.scrollTo(0, 0);
		sv.ui.scrollView_right.scrollTo(0, 0);
	};
	//su kien mo slide
	sv.fu.evt_draw_open = function(e) {
		if (sv.vari.flag_txtfield == true) {
			sv.ui.wdTTCN.ui.TfMatKhau.blur();
			sv.ui.wdTTCN.ui.TfTaiKhoan.blur();
			sv.ui.wdTTCN.ui.TfEmail.blur();
		};
	};
	sv.fu.onNavDrawerWinOpen = function(evt) {
		this.removeEventListener('open', sv.fu.onNavDrawerWinOpen);

		if (this.getActivity()) {
			// need to explicitly use getXYZ methods
			var actionBar = this.getActivity().getActionBar();
			if (actionBar) {
				actionBar.hide();
			}
		}
	};
	//su kien dong window
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.drawer.removeEventListener('windowDidClose', sv.fu.evt_draw_close);
		sv.ui.drawer.removeEventListener('windowDidOpen', sv.fu.evt_draw_open);
		sv.ui.tableView.removeEventListener('click', sv.fu.evt_tblview_click);
		sv.ui.WindowSoXo.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowSoXo.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventWindowDK);
		sv.ui.tableView_r.removeEventListener('click', sv.fu.evt_tblviewright1_click);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
		Ti.API.info('Closed window, sv=' + sv);
	};
};
function set_label(sv, _ten, _false) {
	sv.ui.lbl_GiaiSX.text = _ten;
	if (_false == false) {
		sv.ui.lbl_Ngay.visible = _false;
		sv.ui.lbl_GiaiSX.top = Ti.App.size(35);
	} else {
		sv.ui.lbl_GiaiSX.top = Ti.App.size(10);
		sv.ui.lbl_Ngay.visible = true;
		sv.ui.lbl_Ngay.top = Ti.App.size(60);
		sv.ui.lbl_Ngay.left = Ti.App.size(260);
	}

}