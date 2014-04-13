module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowLogin;
};
/*khoi tao UI
 */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.ui.WindowLogin = Ti.UI.createWindow({
		backgroundColor : 'red',
		navBarHidden : true,
		fullscreen : true
	});
	sv.ui.view_menu_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : 0,
		top : 0,
	});
	sv.ui.menu_icon = Ti.UI.createImageView({
		width : Ti.App.size(56),
		heigth : Ti.App.size(37),
		image : '/assets/icon/menu.png',
	});
	sv.ui.view_user_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		right:0,
		top : 0,
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/icon/user.png',
	});
	sv.ui.lbl_Login = Ti.UI.createLabel({
		width : Ti.App.size(240),
		height : Ti.App.size(50),
		text : 'ĐĂNG NHẬP',
		color : Ti.App.Color.white,
		top : Ti.App.size(30)
	});
	sv.ui.circle1 = Ti.UI.createImageView({
		width : Ti.App.size(460),
		height : Ti.App.size(460),
		borderRadius : Ti.App.size(460) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(150),
		opacity : 0.1,
		borderWidth:2
	});
	sv.ui.circle2 = Ti.UI.createImageView({
		width : Ti.App.size(380),
		height : Ti.App.size(380),
		borderRadius : Ti.App.size(380) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(190),
		opacity : 0.2,
		borderWidth:2
	});
	sv.ui.circle3 = Ti.UI.createImageView({
		width : Ti.App.size(290),
		height : Ti.App.size(290),
		borderRadius : Ti.App.size(290) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(235),
		opacity : 0.3,
		borderWidth:2
	});
	sv.ui.avatar = Ti.UI.createImageView({
		width : Ti.App.size(210),
		height : Ti.App.size(210),
		image : '/assets/icon/avatar-defaut.png',
		top : Ti.App.size(280),
	});
	tao_event(sv);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventBackHome);
	sv.ui.WindowLogin.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowLogin.addEventListener('close', sv.fu.closeWindow);

	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.WindowLogin.add(sv.ui.view_menu_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.WindowLogin.add(sv.ui.view_user_icon);
	sv.ui.WindowLogin.add(sv.ui.lbl_Login);
	sv.ui.WindowLogin.add(sv.ui.circle1);
	sv.ui.WindowLogin.add(sv.ui.circle2);
	sv.ui.WindowLogin.add(sv.ui.circle3);
	sv.ui.WindowLogin.add(sv.ui.avatar);
}

function tao_event(sv) {
	sv.fu = {};

	sv.fu.eventBackHome = function(e) {
		sv.ui.WindowLogin.close();
	};
	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.closeWindow = function(e) {
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.WindowLogin.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowLogin.removeEventListener('close', sv.fu.closeWindow);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}
