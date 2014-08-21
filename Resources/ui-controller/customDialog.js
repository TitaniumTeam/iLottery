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
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(100),
		borderRadius:5
	});
	win.add(viewChua);
	var HeaderTitle = Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(100),
		textAlign : 'center',
		backgroundColor : "transparent",
		text : "Lựa chọn các tỉnh thành",
		touchEnabled : false,
		color : "black"
	});
	viewChua.add(HeaderTitle);
	var rows = [];
	var linerows = [];
	var data_ser = {};
	var listview = Ti.UI.createTableView({
		width : Ti.App.size(500),
		backgroundColor : "transparent",
		width : Ti.App.size(500),
		separatorColor : "black",
		left : 0,
		height : Ti.App.size(400),
		borderColor:"black",
		borderWidth:Ti.App.size(2)
	});
	viewChua.add(listview);
	var btnThoat = Ti.UI.createButton({
		backgroundColor : "brown",
		width : Ti.App.size(400),
		height : Ti.App.size(100),
		title : "EXIT",
		color : "white",
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		borderRadius:5,
	});
	viewChua.add(btnThoat);
	win.setData = function(data) {
		data_ser = data;
		for (var i = 0; i < (data_ser.name.length); i++) {
			rows[i] = Ti.UI.createTableViewRow({
				title : data_ser.name[i],
				color : "black",
				height : Ti.App.size(100),
				font : {
					fontSize : Ti.App.size(25)
				},
				width : Ti.UI.SIZE,
				idrow : i,
			});
			// linerows[i] = Ti.UI.createView({
				// width : Ti.App.size(500),
				// height : Ti.App.size(2),
				// backgroundColor : "black",
				// touchEnabled : false,
				// bottom:0
			// });
			// rows[i].add(linerows[i]);
		}
		listview.setData(rows);
	};
	btnThoat.addEventListener('click', function(e) {
		win.close();
	});
	listview.addEventListener('click', function(e) {
		win.close();
		Ti.API.info('id' + data_ser.act[e.row.idrow] + data_ser.name[e.row.idrow]);
		if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
			var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(data_ser.ser_num[e.row.idrow], data_ser.act[e.row.idrow] + " " + data_ser.param[e.row.idrow], "DỊCH VỤ SX " + data_ser.act[e.row.idrow] + " " + data_ser.name[e.row.idrow]);
			pop_upsms.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		} else {
			tuvan_soxo({
				"command" : data_ser.act[e.row.idrow],
				"param" : data_ser.param[e.row.idrow],
				"price" : data_ser.price[e.row.idrow],
			});
		}
	});
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