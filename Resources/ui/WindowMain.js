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
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.widthScreen / 2,
		borderColor : 'yellow',
		borderRadius : 10,
	});

	sv.ui.Button = Ti.UI.createButton({
		title : 'Simple first!',
		color : Ti.App.Color.white
	});

	sv.ui.btnBack = Ti.UI.createButton({
		title : 'Back',
		top : 10,
		color : Ti.App.Color.white
	});

	createUI_Event(sv);

	sv.ui.Button.addEventListener('click', sv.fu.eventClickButton);
	sv.ui.btnBack.addEventListener('click', sv.fu.eventClickButtonBack);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

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
