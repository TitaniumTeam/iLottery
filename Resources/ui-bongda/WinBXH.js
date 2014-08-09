module.exports = function(tourid, season, logo) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, tourid, season, logo);
	})();

	return sv.ui.winBXH;
};

function createVariable(sv) {
	// Ti.API.info('tourid : ', tourid);
	// GetLeagueRate(sv, "getleaguerate", {
	// "tourid" : tourid,
	// "season" : season
	// });
	sv.vari.STTDoiBong = 1;
	sv.vari.SoDoi = 20;
	sv.arr.data = [];
	sv.arr.HinhTron = [];
	sv.arr.STT = [];
	sv.arr.ViewTenDoi = [];
	sv.arr.LabelTenDoi = [];
	sv.arr.ViewST = [];
	sv.arr.LabelST = [];
	sv.arr.ViewT = [];
	sv.arr.LabelT = [];
	sv.arr.ViewH = [];
	sv.arr.LabelH = [];
	sv.arr.ViewB = [];
	sv.arr.LabelB = [];
	sv.arr.ViewHS = [];
	sv.arr.LabelHS = [];
	sv.arr.ViewDiem = [];
	sv.arr.LabelDiem = [];
	sv.arr.line_row = [];
	sv.arr.rows = [];
	sv.vari.combobox = require('/ui-controller/ComboBox');
}

function createUI(sv, tourid, season, logo) {
	var customButton = require('ui-controller/customButton');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.winBXH = Titanium.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid?false:true,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});
	sv.ui.winBXH.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header1 = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "BẢNG XẾP HẠNG", //+ season,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Header1);

	/////
	sv.ui.View_Back = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(100),
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
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	///////
	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : Ti.App.size(90),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL
	});
	sv.ui.winBXH.add(sv.ui.ViewTong);
	/////
	sv.ui.ViewSeason = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		top : 0,
		left : 0,
		backgroundImage : "/assets/icon/bg_tabbar.png"
	});
	sv.ui.IconGD = Titanium.UI.createImageView({
		width : Ti.App.size(50),
		height : Ti.App.size(33),
		left : Ti.App.size(20),
		touchEnabled : false,
		image : logo,
		top : Ti.App.size(20)
	});
	sv.ui.TenGD = Ti.UI.createLabel({
		left : Ti.App.size(95),
		text : (tourid.toString().split('-'))[0],
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : "bold"
		},
		textAlign : "center",
		touchEnabled : false,
		top : Ti.App.size(20),
		height : Ti.UI.SIZE
	});
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(-10), season, Ti.App.size(400), Ti.App.size(244), 0);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose.setTable(cacnam());
	////
	sv.ui.ViewToolBar = Ti.UI.createView({
		width : Ti.App.WidthScreen,
		height : Ti.App.size(50),
		top : Ti.App.size(110),
		left : Ti.App.size(0),
		backgroundColor : Ti.App.Color.brown
	});

	sv.ui.ViewToolBarDiem = Ti.UI.createView({
		right : Ti.App.size(30),
		width : Ti.App.size(60),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarDiem = Ti.UI.createLabel({
		text : 'Điểm',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarHS = Ti.UI.createView({
		right : Ti.App.size(110),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarHS = Ti.UI.createLabel({
		text : 'HS',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarB = Ti.UI.createView({
		right : Ti.App.size(160),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarB = Ti.UI.createLabel({
		text : 'B',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarH = Ti.UI.createView({
		right : Ti.App.size(210),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarH = Ti.UI.createLabel({
		text : 'H',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarT = Ti.UI.createView({
		right : Ti.App.size(260),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarT = Ti.UI.createLabel({
		text : 'T',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarST = Ti.UI.createView({
		right : Ti.App.size(310),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarST = Ti.UI.createLabel({
		text : 'ST',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarDoiBong = Ti.UI.createView({
		left : 0,
		width : Ti.App.size(310),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarDoiBong = Ti.UI.createLabel({
		text : 'Đội bóng',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left',
		},

		color : Ti.App.Color.white,
	});
	/////
	sv.ui.ViewListTeam = Ti.UI.createTableView({
		backgroundColor : 'transparent',
		top : Ti.App.size(180),
		left : 0,
		width : Ti.App.size(640),
		separatorColor : 'transparent',
		zIndex : 0
	});
	sv.ui.ViewCheat = Ti.UI.createView({
		backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		height : Ti.App.size(1136),
		zIndex : 10,
		visible : false,
		width : Ti.App.size(640)
	});
	///
	BXH(sv, tourid, season);
	//////
	createUI_Event(sv, tourid);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winBXH.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winBXH.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winBXH.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);
	////////
	sv.ui.ViewSeason.add(sv.ui.view_choose);
	sv.ui.ViewSeason.add(sv.ui.TenGD);
	sv.ui.ViewSeason.add(sv.ui.IconGD);
	sv.ui.ViewTong.add(sv.ui.ViewSeason);
	sv.ui.ViewCheat.add(sv.ui.table_view);
	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	/////
	sv.ui.ViewTong.add(sv.ui.ViewToolBar);
	sv.ui.ViewTong.add(sv.ui.ViewListTeam);

	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarDiem);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarHS);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarB);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarH);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarT);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarST);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarDoiBong);

	sv.ui.ViewToolBarDiem.add(sv.ui.LabelToolBarDiem);
	sv.ui.ViewToolBarHS.add(sv.ui.LabelToolBarHS);
	sv.ui.ViewToolBarB.add(sv.ui.LabelToolBarB);
	sv.ui.ViewToolBarH.add(sv.ui.LabelToolBarH);
	sv.ui.ViewToolBarT.add(sv.ui.LabelToolBarT);
	sv.ui.ViewToolBarST.add(sv.ui.LabelToolBarST);
	sv.ui.ViewToolBarDoiBong.add(sv.ui.LabelToolBarDoiBong);
}

function createUI_Event(sv, tourid) {
	sv.fu.event_click_view = function(e) {
		sv.ui.ViewListTeam.scrollToTop(0, 0);
		sv.ui.ViewCheat.visible = true;
		sv.ui.ViewListTeam.touchEnabled = false;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.ViewListTeam.touchEnabled = true;
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.ViewCheat.visible = false;
		BXH(sv, tourid, sv.ui.lblfirst.text);

	};
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewListTeam.touchEnabled = true;
		//};
	};
	sv.fu.event_androidback = function(e) {
		sv.ui.winBXH.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winBXH.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window bang xh');
		Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
		sv.ui.ViewListTeam.setVisible(false);
		sv.ui.ViewListTeam.setTouchEnabled(false);
		setTimeout(function() {
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
			sv.ui.ViewListTeam.setVisible(true);
			sv.ui.ViewListTeam.setTouchEnabled(true);
		}, 1000);
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winBXH.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.View_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winBXH.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.winBXH.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.ViewCheat.removeEventListener('click', sv.fu.event_clickViewCheat);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}

function set_bg(i) {
	if (i == 0)
		return "#6a0819";
	if (i == 1) {
		return "#cc8600";
	}

	if (i == 2)
		return "#393939";
	if (i == 3)
		return "#2e2e2e";
	else {
		return "transparent";
	}
};
function BXH(sv, tourid, season) {
	var xhr = Titanium.Network.createHTTPClient();
	var data = {
		"tourid" : tourid,
		"season" : season
	};
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + "getleaguerate");
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt;
		jsonResuilt = JSON.parse(dl);
		Ti.API.info('du lieu la : ', jsonResuilt.ratetable.length);

		for (var i = 0; i < (jsonResuilt.ratetable.length); i++) {

			sv.vari.STTDoiBong = i % 3;

			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				width : Ti.App.size(640),
				height : Ti.App.size(75),
				left : 0,
				id : i,
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				backgroundColor : set_bg(i)
			});
			sv.arr.line_row[i] = Titanium.UI.createView({
				width : Ti.App.size(640),
				height : Ti.App.size(2),
				bottom : 0,
				backgroundColor : "#393939",
				left : 0
			});
			if (i > 3) {
				sv.arr.rows[i].add(sv.arr.line_row[i]);
			}

			sv.arr.STT[i] = Ti.UI.createLabel({
				text : jsonResuilt.ratetable[i].vitri,
				font : {
					fontSize : Ti.App.size(26),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.white,
				left : Ti.App.size(10),
				width : Ti.App.size(50),
			});

			sv.arr.rows[i].add(sv.arr.STT[i]);

			sv.arr.ViewTenDoi[i] = Ti.UI.createView({
				left : Ti.App.size(55),
				width : Ti.App.size(250),
				height : Ti.App.size(50),
			});

			sv.arr.LabelTenDoi[i] = Ti.UI.createLabel({
				text : jsonResuilt.ratetable[i].clubid,
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',

				},
				textAlign : 'center',
				color : Ti.App.Color.superwhite,
				left : 0
			});

			sv.arr.ViewTenDoi[i].add(sv.arr.LabelTenDoi[i]);
			sv.arr.rows[i].add(sv.arr.ViewTenDoi[i]);

			sv.arr.ViewST[i] = Ti.UI.createView({
				right : Ti.App.size(310),
				width : Ti.App.size(35),
				height : Ti.App.size(50),
			});

			sv.arr.LabelST[i] = Ti.UI.createLabel({
				text : jsonResuilt.ratetable[i].totalmatch.toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewST[i].add(sv.arr.LabelST[i]);
			sv.arr.rows[i].add(sv.arr.ViewST[i]);

			sv.arr.ViewT[i] = Ti.UI.createView({
				right : Ti.App.size(260),
				width : Ti.App.size(35),
				height : Ti.App.size(50),
			});

			sv.arr.LabelT[i] = Ti.UI.createLabel({
				text : (parseInt(jsonResuilt.ratetable[i].thang_san_khach) + parseInt(jsonResuilt.ratetable[i].thang_san_nha)).toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewT[i].add(sv.arr.LabelT[i]);
			sv.arr.rows[i].add(sv.arr.ViewT[i]);

			sv.arr.ViewH[i] = Ti.UI.createView({
				right : Ti.App.size(210),
				width : Ti.App.size(35),
				height : Ti.App.size(50),
			});

			sv.arr.LabelH[i] = Ti.UI.createLabel({
				text : (parseInt(jsonResuilt.ratetable[i].hoa_san_khach) + parseInt(jsonResuilt.ratetable[i].hoa_san_nha)).toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewH[i].add(sv.arr.LabelH[i]);
			sv.arr.rows[i].add(sv.arr.ViewH[i]);

			sv.arr.ViewB[i] = Ti.UI.createView({
				right : Ti.App.size(160),
				width : Ti.App.size(35),
				height : Ti.App.size(50),
			});

			sv.arr.LabelB[i] = Ti.UI.createLabel({
				text : (parseInt(jsonResuilt.ratetable[i].thua_san_khach) + parseInt(jsonResuilt.ratetable[i].thua_san_nha)).toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewB[i].add(sv.arr.LabelB[i]);
			sv.arr.rows[i].add(sv.arr.ViewB[i]);

			sv.arr.ViewHS[i] = Ti.UI.createView({
				right : Ti.App.size(110),
				width : Ti.App.size(40),
				height : Ti.App.size(50),
			});

			sv.arr.LabelHS[i] = Ti.UI.createLabel({
				text : (parseInt(jsonResuilt.ratetable[i].banthang_san_khach) + parseInt(jsonResuilt.ratetable[i].banthang_san_nha) - parseInt(jsonResuilt.ratetable[i].banthua_san_khach) - parseInt(jsonResuilt.ratetable[i].banthua_san_nha)).toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewHS[i].add(sv.arr.LabelHS[i]);
			sv.arr.rows[i].add(sv.arr.ViewHS[i]);

			sv.arr.ViewDiem[i] = Ti.UI.createView({
				right : Ti.App.size(20),
				width : Ti.App.size(60),
				height : Ti.App.size(50),
			});

			sv.arr.LabelDiem[i] = Ti.UI.createLabel({
				text : jsonResuilt.ratetable[i].point.toString(),
				font : {
					fontSize : Ti.App.size(22),
					fontFamily : 'Aria',
				},
				color : Ti.App.Color.superwhite,
			});

			sv.arr.ViewDiem[i].add(sv.arr.LabelDiem[i]);
			sv.arr.rows[i].add(sv.arr.ViewDiem[i]);

		};
		sv.ui.ViewListTeam.setData(sv.arr.rows);
	};

}

function cacnam() {
	var minyear = 2011;
	var maxyear = parseInt(new Date().getFullYear());
	var cacnam = [];
	var data = [];
	var kq;
	for (var i = (minyear); i < (maxyear + 1); i++) {
		cacnam.push(i);
	}
	for (var i = 0; i < (cacnam.length); i++) {
		if ((i + 1) != (cacnam.length)) {
			data.push(cacnam[i] + "-" + cacnam[i + 1]);
		}
	}
	for (var i = 0; i < (cacnam.length); i++) {
		data.push(cacnam[i]);
	}
	data.sort();
	return data;
}

