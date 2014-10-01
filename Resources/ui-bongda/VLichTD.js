module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.vari = {};
	sv.arr = {};
	(function() {
		sms_offline();
		tao_bien(sv);
		tao_ui(sv);
		removeSK(sv);
	})();
	return sv;
};
function tao_bien(sv) {
	////data trong table view chua ds cac giai dau
	sv.arr.rows = [];
	sv.arr.viewArow = [];
	sv.arr.viewRow = [];
	sv.arr.arrow = [];
	sv.arr.trandau = [];
	sv.arr.ViewChe = [];
	sv.arr.viewBack = [];
	sv.arr.viewGD = [];
	sv.arr.lbl_tennc = [];
	sv.arr.lbl_co = [];
	sv.arr.lbl_Live = [];
	sv.arr.lbl_sotran = [];
	/////mang du lieu chua tour id va tour name, so luong giai
	sv.arr.TourId = [];
	sv.arr.TourName = [];
	sv.vari.SoLuongGiaiDau = 0;
	sv.vari.row_height = Ti.App.size(90);
	///
	sv.vari.combobox = require('/ui-controller/ComboBox');
	sv.vari.bxh = require('/ui-bongda/WinBXH');
	sv.vari.TTTD_cuthe = require('/ui-bongda/WinKeo');
	/////cac mang bien su kien
	// sv.vari.sotran = [];
	sv.ui.vThongTinTD = [];
	////
	sv.arr.MangDL = {};
	sv.arr.MangDL.id = [];
	sv.arr.MangDL.khach = [];
	sv.arr.MangDL.chunha = [];
	sv.arr.MangDL.date = [];
	sv.arr.MangDL.state = [];
	sv.arr.MangDL.phut = [];
	////bien timeout
	sv.vari.time_out1 = null;
	sv.vari.time_out2 = null;
	sv.vari.time_out3 = null;
};
function tao_ui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(165),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		top : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(85),
		backgroundImage : "/assets/icon/bg_tabbar.png"
	});
	sv.ui.ViewSwitch = Titanium.UI.createView({
		width : Ti.App.size(325),
		height : Ti.App.size(50),
		left : Ti.App.size(20),
		backgroundImage : "/assets/icon/switch_left.png"
	});

	sv.ui.LabelLive = Ti.UI.createLabel({
		backgroundColor : "transparent",
		width : Ti.App.size(162),
		height : Ti.App.size(50),
		left : 0,
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		text : "Lịch",
		highlightedColor : "yellow",
		backgroundSelectedColor : Ti.App.Color.magenta,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		}
	});
	sv.ui.LabelAll = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		width : Ti.App.size(162),
		height : Ti.App.size(50),
		right : 0,
		// left : Ti.App.size(170),
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		text : "Đã Đấu",
		highlightedColor : "yellow",
		backgroundSelectedColor : Ti.App.Color.magenta,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		}
	});
	sv.ui.view_choose = new sv.vari.combobox(0, "2013-2014", Ti.App.size(400), Ti.App.size(244), 0);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose.setTable(season());

	sv.ui.ViewChua = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		showVerticalScrollIndicator : 'true',
		contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL,
		zIndex : 0,
		horizontalWrap : false,
		disableBounce : "true",
		bottom:Ti.App.size(100)
		// layout:"vertical"
	});
	sv.ui.ViewCheat = Titanium.UI.createView({
		top : Ti.App.size(88),
		left : 0,
		height : Ti.UI.FILL,
		zIndex : 10,
		visible : false,
		width : Ti.App.size(640),
		backgroundColor : 'transparent',
		backgroundSelectedColor : null,
		backgroundSelectedImage : null,
	});
	sv.ui.tbl = Ti.UI.createTableView({
		height : Ti.UI.FILL,
		width : Ti.App.size(640),
		top : 0,
		separatorColor : 'transparent',
		backgroundColor : 'transparent',
		left : 0,
	});

	GetTour(sv, {
		"season" : sv.ui.lblfirst.text
	}, "getmatchschedule");
	//////////
	sv.ui.ViewSwitch.add(sv.ui.LabelAll);
	sv.ui.ViewSwitch.add(sv.ui.LabelLive);
	sv.ui.ViewHeader.add(sv.ui.ViewSwitch);
	sv.ui.ViewHeader.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.ViewHeader);
	sv.ui.ViewCheat.add(sv.ui.table_view);
	///
	///
	sv.ui.ViewChua.add(sv.ui.tbl);
	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	sv.ui.ViewTong.add(sv.ui.ViewChua);
	// tao_sukien(sv);
	tao_sukien(sv);
	sv.ui.LabelLive.addEventListener('click', sv.fu.event_clickLabelLive);
	sv.ui.LabelAll.addEventListener('click', sv.fu.event_clickLabelAll);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);

};
function GetTour(sv, data, _cmd) {
	Ti.API.info('cmd dau tien' + _cmd);
	var xhr = Titanium.Network.createHTTPClient();
	sv.ui.tbl.visible = false;
	sv.ui.tbl.removeAllChildren();
	Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewChua);
	sv.vari.time_out1 = setTimeout(function() {
			sv.ui.tbl.visible = true;
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewChua);
			clearTimeout(sv.vari.time_out1);
		}, 1000);
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=gettour');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		// Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		Ti.API.info('cac giai dau  : ', jsonResuilt.tournaments);
		sv.arr.data = [];
		sv.arr.logo = [];
		sv.vari.tong_tran = [];
		sv.vari.so_tranlive = [];
		var customButton = require('ui-controller/customButton');
		for (var i = 0; i < (jsonResuilt.tournaments).length; i++) {

			sv.vari.SoLuongGiaiDau = (jsonResuilt.tournaments).length;
			sv.arr.data.push(jsonResuilt.tournaments[i].name);
			sv.vari.so_tranlive.push(jsonResuilt.tournaments[i].total_playing);

			if (jsonResuilt.tournaments[i].logo) {
				sv.arr.logo.push(jsonResuilt.tournaments[i].logo);
			} else {
				sv.arr.logo.push("");
			}
			if ((jsonResuilt.tournaments[i].total_incoming == null && jsonResuilt.tournaments[i].total_playing == null) || (jsonResuilt.tournaments[i].total_incoming == undefined && jsonResuilt.tournaments[i].total_playing == undefined)) {

				sv.vari.tong_tran.push(0);
			} else {
				sv.vari.tong_tran.push(parseInt(jsonResuilt.tournaments[i].total_incoming) + parseInt(jsonResuilt.tournaments[i].total_playing));

			}
			sv.arr.TourId[i] = jsonResuilt.tournaments[i].id.toString();
			sv.arr.TourName[i] = jsonResuilt.tournaments[i].name.toString();

		}
		/////////do du lieu vao tableview
		// sv.ui.tbl.visible = false;
		// Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewChua);
		// sv.vari.time_out1 = setTimeout(function() {
			// sv.ui.tbl.visible = true;
			// Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewChua);
			// clearTimeout(sv.vari.time_out1);
		// }, 2000);

		for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				height : sv.vari.row_height,
				width : Ti.App.size(640),
				backgroundImage : "/assets/icon/bg_tabbar.png",
			});
			sv.arr.viewRow[i] = Ti.UI.createView({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(640),
				// borderColor : Ti.App.Color.red,
				// borderWidth : set_border(i, sv),
				left : 0,
			});

			sv.arr.viewGD[i] = customButton({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(80),
				left : 0,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				idGD : i
			});
			sv.arr.lbl_co[i] = Titanium.UI.createImageView({
				width : Ti.App.size(50),
				height : Ti.App.size(45),
				image : sv.arr.logo[i],
				left : Ti.App.size(20),
				touchEnabled : false,
			});
			//
			sv.arr.viewArow[i] = customButton({
				width : Ti.App.size(560),
				height : sv.vari.row_height,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				right : 0,
				top : 0,
				expanded : false,
				id : i,
				// transform : sv.vari.trans2
			});
			sv.arr.lbl_tennc[i] = Ti.UI.createLabel({
				left : 0,
				text : sv.arr.data[i],
				width : Ti.App.size(530),
				font : {
					fontSize : Ti.App.size(25),
					fontWeight : 'bold'
				},
				color : Ti.App.Color.superwhite,
				touchEnabled : false
			});

			sv.arr.arrow[i] = Titanium.UI.createImageView({
				width : Ti.App.size(20),
				height : Ti.App.size(20),
				touchEnabled : false,
				image : '/assets/icon/icon_downarrow.png',
				right : Ti.App.size(20),
				touchEnabled : false
			});

			sv.arr.lbl_sotran[i] = Titanium.UI.createLabel({
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				font : {
					fontSize : Ti.App.size(25),
					fontWeight : 'bold'
				},
				color : Ti.App.Color.superwhite,
				right : Ti.App.size(60),
				touchEnabled : false,
				text : sv.vari.tong_tran[i],
				textAlign : "center"
			});
			sv.arr.viewBack[i] = Ti.UI.createView({
				left : 0,
				top : sv.vari.row_height,
				width : Ti.App.size(640),
				visible : false,
				layout : "vertical",
				// backgroundColor:"yellow",

			});
			sv.arr.ViewChe[i] = Ti.UI.createView({
				left : 0,
				top : sv.vari.row_height,
				width : Ti.App.size(640),
				backgroundGradient : {
					type : 'linear',
					colors : [{
						color : "#2b2b2b",
						position : 0.5
					}, {
						color : "#2b2b2b",
						position : 0.5
					}]
				},
				touchEnabled : false

			});
			if (sv.vari.so_tranlive[i]) {
				sv.arr.lbl_Live[i] = Titanium.UI.createImageView({
					right : Ti.App.size(95),
					width : Ti.App.size(45),
					height : Ti.App.size(20),
					image : "/assets/icon/icon_live.png",
					touchEnabled : false,
				});
				sv.arr.viewArow[i].add(sv.arr.lbl_Live[i]);
			}
			sv.arr.rows[i].add(sv.arr.ViewChe[i]);
			sv.arr.rows[i].add(sv.arr.viewBack[i]);
			sv.arr.rows[i].add(sv.arr.viewRow[i]);

			sv.arr.viewGD[i].add(sv.arr.lbl_co[i]);

			sv.arr.viewArow[i].add(sv.arr.lbl_tennc[i]);

			sv.arr.viewArow[i].add(sv.arr.lbl_sotran[i]);
			sv.arr.viewArow[i].add(sv.arr.arrow[i]);

			sv.arr.viewRow[i].add(sv.arr.viewGD[i]);
			sv.arr.viewRow[i].add(sv.arr.viewArow[i]);
		}
		sv.ui.tbl.setData(sv.arr.rows);
		for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
			sv.arr.viewGD[i].addEventListener('click', function(e) {
				sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourName[e.source.idGD], sv.ui.lblfirst.text, sv.arr.logo[e.source.idGD]);
				sv.vari.view_bxh.open();
			});
		}
		for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
			sv.arr.viewArow[i].addEventListener('click', function(e) {

				if (e.source.expanded) {
					e.source.expanded = false;
					sv.arr.rows[e.source.id].setHeight(Ti.App.size(90));
					sv.arr.arrow[e.source.id].setImage('/assets/icon/icon_downarrow.png');
					sv.arr.viewBack[e.source.id].removeAllChildren();
					for (var j = 0; j < sv.vari.SoLuongGiaiDau; j++) {
						if (j != (e.source.id)) {
							sv.arr.viewBack[j].removeAllChildren();
							sv.arr.rows[j].expanded = false;
							sv.arr.rows[j].setHeight(Ti.App.size(90));
							sv.arr.arrow[j].setImage('/assets/icon/icon_downarrow.png');
						}
					}
				} else {
					Ti.API.info('cmd' + _cmd);
					e.source.expanded = true;
					sv.ui.table_view.visible = false;
					sv.ui.ViewCheat.visible = true;
					// sv.ui.tbl.setTouchEnabled(false);
					var data1 = {
						"tourid" : sv.arr.TourId[e.source.id],
					};
					var xhr1 = Titanium.Network.createHTTPClient();
					xhr1.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=' + _cmd);
					xhr1.setRequestHeader("Content-Type", "application/json-rpc");
					Ti.API.info(JSON.stringify(data1));
					xhr1.send(JSON.stringify(data1));
					xhr1.onsendstream = function(e) {
						//ind.value = e.progress;
						Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
					};
					xhr1.onerror = function(e) {
						Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
					};
					xhr1.onload = function() {
						var dl1 = JSON.parse(this.responseText);
						Ti.API.info('du lieu ban dau****' + dl1);
						var jsonResuilt1 = JSON.parse(dl1);
						Ti.API.info('cac tran dau: ', jsonResuilt1.matchs);
						sv.vari.sotran = [];
						if (jsonResuilt1.matchs.length == 0) {
							sv.vari.sotran = [];
							//Ti.App.customToast.showToast("Không có trận nào", 1000);
						} else {
							if (jsonResuilt1.matchs.length > 17) {
								for (var j = 0; j < ((jsonResuilt1.matchs).length / 20); j++) {
									sv.vari.sotran.push(jsonResuilt1.matchs[j]);
									sv.arr.MangDL.id[j] = jsonResuilt1.matchs[j].id;
									sv.arr.MangDL.khach[j] = jsonResuilt1.matchs[j].guestID;
									sv.arr.MangDL.chunha[j] = jsonResuilt1.matchs[j].ownerID;
									sv.arr.MangDL.date[j] = jsonResuilt1.matchs[j].date;
									sv.arr.MangDL.state[j] = jsonResuilt1.matchs[j].trangthai;
								}
							} else {
								for (var j = 0; j < (jsonResuilt1.matchs).length; j++) {
									sv.vari.sotran.push(jsonResuilt1.matchs[j]);
									sv.arr.MangDL.id[j] = jsonResuilt1.matchs[j].id;
									sv.arr.MangDL.khach[j] = jsonResuilt1.matchs[j].guestID;
									sv.arr.MangDL.chunha[j] = jsonResuilt1.matchs[j].ownerID;
									sv.arr.MangDL.date[j] = jsonResuilt1.matchs[j].date;
									sv.arr.MangDL.state[j] = jsonResuilt1.matchs[j].trangthai;
								}
							}

						}

						Ti.API.info('so tran' + sv.vari.sotran.length);
						sv.arr.rows[e.source.id].setHeight(Ti.App.size((sv.vari.sotran.length) * 100 + 90));
						sv.arr.arrow[e.source.id].setImage('/assets/icon/icon_uparrow.png');
						for (var j = 0; j < sv.vari.SoLuongGiaiDau; j++) {
							if (j != (e.source.id)) {
								sv.arr.viewBack[j].removeAllChildren();
								sv.arr.rows[j].expanded = false;
								sv.arr.rows[j].setHeight(Ti.App.size(90));
								sv.arr.arrow[j].setImage('/assets/icon/icon_downarrow.png');
							}
						}
						sv.arr.ViewChe[e.source.id].setHeight(Ti.App.size(sv.vari.sotran.length * 100));
						sv.arr.viewBack[e.source.id].setHeight(Ti.App.size(sv.vari.sotran.length * 100));
						Ti.App.g_IndicatorWindow.openIndicator(sv.arr.ViewChe[e.source.id]);
						// Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewCheat);
						sv.vari.time_out2 = setTimeout(function() {
							Ti.App.g_IndicatorWindow.closeIndicator(sv.arr.ViewChe[e.source.id]);
							// Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewCheat);
							sv.arr.viewBack[e.source.id].visible = true;
							sv.arr.ViewChe[e.source.id].visible = false;
							sv.ui.table_view.visible = true;
							sv.ui.ViewCheat.visible = false;
							// sv.ui.tbl.setTouchEnabled(true);
							clearTimeout(sv.vari.time_out2);
						}, 1000);
						for ( j = 0; j < sv.vari.sotran.length; j++) {
							sv.ui.vThongTinTD[j] = thongtin_cuthe(j);
							sv.ui.vThongTinTD[j].setKQ(sv.arr.MangDL.state[j], sv.vari.sotran[j]);
							sv.arr.viewBack[e.source.id].add(sv.ui.vThongTinTD[j]);
						};
						sv.ui.tbl.setData(sv.arr.rows);
						for (var j = 0; j < (sv.vari.sotran.length); j++) {
							sv.ui.vThongTinTD[j].addEventListener('click', function(k) {
								if (_cmd != "getmatchended") {
									sv.ui.vThongTinTD[k.source.idKeo].setTouchEnabled(false);
									sv.vari.time_out3 = setTimeout(function() {
										sv.ui.vThongTinTD[k.source.idKeo].setTouchEnabled(true);
										clearTimeout(sv.vari.time_out3);
									}, 1000);
									if (sv.arr.MangDL.id[k.source.idKeo]) {
										Ti.API.info('id tran dau:' + sv.vari.sotran[k.source.idKeo].id);
										sv.ui.TTTD = new sv.vari.TTTD_cuthe();
										sv.ui.TTTD.ui.winKeo.open();
										sv.ui.TTTD.setThongTinTD(sv.vari.sotran[k.source.idKeo], sv.arr.data[e.source.id], sv.arr.logo[e.source.id]);
									}
								} else {
									return;
								}

							});
						};

					};

				}

			});

		}
	};

};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.LabelLive.removeEventListener('click', sv.fu.event_clickLabelLive);
		sv.ui.LabelAll.removeEventListener('click', sv.fu.event_clickLabelAll);
		sv.ui.ViewCheat.removeEventListener('click', sv.fu.event_clickViewCheat);
		Ti.API.info('remove su kien lich thi dau');
	};
};
////
function tao_sukien(sv) {
	sv.fu.event_clickLabelLive = function(e) {
		sv.ui.ViewSwitch.setBackgroundImage("/assets/icon/switch_left.png");
		GetTour(sv, {
			"season" : sv.ui.lblfirst.text
		}, "getmatchschedule");
		sv.ui.tbl.scrollToTop(0, 0);
		sv.ui.ViewCheat.visible = false;
	};
	sv.fu.event_clickLabelAll = function(e) {
		sv.ui.ViewSwitch.setBackgroundImage("/assets/icon/switch_right.png");
		GetTour(sv, {
			"season" : sv.ui.lblfirst.text
		}, "getmatchended");
		sv.ui.tbl.scrollToTop(0, 0);
		sv.ui.ViewCheat.visible = false;
	};
	sv.fu.event_click_view = function(e) {
		sv.ui.tbl.scrollToTop(0, 0);
		sv.ui.ViewCheat.visible = true;
		sv.ui.ViewChua.touchEnabled = false;

	};
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewChua.touchEnabled = true;
		//};
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.tbl.scrollToTop(0, 0);
		sv.ui.ViewChua.touchEnabled = true;
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.ViewCheat.visible = false;
		GetTour(sv, {
			"season" : sv.ui.lblfirst.text
		}, "getmatchschedule");
	};

};
////
function season() {
	var minyear = 2011;
	var maxyear = parseInt(new Date().getFullYear());
	var cacnam = [];
	var data = [];
	var kq;
	for (var i = (minyear); i < (maxyear + 1); i++) {
		// Ti.API.info('cac nam:' + i);
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

function tbl_click(e, _lbl, sv) {
	_lbl.text = e.row.tenrow;
	//_tbl.visible = false;
}

function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.vari.SoLuongGiaiDau.length - 1)) {
		return Ti.App.size(2);
	} else {
		return 0;
	}
};
function thongtin_cuthe(_id) {
	var customRow = require('ui-controller/customRow');
	var ViewChua = customRow({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		left : 0,
		// backgroundColor : 'transparent',
		idKeo : _id,
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : "#2b2b2b",
				position : 0.5
			}, {
				color : "#2b2b2b",
				position : 0.5
			}]
		},
		backgroundSelectedColor : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.magenta,
				position : 0.5
			}, {
				color : Ti.App.Color.magenta,
				position : 0.5
			}]
		},
	});
	var line_viewchua = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(4),
		left : 0,
		zIndex : 10,
		touchEnabled : false,
		bottom : 0,
		backgroundImage : "/assets/icon/image.png",
	});
	////
	var IconDoi1 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		left : Ti.App.size(10),
		touchEnabled : false
	});
	var TenDoi1 = Ti.UI.createLabel({
		left : Ti.App.size(70),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false,
		// height : Ti.UI.SIZE
	});
	////
	var IconDoi2 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		right : Ti.App.size(10),
		touchEnabled : false
	});
	var TenDoi2 = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.superwhite,
		left : Ti.App.size(480),
		touchEnabled : false,
		// height : Ti.UI.SIZE
	});
	var TySo = Ti.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25),
			fontWeight : "bold"
		},
		touchEnabled : false
	});
	var SoPhut = Ti.UI.createLabel({
		color : Ti.App.Color.red,
		font : {
			fontSize : Ti.App.size(20),
			fontWeight : "bold"
		},
		touchEnabled : false,
		visible : false,
		top : Ti.App.size(60)
	});

	var VThoiGian = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(25),
		left : 0,
		top : 0,
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : "#393939",
				position : 0.5
			}, {
				color : "#393939",
				position : 0.5
			}]
		},
		touchEnabled : false,
		visible : false
	});
	var ThoiGian = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(20)
		},

		textAlign : 'center',
		width : Ti.UI.SIZE,
		left : Ti.App.size(230),
		touchEnabled : false
	});
	var IconThoiGian = Ti.UI.createImageView({
		width : Ti.App.size(24),
		height : Ti.App.size(24),
		left : Ti.App.size(200),
		image : "/assets/icon/icon-time.png",
		touchEnabled : false
	});
	var lineView1 = Titanium.UI.createImageView({
		width : Ti.App.size(2),
		height : Ti.App.size(50),
		left : Ti.App.size(250),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		// top : Ti.App.size(35),
		// backgroundColor : Ti.App.Color.brown,
	});
	var lineView2 = Titanium.UI.createImageView({
		width : Ti.App.size(2),
		height : Ti.App.size(50),
		right : Ti.App.size(250),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		// top : Ti.App.size(35)
		// backgroundColor : Ti.App.Color.brown,
	});
	ViewChua.add(line_viewchua);
	ViewChua.add(lineView1);
	ViewChua.add(lineView2);
	ViewChua.add(IconDoi1);
	ViewChua.add(IconDoi2);
	ViewChua.add(TySo);
	VThoiGian.add(IconThoiGian);
	VThoiGian.add(ThoiGian);
	ViewChua.add(VThoiGian);
	ViewChua.add(TenDoi1);
	ViewChua.add(TenDoi2);
	ViewChua.add(SoPhut);
	ViewChua.setKQ = function(_state, param) {
		// IconDoi1.image=param.logo1;
		// IconDoi2.image=param.logo2;
		// ViewChua.setTop(_top);
		TenDoi1.text = param.ownerID;
		TenDoi2.text = param.guestID;
		if (_state == "Playing") {
			TySo.setTop(Ti.App.size(20));
			lineView1.setTop(Ti.App.size(20));
			lineView2.setTop(Ti.App.size(20));
			VThoiGian.visible = false;
			SoPhut.visible = true;
			SoPhut.setText(param.sophut);
			TySo.setText(param.result);

		} else {
			if (_state == "Comming") {
				TySo.setTop(Ti.App.size(40));
				lineView1.setTop(Ti.App.size(35));
				lineView2.setTop(Ti.App.size(35));
				VThoiGian.visible = true;
				SoPhut.visible = false;
				TySo.setText("VS");
				ThoiGian.text = param.date;
			} else {
				TySo.setTop(Ti.App.size(40));
				lineView1.setTop(Ti.App.size(35));
				lineView2.setTop(Ti.App.size(35));
				VThoiGian.visible = true;
				SoPhut.visible = false;
				TySo.text = param.result;
				ThoiGian.text = param.date;
			}

		}
	};
	return ViewChua;
};

function sms_offline() {
	if (Ti.Network.online==false) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))("67XX", "KQBD", "CHÚNG TÔI SẼ GỬI SMS KẾT QUẢ CÁC TRẬN ĐẤU CHO QUÝ KHÁCH HÀNG");
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
}

