module.exports = function(_type) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv, _type);
		createUI(sv, _type);
	})();

	return sv.ui.Window;
};

function createVariable(sv, _type) {
	////type =0-soxo, type=1- bong da
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
	sv.vari.dauso = null;
	sv.vari.noidung = null;
	if (_type == 0) {
		if (sv.vari.user_info.isValidRow()) {
			sv.vari.dv_soxo = sv.vari.db.execute("SELECT * FROM DV_Soxo");
			if (sv.vari.dv_soxo.isValidRow()) {
				sv.vari.dauso = sv.vari.dv_soxo.fieldByName("servicenumber");
				sv.vari.noidung = sv.vari.dv_soxo.fieldByName("noidung") + " " + sv.vari.dv_soxo.fieldByName("thamso");
			} else {
				sv.vari.dauso = "88XX";
				sv.vari.noidung = "KQBD";
			}
			sv.vari.dv_soxo.close();
		} else {
			sv.vari.dv_soxo_free = sv.vari.db.execute("SELECT * FROM DV_Soxo_free");
			if (sv.vari.dv_soxo_free.isValidRow()) {
				sv.vari.dauso = sv.vari.dv_soxo_free.fieldByName("servicenumber");
				sv.vari.noidung = sv.vari.dv_soxo_free.fieldByName("noidung") + " " + sv.vari.dv_soxo_free.fieldByName("thamso");

			} else {
				sv.vari.dauso = "88XX";
				sv.vari.noidung = "KQBD";
			}
			sv.vari.dv_soxo_free.close();
		}
	} else {
		if (sv.vari.user_info.isValidRow()) {
			sv.vari.dv_bongda = sv.vari.db.execute("SELECT * FROM DV_Bongda");
			if (sv.vari.dv_bongda.isValidRow()) {
				sv.vari.dauso = sv.vari.dv_bongda.fieldByName("servicenumber");
				sv.vari.noidung = sv.vari.dv_bongda.fieldByName("noidung") + " " + sv.vari.dv_bongda.fieldByName("thamso");
			} else {
				sv.vari.dauso = "88XX";
				sv.vari.noidung = "KQSX";
			}
			sv.vari.dv_bongda.close();
		} else {
			sv.vari.dv_bongda_free = sv.vari.db.execute("SELECT * FROM DV_Bongda_free");
			if (sv.vari.dv_bongda_free.isValidRow()) {
				sv.vari.dauso = sv.vari.dv_bongda_free.fieldByName("servicenumber");
				sv.vari.noidung = sv.vari.dv_bongda_free.fieldByName("noidung") + " " + sv.vari.dv_bongda_free.fieldByName("thamso");

			} else {
				sv.vari.dauso = "88XX";
				sv.vari.noidung = "KQSX";
			}
			sv.vari.dv_bongda_free.close();
		}
	}
	sv.vari.user_info.close();
	sv.vari.db.close();
}

function createUI(sv, _type) {
	var customButton = require('ui-controller/customButton');
	sv.ui.Window = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(406),
		backgroundColor : Ti.App.Color.superwhite,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	sv.ui.IconNap = Titanium.UI.createImageView({
		width : Ti.App.size(178),
		height : Ti.App.size(119),
		top : Ti.App.size(30),
		image : "/assets/icon/icon_no_internet.png"
	});
	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/icon/btn_cancel.png',
		width : Ti.App.size(90),
		height : Ti.App.size(90),
		right : 0,
		top : Ti.App.size(150),
		zIndex : 10
	});
	sv.ui.ThongBao1 = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		// left : Ti.App.size(80),
		top : Ti.App.size(240),
		text : "Không có kết nối mạng"
	});
	sv.ui.Note = Titanium.UI.createLabel({
		width : Ti.App.size(525),
		height : Ti.UI.SIZE,
		top : Ti.App.size(308),
		color : Ti.App.Color.nauden,
		textAlign : "center",
		font : {
			fontSize : Ti.App.size(30),
		},
		textAlign : "center",
		text : _type == 1 ? "Chúng tôi sẽ gửi SMS offline kết quả các trận bóng cho quý khách hàng" : "Chúng tôi sẽ gửi SMS offline kết quả xổ số trực tiếp cho quý khách hàng"
	});
	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.ViewPopUp.addEventListener('click', sv.fu.evt_sms);
	sv.ui.Window.addEventListener('android:back', sv.fu.eventClickIcon);
	sv.ui.Window.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.Note);
	sv.ui.ViewPopUp.add(sv.ui.IconNap);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.Window.add(sv.ui.ViewPopUp);
}

function createUI_Event(sv) {
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};
	sv.fu.evt_sms = function(e) {
		var sms = new (require('/ui-controller/showSmsDialog'))(sv.vari.dauso, sv.vari.noidung);
		sv.ui.Window.close();
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.ViewPopUp.removeEventListener('click', sv.fu.evt_sms);
		sv.ui.Window.removeEventListener('android:back', sv.fu.eventClickIcon);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window pop up thanh cong, sv=' + sv);
	};
}
