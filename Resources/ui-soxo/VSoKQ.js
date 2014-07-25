/**
 * 16h là miền Nam, 17h15 là miền Trung, 18h15 là miền Bắc
 */

module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		kt_mang();
		taobien(sv);
		taoui(sv);
		removeSK(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.interval = null;
	sv.vari.datarow = null;
	sv.vari.no_result = Ti.UI.createTableViewRow({
		title : "Chưa có kết quả"
	});
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
	sv.ui.view_choose = new sv.vari.combobox();
	sv.ui.view_choose1 = new sv.vari.combobox();
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
		backgroundColor : "#33030c"
		// backgroundImage : "/assets/icon/bg_picker1.png"
	});
	sv.ui.view_choose.setPos(0, 'MIỀN BẮC', 0, Ti.App.size(640), 0, 4);
	sv.ui.view_choose.setTable(sv.arr.ten_mien);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();

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
		backgroundColor : Ti.App.Color.red,
		backgroundImage : "/assets/icon/title_bar.png"
	});
	sv.ui.ViewCheat = Titanium.UI.createView({
		backgroundColor : 'transparent',
		top : Ti.App.size(90),
		left : 0,
		height : Ti.App.size(1136),
		zIndex : 10,
		visible : false,
		width : Ti.App.size(640),
		zIndex : 10
	});
	sv.ui.ViewKQ = Titanium.UI.createScrollView({
		top : Ti.App.size(180),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		// contentHeight : Ti.UI.FILL,
		backgroundColor : "transparent",
		// layout : "vertical",
		// horizontalWrap : false,
		showVerticalScrollIndicator : "true",
		bottom : Ti.App.size(25),
		zIndex : 0
	});
	createUI_Event(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);
	/////

	sv.ui.ViewLuaChon.add(sv.ui.view_choose);
	sv.ui.ViewCheat.add(sv.ui.table_view);

	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	sv.ui.ViewTong.add(sv.ui.ViewKQ);
};
////
function createUI_Event(sv) {
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewKQ.touchEnabled = true;
	};
	sv.fu.event_click_view = function(e) {
		sv.ui.ViewCheat.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.ViewKQ.scrollTo(0, 0);
		sv.ui.ViewKQ.touchEnabled = true;
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.lblfirst.id = e.row.id;
		sv.ui.ViewCheat.visible = false;
		soketqua({
			"regionid" : sv.ui.lblfirst.id,
		}, sv, sv.ui.lblfirst.id);
	};
};

////
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		// if(sv.vari.interval!=null||sv.vari.interval!=undefined){
		Ti.API.info('clear interval');
		clearInterval(sv.vari.interval);
		// }
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.ViewCheat.removeEventListener('click', sv.fu.event_clickViewCheat);
		Ti.API.info('remove so ket qua');
	};
};
/////////ham cap nhat ket qua va hien thi
function showResult(sv) {
	sv.vari.interval = null;
	if (0 < currHour() < 16) {
		Ti.API.info('Miền Bắc');
		sv.ui.lblfirst.setText("Miền Bắc");
		soketqua({
			"regionid" : "0",
		}, sv, "0");
	}
	if (16 < currHour() < 17) {
		Ti.API.info('đang quay miền trung');
		sv.ui.lblfirst.setText("Miền Trung");
		sv.vari.interval = setInterval(function() {
			soketqua({
				"regionid" : "1",
			}, sv, "1");
			if (currHour() == 16 && currMin > 30) {
				clearInterval(sv.vari.interval);
			}
		}, 15000);
	}
	if (17 < currHour() < 18) {
		Ti.API.info('đang quay miền nam');
		sv.ui.lblfirst.setText("Miền Nam");
		sv.vari.interval = setInterval(function() {
			soketqua({
				"regionid" : "2",
			}, sv, "2");
			if (currHour() == 17 && currMin > 30) {
				clearInterval(sv.vari.interval);
			}
		}, 15000);
	}
	if (18 < currHour() < 19) {
		Ti.API.info('đang quay miền bắc');
		sv.ui.lblfirst.setText("Miền Bắc");
		sv.vari.interval = setInterval(function() {
			soketqua({
				"regionid" : "0",
			}, sv, "0");
			if (currHour() == 18 && currMin > 30) {
				clearInterval(sv.vari.interval);
			}
		}, 15000);
	}
	if (19 < currHour() < 24) {
		Ti.API.info('Miền Bắc');
		sv.ui.lblfirst.setText("Miền Bắc");
		soketqua({
			"regionid" : "0",
		}, sv, "0");
	}
};

/////////
function soketqua(data, sv, loai) {
	var xhr = Titanium.Network.createHTTPClient();
	sv.ui.ViewKQ.removeAllChildren();
	sv.ui.ViewKQ.visible = false;
	Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=searchcurrentlottery');
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

		sv.vari.time_out1 = setTimeout(function() {
			sv.ui.ViewKQ.visible = true;
			Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
			clearTimeout(sv.vari.time_out1);
		}, 1500);
		var ketqua = [];
		var dodai = null;
		var date_time = null;
		date_time = jsonResuilt.resulttable[0].resultdate.toString().split(' ');
		Ti.API.info('date' + date_time[0]);

		if (loai == "1") {
			sv.vari.datarow = new (require('/ui-soxo/bangkqMT'))();
			sv.ui.View_header.setText("KẾT QUẢ SỔ XỐ MIỀN TRUNG " + date_time[0]);
		}
		if (loai == "2") {
			sv.vari.datarow = new (require('/ui-soxo/bangkqMN'))();
			sv.ui.View_header.setText("KẾT QUẢ SỔ XỐ MIỀN NAM " + date_time[0]);
		}
		if (loai == "0") {
			sv.vari.datarow = new (require('/ui-soxo/bangkqMB'))();
			sv.ui.View_header.setText("KẾT QUẢ SỔ XỐ MIỀN BẮC " + date_time[0]);
		}
		sv.vari.datarow.setParam(jsonResuilt.resulttable);
		sv.ui.ViewKQ.add(sv.vari.datarow);
	};

};
//////////

function kt_mang() {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(0);
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
};
//////////

function currHour() {
	var date = new Date();
	var currhours = date.getHours();
	return currhours;
};
function currMin() {
	var date = new Date();
	var currMininute = date.getMinutes();
	return currMininute;
}
