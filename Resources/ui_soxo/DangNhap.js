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

	sv.ui.viewtong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : 0,
		left : 0
	});

	//tao view header
	sv.ui.viewheader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0,
	});

	sv.ui.iconmenu = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/menu.png',
		left : Ti.App.size(30),
		top : Ti.App.size(40),
		bottom : Ti.App.size(40),
		right : Ti.App.size(630)
	});

	sv.ui.headerdangnhap = Ti.UI.createLabel({
		text : 'ĐĂNG NHẬP',
		font : {
			fontSize : Ti.App.size(32),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(40),
		bottom : Ti.App.size(40),
	});

	sv.ui.iconuser = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/user.png',
		top : Ti.App.size(30),
		bottom : Ti.App.size(30),
		left : Ti.App.size(635),
		right : Ti.App.size(35)
	});

	//tao view dang nhap bang facebook
	sv.ui.viewdnface = Ti.UI.createView({
		backgroundColor : Ti.App.Color.blue,
		height : Ti.App.size(95),
		top : Ti.App.size(220),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.iconface = Ti.UI.createView({
		backgroundColor : Ti.App.Color.blue,
		left : 0,
		top : 0,
		bottom : 0,
		height : Ti.App.size(95),
		right : Ti.App.size(590)
	});

	sv.ui.iconlinednface = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.labeldnface = Ti.UI.createLabel({
		text : 'Đăng nhập bằng facebook',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		left : Ti.App.size(210),
		right : Ti.App.size(120),
		bottom : Ti.App.size(30),
	});

	//tao view dang nhap bang gmail
	sv.ui.viewdngmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		height : Ti.App.size(95),
		top : Ti.App.size(335),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.icongmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		left : 0,
		top : 0,
		bottom : 0,
		height : Ti.App.size(95),
		right : Ti.App.size(590)
	});

	sv.ui.iconlinedngmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.labeldngmail = Ti.UI.createLabel({
		text : 'Đăng nhập bằng gmail',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		left : Ti.App.size(235),
		right : Ti.App.size(140),
		bottom : Ti.App.size(30),
	});

	//tao view hoac
	sv.ui.viewhoac = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(430),
		height : Ti.App.size(170),
		//bottom : Ti.App.size(675),
	});

	sv.ui.linetrai = Ti.UI.createView({
		height : Ti.App.size(2),
		left : 0,
		right : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});

	sv.ui.linephai = Ti.UI.createView({
		height : Ti.App.size(2),
		right : 0,
		left : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.labelhoac = Ti.UI.createLabel({
		text : 'hoặc',
		font : {
			fontSize : Ti.App.size(23),
			fontFamily : 'Aria'
		},
	});

	//nhap tai khoan, mat khau

	sv.ui.tfid = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		height : Ti.App.size(95),
		top : Ti.App.size(600),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		hintText : 'Nhập tài khoản',
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(1),
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			fontColor : Ti.App.Color.magenta,
		},
	});

	sv.ui.tfpass = Ti.UI.createTextField({
		height : Ti.App.size(95),
		top : Ti.App.size(720),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		hintText : 'Nhập mật khẩu',
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(1),
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			fontColor : Ti.App.Color.magenta,
		},
	});
	//tao view dang nhap, view dang ky
	sv.ui.viewdangnhap = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(855),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.magenta
	});

	sv.ui.labelviewdn = Ti.UI.createLabel({
		text : 'Đăng nhập',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.viewdangky = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(965),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.nauden
	});

	sv.ui.labelviewdk = Ti.UI.createLabel({
		text : 'Đăng ký',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	//tao quen mat khau

	sv.ui.viewquenpass = Ti.UI.createView({
		top : Ti.App.size(1085),
		height : Ti.App.size(195),
		left : 0,
		right : 0
	});

	sv.ui.lablequenpass = Ti.UI.createLabel({
		text : 'Bạn quên mật khẩu?',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.magenta,
		top : Ti.App.size(5),
	});

	createUI_Event(sv);

	sv.ui.viewdnface.addEventListener('click', sv.fu.eventClickviewdnface);
	sv.ui.viewdngmail.addEventListener('click', sv.fu.eventClickviewdngmail);
	sv.ui.viewdangnhap.addEventListener('click', sv.fu.eventClickviewdangnhap);
	sv.ui.viewdangky.addEventListener('click', sv.fu.eventClickviewdangky);
	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.Window.add(sv.ui.viewtong);
	sv.ui.Window.add(sv.ui.viewheader);

	sv.ui.viewtong.add(sv.ui.viewdnface);
	sv.ui.viewtong.add(sv.ui.viewdngmail);
	sv.ui.viewtong.add(sv.ui.viewhoac);
	sv.ui.viewtong.add(sv.ui.tfid);
	sv.ui.viewtong.add(sv.ui.tfpass);
	sv.ui.viewtong.add(sv.ui.viewdangnhap);
	sv.ui.viewtong.add(sv.ui.viewdangky);
	sv.ui.viewtong.add(sv.ui.viewquenpass);

	sv.ui.viewheader.add(sv.ui.iconmenu);
	sv.ui.viewheader.add(sv.ui.headerdangnhap);
	sv.ui.viewheader.add(sv.ui.iconuser);

	sv.ui.viewdnface.add(sv.ui.iconface);
	sv.ui.viewdnface.add(sv.ui.iconlinednface);
	sv.ui.viewdnface.add(sv.ui.labeldnface);

	sv.ui.viewdngmail.add(sv.ui.icongmail);
	sv.ui.viewdngmail.add(sv.ui.iconlinedngmail);
	sv.ui.viewdngmail.add(sv.ui.labeldngmail);

	sv.ui.viewhoac.add(sv.ui.linetrai);
	sv.ui.viewhoac.add(sv.ui.linephai);
	sv.ui.viewhoac.add(sv.ui.labelhoac);

	sv.ui.viewdangnhap.add(sv.ui.labelviewdn);

	sv.ui.viewdangky.add(sv.ui.labelviewdk);

	sv.ui.viewquenpass.add(sv.ui.lablequenpass);
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickviewdnface = function(e) {
		var newWindow = new (require('ui/LichSuGiaoDich'))();
		newWindow.open();
	};

	sv.fu.eventClickviewdngmail = function(e) {
		var newWindow = new (require('ui/ThongTinCaNhan'))();
		newWindow.open();
	};

	sv.fu.eventClickviewdangnhap = function(e) {
		var newWindow = new (require('ui/Info'))();
		newWindow.open();
	};

	sv.fu.eventClickviewdangky = function(e) {
		alert('Click viewdangky');
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.viewdnface.removeEventListener('click', sv.fu.eventClickviewdnface);
		sv.ui.viewdngmail.removeEventListener('click', sv.fu.eventClickviewdngmail);
		sv.ui.viewdangnhap.removeEventListener('click', sv.fu.eventClickviewdangnhap);
		sv.ui.viewdangky.removeEventListener('click', sv.fu.eventClickviewdangky);
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
