var NappDrawerModule = require('dk.napp.drawer');
module.exports = function(id) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv,id);
	})();

	return sv.ui.drawer;
};
function tao_ui(sv,id) {
	sv.ui = {};
	sv.arr = {};
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
	/*
	navcontroller win
	* */
	sv.arr.dataWin = [sv.ui.win_choose = new (require('/ui/WindowChoose'))(), sv.ui.win_kqsx = new (require('/ui/WindowKQSX'))(), sv.ui.win_support = new (require('/ui/WindowSupport'))(), sv.ui.win_realtime = new (require('/ui/WindowRealTime'))(), sv.ui.win_lsgd = new (require('/ui/LichSuGiaoDich'))()];
	////
	sv.ui.drawer = NappDrawerModule.createDrawer({
		leftWindow : sv.ui.win_left,
		centerWindow : set_navigator(sv, id),
		rightWindow : Ti.UI.createWindow({
			backgroundColor : "#FFF"
		}),
		closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_ALL,
		openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
		showShadow : true, //no shadow in iOS7
		leftDrawerWidth : Ti.App.size(500),
		rightDrawerWidth : Ti.App.size(220),
		tatusBarStyle : NappDrawerModule.STATUSBAR_WHITE, // remember to set UIViewControllerBasedStatusBarAppearance to false in tiapp.xml
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
	});
	// set_center(sv, id);
	///
	tao_event(sv);
	sv.ui.tableView.addEventListener('click', sv.fu.evt_tblview_click);
};
function tao_event(sv) {
	sv.fu = {};
	sv.fu.evt_tblview_click = function(e) {
		Ti.API.info("isLeftWindowOpen: " + sv.ui.drawer.isLeftWindowOpen());
		switch(e.index) {
			case 0:
				sv.ui.drawer.setCenterWindow(set_navigator(sv, 0));
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 1:
				sv.ui.drawer.setCenterWindow(set_navigator(sv, 1));
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 2:
				sv.ui.drawer.setCenterWindow(set_navigator(sv, 2));
				sv.ui.drawer.toggleLeftWindow();
				break;
			case 3:
				sv.ui.drawer.setCenterWindow(set_navigator(sv, 3));
				sv.ui.drawer.toggleLeftWindow();
				break;
		}
	};
};

function set_navigator(sv, i) {
	sv.ui.navController = Ti.UI.iOS.createNavigationWindow({
		window : sv.arr.dataWin[i]
	});
	return sv.ui.navController;
};
