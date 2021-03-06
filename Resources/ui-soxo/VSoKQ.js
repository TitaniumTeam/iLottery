/**
 * 16h15 là miền Nam, 17h15 là miền Trung, 18h15 là miền Bắc
 */

module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		sms_offline();
		taobien(sv);
		taoui(sv);
		removeSK(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.flag_pull = false;
	sv.vari.datetime_now = null;
	sv.vari.tinh = null;
	sv.vari.id_tinh_now = null;
	sv.arr.ten_mien = [{
		id : "0",
		name : "Miền Bắc"
	}, {
		id : "2",
		name : "Miền Nam"
	}, {
		id : "1",
		name : "Miền Trung"
	}];

	sv.vari.combobox = require('/ui-soxo/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox(1);
	sv.ui.view_choose1 = new sv.vari.combobox();
	sv.vari.datarow = null;
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(163),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundImage : "/assets/icon/bg_sokq.png",
	});

	////view lua chon
	sv.ui.ViewLuaChon = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(95),
		left : 0,
		top : 0,
		// backgroundColor : "#33030c"
		backgroundImage : "/assets/icon/bg_picker1.png"
	});
	sv.ui.view_choose.setPos(0, 'Miền Bắc', 0, Ti.App.size(320), 0, 4, Ti.App.size(320));
	sv.ui.view_choose.setTable(sv.arr.ten_mien);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose1.setPos(0, set_lbl(), Ti.App.size(320), Ti.App.size(320), 0, 5, Ti.App.size(320));
	sv.ui.lbl_thoigian = sv.ui.view_choose1.getLblFirst();

	////view picker
	sv.ui.ViewCheatPicker = Titanium.UI.createView({
		// backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		height : Ti.App.size(1136),
		zIndex : 10,
		visible : false,
		width : Ti.App.size(640),
		zIndex : 100,
		backgroundImage : "/assets/icon/bg70.png",
		backgroundSelectedImage : null
	});

	sv.ui.ViewPicker = Titanium.UI.createView({
		width : Ti.App.size(500),
		height : Ti.App.size(400),
		zIndex : 10,
		backgroundColor : isAndroid ? Ti.App.Color.nauden : 'transparent',
		top : Ti.App.size(100),
	});
	var customView = require('ui-controller/customView');
	sv.ui.btnOK = customView({
		width : Ti.App.size(500),
		height : Ti.App.size(96),
		backgroundImage : "/assets/icon/btn_xac_nhan.png",
		backgroundSelectedImage : "/assets/icon/btn_xac_nhan_select.png",
		bottom : Ti.App.size(10)
	});
	sv.ui.ViewPicker.add(sv.ui.btnOK);
	////
	var date = new Date();
	if (new Date().getHours() >= 16) {
	} else {
		date.setDate(date.getDate() - 1);
	}
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.picker = Ti.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_DATE,
		minDate : new Date(2014, 0, 1),
		maxDate : new Date(parseInt(date.getFullYear()), parseInt((date.getMonth())), parseInt(date.getDate())),
		value : new Date(parseInt(date.getFullYear()), parseInt((date.getMonth())), parseInt(date.getDate())),
		backgroundColor : Ti.App.Color.nauden,
		width : Ti.App.size(500),
		bottom : Ti.App.size(100),
		selectionIndicator : true,
	});

	/////
	sv.ui.View_header = Titanium.UI.createLabel({
		height : Ti.App.size(80),
		left : 0,
		top : Ti.App.size(95),
		width : Ti.App.size(640),
		color : "orange",
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		textAlign : 'center',
		backgroundImage : "/assets/icon/title_bar.png",
		touchEnabled : false
	});
	sv.ui.ViewCheat = Titanium.UI.createView({
		// backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		height : Ti.App.size(1136),
		zIndex : 10,
		visible : false,
		width : Ti.App.size(640),
		zIndex : 100,
		backgroundImage : "/assets/icon/bg70.png",
		backgroundSelectedImage : null
	});
	sv.ui.ViewKQ = Titanium.UI.createScrollView({
		top : Ti.App.size(180),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		backgroundColor : "transparent",
		showVerticalScrollIndicator : "true",
		bottom : Ti.App.size(25),
		zIndex : 0,
		// layout : 'vertical',
		bottom : Ti.App.size(100)
	});
	sv.ui.icon_refresh = Ti.UI.createView({
		zIndex : 10,
		backgroundImage : "/assets/icon/refresh_icon.png",
		width : Ti.App.size(64),
		height : Ti.App.size(64),
		left : Ti.App.size(40),
		backgroundSelectedImage : null,
		opacity : 0.5,
		top : Ti.App.size(420),
		visible:false
	});
	sv.ui.ViewTong.add(sv.ui.icon_refresh);
	/////pull to refreshh
	/////
	showResult(sv);
	createUI_Event(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_showPicker);
	sv.ui.btnOK.addEventListener('click', sv.fu.event_hidePicker);
	sv.ui.picker.addEventListener('change', sv.fu.event_picker);
	sv.ui.ViewCheatPicker.addEventListener('click', sv.fu.event_btnCancel);
	sv.ui.icon_refresh.addEventListener('click', sv.fu.RefreshIcon);
	/////
	sv.ui.ViewLuaChon.add(sv.ui.view_choose1);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose);
	sv.ui.ViewCheat.add(sv.ui.table_view);
	sv.ui.ViewPicker.add(sv.ui.picker);
	sv.ui.ViewCheatPicker.add(sv.ui.ViewPicker);

	sv.ui.ViewTong.add(sv.ui.ViewCheatPicker);
	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	sv.ui.ViewTong.add(sv.ui.ViewKQ);
};
////
function createUI_Event(sv) {
	sv.fu.RefreshIcon = function(e) {
		if (sv.vari.flag_pull == true) {
			if (sv.vari.datarow != null) {
				sv.ui.lbl_thoigian.setText(sv.vari.datetime_now);
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ " + sv.vari.tinh + " " + sv.vari.datetime_now);
				Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
				var timeout = setTimeout(function() {
					Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
					clearTimeout(timeout);
				}, 500);
				var date_time = new Date().getDay();
				sv.ui.ViewKQ.remove(sv.vari.datarow);
				switch(sv.vari.id_tinh_now) {
				case 0:
					sv.ui.lblfirst.setText("Miền Bắc");
					sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
					break;
				case 1:
					sv.ui.lblfirst.setText("Miền Trung");
					if (date_time == 6 || date_time == 4) {
						sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
					} else {
						sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
					}
					break;
				case 2:
					sv.ui.lblfirst.setText("Miền Nam");
					if (date_time == 6) {
						sv.vari.datarow = new (require('/ui-soxo/bangkqMN_t7'))();
					} else {
						sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
					}
					break;
				}
				sv.ui.ViewKQ.add(sv.vari.datarow);
				sv.vari.datarow.clearInterVal();
				sv.vari.datarow.setParamLive();
				// }

			}
		}
	};
	sv.fu.event_showPicker = function(e) {
		sv.ui.ViewCheatPicker.visible = true;
		sv.ui.ViewCheat.visible = false;
	};
	sv.fu.event_btnCancel = function(e) {
		sv.ui.ViewCheatPicker.visible = false;
	};
	sv.fu.event_picker = function(e) {

	};
	sv.fu.event_hidePicker = function(e) {

		sv.vari.date = sv.ui.picker.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
		sv.ui.lbl_thoigian.text = sv.vari.newdate;
		sv.ui.ViewCheatPicker.visible = false;
		searchregionlottery({
			"regionid" : sv.ui.lblfirst.id,
			"date" : sv.ui.lbl_thoigian.text
		}, sv, sv.ui.lblfirst.id);
	};
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewCheatPicker.visible = false;
		sv.ui.ViewKQ.touchEnabled = true;
	};
	sv.fu.event_click_view = function(e) {
		sv.ui.ViewCheat.visible = true;
		sv.ui.ViewCheatPicker.visible = false;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.ViewKQ.touchEnabled = true;
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.lblfirst.id = e.row.id;
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewCheatPicker.visible = false;
		searchregionlottery({
			"regionid" : sv.ui.lblfirst.id,
			"date" : sv.ui.lbl_thoigian.text
		}, sv, sv.ui.lblfirst.id);
	};
};

////
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.ViewCheat.removeEventListener('click', sv.fu.event_clickViewCheat);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_showPicker);
		sv.ui.btnOK.removeEventListener('click', sv.fu.event_hidePicker);
		sv.ui.picker.removeEventListener('change', sv.fu.event_picker);
		sv.ui.ViewCheatPicker.removeEventListener('click', sv.fu.event_btnCancel);
		sv.ui.icon_refresh.removeEventListener('scroll', sv.fu.RefreshIcon);
		if (sv.vari.datarow != null || sv.vari.datarow != undefined) {
			sv.vari.datarow.clearInterVal();
		}
		Ti.API.info('remove so ket qua');
	};
};
/////////ham cap nhat ket qua va hien thi
function showResult(sv) {
	var xhr = Titanium.Network.createHTTPClient();
	var data = {};

	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=getnowtime');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
		Ti.API.error('Bad Sever =>' + e.error);
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		var time = jsonResuilt.time.toString().split(' ')[1];
		var date_now = jsonResuilt.time.toString().split(' ')[0];
		var date_n = date_now.split('/')[0];
		var month_n = date_now.split('/')[1];
		var year_n = date_now.split('/')[2];
		if (date_n == 1) {
			var datetime_js = new Date();
			month_n = month_n - 1;
			var last_date = new Date(datetime_js.getFullYear(), datetime_js.getMonth(), 0);
			date_n = last_date.getDate();
		} else {
			date_n = date_n - 1;
		}
		var yesterday_n = date_n + "/" + month_n + "/" + year_n;
		var hour = time.split(':')[0];
		var min = time.split(':')[1];
		Ti.API.info('thoi gian hien tai' + time + 'datetime server:' + date_now);
		if (hour == 17 && min >= 15) {
			sv.ui.icon_refresh.visible = true;
			sv.vari.flag_pull = true;
			sv.vari.id_tinh_now = 1;
			sv.ui.lbl_thoigian.setText(date_now);
			sv.vari.datetime_now = date_now;
			sv.ui.lblfirst.setText("Miền Trung");
			sv.vari.tinh = "MIỀN TRUNG";
			sv.ui.lblfirst.id = 1;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN TRUNG " + date_now);
			if (new Date().getDay() == 6 || new Date().getDay() == 4) {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
			} else {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
			}
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 16 && min >= 10) {
			sv.ui.icon_refresh.visible = true;
			sv.vari.flag_pull = true;
			sv.vari.id_tinh_now = 2;
			sv.ui.lblfirst.setText("Miền Nam");
			sv.vari.tinh = "MIỀN NAM";
			sv.ui.lbl_thoigian.setText(date_now);
			sv.vari.datetime_now = date_now;
			sv.ui.lblfirst.id = 2;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN NAM " + date_now);
			if (new Date().getDay() == 6) {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMN_t7'))();
			} else {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
			}
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 18 && min >= 15) {
			sv.ui.icon_refresh.visible = true;
			sv.vari.flag_pull = true;
			sv.vari.id_tinh_now = 0;
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.vari.tinh = "MIỀN BẮC";
			sv.ui.lbl_thoigian.setText(date_now);
			sv.vari.datetime_now = date_now;
			sv.ui.lblfirst.id = 0;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + date_now);
			sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 16 && min < 10) {
			sv.ui.icon_refresh.visible = false;
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.ui.lblfirst.id = 0;
			sv.vari.id_tinh_now = 0;
			Ti.API.info('lay ket qua mien bac');
			sv.ui.lbl_thoigian.setText(yesterday_n);
			var db = Ti.Database.open("userinfo");
			var db_cache = db.execute("SELECT * FROM RS_CACHE");
			var mangkq = [];
			if (db_cache.isValidRow()) {
				while (db_cache.isValidRow()) {
					mangkq.push(db_cache.fieldByName("result"));
					db_cache.next();
				}
				sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + yesterday_n);
				sv.vari.datarow.setParam_db(mangkq);
				sv.ui.ViewKQ.add(sv.vari.datarow);
				db.close();
				db_cache.close();
			} else {
				searchregionlottery({
					"regionid" : 0,
					"date" : yesterday_n
				}, sv, 0);
			}
		}
		if (hour == 17 && min < 15) {
			sv.ui.icon_refresh.visible = false;
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.ui.lblfirst.id = 0;
			sv.vari.id_tinh_now = 0;
			Ti.API.info('lay ket qua mien bac');
			sv.ui.lbl_thoigian.setText(yesterday_n);
			var db = Ti.Database.open("userinfo");
			var db_cache = db.execute("SELECT * FROM RS_CACHE");
			var mangkq = [];
			if (db_cache.isValidRow()) {
				while (db_cache.isValidRow()) {
					mangkq.push(db_cache.fieldByName("result"));
					db_cache.next();
				}
				sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + yesterday_n);
				sv.vari.datarow.setParam_db(mangkq);
				sv.ui.ViewKQ.add(sv.vari.datarow);
				db.close();
				db_cache.close();
			} else {
				searchregionlottery({
					"regionid" : 0,
					"date" : yesterday_n
				}, sv, 0);
			}
		}
		if (hour == 18 && min < 15) {
			sv.ui.icon_refresh.visible = false;
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.ui.lblfirst.id = 0;
			sv.vari.id_tinh_now = 0;
			Ti.API.info('lay ket qua mien bac');
			sv.ui.lbl_thoigian.setText(yesterday_n);
			var db = Ti.Database.open("userinfo");
			var db_cache = db.execute("SELECT * FROM RS_CACHE");
			var mangkq = [];
			if (db_cache.isValidRow()) {
				while (db_cache.isValidRow()) {
					mangkq.push(db_cache.fieldByName("result"));
					db_cache.next();
				}
				sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + getYesterdaysDate());
				sv.vari.datarow.setParam_db(mangkq);
				sv.ui.ViewKQ.add(sv.vari.datarow);
				db.close();
				db_cache.close();
			} else {
				searchregionlottery({
					"regionid" : 0,
					"date" : yesterday_n
				}, sv, 0);
			}
		} else {
			if (hour >= 19) {
				sv.ui.lblfirst.setText("Miền Bắc");
				sv.ui.lblfirst.id = 0;
				sv.vari.id_tinh_now = 0;
				Ti.API.info('lay ket qua mien bac');
				sv.ui.lbl_thoigian.setText(date_now);
				var db = Ti.Database.open("userinfo");
				var db_cache = db.execute("SELECT * FROM RS_CACHE");
				var mangkq = [];

				if (db_cache.isValidRow()) {
					if (db_cache.fieldByName("date_time") == date_now) {
						while (db_cache.isValidRow()) {
							mangkq.push(db_cache.fieldByName("result"));
							db_cache.next();
						}
						sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
						sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + date_now);
						sv.vari.datarow.setParam_db(mangkq);
						sv.ui.ViewKQ.add(sv.vari.datarow);
						db.close();
						db_cache.close();

					} else {
						db.execute("DELETE FROM RS_CACHE");
						db_cache.close();
						db.close();
						searchregionlottery({
							"regionid" : 0,
							"date" : date_now
						}, sv, 0);
					}
				} else {
					searchregionlottery({
						"regionid" : 0,
						"date" : date_now
					}, sv, 0);
				}
			}
			if (hour < 16) {
				sv.ui.lblfirst.setText("Miền Bắc");
				sv.ui.lblfirst.id = 0;
				sv.vari.id_tinh_now = 0;
				Ti.API.info('lay ket qua mien bac');
				sv.ui.lbl_thoigian.setText(yesterday_n);
				var db = Ti.Database.open("userinfo");
				var db_cache = db.execute("SELECT * FROM RS_CACHE");
				var mangkq = [];
				if (db_cache.isValidRow()) {
					while (db_cache.isValidRow()) {
						Ti.API.info('result' + db_cache.fieldByName("result"));
						mangkq.push(db_cache.fieldByName("result"));
						db_cache.next();
					}
					sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
					sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + yesterday_n);
					sv.vari.datarow.setParam_db(mangkq);
					sv.ui.ViewKQ.add(sv.vari.datarow);
					db.close();
					db_cache.close();
				} else {
					searchregionlottery({
						"regionid" : 0,
						"date" : yesterday_n
					}, sv, 0);
				}
			}
		}
	};

};
////
function searchregionlottery(data, sv, loai) {
	var xhr = Titanium.Network.createHTTPClient();
	sv.ui.ViewKQ.visible = false;
	if (sv.vari.datarow != null)
		sv.ui.ViewKQ.remove(sv.vari.datarow);
	Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
	sv.vari.time_out1 = setTimeout(function() {
		sv.ui.ViewKQ.visible = true;
		Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
		clearTimeout(sv.vari.time_out1);
	}, 1000);
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=searchregionlottery');
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
		var ketqua = [];
		var dodai = null;
		var date_time = [];
		if (jsonResuilt.resulttable[0]) {
			date_time = jsonResuilt.resulttable[0].resultdate.toString().split(' ');
			Ti.API.info('date' + date_time[0].toString().trim()+'ham: '+currDate().toString().trim()+'hom qua'+getYesterdaysDate().toString().trim());
			if (loai == "1") {
				if (jsonResuilt.resulttable.length == 3) {
					sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
				} else {
					sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
				}
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN TRUNG " + date_time[0]);
			}
			if (loai == "2") {
				if (jsonResuilt.resulttable.length == 4) {
					sv.vari.datarow = new (require('/ui-soxo/bangkqMN_t7'))();
				} else {
					if (jsonResuilt.resulttable.length == 3)
						sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
					else
						sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
				}

				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN NAM " + date_time[0]);
			}
			if (loai == "0") {
				var db = Ti.Database.open("userinfo");
				var db_cache = db.execute("SELECT * FROM RS_CACHE");
				if (db_cache.isValidRow()) {
					Ti.API.info('da co du lieu' + db_cache.fieldByName("date_time"));
				} else {
					if (new Date().getHours() < 19 && date_time[0].toString() == getYesterdaysDate()) {
						for (var j = 0; j < (jsonResuilt.resulttable[0].lines.length); j++) {
							db.execute('INSERT INTO RS_CACHE VALUES(?,?)', date_time[0], jsonResuilt.resulttable[0].lines[j].result.toString());
						}
					} else if (new Date().getHours() > 19 && date_time[0].toString() == currDate()) {
						for (var j = 0; j < (jsonResuilt.resulttable[0].lines.length); j++) {
							db.execute('INSERT INTO RS_CACHE VALUES(?,?)', date_time[0], jsonResuilt.resulttable[0].lines[j].result.toString());
						}
					} else {
						Ti.API.info('khong trung ngay nao');
					}

				}
				db_cache.close();
				db.close();
				sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + date_time[0]);
			}
			sv.vari.datarow.setParam(jsonResuilt.resulttable);
			sv.ui.ViewKQ.add(sv.vari.datarow);
		} else {
			sv.ui.View_header.setText("");
		}
	};

};

//////////
function sms_offline() {
	if (Ti.Network.online == false) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))("67XX", "KQSX MB", "CHÚNG TÔI SẼ GỬI SMS KẾT QUẢ XỔ SỐ CHO QUÝ KHÁCH HÀNG");
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
}

function setHeightPicker() {
	var isAndroid = Ti.Platform.osname === 'android';
	var isIpad = Ti.Platform.osname === 'ipad';
	if (isAndroid) {
		return Ti.App.size(500);
	} else {
		if (isIpad)
			return Ti.App.size(590);
		else
			return Ti.App.size(690);
	}
};

//////////
function currDate() {
	var currTime = new Date();
	if(currTime.getDate()>10){
		var ngay = currTime.getDate();
	}else{
		var ngay ="0"+ currTime.getDate();
	}
	
	var thang = currTime.getMonth() + 1;
	var nam = currTime.getFullYear();
	var currdate = ngay + "/" + thang + "/" + nam;
	return currdate;
}

function getYesterdaysDate() {
	var date = new Date();
	date.setDate(date.getDate() - 1);
	if(date.getDate()>10){
		var ngay = date.getDate();
	}else{
		var ngay ="0"+ date.getDate();
	}
	return ngay + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function currHour() {
	var date = new Date();
	var currhour = date.getHours();
	return currhour;
};
function set_lbl() {
	if (currHour() > 19 || (currHour() == 18 && new Date().getMinutes() > 30)) {
		return currDate();
	} else {
		return getYesterdaysDate();
	}
};