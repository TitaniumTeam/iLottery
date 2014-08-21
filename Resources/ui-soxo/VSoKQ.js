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
	sv.vari.datarow = null;
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
	sv.ui.view_choose.setPos(0, '', 0, Ti.App.size(320), 0, 4, Ti.App.size(320));
	sv.ui.view_choose.setTable(sv.arr.ten_mien);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose1.setPos(0, set_lbl(), Ti.App.size(320), Ti.App.size(320), 0, 5, Ti.App.size(320));
	sv.ui.lbl_thoigian = sv.ui.view_choose1.getLblFirst();
	////view picker
	sv.ui.ViewPicker = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : setHeightPicker(),
		visible : false,
		bottom : 0,
		zIndex : 10,
		backgroundColor : "transparent",
	});
	////
	var date = new Date();
	if (new Date().getHours() >= 16) {
	} else {
		date.setDate(date.getDate() - 1);
	}
	sv.ui.picker = Ti.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_DATE,
		minDate : new Date(2014, 0, 1),
		maxDate : new Date(parseInt(date.getFullYear()), parseInt((date.getMonth())), parseInt(date.getDate())),
		value : new Date(parseInt(date.getFullYear()), parseInt((date.getMonth())), parseInt(date.getDate())),
		backgroundColor : Ti.App.Color.nauden,
		width : Ti.App.size(640),
		bottom : 0,
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
		zIndex : 10,
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
		layout : 'vertical'
	});
	showResult(sv);
	createUI_Event(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_showPicker);
	sv.ui.ViewPicker.addEventListener('click', sv.fu.event_hidePicker);
	sv.ui.picker.addEventListener('change', sv.fu.event_picker);
	/////
	sv.ui.ViewLuaChon.add(sv.ui.view_choose1);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose);
	sv.ui.ViewCheat.add(sv.ui.table_view);
	sv.ui.ViewPicker.add(sv.ui.picker);

	sv.ui.ViewTong.add(sv.ui.ViewPicker);
	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	sv.ui.ViewTong.add(sv.ui.ViewKQ);
};
////
function createUI_Event(sv) {
	sv.fu.event_showPicker = function(e) {
		sv.ui.ViewPicker.visible = true;
		sv.ui.ViewCheat.visible = false;
	};
	sv.fu.event_picker = function(e) {
		sv.vari.date = e.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
		sv.ui.lbl_thoigian.text = sv.vari.newdate;
	};
	sv.fu.event_hidePicker = function(e) {
		sv.ui.ViewPicker.visible = false;
		searchregionlottery({
			"regionid" : sv.ui.lblfirst.id,
			"date" : sv.ui.lbl_thoigian.text
		}, sv, sv.ui.lblfirst.id);
	};
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewPicker.visible = false;
		sv.ui.ViewKQ.touchEnabled = true;
	};
	sv.fu.event_click_view = function(e) {
		sv.ui.ViewCheat.visible = true;
		sv.ui.ViewPicker.visible = false;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.ViewKQ.touchEnabled = true;
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.lblfirst.id = e.row.id;
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewPicker.visible = false;
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
		sv.ui.ViewPicker.removeEventListener('click', sv.fu.event_hidePicker);
		sv.ui.picker.removeEventListener('change', sv.fu.event_picker);
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
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		var time = jsonResuilt.time.toString().split(' ')[1];
		var hour = time.split(':')[0];
		var min = time.split(':')[1];

		Ti.API.info('thoi gian hien tai' + time);
		if (hour == 17 && min >= 15) {
			Ti.API.info('lay kq mien trung');
			sv.ui.lbl_thoigian.setText(currDate());
			sv.ui.lblfirst.setText("Miền Trung");
			sv.ui.lblfirst.id = 1;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN TRUNG " + currDate());
			sv.ui.ViewKQ.removeAllChildren();
			sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 16 && min >= 10) {
			sv.ui.lblfirst.setText("Miền Nam");
			sv.ui.lbl_thoigian.setText(currDate());
			sv.ui.lblfirst.id = 2;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN NAM " + currDate());
			sv.ui.ViewKQ.removeAllChildren();
			sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 18 && min >= 15) {
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.ui.lbl_thoigian.setText(currDate());
			sv.ui.lblfirst.id = 0;
			sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN BẮC " + currDate());
			sv.ui.ViewKQ.removeAllChildren();
			sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
			sv.vari.datarow.setParamLive();
			sv.ui.ViewKQ.add(sv.vari.datarow);
		}
		if (hour == 16 && min < 10) {
			sv.ui.lblfirst.setText("Miền Bắc");
			sv.ui.lblfirst.id = 0;
			Ti.API.info('lay ket qua mien bac');
			sv.ui.lbl_thoigian.setText(getYesterdaysDate());
			searchregionlottery({
				"regionid" : 0,
				"date" : getYesterdaysDate()
			}, sv, 0);
		}
		if (hour == 17 && min < 15) {
			sv.ui.lblfirst.id = 2;
			sv.ui.lbl_thoigian.setText(currDate());
			sv.ui.lblfirst.setText("Miền Nam");
			Ti.API.info('lay ket qua mien nam');
			searchregionlottery({
				"regionid" : 2,
				"date" : currDate()
			}, sv, 2);
		}
		if (hour == 18 && min < 15) {
			sv.ui.lbl_thoigian.setText(currDate());
			sv.ui.lblfirst.id = 1;
			sv.ui.lblfirst.setText("Miền Trung");
			Ti.API.info('lay ket qua mien trung');
			searchregionlottery({
				"regionid" : 1,
				"date" : currDate()
			}, sv, 1);
		} else {
			if (hour >= 19) {
				sv.ui.lbl_thoigian.setText(currDate());
				sv.ui.lblfirst.id = 0;
				sv.ui.lblfirst.setText("Miền Bắc");
				Ti.API.info('lay ket qua mien bac');
				searchregionlottery({
					"regionid" : 0,
					"date" : currDate()
				}, sv, 0);
			}
			if (hour < 16) {
				sv.ui.lbl_thoigian.setText(getYesterdaysDate());
				sv.ui.lblfirst.id = 0;
				sv.ui.lblfirst.setText("Miền Bắc");
				Ti.API.info('lay ket qua mien bac');
				searchregionlottery({
					"regionid" : 0,
					"date" : getYesterdaysDate()
				}, sv, 0);
			}
		}
	};

};
////
function searchregionlottery(data, sv, loai) {
	var xhr = Titanium.Network.createHTTPClient();
	sv.ui.ViewKQ.visible = false;
	sv.ui.ViewKQ.removeAllChildren();
	Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
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
		sv.vari.time_out1 = setTimeout(function() {
			sv.ui.ViewKQ.visible = true;
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
			clearTimeout(sv.vari.time_out1);
		}, 1500);
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);

		sv.vari.time_out1 = setTimeout(function() {
			sv.ui.ViewKQ.visible = true;
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
			clearTimeout(sv.vari.time_out1);
		}, 1500);
		var ketqua = [];
		var dodai = null;
		var date_time = [];
		if (jsonResuilt.resulttable[0]) {
			date_time = jsonResuilt.resulttable[0].resultdate.toString().split(' ');
			Ti.API.info('date' + date_time[0]);
			if (loai == "1") {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN TRUNG " + date_time[0]);
			}
			if (loai == "2") {
				sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
				sv.ui.View_header.setText("KẾT QUẢ XỔ SỐ MIỀN NAM " + date_time[0]);
			}
			if (loai == "0") {
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
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
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
		return Ti.App.size(650);
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
	var ngay = currTime.getDate();
	var thang = currTime.getMonth() + 1;
	var nam = currTime.getFullYear();
	var currdate = ngay + "/" + thang + "/" + nam;
	return currdate;
}

function getYesterdaysDate() {
	var date = new Date();
	date.setDate(date.getDate() - 1);
	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
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