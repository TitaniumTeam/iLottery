module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.winThongKeTH;
};

function createVariable(sv) {
	sv.arr.rows = [];
	sv.vari.combobox = require('/ui-soxo/ComboBox');
	sv.ui.view_choose = new sv.vari.combobox();
	sv.vari.viewRaLienTiep = null;
	sv.vari.viewXuatHienNhieu = null;
	sv.vari.viewLauChuaRa = null;
	sv.vari.flag = false;
}

function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	sv.ui.winThongKeTH = Titanium.UI.createWindow({
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
	sv.ui.winThongKeTH.add(sv.ui.ViewHeader);
	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "THỐNG KÊ TỔNG HỢP ",
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
		height : Ti.App.size(95),
		left : 0,
		top : 0,
		backgroundColor : "#33030c"
		// backgroundImage : "/assets/icon/nav_bar.png"
	});

	sv.ui.view_choose.setPos(0, 'MIỀN BẮC', 0, Ti.App.size(640), Ti.App.size(95), 1);
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
			fontSize : Ti.App.size(35),
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		textAlign : 'center',
		backgroundColor : Ti.App.Color.red,
		text : "Thống kê tổng hợp Miền Bắc ",
		backgroundImage : "/assets/icon/title_bar.png"
	});
	///
	sv.ui.ScrollView = Ti.UI.createScrollView({
		width : Ti.App.size(640),
		top : Ti.App.size(175),
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
		height : Ti.UI.FILL,
		bottom : Ti.App.size(25),
		// contentHeight:Ti.UI.FILL
	});
	if (Ti.Platform.osname == "android") {
		sv.ui.ScrollView.setContentHeight(Ti.UI.FILL);
	}
	thongke("getlotterystat", {
		"provideid" : "MB",
		"startdate" : currDate()
	}, sv);
	////
	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winThongKeTH.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winThongKeTH.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winThongKeTH.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ScrollView.addEventListener('click', sv.fu.event_clickscrollview);

	/////
	sv.ui.ViewTong.add(sv.ui.ViewLuaChon);
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.ViewLuaChon.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.table_view);
	sv.ui.ViewTong.add(sv.ui.ScrollView);
	sv.ui.winThongKeTH.add(sv.ui.ViewTong);
}

function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winThongKeTH.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winThongKeTH.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};
	sv.fu.event_clickscrollview = function(e) {
		sv.vari.flag = false;
		if (sv.vari.flag == false) {
			sv.ui.table_view.visible = false;
		};
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		thongke("getprovide", {
			"startdate" : currDate()
		}, sv);
		sv.ui.table_view.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		sv.ui.View_header.text = "Thống kê tổng hợp " + sv.ui.lblfirst.text;
		thongke("getlotterystat", {
			"provideid" : sv.ui.lblfirst.text,
			"startdate" : currDate()
			//currDate()
		}, sv);
	};
	sv.fu.event_click_view1 = function(e) {
		sv.vari.flag = true;
		sv.ui.table_view.visible = false;
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.View_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winThongKeTH.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winThongKeTH.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.winThongKeTH.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.view_choose.removeEventListener('click', sv.fu.event_click_view);
		sv.ui.table_view.removeEventListener('click', sv.fu.event_clicktbl);
		sv.ui.ScrollView.removeEventListener('click', sv.fu.event_clickscrollview);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window THONG KE TONG HOP, sv=' + sv);
	};

}

function thongke(_cmd, data, sv) {
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
		if (_cmd == "getlotterystat") {
			sv.ui.ScrollView.visible = false;
			sv.ui.ScrollView.removeAllChildren();
			Ti.App.g_IndicatorWindow.openIndicator(sv.ui.ViewTong);
			sv.vari.time_out1 = setTimeout(function() {
				sv.ui.ScrollView.visible = true;
				Ti.App.g_IndicatorWindow.closeIndicator(sv.ui.ViewTong);
				clearTimeout(sv.vari.time_out1);
			}, 1500);
			// if (jsonResuilt.thongke.lauchuara.length > 0) {
			sv.vari.viewLauChuaRa = bang_kq();
			sv.vari.viewLauChuaRa.setKQ(jsonResuilt.thongke.lauchuara, "ngày", "Dãy số ít về trong 10 ngày qua");
			sv.ui.ScrollView.add(sv.vari.viewLauChuaRa);
			// }
			// if (jsonResuilt.thongke.ralientiep > 0) {
			sv.vari.viewRaLienTiep = bang_kq();
			sv.vari.viewRaLienTiep.setKQ(jsonResuilt.thongke.ralientiep, "ngày", "Dãy số ra liên tiếp trong 10 ngày qua");
			sv.ui.ScrollView.add(sv.vari.viewRaLienTiep);
			// }
			// if (jsonResuilt.thongke.xuatthiennhieu > 0) {
			sv.vari.viewXuatHienNhieu = bang_kq();
			sv.vari.viewXuatHienNhieu.setKQ(jsonResuilt.thongke.xuathiennhieu, "lần", "8 cặp số xuất hiện nhiều trong 10 ngày qua");
			sv.ui.ScrollView.add(sv.vari.viewXuatHienNhieu);
			// }

		} else {
			if (_cmd == "getprovide") {
				var ketqua;
				var mangkq = [];
				for (var i = 0; i < jsonResuilt.provides.length; i++) {
					// Ti.API.info('ten giai: ' + jsonResuilt.provides[i].name);
					// Ti.API.info('ten giai: ' + jsonResuilt.provides[i].id);
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
function bang_kq() {
	var viewchua = Ti.UI.createView({
		width : Ti.App.size(600),
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		left : Ti.App.size(20),
		right : Ti.App.size(20),
	});
	var Header = Titanium.UI.createView({
		width : Ti.App.size(600),
		height : Ti.App.size(80),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		touchEnabled : false,
		top : 0
	});
	var IconHeader = Titanium.UI.createImageView({
		left : Ti.App.size(10),
		width : Ti.App.size(26),
		height : Ti.App.size(24),
	});
	var LabelHeader = Ti.UI.createLabel({
		left : Ti.App.size(50),
		width : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.superwhite
	});
	var viewkq = Ti.UI.createView({
		width : Ti.App.size(600),
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		left : 0,
		top : Ti.App.size(80)
	});
	viewchua.setKQ = function(param, _loai, _header) {
		if (param.length > 0) {
			LabelHeader.setText(_header);
			IconHeader.setImage("/assets/icon/icon_static.png");
			Header.add(LabelHeader);
			Header.add(IconHeader);
			viewchua.add(Header);
			viewchua.add(viewkq);
		}

		for (var i = 0; i < (param.length); i++) {
			if (i == 0 || i % 2 == 0) {
				var v1 = Ti.UI.createView({
					top : Ti.App.size(75 * (i / 2)),
					width : Ti.App.size(295),
					left : Ti.App.size(0),
					height : Ti.App.size(70),
					backgroundColor : "transparent"
				});
				v1.add(Ti.UI.createView({
					width : "100%",
					height : "100%",
					zIndex : 0,
					backgroundImage : "/assets/icon/image.png",
				}));
				var l1 = Ti.UI.createLabel({
					text : param[i].dayso,
					width : Ti.UI.SIZE,
					left : Ti.App.size(20),
					font : {
						fontSize : Ti.App.size(30),
						fontWidth : 'bold'
					},
					textAlign : 'center',
					backgroundColor : 'transparent',
					touchEnabled : false,
					color : "white",
				});
				var l2 = Ti.UI.createLabel({
					text : param[i].solan + " " + (_loai),
					width : Ti.UI.SIZE,
					font : {
						fontSize : Ti.App.size(30),
						fontWidth : 'bold'
					},
					textAlign : 'center',
					backgroundColor : 'transparent',
					touchEnabled : false,
					color : "orange",
					right : Ti.App.size(20)
				});
				v1.add(l1);
				v1.add(l2);
				viewkq.add(v1);
			} else {
				if (i % 2 != 0) {
					var v2 = Ti.UI.createView({
						top : Ti.App.size(75 * ((i - 1) / 2)),
						width : Ti.App.size(295),
						left : Ti.App.size(305),
						height : Ti.App.size(70),
						// backgroundImage : "/assets/icon/nav_bar.png",
						right : 0,
						backgroundColor : "transparent"
					});
					v2.add(Ti.UI.createView({
						width : "100%",
						height : "100%",
						zIndex : 0,
						backgroundImage : "/assets/icon/image.png",
					}));
					var l21 = Ti.UI.createLabel({
						text : param[i].dayso,
						width : Ti.UI.SIZE,
						left : Ti.App.size(20),
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						backgroundColor : 'transparent',
						touchEnabled : false,
						color : "white",
					});
					var l22 = Ti.UI.createLabel({
						text : param[i].solan + " " + (_loai),
						width : Ti.UI.SIZE,
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						backgroundColor : 'transparent',
						touchEnabled : false,
						color : "orange",
						right : Ti.App.size(20)
					});
					v2.add(l21);
					v2.add(l22);
					viewkq.add(v2);
				}

			}
		}
	};

	return viewchua;
};
function kt_mang() {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(0);
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
};
