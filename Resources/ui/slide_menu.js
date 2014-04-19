var NappDrawerModule = require('dk.napp.drawer');
module.exports = function(id) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.drawer;
};
function tao_ui(sv) {
	sv.ui = {};
	sv.arr = {};

	/*winleft
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
		textAlign : 'left',
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
		showVerticalScrollIndicator : false,
		disableBounce : true,
		scrollsToTop : false,
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
	sv.arr.ten = ['XEM KẾT QUẢ SỔ XỐ', 'TƯ VẤN', 'CHỨC NĂNG VIP'];
	sv.arr.icon = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-1.png', '/assets/images/icon/icon-3.png'];
	sv.ui.row_slide = require('/ui/rowheader');
	sv.ui.row_header1 = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten[0], sv.arr.icon[0]);
	sv.ui.view_menulist.add(sv.ui.row_header1);
	sv.ui.row_header2 = new sv.ui.row_slide(Ti.App.size(445), sv.arr.ten[1], sv.arr.icon[1]);
	sv.ui.view_menulist.add(sv.ui.row_header2);
	sv.ui.row_header3 = new sv.ui.row_slide(Ti.App.size(790), sv.arr.ten[2], sv.arr.icon[2]);
	sv.ui.view_menulist.add(sv.ui.row_header3);
	sv.arr.datatbl = [];
	sv.arr.ten_menu = ['Lựa chọn', 'Kết quả sổ xố miền Bắc', 'Kết quả sổ xố miền Nam', 'Kết quả sổ xố miền Trung', 'Xem dãy số lâu về', 'Xem dãy số hay về', 'Cầu đang ăn', 'Xem số Vip'];
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
	sv.arr.datatbl1 = [];
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
	sv.ui.view_menulist.add(sv.ui.tableView2);
	{
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
		left : 0
	});
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
		showVerticalScrollIndicator : false,
		disableBounce : true,
		scrollsToTop : false,
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
	sv.arr.ten_right = ['THÔNG TIN TÀI KHOẢN', 'NẠP XU', 'LỊCH SỬ'];
	sv.arr.icon_right = ['/assets/images/icon/icon-2.png', '/assets/images/icon/icon-lichsu.png', '/assets/images/icon/icon-napxu.png'];
	sv.ui.row_header1r = new sv.ui.row_slide(Ti.App.size(0), sv.arr.ten_right[0], sv.arr.icon_right[0]);
	sv.ui.view_menulist_right.add(sv.ui.row_header1r);
	sv.ui.row_header2r = new sv.ui.row_slide(Ti.App.size(350), sv.arr.ten_right[1], sv.arr.icon_right[1]);
	sv.ui.view_menulist_right.add(sv.ui.row_header2r);
	sv.ui.row_header3r = new sv.ui.row_slide(Ti.App.size(695), sv.arr.ten_right[2], sv.arr.icon_right[2]);
	sv.ui.view_menulist_right.add(sv.ui.row_header3r);
	sv.arr.datatbl_right = [];
	sv.arr.ten_menu_right = ['Thông tin tài khoản', 'Thay đổi mật khẩu', 'Hòm thư', 'Nạp trực tiếp', 'Nạp bằng SMS', 'Bảng quy đổi', 'Lịch sử giao dịch', 'Con số đã chơi'];
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
		sv.arr.datatbl_right.push(sv.ui.row);
	}
	sv.ui.tableView_r = Ti.UI.createTableView({
		data : sv.arr.datatbl_right,
		top : Ti.App.size(60),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r);
	sv.arr.datatbl_right1 = [];
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
		sv.arr.datatbl_right1.push(sv.ui.row);
	}
	sv.ui.tableView_r2 = Ti.UI.createTableView({
		data : sv.arr.datatbl_right1,
		top : Ti.App.size(405),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE,
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r2);
	sv.arr.datatbl_r3 = [];
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
		sv.arr.datatbl_r3.push(sv.ui.row);
	}
	sv.ui.tableView_r3 = Ti.UI.createTableView({
		data : sv.arr.datatbl_r3,
		top : Ti.App.size(750),
		separatorColor : Ti.App.Color.gray,
		backgroundColor : 'transparent',
		left : 0,
		width : Ti.App.size(500),
		scrollable : false,
	});
	sv.ui.view_menulist_right.add(sv.ui.tableView_r3);
	sv.ui.win_right.add(sv.ui.scrollView_right);
	/*
	 window tong
	 * */
	sv.ui.WindowSoXo = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true,
		fullscreen : true
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
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/images/icon/user.png',
		// top : Ti.App.size(30)
	});
	sv.ui.lbl_GiaiSX = Ti.UI.createLabel({
		width : Ti.App.size(320),
		height : Ti.App.size(50),
		text : 'Xổ số Miền Bắc',
		color : Ti.App.Color.white,
		top : Ti.App.size(10),
		font : {
			fontSize : Ti.App.size(45)
		}
	});
	sv.ui.lbl_Ngay = Ti.UI.createLabel({
		width : Ti.App.size(220),
		height : Ti.App.size(50),
		text : '(12/4/2014)',
		color : Ti.App.Color.white,
		top : Ti.App.size(60),
		font : {
			fontSize : Ti.App.size(40)
		}
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
	sv.ui.scrollView_first = new sv.ui.v();
	sv.ui.windowRealTime = require('/ui/WindowRealTime');
	sv.ui.wdRealTime = new sv.ui.windowRealTime();
	sv.ui.windowChoose = require('/ui/WindowChoose');
	sv.ui.wdChoose = new sv.ui.windowChoose();
	sv.ui.windowSupport = require('/ui/WindowSupport');
	sv.ui.wdSupport = new sv.ui.windowSupport();
	sv.ui.navController = Ti.UI.iOS.createNavigationWindow({
		window : sv.ui.WindowSoXo
	});
	/*
	navcontroller win
	* */
	////
	sv.ui.drawer = NappDrawerModule.createDrawer({
		leftWindow : sv.ui.win_left,
		centerWindow : sv.ui.navController,
		rightWindow : sv.ui.win_right,
		closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_ALL,
		openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
		showShadow : true, //no shadow in iOS7
		leftDrawerWidth : Ti.App.size(500),
		rightDrawerWidth : Ti.App.size(480),
		tatusBarStyle : NappDrawerModule.STATUSBAR_WHITE, // remember to set UIViewControllerBasedStatusBarAppearance to false in tiapp.xml
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
	});

	///
	tao_event(sv);
	sv.ui.tableView.addEventListener('click', sv.fu.evt_tblview_click);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventSlideleft);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventSlideright);
	sv.ui.WindowSoXo.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.WindowSoXo.addEventListener('close', sv.fu.eventCloseWindow);
};
function tao_event(sv) {
	sv.fu = {};
	sv.vari = {};
	sv.fu.eventSlideleft = function(e) {
		sv.ui.drawer.toggleLeftWindow();
	};
	sv.fu.eventSlideright = function(e) {
		sv.ui.drawer.toggleRightWindow();
	};
	sv.fu.evt_tblview_click = function(e) {
		Ti.API.info("isLeftWindowOpen: " + sv.ui.drawer.isLeftWindowOpen());
		switch(e.index) {
			case 0:
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.Viewtong.add(sv.ui.wdRealTime);
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 1:
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.Viewtong.add(sv.ui.wdChoose);
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 2:
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.Viewtong.add(sv.ui.scrollView_first);
				// sv.ui.scrollView_first.scrollToIndex(0, {
					// animated : true
				// });
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 3:
				sv.ui.Viewtong.removeAllChildren();
				sv.ui.Viewtong.add(sv.ui.wdSupport);
				// sv.ui.wdSupport.scrollToIndex(0, {
					// animated : true
				// });
				sv.ui.drawer.toggleLeftWindow();
				break;
		}
	};
	sv.fu.eventOpenWindow = function(e) {
		sv.ui.Viewtong.add(sv.ui.scrollView_first);
		Ti.API.info('Opened window');
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.WindowSoXo.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowSoXo.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventWindowDK);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
};
