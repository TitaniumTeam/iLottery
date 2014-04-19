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
	sv.ui.lbl_Choose = Ti.UI.createLabel({
		width : Ti.App.size(300),
		height : Ti.App.size(50),
		text : 'LỰA CHỌN',
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(50)
		},
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
		width : Ti.App.size(670),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		bottom : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(50)
		},
	});
	sv.vari.arrow = require('/ui/vArrow');
	sv.ui.arrow1 = new sv.vari.arrow(Ti.App.size(249));
	sv.ui.varrow11 = sv.ui.arrow1.getvArrow1();
	sv.ui.varrow12 = sv.ui.arrow1.getvArrow2();
	///
	sv.ui.arrow2 = new sv.vari.arrow(Ti.App.size(350));
	sv.ui.varrow21 = sv.ui.arrow2.getvArrow1();
	sv.ui.varrow22 = sv.ui.arrow2.getvArrow2();
	///
	sv.vari.combobox = require('/ui/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(250), Ti.App.size(345), 'Tỉnh thành', Ti.App.size(585));
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(350), Ti.App.size(445), 'Ngày', Ti.App.size(585));
	sv.arr.tinhthanh = ['HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG'];
	sv.arr.ngay = ['6/9/2014', '1/1/2014'];
	sv.ui.view_choose.setTable(sv.arr.tinhthanh);
	sv.ui.view_choose1.setTable(sv.arr.ngay);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.table_view1 = sv.ui.view_choose1.getTableView();

	//////
	tao_event(sv);
	sv.ui.view_menu_icon.addEventListener('click',sv.fu.event_slide);
	sv.ui.arrow1.addEventListener('click', sv.fu.event_click_view);
	sv.ui.arrow2.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.btn_xemkq.addEventListener('click', sv.fu.event_click_xem);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.table_view1.addEventListener('click', sv.fu.event_clicktbl1);
	sv.ui.WindowChoose.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowChoose.addEventListener('close', sv.fu.closeWindow);
	//////
	sv.ui.WindowChoose.add(sv.ui.arrow1);
	sv.ui.WindowChoose.add(sv.ui.arrow2);
	sv.ui.WindowChoose.add(sv.ui.view_choose);
	sv.ui.WindowChoose.add(sv.ui.view_choose1);
	sv.ui.WindowChoose.add(sv.ui.table_view);
	sv.ui.WindowChoose.add(sv.ui.table_view1);
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
	sv.fu = {};
	sv.fu.event_slide=function(e){
		var drawer=new (require('/ui/slide_menu'))(0);
		drawer.open();
		drawer.toggleLeftWindow();
	};
	sv.fu.event_click_xem = function(e) {
		var windowsupport = new (require('/ui/WindowSupport'))();
		windowsupport.open();
	};
	sv.fu.event_click_view = function(e) {
		view_click(sv.ui.table_view, sv.ui.table_view1);
	};
	sv.fu.event_clicktbl = function(e) {
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view);
	};
	sv.fu.event_click_view1 = function(e) {
		view_click(sv.ui.table_view1, sv.ui.table_view);
	};
	sv.fu.event_clicktbl1 = function(e) {
		tbl_click(e, sv.ui.lblfirst1, sv.ui.table_view1);
	};
	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.closeWindow = function(e) {
		sv.ui.arrow1.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.arrow2.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.btn_xemkq.removeEventListener('click', sv.fu.event_click_xem);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.table_view1.removeEventListener('click', sv.fu.event_clicktbl1);
		sv.ui.WindowChoose.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowChoose.removeEventListener('close', sv.fu.closeWindow);
	};
}

function tbl_click(e, _lbl, _tbl) {
	_lbl.text = e.row.tenrow;
	_tbl.visible = false;
}

function view_click(_tbl1, _tbl2) {
	_tbl1.visible = true;
	_tbl2.visible = false;
}
