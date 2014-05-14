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
	sv.vari.view_keo = require('/ui/view_keo');
	sv.arr.param1 = [{
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
		showVerticalScrollIndicator:'true'
	});
	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	sv.ui.ViewTong.add(sv.ui.vChua);
	for (var i = 0; i < 1; i++) {
		sv.ui.vTong = new sv.vari.view_keo(Ti.App.size(400) * (i));
		sv.ui.vTong.setParam(sv.arr.param1[i]);
		sv.ui.vChua.add(sv.ui.vTong);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('remove event keo truc tiep');
	};
}

