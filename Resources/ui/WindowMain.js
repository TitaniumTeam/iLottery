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
	// return sv;
};

/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari = {};

	sv.vari.isSimple = true;
}

/**
 * UI
 */
function createUI(sv) {
	sv.ui = {};

	sv.ui.Window = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.widthScreen,
		height : Ti.App.heightScreen,
		navBarHidden:true
		// borderColor : 'yellow',
		// borderRadius : 10,
	});
	sv.ui.View1 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.widthScreen,
		height : Ti.App.size(220),
		top : 0,
		left : 0
	});

	sv.ui.Button = Ti.UI.createButton({
		title : 'Simple first!',
		color : 'black',
		top:Ti.App.size(400)
	});

	sv.ui.btnBack = Ti.UI.createButton({
		title : 'Back',
		top : Ti.App.size(500),
		color : 'black',
		bottom:0
		// width : Ti.App.widthScreen,
		// height : Ti.App.size(50)
	});

	createUI_Event(sv);

	sv.ui.Button.addEventListener('click', sv.fu.eventClickButton);
	sv.ui.btnBack.addEventListener('click', sv.fu.eventClickButtonBack);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.Window.add(sv.ui.View1);
	sv.ui.Window.add(sv.ui.Button);
	sv.ui.Window.add(sv.ui.btnBack);
}

/**
 * event function for UI
 */
function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickButton = function(e) {
		alert('isSimple = ' + sv.vari.isSimple);
	};

	sv.fu.eventClickButtonBack = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Button.removeEventListener('click', sv.fu.eventClickButton);
		sv.ui.btnBack.removeEventListener('click', sv.fu.eventClickButtonBack);
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
