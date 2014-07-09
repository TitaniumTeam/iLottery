module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv.ui.Win;
};
function tao_bien(sv) {
	sv.vari.rowChucNang1 = [];
	sv.vari.IconChucNang1 = [];
	sv.vari.LabelChucNang1 = [];
	sv.arr.urlIcon = ["/assets/icon/icon_nap_xu.png", "/assets/icon/icon_VIP.png", "/assets/icon/icon_thong_ke.png", "/assets/icon/icon_lich_su.png", "/assets/icon/icon_hom_thu.png"];
	sv.arr.TenChucNang = ["Nạp xu", "Nâng cấp tài khoản VIP", "Con số đã chơi", "Lịch sử giao dịch", "Hòm thư"];
	sv.vari.rowChucNang2 = [];
	sv.vari.IconChucNang2 = [];
	sv.vari.LabelChucNang2 = [];
	sv.vari.lineRow1 = [];
	sv.vari.lineRow2 = [];
	sv.arr.naptien = ["Nạp tiền bằng mã thẻ", "Nạp tiền bằng sms", "Thoát"];
};
function tao_ui(sv) {
	var customButton = require('ui-controller/customButton');
	sv.ui.Win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		backgroundColor : Ti.App.Color.nauden,
	});
	///
	sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
		title : "Lựa chọn cách thức",
		options : sv.arr.naptien
	});
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
		top : Ti.App.size(90),
		left : 0
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
		text : "test",
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false,
	});
	sv.ui.IconTK = Ti.UI.createImageView({
		left : Ti.App.size(0),
		top : Ti.App.size(70),
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		image : "/assets/icon/icon_star2.png",
		touchEnabled : false,
	});
	sv.ui.LoaiTK = Ti.UI.createLabel({
		top : Ti.App.size(80),
		left : Ti.App.size(70),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		text : "TK thuong",
		backgroundColor : "transparent",
		touchEnabled : false,
	});

	sv.ui.IconTien = Ti.UI.createImageView({
		left : Ti.App.size(0),
		top : Ti.App.size(110),
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		image : "/assets/icon/icon_so_du_tk.png",
		touchEnabled : false,
	});
	sv.ui.SoTien = Ti.UI.createLabel({
		top : Ti.App.size(120),
		left : Ti.App.size(70),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		text : "Số tiền trong tài khoản: 1 tr VND",
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
		top : Ti.App.size(280),
		backgroundColor : Ti.App.Color.magenta,
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		layout : "vertical",
		showVerticalScrollIndicator : "true"
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
			textAlign : "left"
		});
		sv.vari.rowChucNang1[i].add(sv.vari.lineRow1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.IconChucNang1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.LabelChucNang1[i]);
	}
	sv.ui.TableChucNang1.setData(sv.vari.rowChucNang1);
	///
	for (var i = 0; i < 3; i++) {
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
		sv.vari.IconChucNang2[i] = Ti.UI.createImageView({
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			image : sv.arr.urlIcon[i + 2],
			touchEnabled : false,
			left : 0
		});
		sv.vari.LabelChucNang2[i] = Ti.UI.createLabel({
			left : Ti.App.size(80),
			text : sv.arr.TenChucNang[i + 2],
			color : Ti.App.Color.nauden,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.App.size(30)
			},
			width : Ti.App.size(485),
			textAlign : "left"
		});
		sv.vari.rowChucNang2[i].add(sv.vari.lineRow2[i]);
		sv.vari.rowChucNang2[i].add(sv.vari.IconChucNang2[i]);
		sv.vari.rowChucNang2[i].add(sv.vari.LabelChucNang2[i]);
	}
	sv.ui.TableChucNang2 = Ti.UI.createTableView({
		width : Ti.App.size(590),
		height : Ti.UI.SIZE,
		left : Ti.App.size(25),
		right : Ti.App.size(25),
		backgroundColor : Ti.App.Color.superwhite,
		separatorColor : "transparent",
		borderColor : Ti.App.Color.xanhnhat,
		borderRadius : 10,
		top : Ti.App.size(25),
		scrollable : false
	});
	sv.ui.TableChucNang2.setData(sv.vari.rowChucNang2);
	////
	tao_sukien(sv);
	sv.ui.ViewIconBack.addEventListener('click', sv.fu.evtIconBack);
	sv.ui.Win.addEventListener('close', sv.fu.evtCloseWin);
	sv.ui.Win.addEventListener('open', sv.fu.evtOpenWin);
	sv.ui.TableChucNang1.addEventListener('click', sv.fu.evtClickTableView1);
	sv.ui.opt_dialog.addEventListener('click', sv.fu.event_optiondialog);
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
	sv.ui.ViewThongTin.add(sv.ui.LoaiTK);
	sv.ui.ViewThongTin.add(sv.ui.IconTien);
	sv.ui.ViewThongTin.add(sv.ui.IconTK);
	sv.ui.ViewThongTin.add(sv.ui.SoTien);
	sv.ui.ViewIconEdit.add(sv.ui.IconEdit);
	sv.ui.ViewThongTin.add(sv.ui.ViewIconEdit);
	sv.ui.ViewUser.add(sv.ui.ViewThongTin);

	sv.ui.Win.add(sv.ui.ViewUser);
	///
	sv.ui.ViewChucNang.add(sv.ui.TableChucNang1);
	sv.ui.ViewChucNang.add(sv.ui.TableChucNang2);
	sv.ui.Win.add(sv.ui.ViewChucNang);
	////
};
function tao_sukien(sv) {
	////
	sv.fu.evtClickTableView1 = function(e) {
		if (e.row.id == 0) {
			sv.ui.opt_dialog.show();
		}
		if (e.row.id == 1) {
			sv.vari.wdNangCap = new (require('/ui-user/PopUpNangCapVip'))();
			sv.vari.wdNangCap.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		}
	};
	sv.fu.event_optiondialog = function(e) {
		if (e.index == 0) {
			sv.vari.wdnaptien = new (require('ui-user/PopUpNapTien'))();
			sv.vari.wdnaptien.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			Ti.API.info('click' + e.index);
		}
		if (e.index == 1) {
			sv.vari.showSmsDialog = new (require('/ui-controller/showSmsDialog'))('88xx', "NAPXU");
		}
		if (e.index == 2) {
			sv.ui.opt_dialog.hide();
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
		sv.ui.ViewIconBack.removeEventListener('click', sv.fu.evtIconBack);
		sv.ui.Win.removeEventListener('open', sv.fu.evtOpenWin);
		sv.ui.Win.removeEventListener('close', sv.fu.evtCloseWin);
		sv.ui.TableChucNang1.removeEventListener('click', sv.fu.evtClickTableView1);
		sv.ui.opt_dialog.removeEventListener('click', sv.fu.event_optiondialog);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window User, sv=' + sv);
	};
}
