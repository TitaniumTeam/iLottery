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
	})();

	return sv.ui.Window;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : 0,
		left : 0
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0,
	});

	sv.ui.IconBack = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/arrow.png',
		left : Ti.App.size(45),
		top : Ti.App.size(40),
		bottom : Ti.App.size(40),
		right : Ti.App.size(640)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'LỊCH SỬ GIAO DỊCH',
		font : {
			fontSize : Ti.App.size(32),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(40),
		bottom : Ti.App.size(40),
	});

	sv.ui.IconUser = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/user.png',
		top : Ti.App.size(30),
		bottom : Ti.App.size(30),
		left : Ti.App.size(635),
		right : Ti.App.size(35)
	});

	//Tao view Truong
	sv.ui.ViewTruong = Ti.UI.createView({
		top : Ti.App.size(120),
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
	});

	sv.ui.ViewLine = Ti.UI.createView({
		height : Ti.App.size(2),
		top : Ti.App.size(200),
		backgroundColor : Ti.App.Color.nauden,
	});

	//Tao table view

	sv.ui.ViewDanhSach = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.magenta,
		separatorColor : 'transparent',
		top : Ti.App.size(202),
		bottom : Ti.App.size(120),
		left : 0,
		right : 0
	});

	createUI_Event(sv);

	sv.ui.IconBack.addEventListener('click', sv.fu.eventClickIconBack);
	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewTong.add(sv.ui.ViewHeader);
	sv.ui.ViewTong.add(sv.ui.ViewTruong);
	sv.ui.ViewTong.add(sv.ui.ViewLine);
	sv.ui.ViewTong.add(sv.ui.ViewDanhSach);

	sv.ui.ViewHeader.add(sv.ui.IconBack);
	sv.ui.ViewHeader.add(sv.ui.IconUser);
	sv.ui.ViewHeader.add(sv.ui.LabelHeader);

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
