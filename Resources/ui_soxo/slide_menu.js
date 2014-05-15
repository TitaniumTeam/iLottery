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
	sv.vari.VTView = 1;
	///bien view hien tai
	sv.vari.viewht = null;
	sv.vari.viewoff=null;
	/////khoi tao cac file require
	sv.vari.windowKQSX = require('/ui_soxo/WindowKQSX');
	sv.vari.windowRealTime = require('/ui_soxo/WindowRealTime');
	sv.vari.windowChoose = require('/ui_soxo/WindowChoose');
	sv.vari.windowSupport = require('/ui_soxo/WindowSupport');
	sv.vari.windowInfoUser = require('/ui_soxo/Info');
	sv.vari.windowLichsuGD = require('/ui_soxo/LichSuGiaoDich');
	sv.vari.windowThongtincanhan = require('/ui_soxo/ThongTinCaNhan');
	sv.vari.wd_offline=require('/ui_app/kq_offline');
	///cac mang menu ben phai
	sv.arr.ten_menu_right = ['Thông tin tài khoản', 'Thay đổi mật khẩu', 'Hòm thư', 'Nạp trực tiếp', 'Nạp bằng SMS', 'Bảng quy đổi', 'Lịch sử giao dịch', 'Con số đã chơi'];
	sv.arr.ten_right = ['THÔNG TIN TÀI KHOẢN', 'NẠP XU', 'LỊCH SỬ'];
	sv.arr.icon_right = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-napxu.png', '/assets/images/icon/icon-lichsu.png'];
	sv.arr.datatbl_right1 = [];
	sv.arr.datatbl_right2 = [];
	sv.arr.datatbl_right3 = [];
	///cac mang menu ben trai
	sv.arr.ten = ['XEM KẾT QUẢ SỔ XỐ', 'TƯ VẤN', 'CHỨC NĂNG VIP', 'HOME'];
	sv.arr.icon = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-1.png', '/assets/images/icon/icon-3.png'];
	sv.arr.ten_menu = ['Lựa chọn', 'Kết quả sổ xố miền Bắc', 'Kết quả sổ xố miền Nam', 'Kết quả sổ xố miền Trung', 'Xem dãy số lâu về', 'Xem dãy số hay về', 'Cầu đang ăn', 'Xem số Vip'];
	sv.arr.datatbl = [];
	sv.arr.datatbl1 = [];
	sv.arr.datatbl3 = [];
	sv.arr.datatbl4 = [];
}

function tao_ui(sv) {
	sv.ui = {};
	///////
	/*win right
	*
	*/
	sv.ui.win_right = Ti.UI.createWindow({
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
		height : Ti.UI.SIZE,
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
		height : Ti.UI.SIZE,
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
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
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
	sv.ui.row_slide = require('/ui_bongda/rowheader');
	sv.ui.row_header1r = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten_right[0], sv.arr.icon_right[0]);
	sv.ui.view_menulist_right.add(sv.ui.row_header1r);
	sv.ui.row_header2r = new sv.ui.row_slide(Ti.App.size(330), sv.arr.ten_right[1], sv.arr.icon_right[1]);
	sv.ui.view_menulist_right.add(sv.ui.row_header2r);
	sv.ui.row_header3r = new sv.ui.row_slide(Ti.App.size(680), sv.arr.ten_right[2], sv.arr.icon_right[2]);
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
		separatorColor : Ti.App.Color.xanhnhat,
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
		top : Ti.App.size(400),
		separatorColor : Ti.App.Color.xanhnhat,
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
		top : Ti.App.size(740),
		separatorColor : Ti.App.Color.xanhnhat,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r3);
	sv.ui.win_right.add(sv.ui.scrollView_right);
	/*win left
	 */
	sv.ui.win_left = Ti.UI.createWindow({
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
		// left : Ti.App.size(25),
		// right : Ti.App.size(25),
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(30)
		},
		returnKeyType : Ti.UI.RETURNKEY_SEARCH
	});
	sv.ui.view_timkiem.add(sv.ui.txtTimkiem);
	sv.ui.win_left.add(sv.ui.view_timkiem);
	////////////////
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(120),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
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
	sv.ui.row_slide = require('/ui_soxo/rowheader');
	sv.ui.row_header1 = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten[0], sv.arr.icon[0]);
	sv.ui.view_menulist.add(sv.ui.row_header1);
	sv.ui.row_header2 = new sv.ui.row_slide(Ti.App.size(445), sv.arr.ten[1], sv.arr.icon[1]);
	sv.ui.view_menulist.add(sv.ui.row_header2);
	sv.ui.row_header3 = new sv.ui.row_slide(Ti.App.size(790), sv.arr.ten[2], sv.arr.icon[2]);
	sv.ui.view_menulist.add(sv.ui.row_header3);
	sv.ui.row_header4 = new sv.ui.row_slide(Ti.App.size(950), sv.arr.ten[3], sv.arr.icon[2]);
	sv.ui.view_menulist.add(sv.ui.row_header4);
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
		separatorColor : Ti.App.Color.xanhnhat,
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
		separatorColor : Ti.App.Color.xanhnhat,
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
		separatorColor : Ti.App.Color.xanhnhat,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist.add(sv.ui.tableView3);
	////
	{
		sv.ui.row4 = Ti.UI.createTableViewRow({
			height : Ti.App.size(95),
			width : Ti.App.size(480),
			backgroundColor : Ti.App.Color.brown,
		});
		sv.ui.cham4 = Ti.UI.createImageView({
			image : '/assets/images/icon/icon-4.png',
			width : Ti.App.size(10),
			height : Ti.App.size(10),
			left : Ti.App.size(25),
			top : Ti.App.size(37)
		});
		sv.ui.row4.add(sv.ui.cham4);
		sv.ui.lblgiai4 = Ti.UI.createLabel({
			width : Ti.App.size(390),
			left : Ti.App.size(54),
			text : 'HOME',
			color : Ti.App.Color.superwhite,
			font : {
				fontSize : Ti.App.size(30)
			},
			textAlign : 'left'
		});
		sv.ui.row4.add(sv.ui.lblgiai4);
		sv.ui.lblrow4 = Ti.UI.createImageView({
			width : Ti.App.size(27),
			height : Ti.App.size(46),
			right : Ti.App.size(25),
			backgroundImage : '/assets/images/icon/arrow.png',
			transform : sv.ui.matrix
		});
		sv.ui.row4.add(sv.ui.lblrow4);
	}
	sv.arr.datatbl4 = [sv.ui.row4];
	sv.ui.tableView4 = Ti.UI.createTableView({
		data : sv.arr.datatbl4,
		top : Ti.App.size(1010),
		separatorColor : Ti.App.Color.xanhnhat,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist.add(sv.ui.tableView4);

	sv.ui.win_left.add(sv.ui.scrollView);

	/*
	 window tong
	 * */
	sv.ui.WindowSoXo = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		fullscreen : true,
		navBarHidden : true
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
	sv.vari.viewht = new sv.vari.windowKQSX();
	sv.vari.viewoff=new sv.vari.wd_offline();
	sv.vari.viewoff.testNetwork(sv.ui.WindowSoXo);
	sv.ui.navController = Ti.UI.iOS.createNavigationWindow({
		window : sv.ui.WindowSoXo,
		orientationModes : [Ti.UI.PORTRAIT],
		fullscreen:true,
	});
	////
	sv.ui.drawer = NappDrawerModule.createDrawer({
		fullscreen : true,
		leftWindow : sv.ui.win_left,
		centerWindow : sv.ui.navController,
		rightWindow : sv.ui.win_right,
		closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_ALL,
		openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
		showShadow : true, //no shadow in iOS7
		leftDrawerWidth : Ti.App.size(500),
		rightDrawerWidth : Ti.App.size(480),
		statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT, // remember to set UIViewControllerBasedStatusBarAppearance to false in tiapp.xml
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT],
		animationMode : NappDrawerModule.ANIMATION_PARALLAX_FACTOR_7,
		animationVelocity : 1000,
		top : 0
	});
	///
	tao_event(sv);
	sv.ui.drawer.addEventListener('windowDidOpen', sv.fu.evt_draw_open);
	sv.ui.drawer.addEventListener('windowDidClose', sv.fu.evt_draw_close);
	///su kien menu left
	sv.ui.tableView.addEventListener('click', sv.fu.evt_tblview1_click);
	sv.ui.tableView2.addEventListener('click', sv.fu.evt_tblview2_click);
	sv.ui.tableView3.addEventListener('click', sv.fu.evt_tblview3_click);
	sv.ui.tableView4.addEventListener('click', sv.fu.evt_home);
	//sukien menu right
	sv.ui.tableView_r3.addEventListener('click', sv.fu.evt_tblviewright3_click);
	sv.ui.tableView_r.addEventListener('click', sv.fu.evt_tblviewright1_click);
	//su kien click icon
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventSlideleft);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventSlideright);
	//su kien dong win
	sv.ui.WindowSoXo.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.WindowSoXo.addEventListener('close', sv.fu.eventCloseWindow);

	
};

////remove event moi view

function removeAllEvent(sv) {
	sv.fu = {};
	//view luachon
	if (sv.vari.VTView == 1) {
		sv.vari.viewht.removeAllEvent();
	}
	///view kqsx mien bac
	if (sv.vari.VTView == 2) {
		sv.vari.viewht.removeAllEvent();
	}
	//view kqsx mien nam
	if (sv.vari.VTView == 3) {
		sv.vari.viewht.removeAllEvent();
	}
	//view kqsxmien trung
	if (sv.vari.VTView == 4) {
		sv.vari.viewht.removeAllEvent();
	}
	///view xem day so lau ve
	if (sv.vari.VTView == 5) {
		sv.vari.viewht.removeAllEvent();
	}
	///view xem day so hay ve
	if (sv.vari.VTView == 6) {

	}
	///view xem cau dang an
	if (sv.vari.VTView == 7) {

	}
	//xem so vip
	if (sv.vari.VTView == 8) {
		sv.vari.viewht.removeAllEvent();
	}
	//thong tin tai khoan
	if (sv.vari.VTView == 9) {
		sv.vari.viewht.removeAllEvent();
	}
	//thay doi mat khau
	if (sv.vari.VTView == 10) {
		sv.vari.viewht.removeAllEvent();
	}
	//hom thu
	if (sv.vari.VTView == 11) {
	}
	//nap truc tiep
	if (sv.vari.VTView == 12) {
	}
	//nap bang sms
	if (sv.vari.VTView == 13) {
	}
	//bang quy doi
	if (sv.vari.VTView == 14) {

	}
	//lich su giao dich
	if (sv.vari.VTView == 15) {
		sv.vari.viewht.removeAllEvent();
	}
	//con so da choi
	if (sv.vari.VTView == 16) {

	}
}

/////tao event
function tao_event(sv) {
	sv.fu = {};
	sv.fu.evt_home = function(e) {
		switch(e.index) {
			case 0:
				var home = new (require('/ui_app/ui_app'));
				home.ui.win_app.open();
				// sv.ui.drawer.close();
				break;
		}

	};
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
		switch(e.index) {
			case 0:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "LỊCH SỬ GIAO DỊCH", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				sv.vari.viewht = new sv.vari.windowLichsuGD();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.ViewTong);
				sv.vari.VTView = 15;
				break;
		};
	};
	//su kien table view 1 menu right
	sv.fu.evt_tblviewright1_click = function(e) {
		switch(e.index) {
			case 0:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				sv.vari.viewht = new sv.vari.windowInfoUser();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.ViewTong);
				sv.vari.VTView = 9;
				break;
			case 1:
				sv.vari.flag_txtfield = true;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "THÔNG TIN CÁ NHÂN", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleRightWindow();
				sv.vari.viewht = new sv.vari.windowThongtincanhan();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.ViewTong);
				sv.vari.VTView = 10;
				break;
		};
	};
	///su kien table view 1 menu left
	sv.fu.evt_tblview1_click = function(e) {
		switch(e.index) {
			case 0:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "LỰA CHỌN", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowChoose();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.ViewTong);
				sv.vari.VTView = 1;
				break;
			case 1:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "Xổ số Miền Bắc", true);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowKQSX();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.scrollView);
				sv.vari.VTView = 2;
				break;
			case 2:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "Xổ số Miền Nam", true);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowKQSX();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.scrollView);
				sv.vari.VTView = 3;
				break;
			case 3:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "Xổ số Miền Trung", true);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowKQSX();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.scrollView);
				sv.vari.VTView = 4;
				break;
		}
	};
	///su kien table view2 _ left click
	sv.fu.evt_tblview2_click = function(e) {
		switch(e.index) {
			case 0:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "DÃY SỐ LÂU VỀ", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowSupport();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.scrollView);
				sv.vari.VTView = 5;
				break;
		}
	};
	///su kien table view3_ left click
	sv.fu.evt_tblview3_click = function(e) {
		switch(e.index) {
			case 0:
				sv.vari.flag_txtfield = false;
				removeAllEvent(sv);
				sv.vari.viewht = null;
				set_label(sv, "TRỰC TIẾP", false);
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.drawer.toggleLeftWindow();
				sv.vari.viewht = new sv.vari.windowRealTime();
				sv.ui.Viewtong.add(sv.vari.viewht.ui.Viewtong);
				sv.vari.VTView = 8;
				break;
		}
	};
	////open drawer
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
			sv.vari.viewht.set_statetxt(true);
		}
	};
	///open window
	sv.fu.eventOpenWindow = function(e) {
		sv.ui.Viewtong.add(sv.vari.viewht.ui.scrollView);
		Ti.API.info('Opened window');
	};
	//su kien dong window
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.drawer.removeEventListener('windowDidClose', sv.fu.evt_draw_close);
		sv.ui.drawer.removeEventListener('windowDidOpen', sv.fu.evt_draw_open);
		sv.ui.tableView.removeEventListener('click', sv.fu.evt_tblview_click);
		sv.ui.tableView2.removeEventListener('click', sv.fu.evt_tblview2_click);
		sv.ui.tableView3.removeEventListener('click', sv.fu.evt_tblview3_click);
		sv.ui.WindowSoXo.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowSoXo.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventWindowDK);
		sv.ui.tableView_r3.removeEventListener('click', sv.fu.evt_tblviewright3_click);
		sv.ui.tableView_r.removeEventListener('click', sv.fu.evt_tblviewright1_click);
		sv.ui.drawer.removeEventListener('open', sv.fu.onNavDrawerWinOpen);
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
		sv.ui.lbl_Ngay.visible = false;
		sv.ui.lbl_GiaiSX.top = Ti.App.size(35);
	} else {
		sv.ui.lbl_GiaiSX.top = Ti.App.size(10);
		sv.ui.lbl_Ngay.visible = true;
		sv.ui.lbl_Ngay.top = Ti.App.size(60);
		sv.ui.lbl_Ngay.left = Ti.App.size(260);
	}

}
