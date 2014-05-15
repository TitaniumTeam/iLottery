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

	sv.vari.SoTinTuc = 7;
	sv.vari.TopView = Ti.App.size(235);
	sv.vari.HeightView = Ti.App.size(235);

	sv.arr.ViewTinTuc = [];
	sv.arr.AnhTinTuc = [];
	sv.arr.TenTinTuc = [];
	sv.arr.ThoiGianTinTuc = [];
	sv.arr.TTTinTuc = [];
	sv.arr.eventClickViewTinTuc = [];
}

function createUI(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(0),
		left : 0
	});

	sv.ui.BGHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/1/BGHeader.jpeg',
		right : Ti.App.size(0),
		height : Ti.App.size(285),
		top : Ti.App.size(0),
		left : 0
	});

	sv.ui.ViewTinHot = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		right : Ti.App.size(0),
		left : Ti.App.size(0),
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		opacity : 0.8
	});

	sv.ui.LabelTinHot = Ti.UI.createLabel({
		text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
		font : {
			fontSize : Ti.App.size(24),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center'
		},
		color : Ti.App.Color.white,
		left : Ti.App.size(40),
		right : Ti.App.size(40)
	});

	sv.ui.ViewListTinTuc = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(285),
		left : 0,
		right : 0
	});

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.ViewTinTuc[i] = Ti.UI.createView({
			backgroundColor : Ti.App.Color.magenta,
			height : sv.vari.HeightView,
			left : 0,
			right : 0,
			top : Ti.App.size(235 * i),
			borderWidth : Ti.App.size(1),
			borderColor : Ti.App.Color.nauden
		});

		sv.arr.AnhTinTuc[i] = Ti.UI.createImageView({
			image : '/assets/images/1/BGHeader.jpeg',
			top : Ti.App.size(30),
			left : Ti.App.size(40),
			right : Ti.App.size(420),
			bottom : Ti.App.size(30),
		});

		sv.arr.TenTinTuc[i] = Ti.UI.createLabel({
			text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
				fontWeight : 'bold',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(30),
			bottom : Ti.App.size(130)
		});

		sv.arr.ThoiGianTinTuc[i] = Ti.UI.createLabel({
			text : '20/03 14/04/2014',
			font : {
				fontSize : Ti.App.size(14),
				fontFamily : 'Aria',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(110),
			bottom : Ti.App.size(100)
		});

		sv.arr.TTTinTuc[i] = Ti.UI.createLabel({
			text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
			font : {
				fontSize : Ti.App.size(18),
				fontFamily : 'Aria',
				textAlign : 'left'
			},
			color : Ti.App.Color.nauden,
			left : Ti.App.size(320),
			right : Ti.App.size(40),
			top : Ti.App.size(145),
			bottom : Ti.App.size(30)
		});
	}

	createUI_Event(sv);
	//
	// var IconLeft = Win.getIconLeft();
	// var IconRight = Win.getIconRight();
	// var LabelHeader = Win.getLabelHeader();
	// IconLeft.image = '/assets/images/icon/menu.png';
	// Win.getLabelHeader().text = 'Tin Tức';
	//
	// IconLeft.addEventListener('click', sv.fu.eventClickIconLeft);
	// IconRight.addEventListener('click', sv.fu.eventClickIconRight);

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.ViewTinTuc[i].addEventListener('click', sv.arr.eventClickViewTinTuc[i]);
	}

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	sv.ui.ViewTong.add(sv.ui.ViewListTinTuc);

	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.ui.ViewListTinTuc.add(sv.arr.ViewTinTuc[i]);

		sv.arr.ViewTinTuc[i].add(sv.arr.AnhTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.TenTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.ThoiGianTinTuc[i]);
		sv.arr.ViewTinTuc[i].add(sv.arr.TTTinTuc[i]);
	}
}

function createUI_Event(sv) {
	sv.fu = {};

	for (var i = 0; i < sv.vari.SoTinTuc; i++) {
		sv.arr.eventClickViewTinTuc[i] = function() {
			var newWindow = new (require('/ui_bongda/NewsContent'))();
			newWindow.open();
		};
	}

}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		for (var i = 0; i < sv.vari.SoTinTuc; i++) {
			sv.arr.ViewTinTuc[i].removeEventListener('click', sv.arr.eventClickViewTinTuc[i]);
			Ti.API.info('da remove xong ');
		}

	};
}
