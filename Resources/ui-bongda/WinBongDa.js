module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv.ui.Win;
};
////
function tao_bien(sv) {
	sv.arr.ViewChucNang = [];
	sv.arr.LabelChucNang = [];
	sv.arr.LineChucNang = [];
	sv.arr.evtChucNang = [];
	sv.arr.TenChucNang = ["Lịch TD", "Tin tức", "Tư vấn", "VIP"];
	sv.vari.ViewHT
}

////
function tao_ui(sv) {
	sv.ui.Win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		backgroundColor : Ti.App.Color.nauden,
	});
	//////header
	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		top : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(88),
		left : 0,
	});

	sv.ui.ViewIconBack = Ti.UI.createView({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		left : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(88),
	});

	sv.ui.IconBack = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		touchEnabled : false,
		width : Ti.App.size(22),
		height : Ti.App.size(42)
	});

	sv.ui.ViewIconUser = Ti.UI.createView({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		right : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(88),
	});
	sv.ui.IconUser = Ti.UI.createImageView({
		image : '/assets/images/icon/avatar-defaut.png',
		touchEnabled : false,
		width : Ti.App.size(54),
		height : Ti.App.size(54)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		width : Ti.App.size(360),
		text : "BÓNG ĐÁ",
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		height : Ti.App.size(88),
		backgroundColor : 'transparent',
		touchEnabled : false,
		color : Ti.App.Color.superwhite

	});

	/////thanh chuc nang
	sv.ui.ViewTab = Ti.UI.createView({
		left : 0,
		top : Ti.App.size(88),
		height : Ti.App.size(75),
		width : Ti.App.size(640),
		layout : 'horizontal'
	});
	sv.ui.LineTab = Ti.UI.createView({
		left : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(3),
		backgroundColor : Ti.App.Color.red,
		bottom : 0
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.ViewChucNang[i] = Ti.UI.createView({
			width : Ti.App.size(160),
			height : Ti.App.size(72),
			backgroundSelectedColor : Ti.App.Color.red,
			backgroundColor : 'transparent',
		});
		sv.arr.LabelChucNang[i] = Ti.UI.createLabel({
			text : sv.arr.TenChucNang[i],
			font : {
				fontSize : Ti.App.size(30),
				fontWeight : 'bold'
			},
			color : Ti.App.Color.superwhite,
			width : Ti.App.size(160),
			height : Ti.App.size(72),
			//touchEnabled : false,
			textAlign : 'center',
			backgroundColor : 'transparent'
		});
		sv.arr.ViewChucNang[i].add(sv.arr.LabelChucNang[i]);
		sv.ui.ViewTab.add(sv.arr.ViewChucNang[i]);
	}
	/////////
	sv.ui.ViewIconUser.add(sv.ui.IconUser);
	sv.ui.ViewHeader.add(sv.ui.ViewIconUser);

	sv.ui.ViewIconBack.add(sv.ui.IconBack);
	sv.ui.ViewHeader.add(sv.ui.ViewIconBack);

	sv.ui.ViewHeader.add(sv.ui.LabelHeader);
	sv.ui.Win.add(sv.ui.ViewHeader);
	///////
	sv.ui.ViewTab.add(sv.ui.LineTab);
	sv.ui.Win.add(sv.ui.ViewTab);
	tao_sukien(sv);
	sv.ui.Win.addEventListener('open', sv.fu.evtOpenWin);
	for (var i = 0; i < 4; i++) {
		sv.arr.ViewChucNang[i].addEventListener('click', sv.arr.evtChucNang[i]);
	}
}

function tao_sukien(sv) {
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evtChucNang[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 0)
						sv.arr.ViewChucNang[j].backgroundColor = Ti.App.Color.red;
					else {
						sv.arr.ViewChucNang[j].backgroundColor = "transparent";
					}
				}
				Ti.API.info('click 0');
				sv.vari.ViewHT.removeAllEvent();
				sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
				sv.vari.ViewHT = null;
				sv.vari.ViewHT = new (require('/ui-bongda/VLichTD'))();
				sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
			};
		}
		if (i == 1) {
			sv.arr.evtChucNang[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j==1)
						sv.arr.ViewChucNang[j].backgroundColor = Ti.App.Color.red;
					else {
						sv.arr.ViewChucNang[j].backgroundColor = "transparent";
					}
				}
				Ti.API.info('click 1');
				sv.vari.ViewHT.removeAllEvent();
				sv.ui.Win.remove(sv.vari.ViewHT.ui.ViewTong);
				sv.vari.ViewHT = null;
				sv.vari.ViewHT = new (require('/ui-bongda/VTinTuc'))();
				sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
			};
		}
		if (i == 2) {
			sv.arr.evtChucNang[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j==2)
						sv.arr.ViewChucNang[j].backgroundColor = Ti.App.Color.red;
					else {
						sv.arr.ViewChucNang[j].backgroundColor = "transparent";
					}
				}
				Ti.API.info('tu van');
			};
		}
		if (i == 3) {
			sv.arr.evtChucNang[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j==3)
						sv.arr.ViewChucNang[j].backgroundColor = Ti.App.Color.red;
					else {
						sv.arr.ViewChucNang[j].backgroundColor = "transparent";
					}
				}
				Ti.API.info('vip');
			};
		}
	}
	sv.fu.evtOpenWin = function(e) {
		sv.arr.ViewChucNang[0].backgroundColor = Ti.App.Color.red;
		sv.vari.ViewHT = new (require('/ui-bongda/VLichTD'))();
		sv.ui.Win.add(sv.vari.ViewHT.ui.ViewTong);
	};
};

