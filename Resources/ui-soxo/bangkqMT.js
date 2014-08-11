module.exports = function() {
	var TenGiaiMN = ["", "Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải tư", "Giải năm", "Giải sáu", "Giải bảy", "Giải tám", "Giải"];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var TenTinh1 = null;
	var TenTinh2 = null;
	var lblKQ2 = [];
	var viewchua = [];
	var viewchua2 = [];
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
		width : Ti.App.size(230),
		layout : 'vertical',
		left : Ti.App.size(10),
	});
	var viewChuaGiai2 = Ti.UI.createView({
		width : Ti.App.size(230),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(10),
	});
	for (var i = 10; i > 0; i--) {
		////
		viewTenGiai[i] = view_result(setHeightRow(i), Ti.App.size(140));
		viewTenGiai[i].setText(TenGiaiMN[i], setColor(i), setFont(i));
		viewchua[i] = view_result(setHeightRow(i), Ti.App.size(230));
		viewchua2[i] = view_result(setHeightRow(i), Ti.App.size(230));
		viewChuaTenGiai.add(viewTenGiai[i]);
		viewChuaGiai1.add(viewchua[i]);
		viewChuaGiai2.add(viewchua2[i]);
		/////
	}
	//////tinh 1
	TenTinh1 = label(0, 1);
	viewchua[10].add(TenTinh1);
	lblKQ[0] = label(0, 0);
	viewchua[1].add(lblKQ[0]);
	for (var i = 0; i < 17; i++) {
		lblKQ[17 - i] = label(1, 1);
	}
	viewchua[9].add(lblKQ[17]);
	viewchua[8].add(lblKQ[16]);
	viewchua[7].add(lblKQ[15]);
	viewchua[7].add(lblKQ[14]);
	viewchua[7].add(lblKQ[13]);
	viewchua[6].add(lblKQ[12]);
	viewchua[5].add(lblKQ[11]);
	viewchua[5].add(lblKQ[10]);
	viewchua[5].add(lblKQ[9]);
	viewchua[5].add(lblKQ[8]);
	viewchua[5].add(lblKQ[7]);
	viewchua[5].add(lblKQ[6]);
	viewchua[5].add(lblKQ[5]);
	viewchua[4].add(lblKQ[4]);
	viewchua[4].add(lblKQ[3]);
	viewchua[3].add(lblKQ[2]);
	viewchua[2].add(lblKQ[1]);

	/////tinh 2
	TenTinh2 = label(0, 1);
	viewchua2[10].add(TenTinh2);
	lblKQ2[0] = label(0, 0);
	viewchua2[1].add(lblKQ2[0]);
	for (var i = 0; i < 17; i++) {
		lblKQ2[17 - i] = label(1, 1);
	}
	viewchua2[9].add(lblKQ2[17]);
	viewchua2[8].add(lblKQ2[16]);
	viewchua2[7].add(lblKQ2[15]);
	viewchua2[7].add(lblKQ2[14]);
	viewchua2[7].add(lblKQ2[13]);
	viewchua2[6].add(lblKQ2[12]);
	viewchua2[5].add(lblKQ2[11]);
	viewchua2[5].add(lblKQ2[10]);
	viewchua2[5].add(lblKQ2[9]);
	viewchua2[5].add(lblKQ2[8]);
	viewchua2[5].add(lblKQ2[7]);
	viewchua2[5].add(lblKQ2[6]);
	viewchua2[5].add(lblKQ2[5]);
	viewchua2[4].add(lblKQ2[4]);
	viewchua2[4].add(lblKQ2[3]);
	viewchua2[3].add(lblKQ2[2]);
	viewchua2[2].add(lblKQ2[1]);
	////////
	viewKQ.setParam = function(param) {
		var kqTinh1 = [];
		var mangstring1 = [];
		var mangkq1 = [];
		var kqTinh2 = [];
		var mangstring2 = [];
		var mangkq2 = [];
		if (param[0].lines) {
			TenTinh1.setText(param[0].provide.name);
			TenTinh2.setText(param[1].provide.name);
			for (var i = 0; i < (param[0].lines.length); i++)
				kqTinh1.push(param[0].lines[i].result);
			for (var i = 0; i < (param[1].lines.length); i++)
				kqTinh2.push(param[1].lines[i].result);
		}
		for (var i = 0; i < (kqTinh1.length); i++) {
			mangstring1 = (kqTinh1[i].toString().split(','));
			for (var j = 0; j < (mangstring1.length); j++) {
				mangkq1.push(mangstring1[j]);
			};
		}
		for (var i = 0; i < (kqTinh2.length); i++) {
			mangstring2 = (kqTinh2[i].toString().split(','));
			for (var j = 0; j < (mangstring2.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq2.push(mangstring2[j]);
			};
		}
		mangkq1.reverse();
		mangkq2.reverse();
		for (var i = 0; i < (mangkq1.length); i++) {
			lblKQ[17 - i].setText(mangkq1[i]);
		}
		for (var i = 0; i < (mangkq2.length); i++) {
			lblKQ2[17 - i].setText(mangkq2[i]);
		}
	};

	var isLoading = false;
	var interval = null;
	viewKQ.setParamLive = function() {
		var param = null;
		var xhr = Titanium.Network.createHTTPClient();
		var data = {
			"regionid" : "2"
		};
		laykq_tructiep(xhr, data, lblKQ, lblKQ2, interval, TenTinh1, TenTinh2);
		interval = setInterval(function() {
			Ti.API.info('lay ket qua');
			laykq_tructiep(xhr, data, lblKQ, lblKQ2, interval, TenTinh1, TenTinh2);

		}, 15000);
	};
	///
	viewKQ.clearInterVal = function() {
		clearInterval(interval);
	};
	/////////
	viewKQ.add(viewChuaTenGiai);
	viewKQ.add(viewChuaGiai1);
	viewKQ.add(viewChuaGiai2);
	return viewKQ;
};

function setHeightRow(i) {
	if (i == 7)
		return Ti.App.size(160);
	if (i == 5)
		return Ti.App.size(360);
	if (i == 4) {
		return Ti.App.size(140);
	} else
		return Ti.App.size(75);

};

function setColor(i) {
	if (i == 1 || i == 10) {
		return "orange";
	} else {
		return Ti.App.Color.superwhite;
	}
};
function setFont(i) {
	if (i == 10) {
		return {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		};
	} else {
		return {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		};
	}
};
function setWidth(i) {
	if (i == 7)
		return Ti.App.size(85);
	if (i == 5)
		return Ti.App.size(90);
	if (i == 4)
		return Ti.App.size(90);
	else
		return Ti.UI.SIZE;
}

function laykq_tructiep(xhr, data, lblkq1, lblkq2, interval, TenTinh1, TenTinh2) {
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=searchcurrentlottery');
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
		var kqTinh1 = [];
		var mangstring1 = [];
		var mangkq1 = [];
		var kqTinh2 = [];
		var mangstring2 = [];
		var mangkq2 = [];
		if (param[0].lines) {
			TenTinh1.setText(param[0].provide.name);
			TenTinh2.setText(param[1].provide.name);
			for (var i = 0; i < (param[0].lines.length); i++)
				kqTinh1.push(param[0].lines[i].result);
			for (var i = 0; i < (param[1].lines.length); i++)
				kqTinh2.push(param[1].lines[i].result);
		}
		for (var i = 0; i < (kqTinh1.length); i++) {
			mangstring1 = (kqTinh1[i].toString()).split(',');
			for (var j = (mangstring1.length); j > 0; j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq1.push(mangstring1[j]);
			};
		}
		for (var i = 0; i < (kqTinh2.length); i++) {
			mangstring2 = (kqTinh2[i].toString()).split(',');
			for (var j = (mangstring2.length); j > 0; j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq2.push(mangstring2[j]);
			};
		}
		mangkq1.reverse();
		mangkq2.reverse();
		for (var i = 0; i < (mangkq1.length); i++) {
			lblkq1[17 - i].setText(mangkq1[i]);
		}
		for (var i = 0; i < (mangkq2.length); i++) {
			lblkq2[17 - i].setText(mangkq2[i]);
		}
		if (mangkq1.length + mangkq2.length == 36) {
			Ti.API.info('clear interval');
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
		layout : "vertical",
		touchEnabled : false
	});
	viewRS.setText = function(_text, _color, _font) {
		datalbl = Ti.UI.createLabel({
			textAlign : "center",
			width : v_width,
			zIndex : 1,
			color : _color,
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
function label(lbl_color, lbl_font) {
	var lbl_result = Ti.UI.createLabel({
		textAlign : "center",
		width : Ti.UI.SIZE,
		zIndex : 1,
		color : lbl_color == 1 ? "white" : "orange",
		top : Ti.App.size(10),
		font : lbl_font == 1 ? {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		} : {
			fontWeight : 'bold',
			fontSize : Ti.App.size(35)
		},
		touchEnabled : false,
		backgroundColor : 'transparent',
		center : 'true',
	});
	return lbl_result;
};