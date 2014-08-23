module.exports = function() {
	var win = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	win.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	var viewChua = Ti.UI.createView({
		layout : "vertical",
		width : Ti.App.size(500),
		height : Ti.UI.SIZE,
		borderRadius : 5,
		backgroundImage : "/assets/icon/bg_sokq.png",
		borderColor : "yellow",
		borderWidth : Ti.App.size(3)
	});
	win.add(viewChua);
	var HeaderTitle = Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(100),
		textAlign : 'center',
		backgroundColor : "transparent",
		text : "Lựa chọn các tỉnh thành",
		touchEnabled : false,
		color : "white",
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : "bold"
		}
	});
	viewChua.add(HeaderTitle);
	var rows = [];
	var viewrows = [];
	var labelrows = [];
	var linerows = [];
	var data_ser = {};
	var evt_clickrow = [];
	var listview = Ti.UI.createTableView({
		width : Ti.App.size(500),
		backgroundColor : "transparent",
		width : Ti.App.size(500),
		separatorColor : "transparent",
		left : 0,
	});
	viewChua.add(listview);
	var btnThoat = Ti.UI.createButton({
		backgroundColor : "red",
		width : Ti.App.size(400),
		height : Ti.App.size(100),
		title : "Thoát",
		color : "white",
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		borderRadius : 5,
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : "bold"
		},
		backgroundSelectedColor : "blue"
	});
	viewChua.add(btnThoat);
	win.setData = function(data) {
		if (data.name.length < 4) {
			listview.setHeight(Ti.App.size(data.name.length * 100));
		} else {
			listview.setHeight(Ti.App.size(400));
		}
		data_ser = data;
		for (var i = 0; i < (data_ser.name.length); i++) {
			rows[i] = Ti.UI.createTableViewRow({
				height : Ti.App.size(100),
				width : Ti.App.size(500),
			});
			viewrows[i] = Ti.UI.createView({
				idrow : i,
				backgroundImage : "/assets/icon/btn_tuvan.png",
				backgroundSelectedImage : "/assets/icon/btn_tuvan_select.png",
				width : Ti.App.size(500),
			});
			labelrows[i] = Ti.UI.createLabel({
				text : data_ser.name[i],
				color : Ti.App.Color.superwhite,
				textAlign : "center",
				font : {
					fontSize : Ti.App.size(25)
				},
				width : Ti.App.size(500),
				touchEnabled : false
			});
			viewrows[i].add(labelrows[i]);
			rows[i].add(viewrows[i]);
			viewrows[i].addEventListener('click', function(e) {
				win.close();
				Ti.API.info('id' + data_ser.act[e.source.idrow] + data_ser.name[e.source.idrow]);
				if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
					var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(data_ser.ser_num[e.source.idrow], data_ser.act[e.source.idrow] + " " + data_ser.param[e.source.idrow], "DỊCH VỤ SX " + data_ser.act[e.source.idrow] + " " + data_ser.name[e.source.idrow]);
					pop_upsms.open({
						modal : Ti.Platform.osname == 'android' ? true : false
					});
				} else {
					tuvan_soxo({
						"command" : data_ser.act[e.source.idrow],
						"param" : data_ser.param[e.source.idrow],
						"price" : data_ser.price[e.source.idrow],
					});
				}
			});
		}
		listview.setData(rows);
	};

	var evt_closewin = function(e) {
		Ti.API.info('close win customdialog');
		btnThoat.removeEventListener('click', evt_closewin);
		win.removeEventListener('open', evt_openwin);
		win.removeEventListener('close', evt_closewin);
		win.close();
	};
	var evt_openwin = function(e) {
		win.open();
	};
	btnThoat.addEventListener('click', evt_closewin);
	win.addEventListener('open', evt_openwin);
	win.addEventListener('close', evt_closewin);
	win.addEventListener('android:back',evt_closewin);
	return win;
};
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