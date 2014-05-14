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

function createVariable(sv) {
	sv.vari.SoDoi = 20;
}

function createUI(sv) {

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(120),
		left : 0
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'TIN TỨC',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
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

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	
	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}
