module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowChoose;
};

/*khoi tao UI
 */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	sv.ui.WindowChoose = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.magenta,
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
		right : 0,
		top : 0,
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/icon/user.png',
		// top : Ti.App.size(30)
	});
	sv.ui.lbl_Choose = Ti.UI.createLabel({
		width : Ti.App.size(220),
		height : Ti.App.size(50),
		text : 'LỰA CHỌN',
		color : Ti.App.Color.white,
	});
	sv.ui.lbl_info = Ti.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		text : 'Hãy chọn tỉnh thành mà bạn muốn xem kết quả',
		color : 'black',
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center',
		top : Ti.App.size(120)
	});
	sv.ui.btn_xemkq = Ti.UI.createLabel({
		width : Ti.App.size(680),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		bottom : Ti.App.size(20),
		color : Ti.App.Color.superwhite
	});

	//////
	sv.ui.WindowChoose.add(sv.ui.btn_xemkq);
	sv.ui.WindowChoose.add(sv.ui.lbl_info);
	sv.ui.WindowChoose.add(sv.ui.View1);
	sv.ui.View1.add(sv.ui.view_menu_icon);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.View1.add(sv.ui.view_user_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.View1.add(sv.ui.lbl_Choose);
};
function tao_event(sv) {

}
