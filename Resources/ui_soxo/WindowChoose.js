module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		createRemove(sv);
	})();
	return sv;
};
//tao bien
function tao_bien(sv) {
	sv.arr = {};
	sv.arr.tinhthanh = ['HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG', 'HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG', 'HÀ NỘI', 'HỒ CHÍ MINH', 'HẢI DƯƠNG'];
	sv.arr.ngay = ['6/9/2014', '1/1/2014'];
};
/*khoi tao UI
 */
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		left : 0,
		top : 0,
		backgroundColor : 'transparent'
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
		top : Ti.App.size(20)
	});
	sv.ui.btn_xemkq = Ti.UI.createLabel({
		width : Ti.App.size(670),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Xem kết quả',
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		top : Ti.App.size(600),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(50)
		},
	});
	sv.vari.arrow = require('/ui_soxo/vArrow');
	sv.ui.arrow1 = new sv.vari.arrow(Ti.App.size(250));
	sv.ui.varrow11 = sv.ui.arrow1.getvArrow1();
	sv.ui.varrow12 = sv.ui.arrow1.getvArrow2();
	///
	sv.ui.arrow2 = new sv.vari.arrow(Ti.App.size(350));
	sv.ui.varrow21 = sv.ui.arrow2.getvArrow1();
	sv.ui.varrow22 = sv.ui.arrow2.getvArrow2();
	///
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(250), Ti.App.size(345), 'Tỉnh thành', Ti.App.size(585));
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(350), Ti.App.size(445), 'Ngày', Ti.App.size(585));
	sv.ui.view_choose.setTable(sv.arr.tinhthanh);
	sv.ui.view_choose1.setTable(sv.arr.ngay);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.table_view1 = sv.ui.view_choose1.getTableView();

	//////
	tao_event(sv);
	sv.ui.arrow1.addEventListener('click', sv.fu.event_click_view);
	sv.ui.arrow2.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.table_view1.addEventListener('click', sv.fu.event_clicktbl1);
	// sv.ui.ViewTong.addEventListener('click', sv.fu.event_clickviewtong);
	//////
	sv.ui.ViewTong.add(sv.ui.arrow1);
	sv.ui.ViewTong.add(sv.ui.arrow2);
	sv.ui.ViewTong.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.view_choose1);
	sv.ui.ViewTong.add(sv.ui.table_view);
	sv.ui.ViewTong.add(sv.ui.table_view1);
	sv.ui.ViewTong.add(sv.ui.btn_xemkq);
	sv.ui.ViewTong.add(sv.ui.lbl_info);
};
function tao_event(sv) {
	sv.fu = {};
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
	// sv.fu.event_clickviewtong = function(e) {
// 
	// };
}

function tbl_click(e, _lbl, _tbl) {
	_lbl.text = e.row.tenrow;
	_tbl.visible = false;
}

function view_click(_tbl1, _tbl2) {
	_tbl1.visible = true;
	_tbl2.visible = false;
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		sv.ui.arrow1.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.arrow2.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.table_view1.removeEventListener('click', sv.fu.event_clicktbl1);
		Ti.API.info('remove event wd choose');
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}
