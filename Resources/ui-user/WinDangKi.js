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

	return sv.ui.winDangKi;
};

function createVariable(sv) {
	sv.vari.rowChucNang1 = [];
	sv.vari.txtChucNang1 = [];
	sv.vari.LabelChucNang1 = [];
	sv.arr.TenChucNang = ["Tên tài khoản", "Mật khẩu", "Họ và tên", "Email", "Số điện thoại", "Hình đại diện"];
	sv.arr.HintText = ["Nhập tài khoản", "Nhập mật khẩu", "Không bắt buộc", "Thông tin để lấy lại MK", "Thông tin để lấy lại MK"];
	sv.vari.rowChucNang2 = [];
	sv.vari.txtChucNang2 = [];
	sv.vari.LabelChucNang2 = [];
	sv.vari.lineRow1 = [];
	sv.vari.lineRow2 = [];
}

function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	var customView = require('ui-controller/customView');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.winDangKi = Titanium.UI.createWindow({
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
		text : "Đăng Ký ",
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
		left : 0,
		layout : "vertical",
		// showVerticalScrollIndicator : "true",
		height : Ti.UI.FILL,
		backgroundColor : Ti.App.Color.magenta,
		// disableBounce:true,
		// horizontalWrap:false
	});

	sv.ui.TableChucNang1 = Ti.UI.createTableView({
		top : Ti.App.size(25),
		width : Ti.App.size(590),
		height : Ti.App.size(200),
		backgroundColor : Ti.App.Color.superwhite,
		separatorColor : "transparent",
		borderColor : Ti.App.Color.xanhnhat,
		borderRadius : 10,
		scrollable : false,
		showVerticalScrollIndicator : false,
		layout : "vertical"
	});
	for (var i = 0; i < 2; i++) {
		sv.vari.rowChucNang1[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(590),
			top : 0,
			left : 0,
			height : Ti.App.size(100),
			id : i
		});
		sv.vari.lineRow1[i] = Ti.UI.createView({
			width : Ti.App.size(590),
			bottom : 0,
			left : 0,
			height : Ti.App.size(3),
			backgroundColor : Ti.App.Color.xanhnhat
		});
		sv.vari.LabelChucNang1[i] = Ti.UI.createLabel({
			left : Ti.App.size(30),
			text : sv.arr.TenChucNang[i],
			color : Ti.App.Color.nauden,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.App.size(30)
			},
			width : Ti.App.size(260),
			textAlign : "left"
		});

		sv.vari.txtChucNang1[i] = Ti.UI.createTextField({
			width : Ti.App.size(330),
			top : 0,
			height : Ti.App.size(90),
			left : Ti.App.size(260),
			backgroundColor : Ti.App.Color.superwhite,
			maxLength : 30,
			hintText : sv.arr.HintText[i],
			color : Ti.App.Color.nauden,
			textAlign : "left",
			font : {
				fontSize : Ti.App.size(25)
			},
			autocorrect : false,
			passwordMask : i == 1 ? true : false
		});
		sv.vari.rowChucNang1[i].add(sv.vari.txtChucNang1[i]);

		sv.vari.rowChucNang1[i].add(sv.vari.lineRow1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.LabelChucNang1[i]);

	}
	sv.ui.TableChucNang1.setData(sv.vari.rowChucNang1);

	////
	sv.ui.TableChucNang2 = Ti.UI.createTableView({
		top : Ti.App.size(25),
		width : Ti.App.size(590),
		height : Ti.App.size(400),
		backgroundColor : Ti.App.Color.superwhite,
		separatorColor : "transparent",
		borderColor : Ti.App.Color.xanhnhat,
		borderRadius : 10,
		scrollable : false,
		showVerticalScrollIndicator : false,
		layout : "vertical"
	});
	for (var i = 0; i < 4; i++) {
		sv.vari.rowChucNang2[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(590),
			top : 0,
			left : 0,
			height : Ti.App.size(100),
			id : i
		});
		sv.vari.lineRow2[i] = Ti.UI.createView({
			width : Ti.App.size(590),
			bottom : 0,
			left : 0,
			height : Ti.App.size(3),
			backgroundColor : Ti.App.Color.xanhnhat
		});
		sv.vari.LabelChucNang2[i] = Ti.UI.createLabel({
			left : Ti.App.size(30),
			text : sv.arr.TenChucNang[i + 2],
			color : Ti.App.Color.nauden,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.App.size(30)
			},
			width : Ti.App.size(260),
			textAlign : "left"
		});
		if (i == 3) {
			sv.vari.IconAvatar = Ti.UI.createImageView({
				width : Ti.App.size(64),
				height : Ti.App.size(64),
				left : Ti.App.size(260),
				image : "/assets/icon/icon_ava.png"
			});
			sv.vari.rowChucNang2[i].add(sv.vari.IconAvatar);
		} else {
			sv.vari.txtChucNang2[i] = Ti.UI.createTextField({
				width : Ti.App.size(330),
				top : 0,
				height : Ti.App.size(90),
				left : Ti.App.size(260),
				backgroundColor : Ti.App.Color.superwhite,
				maxLength : 30,
				hintText : sv.arr.HintText[i + 2],
				color : Ti.App.Color.nauden,
				textAlign : "left",
				font : {
					fontSize : Ti.App.size(25)
				},
				autocorrect : false
			});
			sv.vari.rowChucNang2[i].add(sv.vari.txtChucNang2[i]);
		}
		sv.vari.rowChucNang2[i].add(sv.vari.lineRow2[i]);
		sv.vari.rowChucNang2[i].add(sv.vari.LabelChucNang2[i]);

	}
	sv.ui.TableChucNang2.setData(sv.vari.rowChucNang2);
	//
	sv.ui.btnDangKy = customView({
		width : Ti.App.size(590),
		height : Ti.App.size(96),
		backgroundImage : "/assets/icon/btn_dang_ky.png",
		backgroundSelectedImage : "/assets/icon/btn_dang_ky_select.png",
		top : Ti.App.size(40)
	});
	///////
	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winDangKi.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winDangKi.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winDangKi.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.btnDangKy.addEventListener('click', sv.fu.evtn_btnDangKy);
	///
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);
	sv.ui.winDangKi.add(sv.ui.ViewHeader);
	////
	sv.ui.ViewTong.add(sv.ui.TableChucNang1);
	sv.ui.ViewTong.add(sv.ui.TableChucNang2);
	////
	sv.ui.ViewTong.add(sv.ui.btnDangKy);
	sv.ui.winDangKi.add(sv.ui.ViewTong);
}

function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winDangKi.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winDangKi.close();
	};
	sv.fu.evtn_btnDangKy = function(e) {
		if (sv.vari.txtChucNang1[0].value == "" || sv.vari.txtChucNang1[1].value == "") {
			alert("Bạn chưa nhập user name hoặc password");
		} else {
			dangky({
				"username" : sv.vari.txtChucNang1[0].value,
				"password" : sv.vari.txtChucNang1[1].value,
				"email" : sv.vari.txtChucNang2[1].value,
				"mobile" : sv.vari.txtChucNang2[2].value
			}, sv);
		}

	};
	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};
	sv.fu.evt_btnDangNhap = function(e) {
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winDangKi.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winDangKi.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.btn_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winDangKi.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.btnDangKy.removeEventListener('click', sv.fu.evtn_btnDangKy);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window dang ki, sv=' + sv);
	};

}

function dangky(data, sv, _currWin) {
	var xhr = Titanium.Network.createHTTPClient();
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		alert('Kiểm tra kết nối mạng');
	} else {
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=register');
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
			Ti.API.info('json' + jsonResuilt.code);
			if (jsonResuilt.code == "0") {
				var winDangNhap = new (require('/ui-user/WinDangNhap'))(sv.ui.winDangKi);
				winDangNhap.open();
				Ti.API.info('dang ki thanh cong');
			} else {
				alert('Username đã bị sử dụng');
			}
		};
	}
};
