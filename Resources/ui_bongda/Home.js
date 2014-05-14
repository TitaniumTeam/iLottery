module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
		createRemove(sv);
	})();

	return sv;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari = {};
	sv.arr = {};

	sv.vari.SoGiai = 7;
	sv.vari.TopView = Ti.App.size(160);
	sv.vari.HeightView = Ti.App.size(120);
	sv.vari.LeftView = Ti.App.size(40);
	sv.vari.RightView = Ti.App.size(40);

	sv.arr.ViewDoi = [];
	sv.arr.LogoDoi = [];
	sv.arr.TenNuoc = [];
	sv.arr.LbTenNuoc = [];
	sv.arr.TenGiai = [];
	sv.arr.LbTenGiai = [];
	sv.arr.eventClickViewDoi = [];
	sv.arr.madoi = [];
}

function createUI(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top :0,
		left : 0
	});

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.ViewDoi[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.white,
			height : sv.vari.HeightView,
			left : sv.vari.LeftView,
			right : sv.vari.RightView,
			top : sv.vari.TopView + i * sv.vari.HeightView + i * Ti.App.size(30) - Ti.App.size(120),
			borderWidth : Ti.App.size(1),
			borderColor : Ti.App.Color.magenta
		});

		sv.arr.LogoDoi[i] = Ti.UI.createImageView({
			borderWidth : Ti.App.size(1),
			borderColor : Ti.App.Color.magenta,
			image : '/assets/images/icon/0' + (i + 1) + '.png',
			//backgroundImage : '/assets/images/icon/0' + i + 1 + '.png',
			top : Ti.App.size(0),
			left : Ti.App.size(0),
			width : sv.vari.HeightView,
			height : sv.vari.HeightView
		});

		sv.arr.TenNuoc[i] = Ti.UI.createView({
			top : Ti.App.size(0),
			right : Ti.App.size(0),
			left : sv.vari.HeightView,
			height : sv.vari.HeightView / 2
		});

		sv.arr.LbTenNuoc[i] = Ti.UI.createLabel({
			text : '',
			font : {
				fontSize : Ti.App.size(32),
				fontWeight : 'bold',
				fontFamily : 'Aria'
			},
			color : 'black',
			left : Ti.App.size(30),
		});

		sv.arr.TenGiai[i] = Ti.UI.createView({
			bottom : Ti.App.size(0),
			right : Ti.App.size(0),
			left : sv.vari.HeightView,
			height : sv.vari.HeightView / 2
		});

		sv.arr.LbTenGiai[i] = Ti.UI.createLabel({
			text : '',
			font : {
				fontSize : Ti.App.size(32),
				fontFamily : 'Aria'
			},
			color : 'black',
			left : Ti.App.size(30),
		});
	}

	createUI_Event(sv);

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.ViewDoi[i].addEventListener('click', sv.arr.eventClickViewDoi[i]);
	}

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.madoi[i] = i;
		sv.ui.ViewTong.add(sv.arr.ViewDoi[i]);
		sv.ui.ViewTong.removeViewDoi = function() {
			return sv.arr.ViewDoi[i].addEventListener('click', sv.arr.eventClickViewDoi[i]);
			;
		};

		sv.arr.ViewDoi[i].add(sv.arr.LogoDoi[i]);
		sv.arr.ViewDoi[i].add(sv.arr.TenNuoc[i]);
		sv.arr.ViewDoi[i].add(sv.arr.TenGiai[i]);

		sv.arr.TenNuoc[i].add(sv.arr.LbTenNuoc[i]);
		sv.arr.TenGiai[i].add(sv.arr.LbTenGiai[i]);

		if (i == 0) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 1) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 2) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 3) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 4) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 5) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
		if (i == 6) {
			sv.arr.LbTenNuoc[i].text = 'Anh';
			sv.arr.LbTenGiai[i].text = 'Premier League';
		}
	}
}

function createUI_Event(sv) {
	sv.fu = {};
	//sv.arr = {};

	for (var i = 0; i < sv.vari.SoGiai; i++) {
		sv.arr.eventClickViewDoi[i] = function() {
			var newWindow = new (require('ui/BangXepHang'))();
			newWindow.open();
		};
	}
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		for (var i = 0; i < sv.vari.SoGiai; i++) {
			sv.arr.ViewDoi[i].removeEventListener('click', sv.arr.eventClickViewDoi[i]);
		}
		Ti.API.info('remove home event');
	};
}
