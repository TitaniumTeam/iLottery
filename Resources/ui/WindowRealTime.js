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
		width : Ti.App.size(240),
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
		borderRadius :10,
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
		height : Ti.App.size(360),
		backgroundColor : 'transparent'
	});
	sv.ui.lbl_dsve=Ti.UI.createLabel({
		width:Ti.App.size(200),
		height:Ti.App.size(60),
		left:0,
		text:'Day so ve',
		top:Ti.App.size(20),
		font:{fontSize:Ti.App.size(30)},
		color:Ti.App.Color.nauden,
		textAlign:'center'
	});
	sv.ui.vDaysove.add(sv.ui.lbl_dsve);
	sv.ui.scrollView.add(sv.ui.vDaysove);

	sv.ui.vdau_sau = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(780),
		backgroundColor : 'yellow'
	});
	sv.ui.scrollView.add(sv.ui.vdau_sau);
	////
	createUI_Event(sv);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventBackHome);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventWindowDK);
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
	sv.fu.eventWindowDK = function(e) {
		// var windowDK = new (require('/ui/WindowDK'))();
		// windowDK.open();
	};
	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.WindowRealTime.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowRealTime.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventWindowDK);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}
