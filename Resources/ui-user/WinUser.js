module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	dangnhap();
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		setThongTin(sv);
	})();
	return sv.ui.Win;
};
function tao_bien(sv) {
	///thong tin database
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
	sv.vari.ten_user = sv.vari.user_info.fieldByName("username");
	sv.vari.tk_user = sv.vari.user_info.fieldByName("type");
	sv.vari.tien_user = sv.vari.user_info.fieldByName("balance");
	sv.vari.user_info.close();
	sv.vari.db.close();
	////
	sv.vari.rowChucNang1 = [];
	sv.vari.IconChucNang1 = [];
	sv.vari.LabelChucNang1 = [];
	sv.arr.urlIcon = ["/assets/icon/icon_nap_xu.png", "/assets/icon/icon_thong_ke.png", "/assets/icon/icon_lich_su.png", "/assets/icon/icon_hom_thu.png"];
	sv.arr.TenChucNang = ["Nạp xu", "Con số đã chơi", "Lịch sử giao dịch", "Hòm thư"];
	sv.vari.lineRow1 = [];
};
function tao_ui(sv) {
	var customButton = require('ui-controller/customButton');
	var customView = require('ui-controller/customView');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.Win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid ? false : true,
		orientationModes : [Ti.UI.PORTRAIT],
		backgroundColor : Ti.App.Color.magenta,
	});
	///
	//////header
	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		left : 0,
	});

	sv.ui.ViewIconBack = customButton({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		left : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(90),
	});

	sv.ui.IconBack = Ti.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.LabelHeader = Ti.UI.createLabel({
		width : Ti.App.size(360),
		text : "Tài Khoản Của Tôi",
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		height : Ti.App.size(90),
		backgroundColor : 'transparent',
		touchEnabled : false,
		color : Ti.App.Color.superwhite

	});
	////
	sv.ui.ViewUser = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(190),
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(80),
		left : 0
	});
	sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
		title : "Lựa chọn cách thức",
		options : Ti.Platform.osname == 'android' ? ["Nạp tiền bằng mã thẻ", "Nạp tiền bằng sms"] : ["Nạp tiền bằng mã thẻ", "Nạp tiền bằng sms", "Thoát"],
		opaquebackground : true,
		buttonNames : ["Thoát"]
	});
	sv.ui.opt_edit = Titanium.UI.createOptionDialog({
		title : "Thông tin mà bạn muốn đổi",
		options : isAndroid ? ["Thay đổi thông tin cá nhân", "Thay đổi mật khẩu"] : ["Thay đổi thông tin cá nhân", "Thay đổi mật khẩu", "Thoát"],
		opaquebackground : true,
		buttonNames : ["Thoát"]
	});

	sv.ui.ViewAvartar = Ti.UI.createView({
		width : Ti.App.size(196),
		height : Ti.App.size(190),
		backgroundColor : "transparent",
		top : 0,
		left : 0
	});
	sv.ui.IconAvartar = Ti.UI.createImageView({
		width : Ti.App.size(140),
		height : Ti.App.size(140),
		image : "/assets/icon/icon_ava.png",
		touchEnabled : false,
	});
	sv.ui.ViewThongTin = Ti.UI.createView({
		width : Ti.App.size(444),
		height : Ti.App.size(190),
		backgroundColor : "transparent",
		left : Ti.App.size(196),
		top : 0
	});
	sv.ui.TenUser = Ti.UI.createLabel({
		top : Ti.App.size(20),
		left : Ti.App.size(10),
		backgroundColor : 'transparent',
		// text : "test",
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false,
		text : sv.vari.ten_user
	});
	// sv.ui.IconTK = Ti.UI.createImageView({
	// left : Ti.App.size(0),
	// top : Ti.App.size(70),
	// width : Ti.App.size(60),
	// height : Ti.App.size(60),
	// image : "/assets/icon/icon_star2.png",
	// touchEnabled : false,
	// });
	// sv.ui.LoaiTK = Ti.UI.createLabel({
	// top : Ti.App.size(80),
	// left : Ti.App.size(70),
	// width : Ti.UI.SIZE,
	// font : {
	// fontSize : Ti.App.size(20)
	// },
	// color : Ti.App.Color.superwhite,
	// // text : "TK thuong",
	// backgroundColor : "transparent",
	// touchEnabled : false,
	// text : sv.vari.tk_user == 0 ? "Thường" : "VIP"
	// });
	sv.ui.ViewTien = Titanium.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : "horizontal",
		left : 0
	});
	sv.ui.IconTien = Ti.UI.createImageView({
		// left : Ti.App.size(0),
		// top : Ti.App.size(110),
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		image : "/assets/icon/icon_so_du_tk.png",
		touchEnabled : false,
	});
	sv.ui.SoTien = Ti.UI.createLabel({
		// top : Ti.App.size(120),
		left : Ti.App.size(20),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		text : "Số tiền trong tài khoản: " + sv.vari.tien_user,
		backgroundColor : "transparent",
		touchEnabled : false,
	});
	sv.ui.ViewIconEdit = customButton({
		right : 0,
		top : 0,
		width : Ti.App.size(96),
		height : Ti.App.size(78),
		backgroundSelectedColor : Ti.App.Color.magenta,
		backgroundColor : "transparent"

	});
	sv.ui.IconEdit = Ti.UI.createImageView({
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		image : "/assets/icon/icon_edit_acc.png",
		touchEnabled : false,

	});
	////
	sv.ui.ViewChucNang = Ti.UI.createScrollView({
		top : Ti.App.size(270),
		backgroundColor : "transparent",
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		layout : "vertical",
		showVerticalScrollIndicator : "true",
		bottom : Ti.App.size(25)
	});
	sv.ui.TableChucNang1 = Ti.UI.createTableView({
		top : Ti.App.size(25),
		width : Ti.App.size(590),
		height : Ti.UI.SIZE,
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		backgroundColor : Ti.App.Color.superwhite,
		separatorColor : "transparent",
		borderColor : Ti.App.Color.xanhnhat,
		borderRadius : 10,
		scrollable : false
	});
	for (var i = 0; i < sv.arr.TenChucNang.length; i++) {
		sv.vari.rowChucNang1[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(590),
			top : 0,
			left : 0,
			height : Ti.App.size(100),
			id : i,
			backgroundSelectedColor : Ti.App.Color.xanhnhat
		});
		sv.vari.lineRow1[i] = Ti.UI.createView({
			width : Ti.App.size(590),
			bottom : 0,
			left : 0,
			height : Ti.App.size(3),
			backgroundColor : Ti.App.Color.xanhnhat,
			touchEnabled : false
		});
		sv.vari.IconChucNang1[i] = Ti.UI.createImageView({
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			image : sv.arr.urlIcon[i],
			touchEnabled : false,
			left : 0
		});
		sv.vari.LabelChucNang1[i] = Ti.UI.createLabel({
			left : Ti.App.size(80),
			text : sv.arr.TenChucNang[i],
			color : Ti.App.Color.nauden,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.App.size(30)
			},
			width : Ti.App.size(485),
			textAlign : "left",
			touchEnabled : false
		});
		sv.vari.rowChucNang1[i].add(sv.vari.lineRow1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.IconChucNang1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.LabelChucNang1[i]);
	}
	sv.ui.TableChucNang1.setData(sv.vari.rowChucNang1);
	///
	////
	sv.ui.btn_LogOut = customView({
		width : Ti.App.size(590),
		height : Ti.App.size(96),
		backgroundImage : "/assets/icon/btn_logout.png",
		backgroundSelectedImage : "/assets/icon/btn_logout_select.png",
		top : Ti.App.size(25)
	});

	////
	tao_sukien(sv);
	sv.ui.btn_LogOut.addEventListener('click', sv.fu.evt_logout);
	sv.ui.ViewIconBack.addEventListener('click', sv.fu.evtIconBack);
	sv.ui.Win.addEventListener('close', sv.fu.evtCloseWin);
	sv.ui.Win.addEventListener('open', sv.fu.evtOpenWin);
	sv.ui.TableChucNang1.addEventListener('click', sv.fu.evtClickTableView1);
	sv.ui.opt_dialog.addEventListener('click', sv.fu.event_optiondialog);
	sv.ui.ViewIconEdit.addEventListener('click', sv.fu.evtEditInfo);
	sv.ui.opt_edit.addEventListener('click', sv.fu.evt_opt_edit_info);
	sv.ui.Win.addEventListener('android:back', sv.fu.evtIconBack);
	/////
	sv.ui.ViewIconBack.add(sv.ui.IconBack);
	sv.ui.ViewHeader.add(sv.ui.ViewIconBack);

	sv.ui.ViewHeader.add(sv.ui.LabelHeader);
	sv.ui.Win.add(sv.ui.ViewHeader);
	////
	sv.ui.ViewAvartar.add(sv.ui.IconAvartar);
	sv.ui.ViewUser.add(sv.ui.ViewAvartar);

	////
	sv.ui.ViewThongTin.add(sv.ui.TenUser);
	// sv.ui.ViewThongTin.add(sv.ui.LoaiTK);
	sv.ui.ViewTien.add(sv.ui.IconTien);
	// sv.ui.ViewThongTin.add(sv.ui.IconTK);
	sv.ui.ViewTien.add(sv.ui.SoTien);
	sv.ui.ViewThongTin.add(sv.ui.ViewTien);
	sv.ui.ViewIconEdit.add(sv.ui.IconEdit);
	sv.ui.ViewThongTin.add(sv.ui.ViewIconEdit);
	sv.ui.ViewUser.add(sv.ui.ViewThongTin);

	sv.ui.Win.add(sv.ui.ViewUser);
	///
	sv.ui.ViewChucNang.add(sv.ui.TableChucNang1);
	sv.ui.ViewChucNang.add(sv.ui.btn_LogOut);
	sv.ui.Win.add(sv.ui.ViewChucNang);
	////
};
function tao_sukien(sv) {
	///event edit user info
	sv.fu.evtEditInfo = function(e) {
		sv.ui.opt_edit.show();
	};
	sv.fu.evt_logout = function(e) {
		var db = Ti.Database.open("userinfo");
		db.execute("DELETE FROM SaveInfo");
		db.close();
		sv.ui.Win.close();
	};
	sv.fu.evt_opt_edit_info = function(e) {
		// if(Ti.Platform.osname=="android")

		if (e.button) {
			sv.ui.opt_edit.hide();
		} else {
			if (e.index == 0) {
				sv.vari.wdEditInfo = new (require('ui-user/WinThayDoiThongTin'))();
				sv.vari.wdEditInfo.open();
			}
			if (e.index == 1) {
				sv.vari.wdEditPass = new (require('ui-user/WinThayPass'))();
				sv.vari.wdEditPass.open();
			}
		}
	};
	////
	sv.fu.evtClickTableView1 = function(e) {
		if (e.row.id == 0) {
			sv.ui.opt_dialog.show();
		}
	};
	sv.fu.event_optiondialog = function(e) {
		if (e.button) {
			sv.ui.opt_dialog.hide();
		} else {
			if (e.index == 0) {
				sv.vari.wdnaptien = new (require('ui-user/PopUpNapTien'))(sv);
				sv.vari.wdnaptien.open({
					modal : Ti.Platform.osname == 'android' ? true : false
				});
			}
			if (e.index == 1) {
				sv.vari.showSmsDialog = new (require('/ui-controller/showSmsDialog'))('88xx', "NAPXU");
			}
		}

	};
	///
	sv.fu.evtOpenWin = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.evtIconBack = function(e) {
		sv.ui.Win.close();
	};
	sv.fu.evtCloseWin = function(e) {
		sv.ui.btn_LogOut.removeEventListener('click', sv.fu.evt_logout);
		sv.ui.ViewIconBack.removeEventListener('click', sv.fu.evtIconBack);
		sv.ui.Win.removeEventListener('close', sv.fu.evtCloseWin);
		sv.ui.Win.removeEventListener('open', sv.fu.evtOpenWin);
		sv.ui.TableChucNang1.removeEventListener('click', sv.fu.evtClickTableView1);
		sv.ui.opt_dialog.removeEventListener('click', sv.fu.event_optiondialog);
		sv.ui.ViewIconEdit.removeEventListener('click', sv.fu.evtEditInfo);
		sv.ui.opt_edit.removeEventListener('click', sv.fu.evt_opt_edit_info);
		sv.ui.Win.removeEventListener('android:back', sv.fu.evtIconBack);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;

		Ti.API.info('Closed window User, sv=' + sv);
	};
}

function setThongTin(sv) {
	sv.setUserInfo = function() {
		Ti.API.info('do something');
		var db = Ti.Database.open("userinfo");
		var user_info = db.execute("SELECT * FROM SaveInfo");
		var tien_user = user_info.fieldByName("balance");
		user_info.close();
		db.close();
		sv.ui.SoTien.setText(tien_user);
	};
};
function dangnhap() {

	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
	} else {
		var db = Ti.Database.open('userinfo');
		var user_info = db.execute("SELECT * FROM SaveInfo");
		var ten_user = user_info.fieldByName("username");
		var pass_user = user_info.fieldByName("password");
		var data = {
			"username" : ten_user,
			"password" : pass_user
		};

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
				var balance = jsonResuilt.info.balance;
				Ti.API.info('dang nhap thanh cong');
				db.execute('UPDATE SaveInfo SET balance=?', balance);
				user_info.close();
				db.close();
			} else {
				alert('Sai username hoặc password');
			}
		};

	}
};
