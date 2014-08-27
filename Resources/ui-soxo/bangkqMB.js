module.exports = function() {
	var TenGiaiMB = ["Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải Tư", "Giải Năm", "Giải Sáu", "Giải Bảy"];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var viewchua_result = [];
	var viewKQ = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		backgroundColor : "transparent",
		left : 0,
		top : 0,
		touchEnabled : false,
		layout : "horizontal"
	});

	var viewChuaTenGiai = Ti.UI.createView({
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		left : Ti.App.size(10),
		width : Ti.App.size(140),
		layout : 'vertical'
	});
	var viewChuaGiai1 = Ti.UI.createView({
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		width : Ti.App.size(470),
		layout : 'vertical',
		left : Ti.App.size(10),
	});
	for (var i = 0; i < 8; i++) {
		viewTenGiai[i] = view_result(setHeightRow(i), Ti.App.size(140));
		viewTenGiai[i].setText(TenGiaiMB[i], setColor(i), setFont(i));
		viewchua_result[i] = view_result(setHeightRow(i), Ti.App.size(470));
		viewChuaTenGiai.add(viewTenGiai[i]);
		viewChuaGiai1.add(viewchua_result[i]);
	}
	//giai db
	lblKQ[0] = label(0, 0, Ti.App.size(470));
	viewchua_result[0].add(lblKQ[0]);
	//giai nhat
	lblKQ[1] = label(1, 1, Ti.App.size(470));
	viewchua_result[1].add(lblKQ[1]);
	///giai nhi
	lblKQ[2] = label(1, 1, Ti.App.size(210));
	lblKQ[3] = label(1, 1, Ti.App.size(210));
	viewchua_result[2].add(lblKQ[2]);
	viewchua_result[2].add(lblKQ[3]);
	///giai 3
	lblKQ[4] = label(1, 1, Ti.App.size(140));
	lblKQ[5] = label(1, 1, Ti.App.size(140));
	lblKQ[6] = label(1, 1, Ti.App.size(140));
	lblKQ[7] = label(1, 1, Ti.App.size(140));
	lblKQ[8] = label(1, 1, Ti.App.size(140));
	lblKQ[9] = label(1, 1, Ti.App.size(140));
	viewchua_result[3].add(lblKQ[4]);
	viewchua_result[3].add(lblKQ[5]);
	viewchua_result[3].add(lblKQ[6]);
	viewchua_result[3].add(lblKQ[7]);
	viewchua_result[3].add(lblKQ[8]);
	viewchua_result[3].add(lblKQ[9]);
	////giai 4
	lblKQ[10] = label(1, 1, Ti.App.size(107));
	lblKQ[11] = label(1, 1, Ti.App.size(107));
	lblKQ[12] = label(1, 1, Ti.App.size(107));
	lblKQ[13] = label(1, 1, Ti.App.size(107));
	viewchua_result[4].add(lblKQ[10]);
	viewchua_result[4].add(lblKQ[11]);
	viewchua_result[4].add(lblKQ[12]);
	viewchua_result[4].add(lblKQ[13]);
	///giai 5
	lblKQ[14] = label(1, 1, Ti.App.size(65));
	lblKQ[15] = label(1, 1, Ti.App.size(65));
	lblKQ[16] = label(1, 1, Ti.App.size(65));
	lblKQ[17] = label(1, 1, Ti.App.size(65));
	lblKQ[18] = label(1, 1, Ti.App.size(65));
	lblKQ[19] = label(1, 1, Ti.App.size(65));
	viewchua_result[5].add(lblKQ[14]);
	viewchua_result[5].add(lblKQ[15]);
	viewchua_result[5].add(lblKQ[16]);
	viewchua_result[5].add(lblKQ[17]);
	viewchua_result[5].add(lblKQ[18]);
	viewchua_result[5].add(lblKQ[19]);
	///giai 6
	lblKQ[20] = label(1, 1, Ti.App.size(130));
	lblKQ[21] = label(1, 1, Ti.App.size(130));
	lblKQ[22] = label(1, 1, Ti.App.size(130));
	viewchua_result[6].add(lblKQ[20]);
	viewchua_result[6].add(lblKQ[21]);
	viewchua_result[6].add(lblKQ[22]);
	////giai 7
	lblKQ[23] = label(1, 1, Ti.App.size(100));
	lblKQ[24] = label(1, 1, Ti.App.size(100));
	lblKQ[25] = label(1, 1, Ti.App.size(100));
	lblKQ[26] = label(1, 1, Ti.App.size(100));
	viewchua_result[7].add(lblKQ[23]);
	viewchua_result[7].add(lblKQ[24]);
	viewchua_result[7].add(lblKQ[25]);
	viewchua_result[7].add(lblKQ[26]);
	////////
	var param = null;
	var isLoading = false;
	var interval = null;
	/////////
	viewKQ.setParam_db = function(param) {
		clearInterval(interval);
		var mangstring = [];
		var mangkq = [];
		for (var i = 0; i < (param.length); i++) {
			mangstring = (param[i].toString().split(','));
			for (var j = 0; j < (mangstring.length); j++) {
				mangkq.push(mangstring[j]);
			}
		};
		for (var j = 0; j < (mangkq.length); j++) {
			lblKQ[j].setText(mangkq[j]);
		}
	};
	///////////
	viewKQ.setParam = function(param) {
		clearInterval(interval);
		var ketqua = [];
		var mangstring = [];
		var mangkq = [];

		if (param[0].lines) {
			for (var i = 0; i < (param[0].lines.length); i++) {
				if (param[0].lines[i].result.toString().length == 0 || param[0].lines[i].result.toString() == "") {
					ketqua.push("");
				} else {
					ketqua.push(param[0].lines[i].result);
				}
			}

		}
		for (var i = 0; i < (ketqua.length); i++) {
			mangstring = (ketqua[i].toString()).split(',');
			for (var j = 0; j < (mangstring.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq.push(mangstring[j]);
			};
		}
		for (var i = 0; i < (mangkq.length); i++) {
			lblKQ[i].setText(mangkq[i]);
		}

	};
	///////
	viewKQ.setParamLive = function() {
		var xhr = Titanium.Network.createHTTPClient();
		var data = {
			"regionid" : "0"
		};
		laykq_tructiep(xhr, data, lblKQ, interval);
		interval = setInterval(function() {
			laykq_tructiep(xhr, data, lblKQ, interval);
		}, 15000);
	};
	/////
	viewKQ.clearInterVal = function() {
		Ti.API.info('clearinterval mien bac');
		clearInterval(interval);
	};
	/////////
	viewKQ.add(viewChuaTenGiai);
	viewKQ.add(viewChuaGiai1);
	return viewKQ;
};

function setHeightRow(i) {
	if (i == 3)
		return Ti.App.size(105);
	else

		return Ti.App.size(75);

};

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
			fontSize : Ti.App.size(25),
			fontWeight : 'bold'
		};
	}
};
function laykq_tructiep(xhr, data, lblkq, interval) {
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=searchcurrentlottery');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
		isLoading = false;
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		param = jsonResuilt.resulttable;
		var ketqua = [];
		var mangstring = [];
		var mangkq = [];
		if (param[0].lines) {
			for (var i = 0; i < (param[0].lines.length); i++) {
				if (param[0].lines[i].result.toString().length == 0 || param[0].lines[i].result.toString() == "") {
					ketqua.push("");
				} else {
					ketqua.push(param[0].lines[i].result);
				}
			}

		}
		for (var i = 0; i < (ketqua.length); i++) {
			mangstring = (ketqua[i].toString()).split(',');
			for (var j = 0; j < (mangstring.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq.push(mangstring[j]);
			};
		}
		for (var i = 0; i < (mangkq.length); i++) {
			lblkq[i].setText(mangkq[i]);
		}
		if (param[0].lines[0].result.length > 0) {
			var db = Ti.Database.open("userinfo");
			db.execute("DELETE FROM RS_CACHE");
			var date_now = (new Date().getDate()) + (new Date().getMonth() + 1) + (new Date().getYear());
			for (var j = 0; j < (param[0].lines.length); j++) {
				db.execute('INSERT INTO RS_CACHE VALUES(?,?)', date_now.toString(), param[0].lines[j].result.toString());
			}
			db.close();
			for (var i = 0; i < (mangkq.length); i++) {
				lblkq[i].setText(mangkq[i]);
			}

			clearInterval(interval);
		}
		isLoading = false;
	};
	xhr.send(JSON.stringify(data));
	isLoading = true;
}

////
function view_result(v_height, v_width) {
	var datalbl;
	var viewRS = Titanium.UI.createView({
		height : v_height,
		width : v_width,
		backgroundColor : "#33030c",
		top : Ti.App.size(10),
		layout : "horizontal",
		touchEnabled : false
	});
	viewRS.setText = function(_text, _color, _font) {
		datalbl = Ti.UI.createLabel({
			textAlign : "center",
			width : v_width,
			zIndex : 1,
			color : _color,
			// top : Ti.App.size(10),
			font : _font,
			touchEnabled : false,
			backgroundColor : 'transparent',
			text : _text,
			height : v_height
		});
		viewRS.add(datalbl);
	};
	return viewRS;
};
function label(lbl_color, lbl_font, _width) {
	var lbl_result = Ti.UI.createLabel({
		textAlign : "center",
		width : _width,
		zIndex : 1,
		color : lbl_color == 1 ? "white" : "orange",
		top : Ti.App.size(10),
		font : lbl_font == 1 ? {
			fontSize : Ti.App.size(25),
			fontWeight : 'bold'
		} : {
			fontWeight : 'bold',
			fontSize : Ti.App.size(35)
		},
		touchEnabled : false,
		backgroundColor : 'transparent',
		left : Ti.App.size(10),
		center : 'true'
	});
	return lbl_result;
};