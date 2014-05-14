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
}

function createUI(sv) {

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : 0,
		left : 0
	});

	//Tao view Truong
	sv.ui.ViewTruong = Ti.UI.createView({
		top : Ti.App.size(0),
		width : Ti.App.WidthScreen,
		height : Ti.App.size(80),
	});

	sv.ui.TT = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(620),
		left : Ti.App.size(0),
	});

	sv.ui.LabelTT = Ti.UI.createLabel({
		text : 'TT',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : 'black'
	});

	sv.ui.Line1 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(618),
		width : Ti.App.size(2),
	});

	sv.ui.CSDC = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(232),
		left : Ti.App.size(102),
	});

	sv.ui.LabelCSDC = Ti.UI.createLabel({
		text : 'Con số đã chơi',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : 'black'
	});

	sv.ui.Line2 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(230),
		width : Ti.App.size(2),
	});

	sv.ui.TG = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(0),
		left : Ti.App.size(490),
	});

	sv.ui.LabelTG = Ti.UI.createLabel({
		text : 'Thời gian',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : 'black'
	});

	sv.ui.ViewLine = Ti.UI.createView({
		height : Ti.App.size(2),
		top : Ti.App.size(80),
		backgroundColor : Ti.App.Color.nauden,
	});

	//Tao table view

	sv.ui.ViewDanhSach = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.magenta,
		separatorColor : 'transparent',
		top : Ti.App.size(82),
		bottom : Ti.App.size(120),
		left : 0,
		right : 0
	});

	// createUI_Event(sv);
	//
	// sv.ui.IconBack.addEventListener('click', sv.fu.eventClickIconBack);

	sv.ui.ViewTong.add(sv.ui.ViewTruong);
	sv.ui.ViewTong.add(sv.ui.ViewLine);
	sv.ui.ViewTong.add(sv.ui.ViewDanhSach);

	sv.ui.ViewTruong.add(sv.ui.TT);
	sv.ui.ViewTruong.add(sv.ui.Line1);
	sv.ui.ViewTruong.add(sv.ui.CSDC);
	sv.ui.ViewTruong.add(sv.ui.Line2);
	sv.ui.ViewTruong.add(sv.ui.TG);
	sv.ui.TT.add(sv.ui.LabelTT);
	sv.ui.CSDC.add(sv.ui.LabelCSDC);
	sv.ui.TG.add(sv.ui.LabelTG);
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconBack = function() {
		var newWindow = new (require('ui/DangNhap'))();
		newWindow.open();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.IconBack.removeEventListener('click', sv.fu.eventClickIconBack);
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('da remove xong ');
	};
}
