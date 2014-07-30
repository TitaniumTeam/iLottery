module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		sms_offline();
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.winThongKeKQ;
};

function createVariable(sv) {
	sv.vari.combobox = require('/ui-soxo/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox();
	sv.ui.view_choose1 = new sv.vari.combobox();
	sv.ui.view_choose2 = new sv.vari.combobox();
	// sv.vari.now=new Date();
	// sv.vari.now=sv.vari.now.setDate(sv.vari.now.getDate()-1);
}

function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	sv.ui.winThongKeKQ = Titanium.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		backgroundColor : Ti.App.Color.nauden,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});
	sv.ui.winThongKeKQ.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "THỐNG KÊ THEO TỈNH ",
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);

	/////
	sv.ui.View_Back = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(90),
		top : 0,
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
	});
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_Back.add(sv.ui.btn_Back);
	////
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(86),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundImage : "/assets/icon/bg_sokq.png",
	});

	////view lua chon
	sv.ui.ViewLuaChon = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		left : 0,
		top : Ti.App.size(93),
		backgroundImage : "/assets/icon/bg_picker1.png"
	});
	sv.ui.ViewLuaChonTinh = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		left : 0,
		top : 0,
		backgroundColor : "#33030c"
	});
	sv.ui.view_choose.setPos(0, 'MIỀN BẮC', 0, Ti.App.size(640), 0, 1);
	sv.ui.view_choose1.setPos(0, set_lbl2(), 0, Ti.App.size(320), 0, 2);
	sv.ui.view_choose2.setPos(0, set_lbl(), Ti.App.size(320), Ti.App.size(320), 0, 3);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.lblfirst2 = sv.ui.view_choose2.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();

	sv.ui.ViewPicker = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(713),
		visible : false,
		bottom : 0,
		zIndex : 10,
		backgroundColor : "transparent",
	});
	////
	var date = new Date();
	if (new Date().getHours() >= 16) {
		date.setDate(date.getDate() - 3);
	} else {
		date.setDate(date.getDate() - 4);
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
	///////
	sv.ui.ViewPicker2 = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(713),
		visible : false,
		bottom : 0,
		zIndex : 10,
		backgroundColor : "transparent",
	});
	var date2 = new Date();
	if (new Date().getHours() >= 16) {
		date2 = new Date();
	} else {
		date2.setDate(date2.getDate() - 1);
	}
	sv.ui.picker2 = Ti.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_DATE,
		minDate : (sv.ui.picker.maxDate),
		maxDate : new Date(parseInt(date2.getFullYear()), parseInt((date2.getMonth())), parseInt(date2.getDate())),
		value : new Date(parseInt(date2.getFullYear()), parseInt((date2.getMonth())), parseInt(date2.getDate())),
		backgroundColor : Ti.App.Color.nauden,
		width : Ti.App.size(640),
		bottom : 0,
	});
	/////
	sv.ui.View_header = Titanium.UI.createLabel({
		height : Ti.App.size(80),
		left : 0,
		top : Ti.App.size(180),
		width : Ti.App.size(640),
		color : "orange",
		font : {
			fontSize : Ti.App.size(25),
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
		width : Ti.App.size(640)
	});
	sv.ui.ScrollView = Ti.UI.createScrollView({
		top : Ti.App.size(270),
		left : 0,
		width : Ti.App.size(640),
		// height : Ti.UI.SIZE,
		// contentHeight : Ti.UI.SIZE,
		backgroundColor : "transparent",
		layout : "vertical",
		// horizontalWrap : false,
		showVerticalScrollIndicator : "true",
		bottom : Ti.App.size(25),
		zIndex : 0
	});
	if (Ti.Platform.osname == "android") {
		sv.ui.ScrollView.setContentHeight(Ti.UI.FILL);
		sv.ui.ScrollView.setHeight(Ti.UI.SIZE);
	} else {
		sv.ui.ScrollView.setHeight(Ti.UI.SIZE);

	}
	///
	/////
	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winThongKeKQ.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winThongKeKQ.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winThongKeKQ.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.picker.addEventListener('change', sv.fu.event_picker);
	sv.ui.picker2.addEventListener('change', sv.fu.event_picker1);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.view_choose2.addEventListener('click', sv.fu.event_click_view2);
	sv.ui.ViewCheat.addEventListener('click', sv.fu.event_clickViewCheat);
	sv.ui.ViewPicker.addEventListener('click', sv.fu.evt_hidePicker);
	sv.ui.ViewPicker2.addEventListener('click', sv.fu.evt_hidePicker);
	/////
	sv.ui.ViewLuaChonTinh.add(sv.ui.view_choose);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose1);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose2);

	sv.ui.ViewCheat.add(sv.ui.table_view);
	sv.ui.ViewPicker.add(sv.ui.picker);
	sv.ui.ViewPicker2.add(sv.ui.picker2);
	sv.ui.ViewTong.add(sv.ui.ViewLuaChonTinh);
	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);

	sv.ui.ViewTong.add(sv.ui.ViewCheat);
	sv.ui.ViewTong.add(sv.ui.ViewPicker);
	sv.ui.ViewTong.add(sv.ui.ViewPicker2);
	sv.ui.ViewTong.add(sv.ui.ScrollView);
	/////
	sv.ui.winThongKeKQ.add(sv.ui.ViewTong);
	///////
	soketqua("searchtimelottery", {
		"provideid" : sv.ui.lblfirst.id,
		"startdate" : sv.ui.lblfirst1.text,
		"enddate" : sv.ui.lblfirst2.text,
	}, sv);
}

function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winThongKeKQ.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winThongKeKQ.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};
	sv.fu.evt_hidePicker = function(e) {
		sv.ui.ViewPicker.visible = false;
		sv.ui.ViewPicker2.visible = false;
		soketqua("searchtimelottery", {
			"provideid" : sv.ui.lblfirst.id,
			"startdate" : sv.ui.lblfirst1.text,
			"enddate" : sv.ui.lblfirst2.text,
			// ""
		}, sv);
	};
	////
	sv.fu.event_picker = function(e) {
		sv.vari.date = e.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
		sv.ui.lblfirst1.text = sv.vari.newdate;
	};
	sv.fu.event_picker1 = function(e) {
		sv.vari.date = e.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
		sv.ui.lblfirst2.text = sv.vari.newdate;
	};
	////
	sv.fu.event_clickViewCheat = function(e) {
		sv.ui.ViewCheat.visible = false;
		// sv.ui.TableView.touchEnabled = true;
		sv.ui.ViewPicker.visible = false;
		sv.ui.ViewPicker2.visible = false;
	};
	sv.fu.event_click_view = function(e) {
		soketqua("getprovide", {
			"startdate" : sv.ui.lblfirst1.text,
			"enddate" : sv.ui.lblfirst2.text,
			// "startdate" : set_lbl()
		}, sv);
		sv.ui.ViewPicker.visible = false;
		sv.ui.ViewPicker2.visible = false;
		sv.ui.ViewCheat.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.ui.lblfirst.text = e.row.tenrow;
		sv.ui.lblfirst.id = e.row.id;
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewPicker.visible = false;
		sv.ui.ViewPicker2.visible = false;
		soketqua("searchtimelottery", {
			"provideid" : sv.ui.lblfirst.id,
			"startdate" : sv.ui.lblfirst1.text,
			"enddate" : sv.ui.lblfirst2.text,
		}, sv);
	};
	sv.fu.event_click_view1 = function(e) {
		sv.ui.ViewPicker.visible = true;
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewPicker2.visible = false;
		// sv.ui.TableView.touchEnabled = false;
	};
	sv.fu.event_click_view2 = function(e) {
		sv.ui.ViewPicker2.visible = true;
		sv.ui.ViewCheat.visible = false;
		sv.ui.ViewPicker.visible = false;
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.View_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winThongKeKQ.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winThongKeKQ.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.winThongKeKQ.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.picker.removeEventListener('change', sv.fu.event_picker);
		sv.ui.picker2.removeEventListener('change', sv.fu.event_picker1);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.view_choose2.removeEventListener('click', sv.fu.event_click_view2);
		sv.ui.ViewCheat.removeEventListener('click', sv.fu.event_clickViewCheat);
		sv.ui.ViewPicker.removeEventListener('click', sv.fu.evt_hidePicker);
		sv.ui.ViewPicker2.removeEventListener('click', sv.fu.evt_hidePicker);
		// sv.vari = null;
		// sv.arr = null;
		// sv.ui = null;
		// sv.fu = null;
		// sv.test = null;
		// sv = null;

		Ti.API.info('Closed window THONG KE TONG HOP, sv=' + sv);
	};

}

///////////
function soketqua(_cmd, data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
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
		if (_cmd == "searchtimelottery") {
			sv.ui.ScrollView.removeAllChildren();
			// sv.ui.TableView.visible = false;
			sv.ui.ScrollView.visible = false;
			Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
			sv.vari.time_out1 = setTimeout(function() {
				// sv.ui.TableView.visible = true;
				sv.ui.ScrollView.visible = true;
				Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
				clearTimeout(sv.vari.time_out1);
			}, 1500);
			var ketqua = [];
			var dodai = null;
			var dataTable = null;
			if (jsonResuilt.resulttable[0].provide) {
				if (sv.ui.lblfirst1.text != sv.ui.lblfirst2.text) {
					sv.ui.View_header.text = "KQSX " + jsonResuilt.resulttable[0].provide.name.toString() + " từ: " + sv.ui.lblfirst1.text + ' đến: ' + sv.ui.lblfirst2.text;
				} else {
					sv.ui.View_header.text = "KQSX " + jsonResuilt.resulttable[0].provide.name.toString() + " ngày " + sv.ui.lblfirst1.text;
				}

			}
			for (var i = 0; i < jsonResuilt.resulttable.length; i++) {

				if (jsonResuilt.resulttable[i].provide) {
					Ti.API.info('ten giai: ' + jsonResuilt.resulttable[i].provide.name);
					Ti.API.info('ngay thang: ' + jsonResuilt.resulttable[i].resultdate);
					dataTable = rows();
					dataTable.setParam(jsonResuilt.resulttable[i].lines, "Xổ Số " + jsonResuilt.resulttable[i].provide.name + " quay ngày " + jsonResuilt.resulttable[i].resultdate);
					sv.ui.ScrollView.add(dataTable);
					for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
						Ti.API.info('Thu tu: ' + jsonResuilt.resulttable[i].lines[j].name);
						Ti.API.info('ket qua: ' + jsonResuilt.resulttable[i].lines[j].result);

					};
				} else {
				}

			}
		} else {
			if (_cmd == "getprovide") {
				var ketqua;
				var mangkq = [];
				for (var i = 0; i < jsonResuilt.provides.length; i++) {
					mangkq.push(jsonResuilt.provides[i]);
				}
				sv.ui.view_choose.setTable(mangkq);
			}
		}

	};

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

function get3DayBefore(i) {
	var date = new Date();
	var date = new Date();
	date.setDate(date.getDate() - 3);
	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

}

function get4DayBefore(i) {
	var date = new Date();
	var date = new Date();
	date.setDate(date.getDate() - 4);
	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function currHour() {
	var date = new Date();
	var currhour = date.getHours();
	return currhour;
};
function set_lbl() {
	if (currHour() >= 16) {
		return currDate();
	} else {
		return getYesterdaysDate();
	}
};
function set_lbl2() {
	if (currHour() >= 16) {
		return get3DayBefore();
	} else {
		return get4DayBefore();
	}

}

function rows() {
	var isAndroid = Ti.Platform.osname === 'android';
	var TenGiaiMN = ["Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải Tư", "Giải Năm", "Giải Sáu", "Giải Bảy", "Giải Tám"];
	var rowsdata = [];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var viewchua = [];
	var ViewChuaTable = Ti.UI.createView({
		width : Ti.App.size(640),
		height : isAndroid == true ? Ti.UI.SIZE : Ti.UI.FILL,
		left : 0,
		backgroundColor : 'transparent',
		touchEnabled : false,
		top : 0,
	});
	var Header = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		backgroundColor : "transparent",
		touchEnabled : false,
		top : 0
	});
	var icon = Ti.UI.createImageView({
		width : Ti.App.size(29),
		height : Ti.App.size(29),
		image : "/assets/icon/icon_xoso.png",
		touchEnabled : false,
		left : Ti.App.size(10)
	});
	var lbl = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(25)
		},
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : "white",
		touchEnabled : false,
		left : Ti.App.size(50)
	});
	Header.add(lbl);
	Header.add(icon);
	ViewChuaTable.add(Header);
	var viewTen = Titanium.UI.createView({
		height : isAndroid == true ? Ti.UI.SIZE : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : Ti.App.size(90),
		left : Ti.App.size(10),
		width : Ti.App.size(140),
		layout : 'vertical'
	});
	var viewChuaGiai1 = Ti.UI.createView({
		height : isAndroid == true ? Ti.UI.SIZE : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : Ti.App.size(90),
		width : Ti.App.size(470),
		layout : 'vertical',
		left : Ti.App.size(160),
	});
	ViewChuaTable.add(viewTen);
	ViewChuaTable.add(viewChuaGiai1);
	ViewChuaTable.setParam = function(param, name) {
		lbl.setText(name);
		for (var i = 0; i < param.length; i++) {
			viewTenGiai[i] = Titanium.UI.createView({
				width : Ti.App.size(160),
				height : setHeightRow(param, i),
				width : Ti.App.size(140),
				backgroundColor : "transparent",
				top : Ti.App.size(10)
			});
			viewTenGiai[i].add(Ti.UI.createView({
				width : "100%",
				height : "100%",
				zIndex : 0,
				backgroundImage : "/assets/icon/image.png",
			}));
			lblTenGiai[i] = Ti.UI.createLabel({
				height : Ti.UI.FILL,
				text : TenGiaiMN[i],
				textAlign : "center",
				color : setColor(i),
				font : setFont(i),
				width : Ti.App.size(140),
				zIndex : 1
			});
			viewchua[i] = Titanium.UI.createView({
				width : Ti.App.size(470),
				height : setHeightRow(param, i),
				backgroundColor : "transparent",
				top : Ti.App.size(10)
			});
			viewchua[i].add(Ti.UI.createView({
				width : "100%",
				height : "100%",
				zIndex : 0,
				backgroundImage : "/assets/icon/image.png",
			}));
			lblKQ[i] = Ti.UI.createLabel({
				color : setColor(i),
				font : setFont(i),
				text : param[i].result.toString().replace(/,/g, '-'),
				textAlign : "center",
				height : Ti.UI.FILL,
				width : Ti.App.size(420),
				zIndex : 1
			});
			viewTenGiai[i].add(lblTenGiai[i]);
			viewchua[i].add(lblKQ[i]);
			viewTen.add(viewTenGiai[i]);
			viewChuaGiai1.add(viewchua[i]);
		}
	};
	return ViewChuaTable;
};
function setHeightRow(param, i) {
	if (param.length == 8) {
		if (i == 3 || i == 5)
			return Ti.App.size(95);
		else
			return Ti.App.size(75);
	} else {
		if (i == 4)
			return Ti.App.size(95);
		else
			return Ti.App.size(75);
	}

};
function setRow(param, i) {
	if (param.length == 8) {
		if (i == 3 || i == 5)
			return Ti.App.size(105);
		else
			return Ti.App.size(85);
	} else {
		if (i == 4)
			return Ti.App.size(105);
		else
			return Ti.App.size(85);
	}
}

function setColor(i) {
	if (i == 0) {
		return "orange";
	} else {
		return Ti.App.Color.superwhite;
	}
};
function setFont(i) {
	if (i == 0) {
		return {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		};
	} else {
		return {
			fontSize : Ti.App.size(25)
		};
	}
};

function sms_offline() {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))("67XX", "TKKQSX MB", "CHÚNG TÔI SẼ GỬI SMS KẾT QUẢ THỐNG KÊ CHO QUÝ KHÁCH HÀNG");
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
}