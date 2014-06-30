module.exports = function(matchid, chunha, khach, date) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, matchid, chunha, khach, date);
	})();
	return sv.ui.winBXH;
};
function createVariable(sv) {

	sv.arr.data = [];
	sv.arr.ViewLabelTySo = [];
	sv.arr.ViewLabelTyLeCuoc = [];
	sv.arr.LabelTySo = [];
	sv.arr.LabelTyLeCuoc = [];
	sv.arr.ParamTySo = ['2 - 1'];
	sv.arr.ParamTyLeCuoc = ['3.8'];
	sv.vari.LabelNameKeo1 = "Kèo Châu Á Online";
	sv.vari.LabelThongTinKeo11 = null;
	sv.vari.LabelThongTinKeo12 = null;
	sv.vari.LabelThongTinKeo13 = null;
	sv.vari.LabelNameKeo2 = "Kèo Châu Á";
	sv.vari.LabelThongTinKeo21 = '';
	sv.vari.LabelThongTinKeo22 = '';
	sv.vari.LabelThongTinKeo23 = '';
	sv.vari.LabelNameKeo3 = "Kèo Châu Âu";
	sv.vari.LabelThongTinKeo31 = '';
	sv.vari.LabelThongTinKeo32 = '';
	sv.vari.LabelThongTinKeo33 = '';
	sv.vari.LabelNameKeo4 = '';
	sv.vari.LabelThongTinKeo41 = '';
	sv.vari.LabelThongTinKeo42 = '';
	sv.vari.LabelThongTinKeo43 = '';
	sv.vari.LabelNameKeo5 = '';
	sv.vari.LabelThongTinKeo51 = '';
	sv.vari.LabelThongTinKeo52 = '';
	sv.vari.SoLuongParamResultBet = 0;

};
function createUI(sv, matchid, chunha, khach, date) {
	sv.ui.winBXH = Titanium.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true,
		// exitOnClose : true,
		orientationModes : [Ti.UI.PORTRAIT],
		keepScreenOn : true,
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.red,
		top : 0,
		left : 0
	});
	sv.ui.winBXH.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "THÔNG TIN KÈO ",
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);

	/////
	sv.ui.View_Back = Titanium.UI.createView({
		width : Ti.App.size(100),
		height : Ti.App.size(100),
		top : 0,
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
	});
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : "/assets/images/icon/arrow.png",
		width : Ti.App.size(22),
		height : Ti.App.size(42),
		// selectedColor : Ti.App.Color.superwhite,
		touchEnabled : false
	});
	sv.ui.View_Back.add(sv.ui.btn_Back);
	///////
	sv.ui.ViewTong = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
		top : Ti.App.size(100),
		left : 0
	});
	sv.ui.winBXH.add(sv.ui.ViewTong);
	sv.ui.ViewChua = Ti.UI.createScrollView({
		// top : 0,
		width : Ti.App.size(720),
		// left : 0,
		// right : 0,
		layout : 'vertical',
		// horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : Ti.App.Color.magenta,
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		// disableBounce : true,
		// horizontalBounce : true,
		height : Ti.UI.FILL,
	});
	sv.ui.ViewTong.add(sv.ui.ViewChua);
	sv.ui.ViewChua.scrollTo(0, 0);
	sv.ui.BGHeader = Ti.UI.createView({
		right : Ti.App.size(0),
		height : Ti.App.size(200),
		// top : Ti.App.size(0),
		left : 0,
		backgroundColor : Ti.App.Color.xanhnhat,
		touchEnabled : false
	});
	sv.ui.IconTime = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-time.png',
		height : Ti.App.size(25),
		left : Ti.App.size(250),
		width : Ti.App.size(25),
		top : Ti.App.size(145 - 120)
	});
	sv.ui.LbGioPhut = Ti.UI.createLabel({
		text : date,
		top : Ti.App.size(145 - 120),
		font : {
			fontSize : Ti.App.size(20),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden,
		left : Ti.App.size(290)
	});

	sv.ui.IconAddress = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-address.png/',
		height : Ti.App.size(30),
		top : Ti.App.size(185 - 120),
		width : Ti.App.size(20),
		left : Ti.App.size(280)
	});

	sv.ui.LbSan = Ti.UI.createLabel({
		text : 'Sân Oftrafox',
		top : Ti.App.size(185 - 120),
		left : Ti.App.size(310),
		font : {
			fontSize : Ti.App.size(20),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'right'
		},
		color : Ti.App.Color.nauden,
	});

	// sv.ui.IconDoiChuNha = Ti.UI.createImageView({
	// image : '/assets/images/1/Manchester-United.png',
	// height : Ti.App.size(115),
	// width : Ti.App.size(115),
	// top : Ti.App.size(50),
	// left : Ti.App.size(50),
	// });
	//
	// sv.ui.IconDoiKhach = Ti.UI.createImageView({
	// image : '/assets/images/1/Chelsea_FC.png',
	// height : Ti.App.size(115),
	// width : Ti.App.size(115),
	// top : Ti.App.size(50),
	// right : Ti.App.size(50),
	// });

	sv.ui.LbVS = Ti.UI.createLabel({
		text : 'VS',
		top : Ti.App.size(100),
		//right : Ti.App.size(0),
		//left : Ti.App.size(0),
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.ViewTenDoiChuNha = Ti.UI.createView({
		top : Ti.App.size(100),
		width : Ti.App.size(240),
		left : Ti.App.size(0),
	});

	sv.ui.ViewTenDoiKhach = Ti.UI.createView({
		top : Ti.App.size(100),
		width : Ti.App.size(240),
		right : Ti.App.size(0),
	});

	sv.ui.LbTenDoiChuNha = Ti.UI.createLabel({
		text : chunha,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.LbTenDoiKhach = Ti.UI.createLabel({
		text : khach,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.LbThongTinKeo = Ti.UI.createLabel({
		text : 'Thông tin kèo',
		// top : Ti.App.size(430),
		height : Ti.App.size(95),
		left : Ti.App.size(40),
		right : Ti.App.size(40),
		font : {
			fontSize : Ti.App.size(28),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden,
		touchEnabled : false
	});

	sv.ui.ViewKeoChauA = Ti.UI.createView({
		// top : Ti.App.size(515),
		width : Ti.App.size(640),
		height : Ti.App.size(165),
		left : Ti.App.size(40),
	});

	sv.ui.ViewHeaderKeoChauA = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(0),
		width : Ti.App.size(640),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelHeaderKeoChauA = Ti.UI.createLabel({
		text : sv.vari.LabelNameKeo1,
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.white
	});

	sv.ui.ViewThongTinKeoChauA = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(60),
		width : Ti.App.size(640),
		height : Ti.App.size(105),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelThongTinKeoChauA1 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo11,
		left : Ti.App.size(90),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinKeoChauA2 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo12,
		left : Ti.App.size(305),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinKeoChauA3 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo13,
		left : Ti.App.size(520),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewTongSoBanThang = Ti.UI.createView({
		// top : Ti.App.size(700),
		width : Ti.App.size(640),
		height : Ti.App.size(165),
		left : Ti.App.size(40),
		touchEnabled : false
	});

	sv.ui.ViewHeaderTongSoBanThang = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(0),
		width : Ti.App.size(640),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelHeaderTongSoBanThang = Ti.UI.createLabel({
		text : sv.vari.LabelNameKeo2,
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.white
	});

	sv.ui.ViewThongTinTongSoBanThang = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(60),
		width : Ti.App.size(640),
		height : Ti.App.size(105),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelThongTinTongSoBanThang1 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo21,
		left : Ti.App.size(90),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinTongSoBanThang2 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo22,
		left : Ti.App.size(305),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinTongSoBanThang3 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo23,
		left : Ti.App.size(520),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewKeoChauAu = Ti.UI.createView({
		// top : Ti.App.size(885),
		width : Ti.App.size(640),
		height : Ti.App.size(165),
		left : Ti.App.size(40),
		touchEnabled : false
	});

	sv.ui.ViewHeaderTyLeChauAu = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(0),
		width : Ti.App.size(640),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelHeaderTyLeChauAu = Ti.UI.createLabel({
		text : sv.vari.LabelNameKeo3,
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.white
	});

	sv.ui.ViewThongTinKeoChauAu = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(60),
		width : Ti.App.size(640),
		height : Ti.App.size(105),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelThongTinKeoChauAu1 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo31,
		left : Ti.App.size(90),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinKeoChauAu2 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo32,
		left : Ti.App.size(305),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinKeoChauAu3 = Ti.UI.createLabel({
		text : sv.vari.LabelThongTinKeo33,
		left : Ti.App.size(520),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewTyLeAn = Ti.UI.createView({
		// top : Ti.App.size(1075),
		width : Ti.App.size(640),
		height : Ti.App.size(165),
		left : Ti.App.size(40),
		touchEnabled : false
	});

	sv.ui.ViewHeaderTyLeAn = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(0),
		width : Ti.App.size(640),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelHeaderTyLeAn1 = Ti.UI.createLabel({
		text : 'Chủ nhà thắng',
		left : Ti.App.size(35),
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white
	});

	sv.ui.LabelHeaderTyLeAn2 = Ti.UI.createLabel({
		text : 'Hoà',
		//left : Ti.App.size(330),
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white
	});

	sv.ui.LabelHeaderTyLeAn3 = Ti.UI.createLabel({
		text : 'Khách thắng',
		left : Ti.App.size(460),
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white
	});

	sv.ui.ViewThongTinTyLeAn = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(60),
		width : Ti.App.size(640),
		height : Ti.App.size(105),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelThongTinTyLeAn1 = Ti.UI.createLabel({
		text : '',
		left : Ti.App.size(90),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinTyLeAn2 = Ti.UI.createLabel({
		text : '',
		// left : Ti.App.size(305),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.LabelThongTinTyLeAn3 = Ti.UI.createLabel({
		text : '',
		left : Ti.App.size(520),
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewCaCuocTySo = Ti.UI.createView({
		// top : Ti.App.size(1260),
		width : Ti.App.size(640),
		height : Ti.App.size(460),
		left : Ti.App.size(40),
	});

	sv.ui.ViewHeaderCaCuocTySo = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		top : Ti.App.size(0),
		width : Ti.App.size(640),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.ViewLabelHeaderCacCuocTySo1 = Ti.UI.createView({
		top : Ti.App.size(0),
		width : Ti.App.size(320),
		height : Ti.App.size(60),
		left : Ti.App.size(0),
		touchEnabled : false
	});

	sv.ui.LabelHeaderCacCuocTySo1 = Ti.UI.createLabel({
		text : 'Tỷ số',
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white
	});

	sv.ui.ViewLabelHeaderCacCuocTySo2 = Ti.UI.createView({
		top : Ti.App.size(0),
		width : Ti.App.size(320),
		height : Ti.App.size(60),
		left : Ti.App.size(320),
		touchEnabled : false
	});

	sv.ui.LabelHeaderCacCuocTySo2 = Ti.UI.createLabel({
		text : 'Tỷ lệ cược',
		font : {
			fontSize : Ti.App.size(24),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white
	});

	sv.ui.TableViewThongTinCaCuocTySo = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(60),
		left : 0,
		height : Ti.UI.SIZE,
		width : Ti.App.size(640),
		separatorColor : Ti.App.Color.magenta,
		scrollable : true,
		// left : Ti.App.size(40),
	});

	GetMatchRatio(sv, "getmatchratio", {
		"matchid" : matchid
	});
	Ti.API.info('SoLuongParamResultBet : ', sv.vari.SoLuongParamResultBet);
	Ti.API.info('than xuan son');

	/*
	 *
	 */
	tao_event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winBXH.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winBXH.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winBXH.addEventListener('android:back', sv.fu.event_androidback);
	///////////

	sv.ui.BGHeader.add(sv.ui.LbGioPhut);
	// sv.ui.BGHeader.add(sv.ui.IconAddress);
	// sv.ui.BGHeader.add(sv.ui.LbSan);
	sv.ui.BGHeader.add(sv.ui.IconTime);
	// sv.ui.BGHeader.add(sv.ui.IconDoiChuNha);
	// sv.ui.BGHeader.add(sv.ui.IconDoiKhach);
	sv.ui.BGHeader.add(sv.ui.LbVS);
	sv.ui.BGHeader.add(sv.ui.ViewTenDoiChuNha);
	sv.ui.BGHeader.add(sv.ui.ViewTenDoiKhach);

	sv.ui.ViewTenDoiChuNha.add(sv.ui.LbTenDoiChuNha);
	sv.ui.ViewTenDoiKhach.add(sv.ui.LbTenDoiKhach);

	sv.ui.ViewKeoChauA.add(sv.ui.ViewHeaderKeoChauA);
	sv.ui.ViewKeoChauA.add(sv.ui.ViewThongTinKeoChauA);
	sv.ui.ViewHeaderKeoChauA.add(sv.ui.LabelHeaderKeoChauA);
	sv.ui.ViewThongTinKeoChauA.add(sv.ui.LabelThongTinKeoChauA1);
	sv.ui.ViewThongTinKeoChauA.add(sv.ui.LabelThongTinKeoChauA2);
	sv.ui.ViewThongTinKeoChauA.add(sv.ui.LabelThongTinKeoChauA3);

	sv.ui.ViewTongSoBanThang.add(sv.ui.ViewHeaderTongSoBanThang);
	sv.ui.ViewTongSoBanThang.add(sv.ui.ViewThongTinTongSoBanThang);
	sv.ui.ViewHeaderTongSoBanThang.add(sv.ui.LabelHeaderTongSoBanThang);
	sv.ui.ViewThongTinTongSoBanThang.add(sv.ui.LabelThongTinTongSoBanThang1);
	sv.ui.ViewThongTinTongSoBanThang.add(sv.ui.LabelThongTinTongSoBanThang2);
	sv.ui.ViewThongTinTongSoBanThang.add(sv.ui.LabelThongTinTongSoBanThang3);

	sv.ui.ViewKeoChauAu.add(sv.ui.ViewHeaderTyLeChauAu);
	sv.ui.ViewKeoChauAu.add(sv.ui.ViewThongTinKeoChauAu);
	sv.ui.ViewHeaderTyLeChauAu.add(sv.ui.LabelHeaderTyLeChauAu);
	sv.ui.ViewThongTinKeoChauAu.add(sv.ui.LabelThongTinKeoChauAu1);
	sv.ui.ViewThongTinKeoChauAu.add(sv.ui.LabelThongTinKeoChauAu2);
	sv.ui.ViewThongTinKeoChauAu.add(sv.ui.LabelThongTinKeoChauAu3);

	sv.ui.ViewTyLeAn.add(sv.ui.ViewHeaderTyLeAn);
	sv.ui.ViewTyLeAn.add(sv.ui.ViewThongTinTyLeAn);
	sv.ui.ViewHeaderTyLeAn.add(sv.ui.LabelHeaderTyLeAn1);
	sv.ui.ViewHeaderTyLeAn.add(sv.ui.LabelHeaderTyLeAn2);
	sv.ui.ViewHeaderTyLeAn.add(sv.ui.LabelHeaderTyLeAn3);
	sv.ui.ViewThongTinTyLeAn.add(sv.ui.LabelThongTinTyLeAn1);
	sv.ui.ViewThongTinTyLeAn.add(sv.ui.LabelThongTinTyLeAn2);
	sv.ui.ViewThongTinTyLeAn.add(sv.ui.LabelThongTinTyLeAn3);

	sv.ui.ViewCaCuocTySo.add(sv.ui.ViewHeaderCaCuocTySo);
sv.ui.ViewCaCuocTySo.add(sv.ui.TableViewThongTinCaCuocTySo);
	sv.ui.ViewHeaderCaCuocTySo.add(sv.ui.ViewLabelHeaderCacCuocTySo1);
	sv.ui.ViewHeaderCaCuocTySo.add(sv.ui.ViewLabelHeaderCacCuocTySo2);
	sv.ui.ViewLabelHeaderCacCuocTySo1.add(sv.ui.LabelHeaderCacCuocTySo1);
	sv.ui.ViewLabelHeaderCacCuocTySo2.add(sv.ui.LabelHeaderCacCuocTySo2);
	/////////
	sv.ui.ViewChua.add(sv.ui.BGHeader);
	sv.ui.ViewChua.add(sv.ui.LbThongTinKeo);
	sv.ui.ViewChua.add(sv.ui.ViewKeoChauA);
	sv.ui.ViewChua.add(sv.ui.ViewTongSoBanThang);
	sv.ui.ViewChua.add(sv.ui.ViewKeoChauAu);
	sv.ui.ViewChua.add(sv.ui.ViewTyLeAn);
	sv.ui.ViewChua.add(sv.ui.ViewCaCuocTySo);
	
}

function tao_event(sv) {
	sv.fu.event_androidback = function(e) {
		sv.ui.winBXH.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winBXH.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winBXH.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winBXH.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.btn_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winBXH.removeEventListener('android:back', sv.fu.event_androidback);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

function GetMatchRatio(sv, _cmd, data) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
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
		Ti.API.info('du lieu la : ', jsonResuilt.match);
		if (jsonResuilt.match.aisia_onl_betting.length != 0) {
			// sv.ui.LabelHeaderKeoChauA.text = jsonResuilt.match.aisia_onl_betting[0].betname.toString();
			sv.ui.LabelThongTinKeoChauA1.text = jsonResuilt.match.aisia_onl_betting[0].guest.toString();
			sv.ui.LabelThongTinKeoChauA2.text = jsonResuilt.match.aisia_onl_betting[0].owner.toString();
			sv.ui.LabelThongTinKeoChauA3.text = jsonResuilt.match.aisia_onl_betting[0].ratio.toString();
		}

		if (jsonResuilt.match.aisiabe_betting.length != 0) {
			// sv.ui.LabelHeaderTongSoBanThang.text = jsonResuilt.match.aisiabe_betting[0].betname.toString();
			sv.ui.LabelThongTinTongSoBanThang1.text = jsonResuilt.match.aisiabe_betting[0].guest.toString();
			sv.ui.LabelThongTinTongSoBanThang2.text = jsonResuilt.match.aisiabe_betting[0].owner.toString();
			sv.ui.LabelThongTinTongSoBanThang3.text = jsonResuilt.match.aisiabe_betting[0].ratio.toString();
		}

		if (jsonResuilt.match.euro_betting.length != 0) {
			// sv.ui.LabelHeaderTyLeChauAu.text = jsonResuilt.match.euro_betting[0].betname.toString();
			sv.ui.LabelThongTinKeoChauAu1.text = jsonResuilt.match.euro_betting[0].guest.toString();
			sv.ui.LabelThongTinKeoChauAu2.text = jsonResuilt.match.euro_betting[0].owner.toString();
			sv.ui.LabelThongTinKeoChauAu3.text = jsonResuilt.match.euro_betting[0].ratio.toString();
		}

		// sv.ui.LabelHeaderTyLeChauAu.text = jsonResuilt.match.euro_betting[0].betname.toString();
		// sv.ui.LabelThongTinKeoChauAu1.text = jsonResuilt.match.euro_betting[0].guest.toString();
		// sv.ui.LabelThongTinKeoChauAu2.text = jsonResuilt.match.euro_betting[0].owner.toString();
		// sv.ui.LabelThongTinKeoChauAu3.text = jsonResuilt.match.euro_betting[0].ratio.toString();

		if (jsonResuilt.match.taixiu.length != 0) {
			sv.ui.LabelThongTinTyLeAn1.text = jsonResuilt.match.taixiu[0].tai.toString();
			sv.ui.LabelThongTinTyLeAn2.text = jsonResuilt.match.taixiu[0].totalgoal.toString();
			sv.ui.LabelThongTinTyLeAn3.text = jsonResuilt.match.taixiu[0].xiu.toString();
		}

		sv.vari.SoLuongParamResultBet = jsonResuilt.match.resultbet.length;
		Ti.API.info('SoLuongParamResultBet : ', sv.vari.SoLuongParamResultBet);

		for (var i = 0; i < sv.vari.SoLuongParamResultBet; i++) {
			sv.arr.ParamTySo[i] = jsonResuilt.match.resultbet[i].ti_so.toString();
			sv.arr.ParamTyLeCuoc[i] = jsonResuilt.match.resultbet[i].ti_le.toString();
			Ti.API.info('Param : ', i, ' ', sv.arr.ParamTySo[i], ' ', sv.arr.ParamTyLeCuoc[i]);
		}
		for (var i = 0; i < sv.vari.SoLuongParamResultBet; i++) {
			var row = Ti.UI.createTableViewRow({
				width : Ti.App.size(640),
				height : Ti.App.size(80),
				left : 0,
				id : i,
				backgroundSelectedColor : 'black'
			});

			sv.arr.ViewLabelTySo[i] = Ti.UI.createView({
				top : Ti.App.size(0),
				width : Ti.App.size(320),
				height : Ti.App.size(80),
				left : Ti.App.size(0),
			});

			row.add(sv.arr.ViewLabelTySo[i]);

			sv.arr.LabelTySo[i] = Ti.UI.createLabel({
				text : sv.arr.ParamTySo[i],
				font : {
					fontSize : Ti.App.size(26),
					fontWeight : 'bold',
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.nauden
			});

			sv.arr.ViewLabelTySo[i].add(sv.arr.LabelTySo[i]);

			sv.arr.ViewLabelTyLeCuoc[i] = Ti.UI.createView({
				top : Ti.App.size(0),
				width : Ti.App.size(320),
				height : Ti.App.size(80),
				left : Ti.App.size(320),
			});

			row.add(sv.arr.ViewLabelTyLeCuoc[i]);

			sv.arr.LabelTyLeCuoc[i] = Ti.UI.createLabel({
				text : sv.arr.ParamTyLeCuoc[i],
				font : {
					fontSize : Ti.App.size(26),
					fontWeight : 'bold',
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.nauden
			});

			sv.arr.ViewLabelTyLeCuoc[i].add(sv.arr.LabelTyLeCuoc[i]);

			sv.arr.data.push(row);
		}
		sv.ui.TableViewThongTinCaCuocTySo.setData(sv.arr.data);

	};
}

