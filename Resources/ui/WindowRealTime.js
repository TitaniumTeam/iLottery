module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowRealTime;
};
/*
 * khoi tao ui
 */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.ui.WindowRealTime = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true,
		fullscreen : true
	});
	sv.ui.View1 = Ti.UI.createView({
		backgroundColor : 'red',
		width : Ti.App.size(720),
		height : Ti.App.size(220),
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
		width : Ti.App.size(260),
		height : Ti.App.size(50),
		text : 'TRỰC TIÊP',
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		font : {
			fontSize : Ti.App.size(45)
		}
	});
	sv.ui.lbl_sxmb = Titanium.UI.createLabel({
		top : Ti.App.size(140),
		heigth : Ti.App.size(100),
		width : Ti.App.size(210),
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(35)
		},
		text : 'Miền Bắc',
		left : Ti.App.size(10),
		// backgroundColor:'transparent',
		// backgroundSelectedColor:Ti.App.Color.nauden
		backgroundColor : Ti.App.Color.nauden,
		borderRadius : 10,
		textAlign : 'center'
	});
	sv.ui.lbl_sxmn = Titanium.UI.createLabel({
		top : Ti.App.size(140),
		heigth : Ti.App.size(100),
		width : Ti.App.size(210),
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(35)
		},
		text : 'Miền Nam',
		left : Ti.App.size(250),
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.nauden,
		// backgroundColor:Ti.App.Color.nauden,
		borderRadius : 10,
		textAlign : 'center'
	});
	sv.ui.lbl_sxmt = Titanium.UI.createLabel({
		top : Ti.App.size(140),
		heigth : Ti.App.size(100),
		width : Ti.App.size(210),
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(35)
		},
		text : 'Miền Trung',
		left : Ti.App.size(480),
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.nauden,
		// backgroundColor:Ti.App.Color.nauden,
		borderRadius : 10,
		textAlign : 'center'
	});
	sv.ui.view_title = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		left : 0,
		top : Ti.App.size(220),
		backgroundColor : Ti.App.Color.magenta
	});
	sv.ui.lbl_tg = Titanium.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(30),
		top : Ti.App.size(10),
		textAlign : 'center',
		text : 'Xổ số Miền Bắc ngày 1-4-2014(Hà Nội)',
		color : Ti.App.Color.red,
		font : {
			fontSize : Ti.App.size(30)
		}
	});
	sv.ui.lbl_tuongthuat = Titanium.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(30),
		bottom : Ti.App.size(10),
		text : 'Đang tường thuật trực tiếp',
		textAlign : 'center',
		color : Ti.App.Color.red,
		font : {
			fontSize : Ti.App.size(30)
		}
	});
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(320),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		bottom : 0,
		// contentHeight : viewScrollParent.height,
		// height : viewScrollParent.height,
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

	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.ui.row = require('/ui/RowContain');
	//row 1
	sv.ui.row1 = new sv.ui.row(sv.arr.height[0], 'Đặc biệt', '00768', true);
	sv.ui.scrollView.add(sv.ui.row1);
	///row 2
	sv.ui.row2 = new sv.ui.row(sv.arr.height[0], 'Nhất', '12344', true);
	sv.ui.scrollView.add(sv.ui.row2);
	//row 3
	sv.arr.kq_giainhi = [1213, 14122];
	sv.ui.row3 = new sv.ui.row(sv.arr.height[0], 'Nhì', sv.arr.kq_giainhi);
	sv.ui.scrollView.add(sv.ui.row3);
	//row 4
	sv.ui.row4 = new sv.ui.row(sv.arr.height[1], 'Ba');
	sv.ui.scrollView.add(sv.ui.row4);
	//row 5
	sv.ui.row5 = new sv.ui.row(sv.arr.height[0], 'Tư');
	sv.ui.scrollView.add(sv.ui.row5);
	//row 6
	sv.ui.row6 = new sv.ui.row(sv.arr.height[1], 'Năm');
	sv.ui.scrollView.add(sv.ui.row6);
	//row 7
	sv.ui.row7 = new sv.ui.row(sv.arr.height[0], 'Sáu');
	sv.ui.scrollView.add(sv.ui.row7);
	//row 8
	sv.ui.row8 = new sv.ui.row(sv.arr.height[0], 'Bảy');
	sv.ui.scrollView.add(sv.ui.row8);
	sv.ui.vDaysove = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(300),
		backgroundColor : 'transparent'
	});
	sv.ui.lbl_dsve = Ti.UI.createLabel({
		width : Ti.App.size(200),
		height : Ti.App.size(60),
		left : Ti.App.size(20),
		text : 'Dãy số về',
		top : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vDaysove.add(sv.ui.lbl_dsve);
	sv.ui.vConsove = Ti.UI.createView({
		width : Ti.App.size(680),
		height : Ti.App.size(240),
		top : Ti.App.size(80),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});
	sv.ui.vDaysove.add(sv.ui.vConsove);
	sv.vari.rowchild = require('/ui/RowChild');
	sv.arr.dayso1 = ['12', '12', '12', '12', '12', '12', '12', '12', '12'];
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc1 = new sv.vari.rowchild(Ti.App.size(0), Ti.App.size(75) * i, Ti.App.size(68), Ti.App.size(68), sv.arr.dayso1[i], false, true, setbg(i, 5));
		sv.ui.vConsove.add(sv.ui.rowc1);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc2 = new sv.vari.rowchild(Ti.App.size(75), Ti.App.size(75) * i, Ti.App.size(68), Ti.App.size(68), sv.arr.dayso1[i], false, true, false);
		sv.ui.vConsove.add(sv.ui.rowc2);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc3 = new sv.vari.rowchild(Ti.App.size(150), Ti.App.size(75) * i, Ti.App.size(68), Ti.App.size(68), sv.arr.dayso1[i], false, true, false);
		sv.ui.vConsove.add(sv.ui.rowc3);
	}
	sv.ui.scrollView.add(sv.ui.vDaysove);
	////
	sv.ui.vdau_sau = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
	});

	sv.ui.lbl_dsve_saudau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(20),
		text : 'Số đầu',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_saudau);
	sv.ui.lbl_dsve_sau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(120),
		text : 'Số sau',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_sau);
	sv.ui.scrollView.add(sv.ui.vdau_sau);
	////
	for (var i = 0; i < 8; i++) {
		sv.ui.vds_sovesau = Ti.UI.createView({
			width : Ti.App.size(670),
			height : Ti.App.size(70),
			left : Ti.App.size(20),
			// top : Ti.App.size(75) * i,
			borderColor : Ti.App.Color.magenta,
			borderWidth : 1,
			borderRadius : 2
		});
		sv.ui.space=Ti.UI.createView({
			width:Ti.App.size(670),
			height:Ti.App.size(5),
			left : Ti.App.size(20),
		});
		for (var j = 0; j < 4; j++) {
			sv.ui.rowchild_vds = new sv.vari.rowchild(Ti.App.size(1), setleft(j,0), Ti.App.size(67), Ti.App.size(67), sv.arr.dayso1[j], false, false, false,setbg(j,0));
			sv.ui.vds_sovesau.add(sv.ui.rowchild_vds);
		}
		sv.ui.scrollView.add(sv.ui.space);
		sv.ui.scrollView.add(sv.ui.vds_sovesau);
	}

	;
	////
	createUI_Event(sv);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventBackHome);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventWindowKQSX);
	sv.ui.WindowRealTime.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.WindowRealTime.addEventListener('close', sv.fu.eventCloseWindow);
	/////
	sv.ui.WindowRealTime.add(sv.ui.view_title);
	sv.ui.view_title.add(sv.ui.lbl_tuongthuat);
	sv.ui.view_title.add(sv.ui.lbl_tg);
	sv.ui.WindowRealTime.add(sv.ui.View1);
	sv.ui.View1.add(sv.ui.lbl_sxmb);
	sv.ui.View1.add(sv.ui.lbl_sxmn);
	sv.ui.View1.add(sv.ui.lbl_sxmt);
	sv.ui.View1.add(sv.ui.view_menu_icon);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.View1.add(sv.ui.view_user_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.View1.add(sv.ui.lbl_GiaiSX);
	sv.ui.WindowRealTime.add(sv.ui.scrollView);
};
function createUI_Event(sv) {
	sv.fu = {};
	sv.fu.eventBackHome = function(e) {
		sv.ui.WindowRealTime.close();
	};
	sv.fu.eventWindowKQSX = function(e) {
		var windowkqsx = new (require('/ui/WindowKQSX'))();
		windowkqsx.open();
	};
	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.WindowRealTime.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowRealTime.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventWindowKQSX);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

function setbg(i, _bg) {
	if (i == _bg) {
		return true;
	} else
		return false;
};
function setleft(j,_left){
	if(j==_left){
		return Ti.App.size(1);
	}
	else
	return Ti.App.size(74) * j;
}
