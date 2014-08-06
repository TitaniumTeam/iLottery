module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv);
		removeSK(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.arr.rows = [];
	sv.arr.View_rows = [];
	sv.arr.Label_ten_dv = [];
	sv.arr.Label_dvcon = [];
	sv.arr.ViewBack = [];
	sv.arr.ViewChuaLbl = [];

};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(165),
		// showVerticalScrollIndicator : 'true',
		// contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL,
		// zIndex : 0,
		// horizontalWrap : false,
		// disableBounce : "true",
		// layout : "vertical",
		backgroundImage : "/assets/icon/bg_tuvan.png"
	});

	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		top : Ti.App.size(10),
		separatorColor : "transparent",
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	get_menu(sv);
	Ti.App.g_IndicatorWindow.openIndicator(sv.ui.tbl1);
	// sv.ui.tbl1.visible = false;
	sv.vari.time_out1 = setTimeout(function() {
		// sv.ui.tbl1.visible = true;
		tao_sukien(sv);
		Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.tbl1);
		clearTimeout(sv.vari.time_out1);
	}, 1000);

	// sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		// if (sv.fu.evt_tblrow_click != null && sv.fu.evt_tblrow_click != undefined) {
		// sv.ui.tbl1.removeEventListener('click', sv.fu.evt_tblrow_click);
		// sv.ui.opt_dialog.removeEventListener('click', sv.fu.evt_optdialog);
		Ti.API.info('remove su kien tu van xoso');
		// }

	};
};
function tao_sukien(sv) {
	var db_service = Ti.Database.open('serviceinfo');
	var db_menucap1 = db_service.execute("SELECT * FROM Menucap1_xoso");
	var db_menucap2 = db_service.execute("SELECT * FROM Menucap2_xoso");
	var db_menucap3 = db_service.execute("SELECT * FROM Menucap3_xoso");
	var dv_cap1 = [];
	var dv_cap2 = [];
	var dv_cap3 = [];
	dv_cap1 = get_data_fromdb(db_menucap1);
	dv_cap2 = get_data_fromdb(db_menucap2);
	dv_cap3 = get_data_fromdb(db_menucap3);
	// for (var i = 0; i < (dv_cap2.length); i++) {
	// Ti.API.info('name:' + dv_cap2[i].name + "/id:" + dv_cap2[i].id + dv_cap2[i].act);
	// }
	for (var i = 0; i < (dv_cap1.length); i++) {
		sv.arr.rows[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			left : 0,
			height : Ti.App.size(90),
		});

		sv.arr.View_rows[i] = Titanium.UI.createView({
			width : Ti.App.size(640),
			height : Ti.App.size(90),
			left : 0,
			backgroundImage : "/assets/icon/btn_tuvan.png",
			top : 0,
			id : dv_cap1[i].id,
			idrow : i,
			expanded : false,
			backgroundSelectedImage : "/assets/icon/btn_tuvan_select.png",
		});
		sv.arr.Label_ten_dv[i] = Ti.UI.createLabel({
			left : Ti.App.size(20),
			width : Ti.UI.SIZE,
			textAlign : "left",
			color : Ti.App.Color.superwhite,
			height : Ti.App.size(90),
			touchEnabled : false,
			font : {
				fontSize : Ti.App.size(30)
			},
			text : dv_cap1[i].name,
			touchEnabled : false
		});
		sv.arr.ViewBack[i] = Ti.UI.createView({
			left : 0,
			top : Ti.App.size(90),
			width : Ti.App.size(640),
			layout : "vertical",
		});
		sv.arr.View_rows[i].add(sv.arr.Label_ten_dv[i]);
		sv.arr.rows[i].add(sv.arr.View_rows[i]);
		sv.arr.rows[i].add(sv.arr.ViewBack[i]);
	}
	sv.ui.tbl1.setData(sv.arr.rows);
	// tao_sukien(sv);
	for (var i = 0; i < (dv_cap1.length); i++) {
		sv.arr.View_rows[i].addEventListener('click', function(e) {
			// Ti.API.info('click row thu' + e.source.idrow);
			if (e.source.expanded) {
				e.source.expanded = false;
				sv.arr.rows[e.source.idrow].setHeight(Ti.App.size(90));
				sv.arr.ViewBack[e.source.idrow].removeAllChildren();
				for (var j = 0; j < (dv_cap1.length); j++) {
					if (j != (e.source.idrow)) {
						sv.arr.ViewBack[j].removeAllChildren();
						sv.arr.View_rows[j].expanded = false;
						sv.arr.rows[j].setHeight(Ti.App.size(90));
					}
				}
			} else {
				// var dem = 0;
				e.source.expanded = true;
				sv.arr.rows[e.source.idrow].setHeight(Ti.App.size(90 * 4));
				sv.arr.ViewBack[e.source.idrow].setHeight(Ti.App.size(90 * 3));
				for (var j = 0; j < (dv_cap1.length); j++) {
					if (j != (e.source.idrow)) {
						if (Ti.Platform.osname != 'android')
							sv.arr.ViewBack[j].removeAllChildren();
						sv.arr.View_rows[j].expanded = false;
						sv.arr.rows[j].setHeight(Ti.App.size(90));
					}
				}
				for (var k = 0; k < (dv_cap2.length); k++) {
					if (dv_cap2[k].parentid == e.source.id) {
						// dem++;
						sv.arr.ViewChuaLbl[k] = Titanium.UI.createView({
							width : Ti.App.size(640),
							height : Ti.App.size(90),
							left : 0,
							_name_menucap2 : dv_cap2[k].name,
							_id_menucap2 : dv_cap2[k].id,
							_action : dv_cap2[k].act ? dv_cap2[k].act : null,
							_params : dv_cap2[k].thamso ? dv_cap2[k].thamso : null,
							_servicenumber : dv_cap2[k].dauso ? dv_cap2[k].dauso : null,
							_price : dv_cap2[k].price ? dv_cap2[k].price : null,
							backgroundSelectedColor : Ti.App.Color.magenta,
							backgroundColor : Ti.App.Color.nauden
						});
						sv.arr.ViewChuaLbl[k].add(Ti.UI.createView({
							width : Ti.App.size(640),
							height : Ti.App.size(2),
							backgroundColor : "#2b2b2b",
							bottom : 0,
							touchEnabled : false,
							left : 0
						}));
						sv.arr.Label_dvcon[k] = Ti.UI.createLabel({
							left : Ti.App.size(100),
							width : Ti.App.size(620),
							textAlign : "left",
							color : Ti.App.Color.superwhite,
							height : Ti.App.size(90),
							font : {
								fontSize : Ti.App.size(30)
							},
							backgroundColor : "transparent",
							text : dv_cap2[k].name.toString(),
							touchEnabled : false
						});
						sv.arr.ViewChuaLbl[k].add(sv.arr.Label_dvcon[k]);
						sv.arr.ViewBack[e.source.idrow].add(sv.arr.ViewChuaLbl[k]);

						sv.ui.tbl1.setData(sv.arr.rows);
						// sv.ui.tbl1.insertRowAfter(e.source.idrow,sv.arr.ViewChuaLbl[k]);
						sv.arr.ViewChuaLbl[k].addEventListener('click', function(e) {
							Ti.API.info('action****' + e.source._action);
							if (e.source._action != null) {
								if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
									var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(e.source._servicenumber, e.source._action + " " + e.source._params, "DỊCH VỤ SX " + e.source._action + " " + e.source._name_menucap2);
									pop_upsms.open({
										modal : Ti.Platform.osname == 'android' ? true : false
									});
								} else {
									tuvan_soxo({
										"command" : e.source._action,
										"param" : e.source._params,
										"price" : e.source._price,
									});
								}

							} else {
								var name_menucap3 = [];
								var id_menucap3 = [];
								var isAndroid = Ti.Platform.osname === 'android';
								for ( z = 0; z < (dv_cap3.length); z++) {
									if (e.source._id_menucap2 == dv_cap3[z].parentid) {
										name_menucap3.push(dv_cap3[z].name);
										id_menucap3.push(dv_cap3[z].id);
									}
								}
								if (!isAndroid) {
									name_menucap3.push("Thoát");
								}
								var opt = Ti.UI.createOptionDialog({
									buttonNames : ["Thoát"],
									options : name_menucap3,
									opaquebackground : true,
									title : "Lựa chọn các tỉnh thành",
									_action : e.source._action
								});
								opt.show();
								opt.addEventListener('click', function(e) {
									if (e.button || opt.getOptions().toString == 'Thoát') {
										opt.hide();
									} else {
										var _cmd = null;
										var _param = null;
										var _price = null;
										for (var q = 0; q < (dv_cap3.length); q++) {
											if (id_menucap3[e.index] == dv_cap3[q].id) {
												_cmd = dv_cap3[q].act;
												_param = dv_cap3[q].thamso;
												_price = dv_cap3[q].dauso;
											}
										}
										if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
											var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(_price, _cmd + " " + _param, "DỊCH VỤ SX " + _cmd + " " + name_menucap3[e.index]);
											pop_upsms.open({
												modal : Ti.Platform.osname == 'android' ? true : false
											});
										} else {
											tuvan_soxo({
												"command" : _cmd,
												"param" : _param,
												"price" : _price ,
											});
										}

									}
								});
							}
						});
					}
				}
			}
		});
	};
};
function get_menu(sv) {
	var xhr = Titanium.Network.createHTTPClient();
	var data = null;
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
	if (sv.vari.user_info.isValidRow()) {
		sv.vari.user_name = sv.vari.user_info.fieldByName("username");
		data = {
			"username" : sv.vari.user_name,
			"type" : "0"
		};
	} else {
		data = {
			"username" : "",
			"type" : "0"
		};
	}
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=getmenu');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		sv.vari.user_info.getRowCount();
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		var menucap1 = [];
		var menucap2 = [];
		var menucap3 = [];
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			if (jsonResuilt.menus[i].parentid == 0) {
				menucap1.push(jsonResuilt.menus[i]);
			}
		};
		for (var i = 0; i < (jsonResuilt.menus.length); i++)
			for (var j = 0; j < (menucap1.length); j++) {
				if (jsonResuilt.menus[i].parentid == menucap1[j].id) {
					menucap2.push(jsonResuilt.menus[i]);
				}
			}
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			for (var j = 0; j < (menucap2.length); j++) {
				if (jsonResuilt.menus[i].parentid == menucap2[j].id) {
					menucap3.push(jsonResuilt.menus[i]);
				}
			}
		};
		sv.vari.user_info.close();
		sv.vari.db.close();
		var db_service = Ti.Database.open('serviceinfo');
		if (Ti.Platform.osname != 'android') {
			db_service.execute("DELETE FROM Menucap1_xoso");
			db_service.execute("DELETE FROM Menucap2_xoso");
			db_service.execute("DELETE FROM Menucap3_xoso");
		}
		for (var i = 0; i < (menucap1.length); i++) {
			db_service.execute("INSERT OR IGNORE INTO Menucap1_xoso VALUES(?,?)", (menucap1[i].id), menucap1[i].name);
		}
		for (var i = 0; i < (menucap2.length); i++) {
			if (menucap2[i].action)
				db_service.execute("INSERT OR IGNORE INTO Menucap2_xoso VALUES(?,?,?,?,?,?,?)", (menucap2[i].id), menucap2[i].name, menucap2[i].action, menucap2[i].params, menucap2[i].servicenumber, menucap2[i].price, menucap2[i].parentid);
			else
				db_service.execute("INSERT OR IGNORE INTO Menucap2_xoso VALUES(?,?,?,?,?,?,?)", (menucap2[i].id), menucap2[i].name, "", "", "", "", menucap2[i].parentid);
		}
		for (var i = 0; i < (menucap3.length); i++) {
			db_service.execute("INSERT OR IGNORE INTO Menucap3_xoso VALUES(?,?,?,?,?,?,?)", menucap3[i].id, menucap3[i].name, menucap3[i].action, menucap3[i].params, menucap3[i].servicenumber, menucap3[i].price, menucap3[i].parentid);
		}
		db_service.close();
	};
}

function tuvan_soxo(data) {
	if (data.command != null || data.command != undefined) {
		var xhr = Titanium.Network.createHTTPClient();
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=menuaction');
		xhr.setRequestHeader("Content-Type", "application/json-rpc");
		Ti.API.info(JSON.stringify(data));
		xhr.send(JSON.stringify(data));
		xhr.onerror = function(e) {
			Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

		};
		xhr.onload = function() {
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
			var dl = JSON.parse(this.responseText);
			Ti.API.info('du lieu' + dl);
			var jsonResuilt = JSON.parse(dl);
			if (jsonResuilt.result.code == 0 && jsonResuilt.advisor) {
				// var link = jsonResuilt.advisor;
				Ti.API.info('nhay vao day******');
				if (jsonResuilt.advisor) {
					var wdTuvan = new (require('/ui-bongda/WinTuVan'))();
					wdTuvan.setLink(jsonResuilt.advisor);
					wdTuvan.ui.winTuVan.open();
				} else {
					Ti.API.info('khong co link');
				}
			}

		};
	}

};

function get_data_fromdb(rows) {
	var results = [];
	var isAndroid = Ti.Platform.osname === 'android';
	var field_count = null;
	if (isAndroid) {
		field_count = rows.fieldCount;
	} else {
		field_count = rows.fieldCount();
	}
	var cont = 0;
	while (rows.isValidRow()) {
		results[cont] = {};
		for (var i = 0; i < field_count; i++) {
			results[cont][rows.fieldName(i)] = rows.field(i);
		}
		rows.next();
		cont++;
	}
	rows.close();
	return results;
}
