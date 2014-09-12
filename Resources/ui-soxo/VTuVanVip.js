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
	var db_service = Ti.Database.open('servicedb');
	var db_menucap1 = db_service.execute("SELECT * FROM Menucap1_xoso WHERE type=1");
	var db_menucap2 = db_service.execute("SELECT * FROM Menucap2_xoso WHERE type=1");
	var dv_cap1 = [];
	var dv_cap2 = [];
	dv_cap1 = get_data_fromdb(db_menucap1);
	dv_cap2 = get_data_fromdb(db_menucap2);
	db_service.close();
	//

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
		sv.arr.View_rows[i].add(sv.arr.Label_ten_dv[i]);
		sv.arr.rows[i].add(sv.arr.View_rows[i]);
	}
	sv.ui.tbl1.setData(sv.arr.rows);

	for (var i = 0; i < (dv_cap1.length); i++) {
		sv.arr.View_rows[i].addEventListener('click', function(e) {
			var menucap2 = {};
			menucap2.id = [];
			menucap2.name = [];
			menucap2.act = [];
			menucap2.param = [];
			menucap2.ser_num = [];
			menucap2.price = [];
			for (var k = 0; k < (dv_cap2.length); k++) {
				if (dv_cap2[k].parentid == e.source.id) {
					menucap2.name.push(dv_cap2[k].name);
					menucap2.id.push(dv_cap2[k].id);
					menucap2.act.push(dv_cap2[k].act);
					menucap2.param.push(dv_cap2[k].thamso);
					menucap2.ser_num.push(dv_cap2[k].dauso);
					menucap2.price.push(dv_cap2[k].price);

				}
			}
			var isAndroid = Ti.Platform.osname === 'android';
			if (!isAndroid)
				menucap2.name.push("Thoát");
			var opt = Ti.UI.createOptionDialog({
				buttonNames : ["Thoát"],
				options : menucap2.name,
				opaquebackground : true,
				title : "Lựa chọn các tỉnh thành",
			});
			if ((menucap2.name.length > 0 && isAndroid) || (menucap2.name.length > 1 && (!isAndroid)))
				opt.show();
			opt.addEventListener('click', function(e) {
				if (e.button || opt.getOptions().toString == 'Thoát') {
					opt.hide();
				} else {
					Ti.API.info('id' + menucap2.act[e.index] + menucap2.name[e.index]);
					if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
						var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(menucap2.ser_num[e.index], menucap2.act[e.index] + " " + menucap2.param[e.index], "DỊCH VỤ SX " + menucap2.act[e.index] + " " + menucap2.name[e.index]);
						pop_upsms.open({
							modal : Ti.Platform.osname == 'android' ? true : false
						});
					} else {
						var database = Ti.Database.open('userinfo');
						var user_info = database.execute("SELECT * FROM SaveInfo");
						if (user_info.isValidRow()) {
							var tien_user = user_info.fieldByName("balance");
							if (tien_user < (menucap2.price[e.index])) {
								var sms = new (require('/ui-controller/showSmsDialog'))(menucap2.ser_num[e.index],menucap2.act[e.index] + " " + menucap2.param[e.index]);
							} else {
								tuvan_soxo({
									"command" : menucap2.act[e.index],
									"param" : menucap2.param[e.index],
									"price" : menucap2.price[e.index],
								});
							}

						} else {
							var sms = new (require('/ui-controller/showSmsDialog'))(menucap2.ser_num[e.index],menucap2.act[e.index] + " " + menucap2.param[e.index]);
						}
					}
				}
			});
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
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=getmenu');
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
		sv.vari.user_info.close();
		sv.vari.db.close();
		var db_service = Ti.Database.open('servicedb');
		// if (Ti.Platform.osname != 'android') {
		db_service.execute("DELETE FROM Menucap1_xoso");
		db_service.execute("DELETE FROM Menucap2_xoso");
		// }
		for (var i = 0; i < (menucap1.length); i++) {
			db_service.execute("INSERT OR IGNORE INTO Menucap1_xoso VALUES(?,?,?)", (menucap1[i].id), menucap1[i].name,menucap1[i].type);
		}
		for (var i = 0; i < (menucap2.length); i++) {
			if (menucap2[i].action)
				db_service.execute("INSERT OR IGNORE INTO Menucap2_xoso VALUES(?,?,?,?,?,?,?,?)", (menucap2[i].id), menucap2[i].name, menucap2[i].action, menucap2[i].params, menucap2[i].servicenumber, menucap2[i].price, menucap2[i].parentid,menucap2[i].type);
			else
				db_service.execute("INSERT OR IGNORE INTO Menucap2_xoso VALUES(?,?,?,?,?,?,?,?)", (menucap2[i].id), menucap2[i].name, "", "", "", "", menucap2[i].parentid,menucap2[i].type);
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
		xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=menuaction');
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
