module.exports = function(_winDK) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, _winDK);
	})();

	return sv.ui.winDangNhap;
};

function createVariable(sv) {
}

function createUI(sv, _winDK) {
	var customButton = require('ui-controller/customButton');
	var customView = require('ui-controller/customView');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.winDangNhap = Titanium.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid ? false : true,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});

	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "Đăng Nhập ",
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
	});

	/////
	sv.ui.View_Back = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(90),
		top : 0,
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
	});

	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});

	////
	sv.ui.ViewTong = Ti.UI.createScrollView({
		top : Ti.App.size(80),
		width : Ti.App.size(640),
		backgroundImage : "/assets/icon/bg_login.png",
		left : 0,
		layout : "vertical",
		showVerticalScrollIndicator : "true",
		height : Ti.UI.FILL
	});
	sv.ui.TenUngDung = Ti.UI.createLabel({
		top : Ti.App.size(100),
		text : "SỔ XỐ BÓNG ĐÁ",
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		textAlign : 'center'
	});
	sv.ui.WelCome = Ti.UI.createLabel({
		top : Ti.App.size(20),
		text : "Welcome to Sổ xố bóng đá",
		color : "orange",
		font : {
			fontSize : Ti.App.size(30)
		},
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		textAlign : 'center'
	});
	sv.ui.ViewBtn = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(93),
		top : Ti.App.size(60),
		backgroundColor : "transparent",
		left : 0
	});
	sv.ui.btnFaceBook = customView({
		top : 0,
		left : Ti.App.size(25),
		width : Ti.App.size(400),
		height : Ti.App.size(93),
		backgroundImage : "/assets/icon/btn_loginfb.png",
		backgroundSelectedImage : "/assets/icon/btn_loginfb_select.png"
	});
	sv.ui.btnGmail = customView({
		top : 0,
		right : Ti.App.size(25),
		width : Ti.App.size(214),
		height : Ti.App.size(93),
		backgroundImage : "/assets/icon/btn_logingmail.png",
		backgroundSelectedImage : "/assets/icon/btn_logingmail_select.png"
	});
	sv.ui.ViewHoac = Ti.UI.createImageView({
		top : Ti.App.size(20),
		height : Ti.App.size(19),
		width : Ti.App.size(590),
		touchEnabled : false,
		image : "/assets/icon/hoac.png"
	});
	sv.ui.ViewTxtTK = Ti.UI.createView({
		left : Ti.App.size(25),
		width : Ti.App.size(590),
		backgroundImage : "/assets/icon/textbox_login.png",
		backgroundSelectedColor : null,
		top : Ti.App.size(20),
		height : Ti.App.size(90)
	});
	sv.ui.IconTK = Titanium.UI.createImageView({
		width : Ti.App.size(45),
		height : Ti.App.size(45),
		image : "/assets/icon/icon_user.png",
		left : Ti.App.size(30)
	});
	sv.ui.txtTK = Titanium.UI.createTextField({
		left : Ti.App.size(120),
		width : Ti.App.size(460),
		height : Ti.App.size(90),
		backgroundColor : "transparent",
		hintText : "Nhập tài khoản",
		textAlign : "left",
		maxLength : 30,
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(25)
		},
		autocorrect : false
	});
	////
	sv.ui.ViewTxtMK = Ti.UI.createView({
		left : Ti.App.size(25),
		width : Ti.App.size(590),
		backgroundImage : "/assets/icon/textbox_login.png",
		backgroundSelectedColor : null,
		top : Ti.App.size(20),
		height : Ti.App.size(90)
	});

	sv.ui.IconMK = Titanium.UI.createImageView({
		width : Ti.App.size(45),
		height : Ti.App.size(45),
		image : "/assets/icon/icon_password.png",
		left : Ti.App.size(30)
	});
	sv.ui.txtMK = Titanium.UI.createTextField({
		left : Ti.App.size(120),
		width : Ti.App.size(460),
		height : Ti.App.size(90),
		backgroundColor : "transparent",
		hintText : "Nhập mật khẩu",
		textAlign : "left",
		maxLength : 30,
		color : Ti.App.Color.nauden,
		passwordMask : true,
		font : {
			fontSize : Ti.App.size(25)
		},
		autocorrect : false,
	});
	///
	sv.ui.ViewBtn2 = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(93),
		top : Ti.App.size(20),
		backgroundColor : "transparent",
		left : 0
	});
	sv.ui.btnDangNhap = customView({
		width : Ti.App.size(285),
		height : Ti.App.size(93),
		backgroundImage : "/assets/icon/btn_dang_nhap.png",
		backgroundSelectedImage : "/assets/icon/btn_dang_nhap_select.png",
		top : 0,
		right : Ti.App.size(25)
	});
	/////
	sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
		// cancel : 1,
		options : Ti.Platform.osname == 'android' ? ["Bằng Email", "Bằng SMS"] : ["Bằng Email", "Bằng SMS", "Thoát"],
		// opaquebackground : true,
		title : "Lấy lại mật khẩu",
		buttonNames : ["Thoát"]
	});
	sv.ui.btnQuenMatKhau = Ti.UI.createButton({
		width : Ti.App.size(285),
		height : Ti.App.size(93),
		top : 0,
		left : Ti.App.size(25),
		title : "Quên mật khẩu?",
		color : Ti.App.Color.superwhite,
		backgroundColor : "transparent",
		font : {
			fontSize : Ti.App.size(25)
		}
	});
	///
	sv.ui.ViewDK = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(120),
		backgroundColor : "transparent",
		top : Ti.App.size(20),
		left : 0
	});
	sv.ui.lblDk = Ti.UI.createLabel({
		text : "Bạn chưa có tài khoản?",
		color : Ti.App.Color.superwhite,
		left : Ti.App.size(80),
		width : Ti.App.size(280),
		font : {
			fontSize : Ti.App.size(25)
		},
		backgroundColor : "transparent",
		backgroundSelectedColor : null
	});
	sv.ui.btnDangKy = Ti.UI.createButton({
		title : "Đăng ký ngay",
		color : "orange",
		left : Ti.App.size(360),
		backgroundColor : "transparent",
		font : {
			fontSize : Ti.App.size(30)
		},
		width : Ti.App.size(240),
		height : Ti.App.size(120)

	});
	/////facebook
	sv.ui.fb = require('facebook');
	sv.ui.fb.appid = "134793934930";
	sv.ui.fb.permissions = ['publish_stream', 'read_stream'];
	sv.ui.fb.forceDialogAuth = false;

	///////
	createUI_Event(sv, _winDK);
	sv.ui.fb.addEventListener('login', sv.fu.event_fb);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winDangNhap.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winDangNhap.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winDangNhap.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.btnDangNhap.addEventListener('click', sv.fu.evt_btnDangNhap);
	sv.ui.btnDangKy.addEventListener('click', sv.fu.evt_btnDangKy);
	sv.ui.btnQuenMatKhau.addEventListener('click', sv.fu.event_quenmatkhau);
	sv.ui.opt_dialog.addEventListener('click', sv.fu.event_optiondialog);
	sv.ui.btnFaceBook.addEventListener('click', sv.fu.event_loginFB);

	///
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);
	sv.ui.winDangNhap.add(sv.ui.ViewHeader);
	////
	sv.ui.ViewTong.add(sv.ui.TenUngDung);
	sv.ui.ViewTong.add(sv.ui.WelCome);

	////
	sv.ui.ViewBtn.add(sv.ui.btnFaceBook);
	sv.ui.ViewBtn.add(sv.ui.btnGmail);
	sv.ui.ViewTong.add(sv.ui.ViewBtn);
	///
	sv.ui.ViewTong.add(sv.ui.ViewHoac);
	////
	sv.ui.ViewTxtTK.add(sv.ui.IconTK);
	sv.ui.ViewTxtTK.add(sv.ui.txtTK);
	sv.ui.ViewTong.add(sv.ui.ViewTxtTK);
	///
	sv.ui.ViewTxtMK.add(sv.ui.IconMK);
	sv.ui.ViewTxtMK.add(sv.ui.txtMK);
	sv.ui.ViewTong.add(sv.ui.ViewTxtMK);
	///
	sv.ui.ViewBtn2.add(sv.ui.btnDangNhap);
	sv.ui.ViewBtn2.add(sv.ui.btnQuenMatKhau);
	sv.ui.ViewTong.add(sv.ui.ViewBtn2);
	////
	sv.ui.ViewDK.add(sv.ui.btnDangKy);
	sv.ui.ViewDK.add(sv.ui.lblDk);
	sv.ui.ViewTong.add(sv.ui.ViewDK);

	sv.ui.winDangNhap.add(sv.ui.ViewTong);
}

function createUI_Event(sv, _winDK) {
	sv.fu.event_loginFB = function(e) {
		// var winFB = new (require('ui-user/PopUpFB'))();
		// winFB.open();
		sv.ui.fb.authorize();
	};
	sv.fu.event_fb = function(e) {
		if (e.success) {
			Ti.API.info('******* thanh cong');
			sv.ui.fb.requestWithGraphPath('me', {}, 'GET', function(e) {
				if (e.success) {
					Ti.API.info('nhay vao day ********');
					var data = JSON.parse(e.result);
					Ti.API.info("Name:" + data.name);
					Ti.API.info("facebook Id:" + data.id);
				} else if (e.error) {
					alert(e.error);
				} else {
					alert('Unknown response.');
				}
			});
		} else {
			if (e.error) {
				alert(e.error);
			} else {
				alert("Unkown error while trying to login to facebook.");
			}
		}
	};
	sv.fu.event_quenmatkhau = function(e) {
		sv.ui.opt_dialog.show();
	};
	sv.fu.event_optiondialog = function(e) {
		if (e.button) {
			sv.ui.opt_dialog.hide();
		} else {
			if (e.index == 0) {
				var winRSEmail = new (require('/ui-user/WinResetPassEmail'))();
				winRSEmail.open();
			}
			if (e.index == 1) {
				var winRSSms = new (require('/ui-user/WinResetPassSms'))();
				winRSSms.open();
			}
		}
	};
	sv.fu.event_androidback = function(e) {
		sv.ui.winDangNhap.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winDangNhap.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};
	sv.fu.evt_btnDangNhap = function(e) {
		if (sv.ui.txtMK.value == "" || sv.ui.txtTK == "") {
			alert("Bạn chưa nhập username và password");

		} else {
			dangnhap({
				"username" : sv.ui.txtTK.value,
				"password" : sv.ui.txtMK.value
			}, sv, _winDK);
		}
	};
	sv.fu.evt_btnDangKy = function(e) {
		sv.ui.winDangNhap.close();
		var WinDangKy = new (require('ui-user/WinDangKi'))();
		WinDangKy.open();
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winDangNhap.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winDangNhap.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.btn_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winDangNhap.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.btnDangKy.removeEventListener('click', sv.fu.evt_btnDangKy);
		sv.ui.btnDangNhap.removeEventListener('click', sv.fu.evt_btnDangNhap);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window dang nhap, sv=' + sv);
	};

}

function dangnhap(data, sv, _winDK) {

	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		alert('Kiểm tra kết nối mạng');
	} else {

		var xhr = Titanium.Network.createHTTPClient();
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=login');
		xhr.setRequestHeader("Content-Type", "application/json-rpc");
		Ti.API.info(JSON.stringify(data));
		xhr.send(JSON.stringify(data));
		xhr.onerror = function(e) {
			Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
		};
		xhr.onload = function() {
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
			var dl = JSON.parse(this.responseText);
			var jsonResuilt = JSON.parse(dl);
			Ti.API.info('ket qua' + dl);
			Ti.API.info('json' + jsonResuilt.result.code);
			if (jsonResuilt.result.code == "0") {
				if ((_winDK != null) || (_winDK != undefined)) {
					_winDK.close();
				}

				var db = Ti.Database.open('userinfo');
				var sql = db.execute("SELECT * FROM SaveInfo");

				var username = jsonResuilt.info.username;
				var type = jsonResuilt.info.type;
				var balance = jsonResuilt.info.balance;
				Ti.API.info('dang nhap thanh cong');
				db.execute('INSERT INTO SaveInfo(username,type,balance) VALUES(?,?,?)', username, type, balance);
				sql.close();
				db.close();
				sv.ui.winDangNhap.close();
				var WinUser = new (require('/ui-user/WinUser'))();
				WinUser.open();
			} else {
				alert('Sai username hoặc password');
			}
		};

	}
};
