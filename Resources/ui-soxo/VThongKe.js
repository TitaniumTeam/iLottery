module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv);
		removeSK(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.winTuVan = require('/ui-bongda/WinTuVan');
	sv.arr.rows = [];
	sv.arr.View_rows = [];
	sv.arr.Label_ten_dv = [];
	sv.arr.dv_thongke = ["Thống kê tổng hợp", "Thống kê kết quả 1 tỉnh theo ngày"];
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(165),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundImage : "/assets/icon/bg_sokq.png"
	});

	// }
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		data : sv.arr.rows,
		top : Ti.App.size(10),
		separatorColor : "transparent",
		left : 0,
		backgroundColor : 'transparent'
	});
	for (var i = 0; i < 2; i++) {
		sv.arr.rows[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			left : 0,
			height : Ti.App.size(90),
			idrow : i
		});
		sv.arr.View_rows[i] = Titanium.UI.createView({
			width : Ti.App.size(640),
			height : Ti.App.size(90),
			left : 0,
			backgroundImage : "/assets/icon/btn_tuvan.png",
			backgroundSelectedImage : "/assets/icon/btn_tuvan_select.png"
		});
		sv.arr.Label_ten_dv[i] = Ti.UI.createLabel({
			left : Ti.App.size(20),
			width : Ti.UI.SIZE,
			textAlign : "left",
			color : Ti.App.Color.superwhite,
			height : Ti.App.size(90),
			touchEnabled : false,
			font : {
				fontSize : Ti.App.size(30)
			},
			text : sv.arr.dv_thongke[i]
		});
		sv.arr.View_rows[i].add(sv.arr.Label_ten_dv[i]);
		sv.arr.rows[i].add(sv.arr.View_rows[i]);

	};
	sv.ui.tbl1.setData(sv.arr.rows);
	tao_sukien(sv);
	sv.ui.tbl1.addEventListener('click', sv.fu.evt_clickrow);

	sv.ui.ViewTong.add(sv.ui.tbl1);

};
////
function tao_sukien(sv) {
	sv.fu.evt_clickrow = function(e) {
		if (e.row.idrow == 0) {
			var winTKTH = new (require('/ui-soxo/WinThongKeTongHop'))();
			winTKTH.open();
		}
		if (e.row.idrow == 1) {
			var winTKKQ = new (require('/ui-soxo/WinThongKeKQ'))();
			winTKKQ.open();
		}
	};
};
////
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.tbl1.removeEventListener('click', sv.fu.evt_clickrow);
		Ti.API.info('remove su kien thongke xo so');
	};
};
