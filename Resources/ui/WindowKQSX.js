module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowSoXo;
};
/**khoi tao UI
 * */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.ui.WindowSoXo = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.white,
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
		image : '/assets/icon/menu.png',
	});
	sv.ui.view_user_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		right:0,
		top : 0,
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/icon/user.png',
		// top : Ti.App.size(30)
	});
	sv.ui.lbl_GiaiSX = Ti.UI.createLabel({
		width : Ti.App.size(280),
		height : Ti.App.size(50),
		text : 'Xổ số Miền Bắc',
		color : Ti.App.Color.white,
		top : Ti.App.size(10)
	});
	sv.ui.lbl_Ngay = Ti.UI.createLabel({
		width : Ti.App.size(220),
		height : Ti.App.size(50),
		text : '(12/4/2014)',
		color : Ti.App.Color.white,
		top : Ti.App.size(60),
	});

	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(120),
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
	//row 1
	sv.ui.row1 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Đặc biệt', '00768');
	sv.ui.scrollView.add(sv.ui.row1);
	///row 2
	sv.ui.row2 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Nhất', '12344');
	sv.ui.scrollView.add(sv.ui.row2);
	//row 3
	sv.arr.kq_giainhi = [1213, 14122];
	sv.ui.row3 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Nhì', sv.arr.kq_giainhi);
	sv.ui.scrollView.add(sv.ui.row3);
	//row 4
	sv.ui.row4 = new (require('/ui/RowContain'))(sv.arr.height[1], 'Ba');
	sv.ui.scrollView.add(sv.ui.row4);
	//row 5
	sv.ui.row5 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Tư');
	sv.ui.scrollView.add(sv.ui.row5);
	//row 6
	sv.ui.row6 = new (require('/ui/RowContain'))(sv.arr.height[1], 'Năm');
	sv.ui.scrollView.add(sv.ui.row6);
	//row 7
	sv.ui.row7 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Sáu');
	sv.ui.scrollView.add(sv.ui.row7);
	//row 8
	sv.ui.row8 = new (require('/ui/RowContain'))(sv.arr.height[0], 'Bảy');
	sv.ui.scrollView.add(sv.ui.row8);
	////
	createUI_Event(sv);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventBackHome);
	sv.ui.view_user_icon.addEventListener('click', sv.fu.eventLogin);
	sv.ui.WindowSoXo.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.WindowSoXo.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.WindowSoXo.add(sv.ui.View1);
	sv.ui.View1.add(sv.ui.view_menu_icon);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.View1.add(sv.ui.view_user_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.View1.add(sv.ui.lbl_GiaiSX);
	sv.ui.View1.add(sv.ui.lbl_Ngay);
	sv.ui.WindowSoXo.add(sv.ui.scrollView);

}

function createUI_Event(sv) {
	sv.fu = {};
	sv.fu.eventBackHome = function(e) {
		sv.ui.WindowSoXo.close();
	};
	sv.fu.eventLogin = function(e) {
		var windowlogin = new (require('/ui/WindowLogin'))();
		windowlogin.open();
	};
	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.WindowSoXo.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.WindowSoXo.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.view_user_icon.removeEventListener('click', sv.fu.eventLogin);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}
