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

function createVariable(sv) {

}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(120),
		left : 0
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'CÁ CƯỢC',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.BGHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		right : Ti.App.size(0),
		height : Ti.App.size(430),
		top : Ti.App.size(0),
		left : 0
	});

	sv.ui.LbNgayThang = Ti.UI.createLabel({
		text : '23/04/2014',
		top : Ti.App.size(145 - 120),
		right : Ti.App.size(365),
		left : Ti.App.size(245),
		font : {
			fontSize : Ti.App.size(16),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'right'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.LbGioPhut = Ti.UI.createLabel({
		text : '19:00',
		top : Ti.App.size(145 - 120),
		left : Ti.App.size(405),
		right : 0,
		font : {
			fontSize : Ti.App.size(16),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.IconAddress = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-address.png/',
		height : Ti.App.size(30),
		right : Ti.App.size(510),
		left : Ti.App.size(190),
		top : Ti.App.size(185 - 120)
	});

	sv.ui.LbSan = Ti.UI.createLabel({
		text : 'Sân Oftrafox',
		top : Ti.App.size(185 - 120),
		right : Ti.App.size(355),
		left : Ti.App.size(220),
		font : {
			fontSize : Ti.App.size(16),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'right'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.IconTime = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-time.png',
		height : Ti.App.size(25),
		left : Ti.App.size(400),
		width : Ti.App.size(25),
		top : Ti.App.size(185 - 120)
	});

	sv.ui.LbThoiGian = Ti.UI.createLabel({
		text : 'Còn 45p',
		top : Ti.App.size(185 - 120),
		right : Ti.App.size(0),
		left : Ti.App.size(435),
		font : {
			fontSize : Ti.App.size(16),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.IconDoiChuNha = Ti.UI.createImageView({
		image : '/assets/images/1/Manchester-United.png',
		height : Ti.App.size(180),
		width : Ti.App.size(180),
		top : Ti.App.size(160),
		left : Ti.App.size(50),
	});

	sv.ui.IconDoiKhach = Ti.UI.createImageView({
		image : '/assets/images/1/Chelsea_FC.png',
		height : Ti.App.size(180),
		width : Ti.App.size(180),
		top : Ti.App.size(160),
		right : Ti.App.size(50),
	});

	sv.ui.LbVS = Ti.UI.createLabel({
		text : 'VS',
		top : Ti.App.size(335 - 120),
		//right : Ti.App.size(0),
		//left : Ti.App.size(0),
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.xanhnhat,
	});

	sv.ui.ViewTenDoiChuNha = Ti.UI.createView({
		top : Ti.App.size(460 - 120),
		width : Ti.App.size(200),
		left : Ti.App.size(40),
	});

	sv.ui.ViewTenDoiKhach = Ti.UI.createView({
		top : Ti.App.size(460 - 120),
		width : Ti.App.size(200),
		right : Ti.App.size(40),
	});

	sv.ui.LbTenDoiChuNha = Ti.UI.createLabel({
		text : 'Manchester United',
		font : {
			fontSize : Ti.App.size(18),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.LbTenDoiKhach = Ti.UI.createLabel({
		text : 'Chelsea',
		font : {
			fontSize : Ti.App.size(18),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.LbThongTinKeo = Ti.UI.createLabel({
		text : 'Thông tin kèo',
		top : Ti.App.size(430),
		height : Ti.App.size(95),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
		font : {
			fontSize : Ti.App.size(28),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
	});

	sv.ui.ViewKeo = Ti.UI.createView({
		top : Ti.App.size(525),
		height : Ti.App.size(300),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
		borderColor : Ti.App.Color.xanhnhat,
		backgroundColor : Ti.App.Color.superwhite,
		borderWidth : 1,
	});

	sv.ui.KeoChauA = Ti.UI.createLabel({
		text : 'Châu Á',
		top : Ti.App.size(40),
		left : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(22)
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Label11 = Ti.UI.createLabel({
		text : '1.5',
		top : Ti.App.size(15),
		left : Ti.App.size(205),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.xanhnhat,
	});

	sv.ui.Label12 = Ti.UI.createLabel({
		text : '1.09',
		left : Ti.App.size(205),
		top : Ti.App.size(60),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.red,
	});

	sv.ui.Label13 = Ti.UI.createLabel({
		text : '0.83',
		top : Ti.App.size(60),
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Line1 = Ti.UI.createImageView({
		width : Ti.App.size(630),
		height : Ti.App.size(1),
		top : Ti.App.size(99),
		backgroudnColor : Ti.App.Color.xanhnhat,
	});

	sv.ui.KeoTaiXiu = Ti.UI.createLabel({
		text : 'Tài Xỉu',
		top : Ti.App.size(140),
		left : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(22)
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Label21 = Ti.UI.createLabel({
		text : '1.5',
		top : Ti.App.size(115),
		left : Ti.App.size(205),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.xanhnhat,
	});

	sv.ui.Label22 = Ti.UI.createLabel({
		text : '1.00',
		left : Ti.App.size(205),
		top : Ti.App.size(160),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.red,
	});

	sv.ui.Label23 = Ti.UI.createLabel({
		text : '0.90',
		top : Ti.App.size(160),
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Label24 = Ti.UI.createLabel({
		text : 'u',
		top : Ti.App.size(115),
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.xanhnhat,
	});

	sv.ui.Line2 = Ti.UI.createImageView({
		width : Ti.App.size(630),
		height : Ti.App.size(1),
		top : Ti.App.size(199),
		backgroudnColor : Ti.App.Color.xanhnhat,
	});

	sv.ui.KeoChauAu = Ti.UI.createLabel({
		text : 'Châu Âu',
		top : Ti.App.size(240),
		left : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(22),
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Label31 = Ti.UI.createLabel({
		text : '1.34',
		top : Ti.App.size(240),
		left : Ti.App.size(205),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.xanhnhat,
	});

	sv.ui.Label32 = Ti.UI.createLabel({
		text : '4.56',
		left : Ti.App.size(360),
		top : Ti.App.size(240),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.red,
	});

	sv.ui.Label33 = Ti.UI.createLabel({
		text : '8.69',
		top : Ti.App.size(240),
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.LbThongTinCuoc = Ti.UI.createLabel({
		text : 'Thông tin cược',
		top : Ti.App.size(825),
		height : Ti.App.size(95),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
		font : {
			fontSize : Ti.App.size(28),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
	});

	sv.ui.TfTienCuoc = Ti.UI.createTextField({
		height : Ti.App.size(95),
		top : Ti.App.size(920),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
		hintText : 'Nhập số tiền bạn đặt cược',
		backgroundColor : Ti.App.Color.superwhite,
		borderColor : Ti.App.Color.xanhnhat,
		borderWidth : Ti.App.size(1),
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			fontColor : Ti.App.Color.magenta,
		},
	});

	sv.ui.BtXacNhan = Ti.UI.createView({
		backgroundColor : Ti.App.Color.xanhnhat,
		top : Ti.App.size(1040),
		height : Ti.App.size(95),
		right : Ti.App.size(40),
		left : Ti.App.size(40)
	});

	sv.ui.LbXacNhan = Ti.UI.createLabel({
		text : 'XÁC NHẬN',
		font : {
			fontSize : Ti.App.size(35),
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white,
	});

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);

	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	sv.ui.ViewTong.add(sv.ui.LbThongTinKeo);
	sv.ui.ViewTong.add(sv.ui.ViewKeo);
	sv.ui.ViewTong.add(sv.ui.LbThongTinCuoc);
	sv.ui.ViewTong.add(sv.ui.TfTienCuoc);
	sv.ui.ViewTong.add(sv.ui.BtXacNhan);

	sv.ui.BGHeader.add(sv.ui.LbNgayThang);
	sv.ui.BGHeader.add(sv.ui.LbGioPhut);
	sv.ui.BGHeader.add(sv.ui.IconAddress);
	sv.ui.BGHeader.add(sv.ui.LbSan);
	sv.ui.BGHeader.add(sv.ui.IconTime);
	sv.ui.BGHeader.add(sv.ui.LbThoiGian);
	sv.ui.BGHeader.add(sv.ui.IconDoiChuNha);
	sv.ui.BGHeader.add(sv.ui.IconDoiKhach);
	sv.ui.BGHeader.add(sv.ui.LbVS);
	sv.ui.BGHeader.add(sv.ui.ViewTenDoiChuNha);
	sv.ui.BGHeader.add(sv.ui.ViewTenDoiKhach);

	sv.ui.ViewTenDoiChuNha.add(sv.ui.LbTenDoiChuNha);
	sv.ui.ViewTenDoiKhach.add(sv.ui.LbTenDoiKhach);

	sv.ui.ViewKeo.add(sv.ui.KeoChauA);
	sv.ui.ViewKeo.add(sv.ui.Label11);
	sv.ui.ViewKeo.add(sv.ui.Label12);
	sv.ui.ViewKeo.add(sv.ui.Label13);
	sv.ui.ViewKeo.add(sv.ui.Line1);
	sv.ui.ViewKeo.add(sv.ui.KeoTaiXiu);
	sv.ui.ViewKeo.add(sv.ui.Label21);
	sv.ui.ViewKeo.add(sv.ui.Label22);
	sv.ui.ViewKeo.add(sv.ui.Label23);
	sv.ui.ViewKeo.add(sv.ui.Label24);
	sv.ui.ViewKeo.add(sv.ui.Line2);
	sv.ui.ViewKeo.add(sv.ui.KeoChauAu);
	sv.ui.ViewKeo.add(sv.ui.Label31);
	sv.ui.ViewKeo.add(sv.ui.Label32);
	sv.ui.ViewKeo.add(sv.ui.Label33);

	sv.ui.BtXacNhan.add(sv.ui.LbXacNhan);
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}
