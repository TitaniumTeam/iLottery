module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
		createRemove(sv);
	})();

	return sv;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
	sv.vari.view_keo = require('/ui_bongda/view_keo');
	sv.arr.BtCaCuoc = [];
	sv.arr.LbCaCuoc = [];
	sv.arr.eventClickBtCaCuoc = [];
	sv.arr.param1 = [{
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}, {
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}, {
		tg : 55,
		tendoi : ["Manchester", "Chealse"],
		tyle1 : ["1.5", "1.09", "0.84"],
		tyle2 : ["1.5", "1.09", "0.84", "u"],
		tyle3 : ["1.5", "1.09", "0.84"]
	}];
};
function tao_ui(sv) {
	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : 0,
		left : 0,
		showVerticalScrollIndicator : 'true'
	});
	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	for (var i = 0; i < 3; i++) {
		sv.arr.BtCaCuoc[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.xanhnhat,
			top : Ti.App.size(500 * i + 375),
			height : Ti.App.size(100),
			right : Ti.App.size(40),
			left : Ti.App.size(40)
		});

		sv.arr.LbCaCuoc[i] = Ti.UI.createLabel({
			text : 'CÁ CƯỢC NGAY',
			font : {
				fontSize : Ti.App.size(35),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.white,
		});

	}

	createUI_Event(sv);

	for (var i = 0; i < 3; i++) {
		sv.arr.BtCaCuoc[i].addEventListener('click', sv.arr.eventClickBtCaCuoc[i]);
	}

	sv.ui.ViewTong.add(sv.ui.vChua);
	for (var i = 0; i < 3; i++) {
		sv.ui.vTong = new sv.vari.view_keo(Ti.App.size(500 * i));
		sv.ui.vTong.setParam(sv.arr.param1[i]);
		sv.ui.vChua.add(sv.ui.vTong);
		sv.ui.vChua.add(sv.arr.BtCaCuoc[i]);
		sv.arr.BtCaCuoc[i].add(sv.arr.LbCaCuoc[i]);
	};
}

function createUI_Event(sv) {
	sv.fu = {};

	for (var i = 0; i < 3; i++) {
		sv.arr.eventClickBtCaCuoc[i] = function() {
			var newWindow = new (require('ui_bongda/BettingContent'))();
			newWindow.open();
		};
	}
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		for (var i = 0; i < 3; i++) {
			sv.arr.BtCaCuoc[i].removeEventListener('click', sv.arr.eventClickBtCaCuoc[i]);
			Ti.API.info('da remove xong ');
		}
	};
}
