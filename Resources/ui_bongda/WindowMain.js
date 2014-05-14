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

	return sv.ui.ViewTong;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
}

function createUI(sv) {
	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(120),
		left : 0
	});

	//tao view dang nhap bang facebook
	sv.ui.ViewDNFace = Ti.UI.createView({
		backgroundColor : Ti.App.Color.blue,
		height : Ti.App.size(95),
		top : Ti.App.size(220) - Ti.App.size(120),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.IconFace = Ti.UI.createView({
		backgroundColor : Ti.App.Color.blue,
		left : 0,
		top : 0,
		bottom : 0,
		height : Ti.App.size(95),
		right : Ti.App.size(590)
	});

	sv.ui.IconLineDNFace = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.LabelDNFace = Ti.UI.createLabel({
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
	sv.ui.ViewDNGmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		height : Ti.App.size(95),
		top : Ti.App.size(335) - Ti.App.size(120),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});

	sv.ui.IconGmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		left : 0,
		top : 0,
		bottom : 0,
		height : Ti.App.size(95),
		right : Ti.App.size(590)
	});

	sv.ui.IconLineDNGmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.LabelDNGmail = Ti.UI.createLabel({
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
	sv.ui.ViewHoac = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(430) - Ti.App.size(120),
		height : Ti.App.size(170),
		//bottom : Ti.App.size(675),
	});

	sv.ui.LineTrai = Ti.UI.createView({
		height : Ti.App.size(2),
		left : 0,
		right : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});

	sv.ui.LinePhai = Ti.UI.createView({
		height : Ti.App.size(2),
		right : 0,
		left : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.LabelHoac = Ti.UI.createLabel({
		text : 'hoặc',
		font : {
			fontSize : Ti.App.size(23),
			fontFamily : 'Aria'
		},
	});

	//nhap tai khoan, mat khau

	sv.ui.TfId = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		height : Ti.App.size(95),
		top : Ti.App.size(600) - Ti.App.size(120),
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

	sv.ui.TfPass = Ti.UI.createTextField({
		height : Ti.App.size(95),
		top : Ti.App.size(720) - Ti.App.size(120),
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
	sv.ui.ViewDangNhap = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(855) - Ti.App.size(120),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.magenta
	});

	sv.ui.LabelViewDN = Ti.UI.createLabel({
		text : 'Đăng nhập',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewDangKy = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(965) - Ti.App.size(120),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.nauden
	});

	sv.ui.LabelViewDangKy = Ti.UI.createLabel({
		text : 'Đăng ký',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	//tao quen mat khau

	sv.ui.ViewQuenPass = Ti.UI.createView({
		top : Ti.App.size(1085) - Ti.App.size(120),
		height : Ti.App.size(195),
		left : 0,
		right : 0
	});

	sv.ui.LabelQuenPass = Ti.UI.createLabel({
		text : 'Bạn quên mật khẩu?',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.magenta,
		top : Ti.App.size(5),
	});

	createUI_Event(sv);

	var IconLeft = Win.getIconLeft();
	var IconRight = Win.getIconRight();
	var LabelHeader = Win.getLabelHeader();
	IconLeft.image = '/assets/images/icon/menu.png';
	Win.getLabelHeader().text = 'Đăng Nhập';

	IconLeft.addEventListener('click', sv.fu.eventClickIconLeft);
	IconRight.addEventListener('click', sv.fu.eventClickIconRight);
	sv.ui.ViewDNFace.addEventListener('click', sv.fu.eventClickViewDNFace);
	sv.ui.ViewDNGmail.addEventListener('click', sv.fu.eventClickViewDNGmail);
	sv.ui.ViewDangNhap.addEventListener('click', sv.fu.eventClickViewDangNhap);
	sv.ui.ViewDangKy.addEventListener('click', sv.fu.eventClickViewDangKy);

	sv.ui.ViewTong.add(sv.ui.ViewDNFace);
	sv.ui.ViewTong.add(sv.ui.ViewDNGmail);
	sv.ui.ViewTong.add(sv.ui.ViewHoac);
	sv.ui.ViewTong.add(sv.ui.TfId);
	sv.ui.ViewTong.add(sv.ui.TfPass);
	sv.ui.ViewTong.add(sv.ui.ViewDangNhap);
	sv.ui.ViewTong.add(sv.ui.ViewDangKy);
	sv.ui.ViewTong.add(sv.ui.ViewQuenPass);

	sv.ui.ViewDNFace.add(sv.ui.IconFace);
	sv.ui.ViewDNFace.add(sv.ui.IconLineDNFace);
	sv.ui.ViewDNFace.add(sv.ui.LabelDNFace);

	sv.ui.ViewDNGmail.add(sv.ui.IconGmail);
	sv.ui.ViewDNGmail.add(sv.ui.IconLineDNGmail);
	sv.ui.ViewDNGmail.add(sv.ui.LabelDNGmail);

	sv.ui.ViewHoac.add(sv.ui.LineTrai);
	sv.ui.ViewHoac.add(sv.ui.LinePhai);
	sv.ui.ViewHoac.add(sv.ui.LabelHoac);

	sv.ui.ViewDangNhap.add(sv.ui.LabelViewDN);

	sv.ui.ViewDangKy.add(sv.ui.LabelViewDangKy);

	sv.ui.ViewQuenPass.add(sv.ui.LabelQuenPass);
}

function RemoveAllEventListener(sv) {
	var IconLeft = Win.getIconLeft();
	var IconRight = Win.getIconRight();
	var LabelHeader = Win.getLabelHeader();

	IconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);
	IconRight.removeEventListener('click', sv.fu.eventClickIconRight);
	sv.ui.ViewDNFace.removeEventListener('click', sv.fu.eventClickViewDNFace);
	sv.ui.ViewDNGmail.removeEventListener('click', sv.fu.eventClickViewDNGmail);
	sv.ui.ViewDangNhap.removeEventListener('click', sv.fu.eventClickViewDangNhap);
	sv.ui.ViewDangKy.removeEventListener('click', sv.fu.eventClickViewDangKy);

	sv.vari = null;
	sv.arr = null;
	sv.ui = null;
	sv.fu = null;
	sv.test = null;
	sv = null;
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		Win.close();
	};

	sv.fu.eventClickIconRight = function(e) {
		var newView = new (require('ui/News'))();
		Win.add(newView);
		Win.remove(sv.ui.ViewTong);
		RemoveAllEventListener(sv);
	};

	sv.fu.eventClickViewDNFace = function(e) {
		var newWindow = new (require('ui/PopUpFalse'))();
		newWindow.open();
	};

	sv.fu.eventClickViewDNGmail = function(e) {
		var newWindow = new (require('ui/PopUpTrue'))();
		newWindow.open();
	};

	sv.fu.eventClickViewDangNhap = function(e) {
		var newView = new (require('ui/Home'))();
		Win.add(newView);
		Win.remove(sv.ui.ViewTong);
		RemoveAllEventListener(sv);
	};

	sv.fu.eventClickViewDangKy = function(e) {
		alert('Click viewdangky');
	};
}
