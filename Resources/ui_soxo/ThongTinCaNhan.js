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
		set_txt(sv);
		createRemove(sv);
	})();

	return sv;
};

function createVariable(sv) {
}

function createUI(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : 0,
		left : 0,
		showVerticalScrollIndicator : true
	});

	//Tao view Email
	sv.ui.ViewEmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(40),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelEmail = Ti.UI.createLabel({
		text : 'Email',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfEmail = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'gamevsgai@gmail.com',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center',
		},
	});

	//Tao view Tai Khoan
	sv.ui.ViewTaiKhoan = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(155),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelTaiKhoan = Ti.UI.createLabel({
		text : 'Tài khoản',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfTaiKhoan = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'LinhSon93',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
		},
	});

	//Tao view Mat Khau
	sv.ui.ViewMatKhau = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(270),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelMatKhau = Ti.UI.createLabel({
		text : 'Mật Khẩu',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfMatKhau = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		passwordMask : true,
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'chuthilinh',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
		},
	});

	//tao view xac nhan
	sv.ui.ViewXacNhan = Ti.UI.createView({
		top : Ti.App.size(765),
		height : Ti.App.size(190),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.XacNhan = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(0),
		height : Ti.App.size(95),
		left : Ti.App.size(0),
		right : Ti.App.size(0)
	});

	sv.ui.LabelXacNhan = Ti.UI.createLabel({
		text : 'Xác nhận',
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontColor : Ti.App.Color.white,
			fontWeight : 'bold',
		},
	});

	// createUI_Event(sv);

	// sv.ui.IconBack.addEventListener('click', sv.fu.eventClickIconBack);
	// sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	// sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	//
	// sv.ui.Window.add(sv.ui.ViewTong);
	// sv.ui.Window.add(sv.ui.ViewHeader);

	sv.ui.ViewTong.add(sv.ui.ViewEmail);
	sv.ui.ViewTong.add(sv.ui.ViewTaiKhoan);
	sv.ui.ViewTong.add(sv.ui.ViewMatKhau);
	sv.ui.ViewTong.add(sv.ui.ViewXacNhan);

	sv.ui.ViewEmail.add(sv.ui.LabelEmail);
	sv.ui.ViewEmail.add(sv.ui.TfEmail);

	sv.ui.ViewTaiKhoan.add(sv.ui.LabelTaiKhoan);
	sv.ui.ViewTaiKhoan.add(sv.ui.TfTaiKhoan);

	sv.ui.ViewMatKhau.add(sv.ui.LabelMatKhau);
	sv.ui.ViewMatKhau.add(sv.ui.TfMatKhau);

	sv.ui.ViewXacNhan.add(sv.ui.XacNhan);

	sv.ui.XacNhan.add(sv.ui.LabelXacNhan);
}

function createUI_Event(sv) {
	sv.fu = {};

	// sv.fu.eventClickIconBack = function() {
	// var newWindow = new (require('ui/DangNhap'))();
	// newWindow.open();
	// };
	//
	// sv.fu.eventOpenWindow = function(e) {
	// Ti.API.info('Opened window');
	// };
	//
	// sv.fu.eventCloseWindow = function(e) {
	// // sv.ui.IconBack.removeEventListener('click', sv.fu.eventClickIconBack);
	// // sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
	// // sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
	//
	// sv.vari = null;
	// sv.arr = null;
	// sv.ui = null;
	// sv.fu = null;
	// sv.test = null;
	// sv = null;
	//
	// Ti.API.info('Closed window, sv=' + sv);
	// };
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;
		Ti.API.info('da remove xong ');
	};
}

function set_txt(sv) {
	sv.set_statetxt = function(_state) {
		if(_state==true){
			sv.ui.TfMatKhau.blur();
		sv.ui.TfTaiKhoan.blur();
		sv.ui.TfEmail.blur();
		}
		else{
			Ti.API.info('cha lam gi');
		}
		
	};
};
