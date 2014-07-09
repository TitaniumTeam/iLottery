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
	sv.vari.flag = false;
	//co kiem tra trang thai tableview hien thi nam - visible:true hoac false;
	sv.vari.dem = 0;
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
	/////mang du lieu chua tour id va tour name, so luong giai
	sv.arr.TourId = [];
	sv.arr.TourName = [];
	sv.vari.SoLuongGiaiDau = 0;
	sv.vari.row_height = Ti.App.size(88);
	///
	sv.vari.combobox = require('/ui-controller/ComboBox');
	sv.vari.bxh = require('/ui-bongda/WinBXH');
	sv.vari.TTTD_cuthe = require('/ui-bongda/WinKeo');
	/////cac mang bien su kien
	sv.arr.evt_bxh = [];
	sv.arr.evt_thongtinTD = [];
	sv.arr.evt_thongtinKeo = [];
	sv.vari.sotran = [];
	sv.ui.vThongTinTD = [];
	////
	sv.arr.MangDL = {};
	sv.arr.MangDL.id = [];
	sv.arr.MangDL.khach = [];
	sv.arr.MangDL.chunha = [];
	sv.arr.MangDL.date = [];
};
function tao_ui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(165),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
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

	sv.ui.LabelAll = Ti.UI.createLabel({
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
	sv.ui.LabelLive = Ti.UI.createLabel({
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
	sv.ui.view_choose = new sv.vari.combobox(0, "2013-2014", Ti.App.size(400), Ti.App.size(244), Ti.App.size(85));
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose.setTable(season());

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
		separatorColor : 'transparent',
		backgroundColor : 'transparent',

	});
	
	GetTour(sv, "gettour", {
		"season" : "2013-2014"
	});
	//////////
	sv.ui.ViewSwitch.add(sv.ui.LabelAll);
	sv.ui.ViewSwitch.add(sv.ui.LabelLive);
	sv.ui.ViewHeader.add(sv.ui.ViewSwitch);
	sv.ui.ViewHeader.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.ViewHeader);
	sv.ui.ViewTong.add(sv.ui.table_view);
	///
	///
	sv.ui.ViewChua.add(sv.ui.tbl);
	sv.ui.ViewTong.add(sv.ui.ViewChua);
	// tao_sukien(sv);
	tao_sukien(sv);
	sv.ui.LabelLive.addEventListener('click', sv.fu.event_clickLabelLive);
	sv.ui.LabelAll.addEventListener('click', sv.fu.event_clickLabelAll);
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
		// Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
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
		/////////do du lieu vao tableview

		for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				height : sv.vari.row_height,
				width : Ti.App.size(640),
				backgroundImage : "/assets/icon/bg_tabbar.png"
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
				height : sv.vari.row_height,
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
				height : sv.vari.row_height,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				right : 0,
				top : 0,
				expanded : false,
				id : i,
				// transform : sv.vari.trans2
			});

			sv.arr.arrow[i] = Titanium.UI.createImageView({
				width : Ti.App.size(20),
				height : Ti.App.size(20),
				touchEnabled : false,
				image : '/assets/icon/icon_downarrow.png'
			});
			sv.arr.viewBack[i] = Ti.UI.createView({
				left : 0,
				top : sv.vari.row_height,
				width : Ti.App.size(640),
				backgroundGradient : {
					type : 'linear',
					colors : [{
						color : "#413839",
						position : 0.5
					}, {
						color : "#413839",
						position : 0.5
					}]
				},
				visible : false

			});
			sv.arr.ViewChe[i] = Ti.UI.createView({
				left : 0,
				top : sv.vari.row_height,
				width : Ti.App.size(640),
				backgroundGradient : {
					type : 'linear',
					colors : [{
						color : "#413839",
						position : 0.5
					}, {
						color : "#413839",
						position : 0.5
					}]
				},
				height : Ti.App.size(200)
			});
			sv.arr.rows[i].add(sv.arr.ViewChe[i]);
			sv.arr.rows[i].add(sv.arr.viewBack[i]);
			sv.arr.rows[i].add(sv.arr.viewRow[i]);

			sv.arr.viewGD[i].add(sv.arr.lbl_tennc[i]);
			sv.arr.viewGD[i].add(sv.arr.lbl_co[i]);

			sv.arr.viewArow[i].add(sv.arr.arrow[i]);
			sv.arr.viewRow[i].add(sv.arr.viewGD[i]);
			sv.arr.viewRow[i].add(sv.arr.viewArow[i]);
		}
		for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
			sv.arr.viewGD[i].addEventListener('click', function(e) {
				Ti.API.info('thu tu ' + e.source.idGD);
				Ti.API.info('tourid : ', sv.arr.TourName[e.source.idGD]);
				sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourName[e.source.idGD], sv.ui.lblfirst.text, sv.arr.logo[e.source.idGD]);
				sv.vari.view_bxh.open();
			});
		}
		for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
			sv.arr.viewArow[i].addEventListener('click', function(e) {
				sv.ui.ViewChua.setTouchEnabled(false);
				// Ti.API.info('thu tu ' + e.source.id);
				// sv.arr.viewBack[e.source.id].visible=false;
				sv.vari.data1 = {
					"tourid" : sv.arr.TourId[e.source.id],
					// "startdate" : "01/06/2014",
					// "enddate" : "12/06/2014"
				};
				var xhr1 = Titanium.Network.createHTTPClient();
				xhr1.onsendstream = function(e) {
					//ind.value = e.progress;
					Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
				};
				xhr1.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + "getmatchschedule");
				xhr1.setRequestHeader("Content-Type", "application/json-rpc");
				Ti.API.info(JSON.stringify(sv.vari.data1));
				xhr1.send(JSON.stringify(sv.vari.data1));
				xhr1.onerror = function(e) {
					Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
				};

				xhr1.onload = function() {
					var dl1 = JSON.parse(this.responseText);
					var jsonResuilt1 = JSON.parse(dl1);
					var dl1 = JSON.parse(this.responseText);
					var jsonResuilt1 = JSON.parse(dl1);
					Ti.API.info('cac tran dau: ', jsonResuilt1.matchs);

					if (jsonResuilt1.matchs.length == 0) {
						sv.vari.sotran = [];
						Ti.App.customToast.showToast("Không có trận nào",1000);
					} else {
						for (var j = 0; j < (jsonResuilt1.matchs).length; j++) {
							sv.vari.sotran[j] = jsonResuilt1.matchs[j];
							sv.arr.MangDL.id[j] = jsonResuilt1.matchs[j].id;
							sv.arr.MangDL.khach[j] = jsonResuilt1.matchs[j].guestID;
							sv.arr.MangDL.chunha[j] = jsonResuilt1.matchs[j].ownerID;
							sv.arr.MangDL.date[j] = jsonResuilt1.matchs[j].date;
						}
					}
					Ti.API.info('so tran' + sv.vari.sotran.length);
					if (e.source.expanded) {
						e.source.expanded = false;
						sv.arr.rows[e.source.id].setHeight(Ti.App.size(88));
						sv.arr.arrow[e.source.id].setImage('/assets/icon/icon_downarrow.png');
						for (var j = 0; j < sv.vari.SoLuongGiaiDau; j++) {
							if (j != (e.source.id)) {
								sv.arr.rows[j].expanded = false;
								sv.arr.rows[j].setHeight(Ti.App.size(88));
								sv.arr.arrow[j].setImage('/assets/icon/icon_downarrow.png');
							}
						}
					} else {
						e.source.expanded = true;
						sv.arr.rows[e.source.id].setHeight(Ti.App.size((sv.vari.sotran.length) * 100 + 88));
						sv.arr.arrow[e.source.id].setImage('/assets/icon/icon_uparrow.png');
						for (var j = 0; j < sv.vari.SoLuongGiaiDau; j++) {
							if (j != (e.source.id)) {
								sv.arr.rows[j].expanded = false;
								sv.arr.rows[j].setHeight(Ti.App.size(88));
								sv.arr.arrow[j].setImage('/assets/icon/icon_downarrow.png');
							}
						}
					}
					sv.arr.ViewChe[e.source.id].setHeight(height_viewback(sv.vari.sotran));
					Ti.App.g_IndicatorWindow.openIndicator(sv.arr.ViewChe[e.source.id], 0);
					for ( j = 0; j < sv.vari.sotran.length; j++) {
						// sv.ui.vThongtinTD = new sv.vari.viewTTTD(j);
						sv.ui.vThongTinTD[j] = thongtin_cuthe(j);
						sv.ui.vThongTinTD[j].setKQ("live", Ti.App.size(100 * j), sv.vari.sotran[j]);
						sv.arr.viewBack[e.source.id].add(sv.ui.vThongTinTD[j]);
					};
					sv.vari.timeout = setTimeout(function() {
						Ti.App.g_IndicatorWindow.closeIndicator(sv.arr.ViewChe[e.source.id]);
						sv.arr.viewBack[e.source.id].visible = true;
						sv.arr.ViewChe[e.source.id].visible = false;
					}, 1000);

					for (var j = 0; j < (sv.vari.sotran.length); j++) {
						sv.ui.vThongTinTD[j].addEventListener('click', function(k) {
							if (sv.arr.MangDL.id[k.source.idKeo]) {
								Ti.API.info('id tran dau:' + sv.vari.sotran[k.source.idKeo].id);
								sv.ui.TTTD = new sv.vari.TTTD_cuthe();
								sv.ui.TTTD.setThongTinTD(sv.vari.sotran[k.source.idKeo], sv.arr.data[e.source.id], sv.arr.logo[e.source.id]);
								sv.ui.TTTD.ui.winKeo.open();
							}

						});
					}
					// sv.arr.viewBack[e.source.id].addEventListener('postlayout', function() {
					// Ti.API.info('load view');
					// Ti.App.g_IndicatorWindow.closeIndicator(sv.arr.viewBack[e.source.id]);
					// });
					sv.ui.tbl.setData(sv.arr.rows);
					sv.ui.ViewChua.setTouchEnabled(true);
					// }, 1000);
				};
			});

		}
		sv.ui.tbl.setData(sv.arr.rows);
	};

};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		// for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
		// sv.arr.viewGD[i].removeEventListener('click', sv.arr.evt_bxh[i]);
		// }
		// for (var i = 0; i < (sv.vari.SoLuongGiaiDau); i++) {
		// sv.arr.viewArow[i].removeEventListener('click', sv.arr.evt_thongtinTD[i]);
		//
		// }

		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.LabelLive.removeEventListener('click', sv.fu.event_clickLabelLive);
		sv.ui.LabelAll.removeEventListener('click', sv.fu.event_clickLabelAll);
		Ti.API.info('remove su kien lich thi dau');
	};
};
////
function tao_sukien(sv) {
	sv.fu.event_clickLabelLive = function(e) {
		// setBGLabel(sv.ui.LabelLive, sv.ui.LabelAll);
		sv.ui.ViewSwitch.setBackgroundImage("/assets/icon/switch_right.png");
		sv.ui.tbl.scrollToTop(0, 0);
		// GetTour(sv, "gettour", {
		// "season" : "2013-2014"
		// });
	};
	sv.fu.event_clickLabelAll = function(e) {
		sv.ui.ViewSwitch.setBackgroundImage("/assets/icon/switch_left.png");
		// setBGLabel(sv.ui.LabelAll, sv.ui.LabelLive);
		sv.ui.tbl.scrollToTop(0, 0);
		// GetTour(sv, "gettour", {
		// "season" : "2013-2014"
		// });
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.dem++;

		if (sv.vari.dem >= 2) {
			sv.vari.flag = false;
			sv.ui.table_view.visible = false;
			sv.vari.dem = 0;
		} else {
			sv.ui.tbl.scrollToTop(0, 0);
			sv.vari.flag = true;
			sv.ui.table_view.visible = true;
		}

	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		GetTour(sv, "gettour", {
			"season" : sv.ui.lblfirst.text
			//"matchid" : "1"
		});
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
function thongtin_cuthe(_id) {
	var ViewChua = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		left : 0,
		backgroundColor : 'transparent',
		idKeo : _id
	});
	////
	var IconDoi1 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		left : Ti.App.size(10)
	});
	var TenDoi1 = Ti.UI.createLabel({
		left : Ti.App.size(70),
		width : Ti.App.size(180),
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.superwhite
	});
	////
	var IconDoi2 = Ti.UI.createImageView({
		width : Ti.App.size(53),
		height : Ti.App.size(53),
		right : Ti.App.size(10)
	});
	var TenDoi2 = Ti.UI.createLabel({
		width : Ti.App.size(180),
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.superwhite,
		left : Ti.App.size(480)
	});
	var TySo = Ti.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25),
			fontWeight : "bold"
		},
		top : Ti.App.size(40)
	});
	var VThoiGian = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(25),
		left : 0,
		top : 0,
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.gray,
				position : 0.5
			}, {
				color : Ti.App.Color.gray,
				position : 0.5
			}]
		},
	});
	var ThoiGian = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(20)
		},

		textAlign : 'center',
		width : Ti.UI.SIZE,
		left : Ti.App.size(260)
	});
	var IconThoiGian = Ti.UI.createImageView({
		width : Ti.App.size(24),
		height : Ti.App.size(24),
		left : Ti.App.size(230),
		image : "/assets/icon/icon-time.png"
	});
	var lineView1 = Titanium.UI.createImageView({
		width : Ti.App.size(3),
		height : Ti.App.size(60),
		left : Ti.App.size(250),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		top : Ti.App.size(35)
		// backgroundColor : Ti.App.Color.brown,
	});
	var lineView2 = Titanium.UI.createImageView({
		width : Ti.App.size(3),
		height : Ti.App.size(60),
		right : Ti.App.size(250),
		image : "/assets/icon/100c_devider.png",
		touchEnabled : "false",
		top : Ti.App.size(35)
		// backgroundColor : Ti.App.Color.brown,
	});
	// // ThoiGian.visible=false;
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
	ViewChua.setKQ = function(_state, _top, param) {
		// IconDoi1.image=param.logo1;
		// IconDoi2.image=param.logo2;
		TenDoi1.text = param.ownerID;
		TenDoi2.text = param.guestID;
		ViewChua.top = _top;
		if (_state == "live") {
			// TySo.top = Ti.App.size(40);
			TySo.text = param.result;
			ThoiGian.text = param.date;
		} else {
			// TySo.top = Ti.App.size(40);
			TySo.text = "VS";
			ThoiGian.text = param.date;
		}
	};
	return ViewChua;
};
function height_viewback(sotran) {
	if ((sotran.length) == 1) {
		return Ti.App.size(100);
	} else {
		if (sotran.length > 1) {
			return Ti.App.size((sotran.length) * 100);
		}

	}

};
function setBGLabel(l1, l2) {
	l1.setBackgroundColor(Ti.App.Color.red);
	l2.setBackgroundColor("transparent");
}
