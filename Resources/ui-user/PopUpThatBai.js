module.exports = function(winParent) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, winParent);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
}

function createUI(sv, winParent) {
	sv.ui.Window = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
	});

	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(486),
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	sv.ui.IconNap = Titanium.UI.createImageView({
		width : Ti.App.size(158),
		height : Ti.App.size(158),
		top : Ti.App.size(30),
		image : "/assets/icon/icon_giao_dich_that_bai.png"
	});
	sv.ui.Icon = Ti.UI.createButton({
		backgroundImage : '/assets/icon/btn_cancel.png',
		width : Ti.App.size(45),
		height : Ti.App.size(45),
		top : Ti.App.size(175),
		right : Ti.App.size(5),
		zIndex : 10
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		left : Ti.App.size(80),
		top : Ti.App.size(240),
		text : "GIAO DỊCH THẤT BẠI"
	});
	sv.ui.Note = Titanium.UI.createLabel({
		width : Ti.App.size(525),
		height : Ti.UI.SIZE,
		top : Ti.App.size(300),
		color : Ti.App.Color.nauden,
		textAlign : "center",
		font : {
			fontSize : Ti.App.size(25),
		},
		textAlign : "center",
		text : "Rất tiếc giao dịch của bạn đã bị thất bại"
	});
	sv.ui.btnThuLai = Ti.UI.createButton({
		bottom : Ti.App.size(28),
		backgroundImage : "/assets/icon/btn_thu_lai.png",
		backgroundSelectedImage : "/assets/icon/btn_thu_lai_select.png",
		width : Ti.App.size(526),
		height : Ti.App.size(96)
	});
	createUI_Event(sv, winParent);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.btnThuLai.addEventListener('click', sv.fu.eventBtnThuLai);

	sv.ui.Window.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.Note);
	sv.ui.ViewPopUp.add(sv.ui.IconNap);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.ViewPopUp.add(sv.ui.btnThuLai);
	sv.ui.Window.add(sv.ui.ViewPopUp);
}

function createUI_Event(sv, winParent) {
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};
	sv.fu.eventBtnThuLai = function(e) {

		if (winParent == 0) {
			var wdNapTien = new (require('/ui-user/PopUpNapTien'))();
			wdNapTien.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			sv.ui.Window.close();
		}
		if(winParent==1){
			var wdNangCap = new (require('/ui-user/PopUpNangCapVip'))();
			wdNangCap.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			sv.ui.Window.close();
		}
		else{
			Ti.API.info('Khong co window nay');
		}
	};
	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.btnThuLai.removeEventListener('click', sv.fu.eventBtnThuLai);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window pop up that bai, sv=' + sv);
	};
}
