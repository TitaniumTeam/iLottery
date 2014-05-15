

module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		// tao_bien(sv);
		tao_ui(sv);
	})();

	return sv;
};
function tao_ui(sv) {
	sv.ui.win_app = Ti.UI.createWindow({
		backgroundColor : 'transparent',
		orientationModes : [Ti.UI.PORTRAIT],
		exitOnClose:true
		// navBarHidden : true,
		// fullscreen : true,
		// width:Ti.App.size(720),
		// height:Ti.App.size(1280)
	});
	sv.ui.viewtong = Ti.UI.createScrollView({
		width : Ti.App.size(720),
		// height:Ti.App.size(1280),
		backgroundColor : 'transparent',
		top : 0,
		showVerticalScrollIndicator : 'true',
		layout : 'vertical'
	});
	sv.ui.win_app.add(sv.ui.viewtong);
	sv.ui.view1 = Ti.UI.createView({
		top : 0,
		height : Ti.App.size(130),
		width : Ti.App.size(720),
		backgroundColor : Ti.App.Color.magenta
	});
	sv.ui.viewtong.add(sv.ui.view1);
	sv.ui.ten_app = Ti.UI.createLabel({
		left : Ti.App.size(30),
		width : Ti.App.size(450),
		font : {
			fontSize : Ti.App.size(40)
		},
		textAlign : 'left',
		text : 'XỔ SỐ - BÓNG ĐÁ',
		color : 'black'
	});
	sv.ui.view1.add(sv.ui.ten_app);
	sv.ui.v_icon_share = Ti.UI.createView({
		left : Ti.App.size(480),
		width : Ti.App.size(90),
		height : Ti.App.size(130),
		backgroundSelectedColor : 'blue'
	});
	sv.ui.view1.add(sv.ui.v_icon_share);
	var icon_share = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-share.png',
		width : Ti.App.size(60),
		height : Ti.App.size(53)
	});
	sv.ui.v_icon_share.add(icon_share);
	sv.ui.v_icon_email = Ti.UI.createView({
		width : Ti.App.size(110),
		right : 0,
		height : Ti.App.size(130),
		backgroundSelectedColor : 'blue'
	});
	sv.ui.view1.add(sv.ui.v_icon_email);
	sv.ui.icon_email = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-email.png',
		width : Ti.App.size(60),
		height : Ti.App.size(40),
	});
	sv.ui.v_icon_email.add(sv.ui.icon_email);
	sv.ui.view2 = Ti.UI.createView({
		height : Ti.App.size(575),
		// top:Ti.App.size(130),
		width : Ti.App.size(720),
		backgroundColor : Ti.App.Color.red,
		left : 0
	});
	sv.ui.viewtong.add(sv.ui.view2);
	sv.ui.icon_soxo = Ti.UI.createImageView({
		width : Ti.App.size(458),
		height : Ti.App.size(458),
		image : '/assets/images/icon/icon-xoso.png',
		center : true
	});
	sv.ui.view2.add(sv.ui.icon_soxo);
	sv.ui.view3 = Ti.UI.createView({
		height : Ti.App.size(575),
		// top:Ti.App.size(705),
		width : Ti.App.size(720),
		backgroundColor : Ti.App.Color.gray,
		left : 0
	});
	sv.ui.viewtong.add(sv.ui.view3);
	sv.ui.icon_bongda = Ti.UI.createImageView({
		width : Ti.App.size(458),
		height : Ti.App.size(458),
		image : '/assets/images/icon/icon-bongda.png',
		center : true
	});
	sv.ui.view3.add(sv.ui.icon_bongda);
	taoevent(sv);
	sv.ui.icon_bongda.addEventListener('click', sv.fu.evt_clickbongda);
	sv.ui.icon_soxo.addEventListener('click', sv.fu.evt_clicksoxo);
	sv.ui.win_app.addEventListener('open', sv.fu.win_open);
	sv.ui.win_app.addEventListener('close', sv.fu.win_close);
};
function taoevent(sv) {
	sv.fu = {};
	sv.fu.evt_clickbongda = function(e) {
		if (Ti.Platform.osname == "iphone") {
			var home = new (require('/ui_bongda/slide_menu'))();
			home.open();
			Ti.App.vIndicatorWindow.openIndicator(home);
			setTimeout(function() {
			Ti.App.vIndicatorWindow.closeIndicator(home);
			sv.ui.win_app.close();
			}, 4000);
		} else {
			if (Ti.Platform.osname == "android") {
				var home_android = new (require('ui_bongda/slide_menu_android'))();
				home_android.open();
				Ti.App.vIndicatorWindow.openIndicator(home_android);
				setTimeout(function() {
				Ti.App.vIndicatorWindow.closeIndicator(home_android);
				sv.ui.win_app.close();
				}, 4000);
			}
		}
	};
	sv.fu.evt_clicksoxo = function(e) {
		if (Ti.Platform.osname == "iphone") {
			var home = new (require('/ui_soxo/slide_menu'))();
			home.open();
			Ti.App.vIndicatorWindow.openIndicator(home);
			setTimeout(function() {
			Ti.App.vIndicatorWindow.closeIndicator(home);
			sv.ui.win_app.close();
			}, 4000);
		} else {
			if (Ti.Platform.osname == "android") {
				var home_android = new (require('ui_soxo/slide_menu_android'))();
				home_android.open();
				Ti.App.vIndicatorWindow.openIndicator(home_android);
				setTimeout(function() {
				Ti.App.vIndicatorWindow.closeIndicator(home_android);
				sv.ui.win_app.close();
				}, 4000);
			}
		}
	};
	sv.fu.win_open = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.win_close = function(e) {
		sv.ui.icon_bongda.removeEventListener('click', sv.fu.evt_clickbongda);
		sv.ui.icon_soxo.removeEventListener('click', sv.fu.evt_clicksoxo);
		sv.ui.win_app.removeEventListener('open', sv.fu.win_open);
		sv.ui.win_app.removeEventListener('close', sv.fu.win_close);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
		Ti.API.info('close window');
	};
};
