module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowSupport;
};

/*khoi tao UI
 */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	sv.ui.WindowSupport = Ti.UI.createWindow({
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
		width : Ti.App.size(280),
		height : Ti.App.size(50),
		text : 'Dãy số lâu về',
		color : Ti.App.Color.white,
	});
	sv.ui.btn_xemkq = Ti.UI.createLabel({
		width : Ti.App.size(670),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(25),
		right : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		top : Ti.App.size(585)
	});
	sv.ui.lbl_thongke = Titanium.UI.createLabel({
		top : Ti.App.size(720),
		width : Ti.App.size(670),
		height : Ti.App.size(70),
		backgroundColor : Ti.App.Color.brown,
		text : 'Thống kê bộ số XX về 23 lần',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		left : Ti.App.size(25),
		textAlign : 'center'
	});
	//
	sv.vari.arrow = require('/ui/vArrow');
	sv.ui.arrow1 = new sv.vari.arrow(Ti.App.size(249));
	sv.ui.varrow11 = sv.ui.arrow1.getvArrow1();
	sv.ui.varrow12 = sv.ui.arrow1.getvArrow2();
	///
	sv.ui.arrow2 = new sv.vari.arrow(Ti.App.size(350));
	sv.ui.varrow21 = sv.ui.arrow2.getvArrow1();
	sv.ui.varrow22 = sv.ui.arrow2.getvArrow2();
	///////
	sv.vari.combobox = require('/ui/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(250), Ti.App.size(345), 'Từ ngày', Ti.App.size(585));
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(350), Ti.App.size(445), 'Đến ngày', Ti.App.size(585));
	sv.ui.view_choose2 = new sv.vari.combobox(Ti.App.size(450), Ti.App.size(545), 'Bộ số', Ti.App.size(670));
	sv.arr.ngay1 = ['6/9/2014', '1/1/2014'];
	sv.arr.ngay2 = ['6/9/2014', '1/1/2014'];
	sv.arr.ngay3 = ['6/9/2014', '1/1/2014'];
	sv.ui.view_choose.setTable(sv.arr.ngay1);
	sv.ui.view_choose1.setTable(sv.arr.ngay2);
	sv.ui.view_choose2.setTable(sv.arr.ngay3);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.lblfirst2 = sv.ui.view_choose2.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.table_view1 = sv.ui.view_choose1.getTableView();
	sv.ui.table_view2 = sv.ui.view_choose2.getTableView();
	///////
	sv.ui.demuc=Titanium.UI.createView({
		width:Ti.App.size(720),
		height:Ti.App.size(75),
		backgroundColor:Ti.App.Color.superwhite,
		top:Ti.App.size(840),
		left:0,
		right:0
	});
	sv.ui.rowchild=require('/ui/RowChild');
	sv.ui.rowc1=new sv.ui.rowchild(0,0,Ti.App.size(220),'Số nhịp',true);
	sv.ui.rowc1.setcolor(Ti.App.Color.nauden);
	sv.ui.rowc2=new sv.ui.rowchild(0,Ti.App.size(220),Ti.App.size(270),'ve giai',true);
	sv.ui.rowc2.setcolor(Ti.App.Color.nauden);
	sv.ui.rowc3=new sv.ui.rowchild(0,Ti.App.size(490),Ti.App.size(220),'ngay',false);
	sv.ui.rowc3.setcolor(Ti.App.Color.nauden);
	sv.ui.scrollview=Ti.UI.createScrollView({
		top : Ti.App.size(920),
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
	//////
	tao_event(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.table_view1.addEventListener('click', sv.fu.event_clicktbl1);
	sv.ui.view_choose2.addEventListener('click', sv.fu.event_click_view2);
	sv.ui.table_view2.addEventListener('click', sv.fu.event_clicktbl2);
	sv.ui.WindowSupport.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowSupport.addEventListener('close', sv.fu.closeWindow);
	//////
	sv.ui.WindowSupport.add(sv.ui.scrollview);
	sv.ui.demuc.add(sv.ui.rowc1);
	sv.ui.demuc.add(sv.ui.rowc2);
	sv.ui.demuc.add(sv.ui.rowc3);
	sv.ui.WindowSupport.add(sv.ui.demuc);
	sv.ui.WindowSupport.add(sv.ui.lbl_thongke);
	sv.ui.WindowSupport.add(sv.ui.arrow1);
	sv.ui.WindowSupport.add(sv.ui.arrow2);
	sv.ui.WindowSupport.add(sv.ui.view_choose);
	sv.ui.WindowSupport.add(sv.ui.view_choose1);
	sv.ui.WindowSupport.add(sv.ui.view_choose2);
	sv.ui.WindowSupport.add(sv.ui.table_view);
	sv.ui.WindowSupport.add(sv.ui.table_view1);
	sv.ui.WindowSupport.add(sv.ui.btn_xemkq);
	sv.ui.WindowSupport.add(sv.ui.View1);
	sv.ui.View1.add(sv.ui.view_menu_icon);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.View1.add(sv.ui.view_user_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.View1.add(sv.ui.lbl_Choose);
};
function tao_event(sv) {
	sv.fu = {};
	sv.fu.event_click_view = function(e) {
		view_click(sv.ui.table_view, sv.ui.table_view1, sv.ui.table_view2);
	};
	sv.fu.event_clicktbl = function(e) {
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view);
	};
	sv.fu.event_click_view1 = function(e) {
		view_click(sv.ui.table_view1, sv.ui.table_view2,sv.ui.table_view);
	};
	sv.fu.event_clicktbl1 = function(e) {
		tbl_click(e, sv.ui.lblfirst1, sv.ui.table_view1);
	};
	sv.fu.event_click_view2 = function(e) {
		view_click(sv.ui.table_view2, sv.ui.table_view1,sv.ui.table_view);
	};
	sv.fu.event_clicktbl2 = function(e) {
		tbl_click(e, sv.ui.lblfirst2, sv.ui.table_view2);
	};
	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.closeWindow = function(e) {
		sv.ui.view_choose2.removeEventListener('click', sv.fu.event_click_view2);
		sv.ui.table_view2.removeEventListener('click', sv.fu.event_clicktbl2);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.table_view1.removeEventListener('click', sv.fu.event_clicktbl1);
		sv.ui.WindowSupport.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowSupport.removeEventListener('close', sv.fu.closeWindow);
	};
}

function tbl_click(e, _lbl, _tbl) {
	_lbl.text = e.row.tenrow;
	_tbl.visible = false;
}

function view_click(_tbl1, _tbl2, _tbl3) {
	_tbl1.visible = true;
	_tbl2.visible = false;
	_tbl3.visible = false;
}