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
	// sv.arr.LabelTenGiai=[];
	// sv.arr.LabelKetQua=[];
	sv.vari.combobox = require('/ui-soxo/ComboBox');
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(163),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundImage : "/assets/icon/bg_sokq.png"
	});
	////view lua chon
	sv.ui.ViewLuaChon = Titanium.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(95),
		left : 0,
		top : 0,
		backgroundImage : "/assets/icon/bg_picker1.png"
	});
	sv.ui.view_choose = new sv.vari.combobox();
	sv.ui.view_choose.setPos(0, 'MIỀN BẮC', 0, Ti.App.size(320), Ti.App.size(95), 1);
	sv.ui.view_choose1 = new sv.vari.combobox();
	sv.ui.view_choose1.setPos(0, set_lbl(), Ti.App.size(320), Ti.App.size(320), Ti.App.size(95), 2);
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.ViewPicker = Titanium.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		visible : false,
		bottom : 0,
		zIndex : 10,
	});

	sv.ui.picker = Ti.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_DATE,
		minDate : new Date(2014, 0, 1),
		maxDate : new Date(),
		top : Ti.App.size(100),
		value : new Date(),
		backgroundColor : Ti.App.Color.nauden,
		width : Ti.App.size(720),
	});
	sv.ui.ViewPicker.add(sv.ui.picker);
	/////
	sv.ui.View_header = Titanium.UI.createLabel({
		height : Ti.App.size(80),
		left : 0,
		top : Ti.App.size(95),
		width : Ti.App.size(640),
		color : "orange",
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		textAlign : 'center',
		backgroundColor : Ti.App.Color.red,
		text : "Kết quả xổ số Miền Bắc " + currDate(),
		backgroundImage : "/assets/icon/title_bar.png"
	});
	sv.ui.TableView = Ti.UI.createTableView({
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		top : Ti.App.size(180),
		left : 0,
		backgroundColor : "transparent",
		separatorColor : "transparent"
	});
	sv.ui.ViewTong.add(sv.ui.TableView);
	///
	soketqua("searchlottery", {
		"provideid" : sv.ui.lblfirst.id,
		"startdate" : "8/6/2014"
	}, sv);
	/////
	createUI_Event(sv);
	sv.ui.picker.addEventListener('change', sv.fu.event_picker);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	/////
	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose1);
	sv.ui.ViewTong.add(sv.ui.table_view);
	sv.ui.ViewTong.add(sv.ui.ViewPicker);
};
////
function createUI_Event(sv) {
	////
	sv.fu.event_picker = function(e) {
		sv.vari.date = e.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
		sv.ui.lblfirst1.text = sv.vari.newdate;
	};

	////
	sv.fu.event_clickscrollview = function(e) {
		sv.vari.flag = false;
		if (sv.vari.flag == false) {
			sv.ui.table_view.visible = false;
			sv.ui.ViewPicker.visible = false;
		};
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		soketqua("getprovide", {
			"startdate" : "8/6/2014"
		}, sv);
		sv.ui.table_view.visible = true;
		sv.ui.ViewPicker.visible = false;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		sv.ui.TableView.scrollToTop(0, 0);
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		sv.ui.View_header.text = "Kết quả sổ xố " + sv.ui.lblfirst.text + ' ' + sv.ui.lblfirst1.text;
		sv.ui.table_view.visible = false;
		sv.ui.ViewPicker.visible = false;
		soketqua("searchlottery", {
			"provideid" : sv.ui.lblfirst.id,
			"startdate" : "8/6/2014"
		}, sv);
	};
	sv.fu.event_click_view1 = function(e) {
		sv.vari.flag = true;
		sv.ui.ViewPicker.visible = true;
		sv.ui.table_view.visible = false;
	};
};

////
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.picker.removeEventListener('change', sv.fu.event_picker);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.view_choose1.removeEventListener('click', sv.fu.event_click_view1);
		sv.ui.ViewTong.removeEventListener('click', sv.fu.event_clickscrollview);
		Ti.API.info('remove so ket qua');
	};
};
/////////
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
		if (_cmd == "searchlottery") {
			var ketqua = [];
			var mangstring;
			var mangkq = [];
			var dodai = null;
			for (var i = 0; i < jsonResuilt.resulttable.length; i++) {
				if (jsonResuilt.resulttable[i].provide) {
					Ti.API.info('ten giai: ' + jsonResuilt.resulttable[i].provide.name);
					Ti.API.info('ngay thang: ' + jsonResuilt.resulttable[i].resultdate);
					for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
						// Ti.API.info('Thu tu: ' + jsonResuilt.resulttable[i].lines[j].name);
						// Ti.API.info('ket qua: ' + jsonResuilt.resulttable[i].lines[j].result);
						ketqua.push(jsonResuilt.resulttable[i].lines[j].result);
					};
					dodai = ketqua.length;
					Ti.API.info('do dai ket qua' + dodai);
					if (dodai == 9) {
						sv.ui.TableView.setData(rows(ketqua));
					}
					if (dodai == 8) {
						sv.ui.TableView.setData(rows(ketqua));
					}

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
function tbl_click(e, _lbl, _tbl, sv) {
	if (sv.vari.flag == true) {
		if (_lbl.id) {
			_lbl.id = e.row.id;
			Ti.API.info('id' + _lbl.id);
			_lbl.text = e.row.tenrow;
			_tbl.visible = false;
		} else {
			_lbl.text = e.row.tenrow;
			_tbl.visible = false;
		}
	}
}

function view_click(_tbl1, _tbl2, sv) {
	if (sv.vari.flag == true) {
		_tbl1.visible = true;
		_tbl2.visible = false;
	}

}

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
	if (currHour() >= 18) {
		return currDate();
	} else {
		return getYesterdaysDate();
	}
};
function rows(param) {
	var TenGiaiMB = ["Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải Tư", "Giải Năm", "Giải Sáu", "Giải Bảy"];
	var TenGiaiMN = ["Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải Tư", "Giải Năm", "Giải Sáu", "Giải Bảy", "Giải Tám"];
	var rowsdata = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var viewchua = [];
	// sv.ui.ViewTong.add(sv.ui.TableView);
	for (var i = 0; i < param.length; i++) {
		rowsdata[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			height : setRow(param, i),
			backgroundColor : "transparent",
			left : 0,
			// top:setTop(i)
			// borderColor : "yellow",
			// borderWidth : Ti.App.size(10),
		});
		lblTenGiai[i] = Ti.UI.createLabel({
			left : Ti.App.size(10),
			width : Ti.App.size(160),
			height : setHeightRow(param, i),
			backgroundColor : Ti.App.Color.nauden,
			text : TenGiaiMN[i] || TenGiaiMB[i],
			textAlign : "center",
			color : setColor(i),
			font : setFont(i)
		});
		viewchua[i] = Titanium.UI.createView({
			left : Ti.App.size(180),
			width : Ti.App.size(450),
			right : Ti.App.size(10),
			height : setHeightRow(param, i),
			backgroundColor : Ti.App.Color.nauden,
		});
		if (param.length != 0) {
			lblKQ[i] = Ti.UI.createLabel({
				left : Ti.App.size(20),
				color : setColor(i),
				font : setFont(i),
				text : param[i].toString(),
				textAlign : "center",
				height : Ti.UI.FILL,
				width : Ti.App.size(400),
				right : Ti.App.size(30)
			});
		} else {
			lblKQ[i] = Ti.UI.createLabel({
				left : Ti.App.size(20),
				color : "white",
				font : {
					fontSize : Ti.App.size(25)
				},
				text : "",
				textAlign : "center",
				height : Ti.UI.FILL,
				width : Ti.App.size(430),
			});
		}
		viewchua[i].add(lblKQ[i]);
		rowsdata[i].add(viewchua[i]);
		rowsdata[i].add(lblTenGiai[i]);
	};
	return rowsdata;
};
function setHeightRow(param, i) {
	if (param.length == 8) {
		if (i == 3 || i == 5)
			return Ti.App.size(85);
		else
			return Ti.App.size(75);
	} else {
		if (i == 4)
			return Ti.App.size(85);
		else
			return Ti.App.size(75);
	}

};
function setRow(param, i) {
	if (param.length == 8) {
		if (i == 3 || i == 5)
			return Ti.App.size(95);
		else
			return Ti.App.size(85);
	} else {
		if (i == 4)
			return Ti.App.size(95);
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