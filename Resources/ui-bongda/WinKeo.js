module.exports = function(tourid, season, logo) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
		thongtinTD(sv);
	})();

	return sv;
};
///tao bien
function createVariable(sv) {
	sv.vari.ViewKeoChauA = null;
	sv.vari.ViewKeoChauAu = null;
	sv.vari.ViewTySo = null;
}

////tao ui
function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	sv.ui.winKeo = Titanium.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});
	sv.ui.winKeo.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header1 = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "Thông tin kèo", //+ season,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Header1);

	/////
	sv.ui.View_Back = customButton({
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		left : 0,
		width : Ti.App.size(140),
		height : Ti.App.size(90),
	});

	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	// sv.ui.ViewIconUser = customButton({
	// backgroundColor : 'transparent',
	// backgroundSelectedColor : Ti.App.Color.xanhnhat,
	// right : 0,
	// width : Ti.App.size(140),
	// height : Ti.App.size(90),
	// });
	// sv.ui.IconUser = Ti.UI.createImageView({
	// image : '/assets/icon/icon_account.png',
	// touchEnabled : false,
	// width : Ti.App.size(54),
	// height : Ti.App.size(54)
	// });
	// sv.ui.ViewIconUser.add(sv.ui.IconUser);
	// sv.ui.ViewHeader.add(sv.ui.ViewIconUser);
	///////
	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(86),
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.App.size(640)
	});
	sv.ui.winKeo.add(sv.ui.ViewTong);
	/////////view thong tin tran dau
	sv.ui.ViewChuaThongTin = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(240),
		left : 0,
		top : 0,
		backgroundImage : "/assets/icon/bg_bet_info.png"
	});
	sv.ui.ViewTranDau = Ti.UI.createView({
		width : Ti.App.size(610),
		height : Ti.App.size(220),
		backgroundColor : "transparent",
		top : Ti.App.size(10),
		touchEnabled : false
	});
	// sv.ui.ViewNen=Ti.UI.createView({
	// width : Ti.App.size(610),
	// height : Ti.App.size(220),
	// backgroundColor : "tans",
	// top : 0,
	// zIndex:10
	// });
	sv.ui.ViewTranDau.add(Ti.UI.createView({
		width : "100%",
		height : "100%",
		zIndex : 0,
		opacity : 0.8,
		backgroundColor : "black"
	}));
	////
	sv.ui.IconGiaiDau = Titanium.UI.createImageView({
		width : Ti.App.size(50),
		height : Ti.App.size(45),
		left : Ti.App.size(20),
		touchEnabled : false,
		top : Ti.App.size(10),
	});
	sv.ui.TenGiaiDau = Titanium.UI.createLabel({
		top : Ti.App.size(10),
		left : Ti.App.size(90),
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false,
	});
	sv.ui.IconDoi1 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		left : Ti.App.size(10)
	});
	sv.ui.TenDoi1 = Ti.UI.createLabel({
		left : Ti.App.size(70),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(170)
	});
	////
	sv.ui.IconDoi2 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		right : Ti.App.size(10)
	});
	sv.ui.TenDoi2 = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.superwhite,
		// left : Ti.App.size(465),
		top : Ti.App.size(170),
		right : Ti.App.size(63)
	});
	sv.ui.TySo = Ti.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		},
		top : Ti.App.size(100)
	});
	sv.ui.IconLive = Titanium.UI.createImageView({
		right : Ti.App.size(75),
		width : Ti.App.size(45),
		height : Ti.App.size(20),
		image : "/assets/icon/icon_live.png",
		touchEnabled : false,
		top : Ti.App.size(15)
	});
	sv.ui.lblPhut = Titanium.UI.createLabel({
		right : Ti.App.size(10),
		height : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false,
		top : Ti.App.size(10)
	});
	sv.ui.ThoiGian = Titanium.UI.createLabel({
		color : Ti.App.Color.brown,
		font : {
			fontSize : Ti.App.size(15)
		},
		width : Ti.App.size(640),
		height : Ti.App.size(25),
		textAlign : 'center',
		top : Ti.App.size(65)
	});
	sv.ui.lineView1 = Titanium.UI.createImageView({
		width : Ti.App.size(2),
		height : Ti.App.size(100),
		left : Ti.App.size(225),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		top : Ti.App.size(65)
	});
	sv.ui.lineView2 = Titanium.UI.createImageView({
		width : Ti.App.size(2),
		height : Ti.App.size(100),
		right : Ti.App.size(225),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		top : Ti.App.size(65)
		// top : Ti.App.size(35)
		// backgroundColor : Ti.App.Color.brown,
	});

	//////
	sv.ui.ViewChuaKeo = Ti.UI.createScrollView({
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		left : 0,
		backgroundColor : 'transparent',
		top : Ti.App.size(240),
		layout : 'vertical'
	});
	//////
	sv.ui.ViewTranDau.add(sv.ui.IconLive);
	sv.ui.ViewTranDau.add(sv.ui.lblPhut);
	sv.ui.ViewTranDau.add(sv.ui.lineView1);
	sv.ui.ViewTranDau.add(sv.ui.lineView2);
	sv.ui.ViewTranDau.add(sv.ui.IconGiaiDau);
	sv.ui.ViewTranDau.add(sv.ui.TenGiaiDau);
	sv.ui.ViewTranDau.add(sv.ui.IconDoi1);
	sv.ui.ViewTranDau.add(sv.ui.IconDoi2);
	sv.ui.ViewTranDau.add(sv.ui.TySo);
	sv.ui.ViewTranDau.add(sv.ui.ThoiGian);
	sv.ui.ViewTranDau.add(sv.ui.TenDoi1);
	sv.ui.ViewTranDau.add(sv.ui.TenDoi2);
	sv.ui.ViewChuaThongTin.add(sv.ui.ViewTranDau);
	sv.ui.ViewTong.add(sv.ui.ViewChuaThongTin);
	sv.ui.ViewTong.add(sv.ui.ViewChuaKeo);
	///////
	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winKeo.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winKeo.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winKeo.addEventListener('android:back', sv.fu.event_androidback);
};
function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winKeo.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winKeo.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window keo');
		// Ti.App.g_IndicatorWindow.openIndicator(sv.ui.winKeo);
		// setTimeout(function() {
		// Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.winKeo);
		// }, 1000);
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winKeo.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winKeo.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.winKeo.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winKeo.removeEventListener('android:back', sv.fu.event_androidback);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window keo, sv=' + sv);
	};

}

function thongtinTD(sv) {
	sv.setThongTinTD = function(param, tourname, img) {
		sv.ui.TenDoi1.text = param.ownerID;
		sv.ui.TenDoi2.text = param.guestID;
		if (param.trangthai == "Playing") {
			sv.ui.TySo.text = param.result;
			sv.ui.ThoiGian.text = param.date;
			sv.ui.IconLive.setVisible(true);
			sv.ui.lblPhut.setText(param.sophut);
		} else {
			sv.ui.TySo.text = "VS";
			sv.ui.ThoiGian.text = param.date;
			sv.ui.IconLive.setVisible(false);
		}

		sv.ui.TenGiaiDau.text = tourname;
		sv.ui.IconGiaiDau.image = img;
		GetMatchRatio(sv, {
			"matchid" : param.id
		}, param.ownerID, param.guestID);
	};
};
function ViewKeo() {
	var VKeo = Ti.UI.createView({
		width : Ti.App.size(620),
		height : Ti.App.size(305),
		left : Ti.App.size(10),
		borderRadius : Ti.App.size(5),
		// backgroundColor : 'brown',
		top : Ti.App.size(18),
		backgroundImage : "/assets/icon/bet_bg1.png"
	});
	var VHeader = Ti.UI.createView({
		width : Ti.App.size(620),
		height : Ti.App.size(80),
		left : 0,
		top : 0,
		backgroundColor : "transparent"
	});
	VKeo.add(VHeader);
	var TenKeo = Ti.UI.createLabel({
		left : Ti.App.size(60),
		width : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		font : {
			fontWeight : 'bold',
			fontSize : Ti.App.size(30)
		}
	});
	VHeader.add(TenKeo);
	var bet_icon = Ti.UI.createImageView({
		width : Ti.App.size(14),
		height : Ti.App.size(14),
		touchEnabled : false,
		backgroundImage : '/assets/icon/icon_bet_open.png',
		left : Ti.App.size(10)
	});
	VHeader.add(bet_icon);
	var arrow = Ti.UI.createImageView({
		width : Ti.App.size(40),
		height : Ti.App.size(40),
		touchEnabled : false,
		backgroundImage : '/assets/icon/icon_up_arrow.png',
		right : Ti.App.size(50)
	});
	VHeader.add(arrow);
	///////////
	var Row1 = Titanium.UI.createView({
		width : Ti.App.size(620),
		left : 0,
		height : Ti.App.size(75),
		top : Ti.App.size(80)
	});
	var TenDoi1 = Ti.UI.createLabel({
		left : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	var tyle1 = Ti.UI.createLabel({
		right : Ti.App.size(20),
		color : "yellow",
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	Row1.add(tyle1);
	Row1.add(TenDoi1);
	VKeo.add(Row1);
	//////////
	var Row2 = Titanium.UI.createView({
		width : Ti.App.size(620),
		left : 0,
		height : Ti.App.size(75),
		top : Ti.App.size(155)
	});
	var TyLe = Ti.UI.createLabel({
		left : Ti.App.size(20),
		text : "Tỷ lệ",
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	var tyle2 = Ti.UI.createLabel({
		right : Ti.App.size(20),
		color : "yellow",
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	Row2.add(tyle2);
	Row2.add(TyLe);
	VKeo.add(Row2);
	/////////
	var Row3 = Titanium.UI.createView({
		width : Ti.App.size(620),
		left : 0,
		height : Ti.App.size(75),
		top : Ti.App.size(240)
	});
	var TenDoi2 = Ti.UI.createLabel({
		left : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	var tyle3 = Ti.UI.createLabel({
		right : Ti.App.size(20),
		color : "yellow",
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE
	});
	Row3.add(tyle3);
	Row3.add(TenDoi2);
	VKeo.add(Row3);
	////////
	VKeo.setPos = function(tenKeo, param, tendoi1, tendoi2) {
		TenKeo.setText(tenKeo);
		TenDoi1.setText(tendoi1);
		TenDoi2.setText(tendoi2);
		tyle1.setText(param.owner);
		tyle2.setText(param.ratio);
		tyle3.setText(param.guest);
	};
	return VKeo;
};
function ViewTySo() {
	var VTySo = Ti.UI.createView({
		width : Ti.App.size(620),
		height : Ti.App.size(530),
		left : Ti.App.size(10),
		borderRadius : Ti.App.size(5),
		backgroundColor : "#413839",
		top : Ti.App.size(18),
		// borderColor:Ti.App.Color.superwhite
	});
	var VHeader = Ti.UI.createView({
		width : Ti.App.size(620),
		height : Ti.App.size(80),
		left : 0,
		top : 0,
		backgroundImage : "/assets/icon/bet_bar.png"
	});
	VTySo.add(VHeader);
	var TenKeo = Ti.UI.createLabel({
		left : Ti.App.size(60),
		width : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		font : {
			fontWeight : 'bold',
			fontSize : Ti.App.size(30)
		},
		text : "Kèo Tỷ Số"
	});
	VHeader.add(TenKeo);
	var bet_icon = Ti.UI.createImageView({
		width : Ti.App.size(14),
		height : Ti.App.size(14),
		touchEnabled : false,
		backgroundImage : '/assets/icon/icon_bet_open.png',
		left : Ti.App.size(10)
	});
	VHeader.add(bet_icon);
	var arrow = Ti.UI.createImageView({
		width : Ti.App.size(40),
		height : Ti.App.size(40),
		touchEnabled : false,
		backgroundImage : '/assets/icon/icon_up_arrow.png',
		right : Ti.App.size(50)
	});
	VHeader.add(arrow);
	var tableView = Ti.UI.createTableView({
		top : Ti.App.size(80),
		backgroundColor : 'transparent',
		separatorColor : Ti.App.Color.brown,
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.App.size(640),
		showVerticalScrollIndicator : 'true',
	});
	VTySo.add(tableView);
	var rows = [];
	VTySo.setTyLe = function(param) {
		// VTySo.setHeight(Ti.App.size(param.length*75));
		// VTySo.setTop(_top);
		for (var i = 0; i < (param.length); i++) {
			rows[i] = Ti.UI.createTableViewRow({
				width : Ti.App.size(640),
				height : Ti.App.size(75),
				color : Ti.App.Color.superwhite,
				font : {
					fontSize : Ti.App.size(25)
				},
				title : "Tỷ lệ: " + param[i].ti_le + " - " + "Tỉ số: " + param[i].ti_so,
				center : "true",
				left : Ti.App.size(20)

			});
		}
		tableView.setData(rows);
	};

	return VTySo;
}

function GetMatchRatio(sv, data, tendoi1, tendoi2) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=getmatchratio');
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
		///////
		Ti.App.g_IndicatorWindow.openIndicator(sv.ui.winKeo);
		sv.ui.ViewChuaKeo.setVisible(false);
		sv.ui.ViewChuaKeo.setTouchEnabled(false);
		setTimeout(function() {
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.winKeo);
			sv.ui.ViewChuaKeo.setVisible(true);
			sv.ui.ViewChuaKeo.setTouchEnabled(true);
		}, 1000);
		if (jsonResuilt.match.aisiabe_betting[0]) {
			sv.vari.ViewKeoChauA = ViewKeo();
			sv.vari.ViewKeoChauA.setPos("Kèo Châu Á", jsonResuilt.match.aisiabe_betting[0], tendoi1, tendoi2);
			sv.ui.ViewChuaKeo.add(sv.vari.ViewKeoChauA);
		}
		if (jsonResuilt.match.euro_betting[0]) {
			sv.vari.ViewKeoChauA = ViewKeo();
			sv.vari.ViewKeoChauA.setPos("Kèo Châu Âu", jsonResuilt.match.euro_betting[0], tendoi1, tendoi2);
			sv.ui.ViewChuaKeo.add(sv.vari.ViewKeoChauA);
		}
		if (jsonResuilt.match.taixiu.length > 0) {
			sv.vari.ViewTaiXiu = ViewKeo();
			sv.vari.ViewTaiXiu.setPos("Tài xỉu", jsonResuilt.match.taixiu[0], tendoi1, tendoi2);
			sv.ui.ViewChuaKeo.add(sv.vari.ViewTaiXiu);
		}
		// Ti.API.info('length tai xiu'+jsonResuilt.match.taixiu.length);
		if (jsonResuilt.match.resultbet[0]) {
			sv.vari.ViewTySo = ViewTySo();
			sv.vari.ViewTySo.setTyLe(jsonResuilt.match.resultbet);
			sv.ui.ViewChuaKeo.add(sv.vari.ViewTySo);
		}
		///////
	};
};