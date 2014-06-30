module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		removeSK(sv);
	})();
	return sv;
};
function tao_bien(sv) {
	sv.arr.rows = [];
	sv.arr.viewArow = [];
	sv.arr.viewRow = [];
	sv.arr.arrow = [];
	sv.arr.viewBac = [];
	sv.arr.trandau = [];
	sv.arr.ViewChua = [];
	sv.arr.viewBack = [];
	sv.arr.viewGD = [];
	sv.arr.lbl_tennc = [];
	sv.arr.lbl_co = [];
	sv.arr.TourId = [];
	sv.arr.TourName = [];
	sv.vari.combobox = require('/ui-controller/ComboBox');
	sv.vari.bxh = require('/ui-bongda/WinBXH');
	sv.arr.evt_bxh = [];
	sv.vari.SoLuongGiaiDau;
};
function tao_ui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(163),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		top : 0,
		backgroundColor : 'transparent',
		width : Ti.App.size(640),
		height : Ti.App.size(85),

	});
	sv.ui.LabelAll = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.size(180),
		height : Ti.App.size(50),
		left : Ti.App.size(20),
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		text : "All Games",
		highlightedColor : "yellow",
		backgroundSelectedColor : Ti.App.Color.magenta,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		}
	});
	sv.ui.LabelLive = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		width : Ti.App.size(180),
		height : Ti.App.size(50),
		left : Ti.App.size(200),
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		text : "Live Games",
		highlightedColor : "yellow",
		backgroundSelectedColor : Ti.App.Color.magenta,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		}
	});
	sv.ui.view_choose = new sv.vari.combobox(0, "2013-2014", Ti.App.size(400), Ti.App.size(244), Ti.App.size(85), true);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose.setTable(season());
	sv.ui.line_tab = Titanium.UI.createView({
		backgroundColor : Ti.App.Color.red,
		left : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(2),
		top : Ti.App.size(88)
	});

	sv.ui.ViewChua = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		showVerticalScrollIndicator : 'true',
		contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL
	});
	sv.ui.tbl = Ti.UI.createTableView({
		height : Ti.UI.FILL,
		width : Ti.App.size(640),
		top : 0,
		separatorColor : Ti.App.Color.red,
		backgroundColor : 'transparent',
	});
	GetTour(sv, "gettour", {
		"season" : "2013-2014"
		//"matchid" : "1"
	});
	//////////
	sv.ui.ViewHeader.add(sv.ui.view_choose);
	sv.ui.ViewHeader.add(sv.ui.LabelAll);
	sv.ui.ViewHeader.add(sv.ui.LabelLive);
	sv.ui.ViewTong.add(sv.ui.ViewHeader);
	sv.ui.ViewTong.add(sv.ui.table_view);
	///
	sv.ui.ViewTong.add(sv.ui.line_tab);
	///
	sv.ui.ViewChua.add(sv.ui.tbl);
	sv.ui.ViewTong.add(sv.ui.ViewChua);
	tao_sukien(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
};
function GetTour(sv, _cmd, data) {
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
		// if (Ti.Platform.osname == 'android') {
		// }

		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		Ti.API.info('cac giai dau  : ', jsonResuilt.tournaments);
		sv.arr.data = [];
		sv.arr.logo = [];
		for (var i = 0; i < (jsonResuilt.tournaments).length; i++) {

			sv.vari.SoLuongGiaiDau = (jsonResuilt.tournaments).length;
			sv.arr.data.push(jsonResuilt.tournaments[i].name);
			if (jsonResuilt.tournaments[i].logo) {
				sv.arr.logo.push(jsonResuilt.tournaments[i].logo);
			} else {
				sv.arr.logo.push("");
			}
			sv.arr.TourId[i] = jsonResuilt.tournaments[i].id.toString();
			sv.arr.TourName[i] = jsonResuilt.tournaments[i].name.toString();

		}
		tao_sukien(sv);
		/////////do du lieu vao tableview
		// sv.vari.timeout = setTimeout(function() {
		for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				height : Ti.App.size(88),
				width : Ti.App.size(640),
				backgroundColor : 'transparent',
			});

			sv.arr.ViewChua[i] = Ti.UI.createView({
				height : Ti.UI.FILL,
				width : Ti.App.size(640),
			});

			sv.arr.viewRow[i] = Ti.UI.createView({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(640),
				// borderColor : Ti.App.Color.red,
				// borderWidth : set_border(i, sv),
				left : 0,
			});

			sv.arr.viewGD[i] = Titanium.UI.createView({
				height : Ti.App.size(88),
				top : 0,
				width : Ti.App.size(500),
				left : 0,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				idGD : i
			});

			sv.arr.lbl_tennc[i] = Ti.UI.createLabel({
				left : Ti.App.size(80),
				text : sv.arr.data[i],
				width : Ti.App.size(420),
				font : {
					fontSize : Ti.App.size(30),
					fontWeight : 'bold'
				},
				color : Ti.App.Color.superwhite,
				touchEnabled : false
			});
			//
			sv.arr.lbl_co[i] = Titanium.UI.createImageView({
				width : Ti.App.size(50),
				height : Ti.App.size(33),
				image : sv.arr.logo[i],
				left : Ti.App.size(20),
				touchEnabled : false,
			});

			sv.arr.viewArow[i] = Titanium.UI.createView({
				width : Ti.App.size(110),
				height : Ti.App.size(88),
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				right : 0,
				top : 0,
				expanded : false,
				id : i,
				// transform : sv.vari.trans2
			});

			sv.arr.arrow[i] = Titanium.UI.createView({
				width : Ti.App.size(20),
				height : Ti.App.size(14),
				touchEnabled : false,
				backgroundImage : '/assets/images/icon/arrow-bottom_white.png'
			});

			// sv.ui.row.add(sv.arr.ViewChua[i]);
			sv.arr.rows[i].add(sv.arr.viewRow[i]);

			sv.arr.viewGD[i].add(sv.arr.lbl_tennc[i]);
			sv.arr.viewGD[i].add(sv.arr.lbl_co[i]);

			sv.arr.viewArow[i].add(sv.arr.arrow[i]);
			sv.arr.viewRow[i].add(sv.arr.viewGD[i]);
			sv.arr.viewRow[i].add(sv.arr.viewArow[i]);

		}
		for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
			sv.arr.viewGD[i].addEventListener('click', sv.arr.evt_bxh[i]);
		}

		sv.ui.tbl.setData(sv.arr.rows);
	};

};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
		Ti.API.info('remove su kien lich thi dau');
	};
};
////
function tao_sukien(sv) {
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		sv.ui.table_view.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		GetTour(sv, "gettour", {
			"season" : sv.ui.lblfirst.text
			//"matchid" : "1"
		});
	};
	for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
		sv.arr.evt_bxh[i] = function(e) {
			Ti.API.info('thu tu ' + e.source.idGD);
			Ti.API.info('tourid : ', i, ' ', sv.arr.TourName[e.source.idGD]);
			sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourName[e.source.idGD], sv.ui.lblfirst.text);
			sv.vari.view_bxh.open();
		};
	}

};
////
function season() {
	var minyear = 2011;
	var maxyear = parseInt(new Date().getFullYear());
	var cacnam = [];
	var data = [];
	var kq;
	for (var i = (minyear); i < (maxyear + 1); i++) {
		Ti.API.info('cac nam:' + i);
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
	for (var i = 0; i < (data.length); i++) {
		Ti.API.info('data thu:' + i + ": " + data[i]);
	}
	return data;
}

function tbl_click(e, _lbl, _tbl, sv) {
	if (sv.vari.flag == true) {
		_lbl.text = e.row.tenrow;
		_tbl.visible = false;
	}
}

function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.vari.SoLuongGiaiDau.length - 1)) {
		return Ti.App.size(2);
	} else {
		return 0;
	}
};