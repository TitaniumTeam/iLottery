module.exports = function() {
	var TenGiaiMN = ["", "Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải tư", "Giải năm", "Giải sáu", "Giải bảy", "Giải tám", "Giải"];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var lblKQ2 = [];
	var lblKQ3 = [];
	var lblKQ4 = [];
	var TenTinh1 = null;
	var TenTinh2 = null;
	var TenTinh3 = null;
	var TenTinh4 = null;
	var viewchua = [];
	var viewchua2 = [];
	var viewchua3 = [];
	var viewchua4 = [];
	var id=2;
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
		width : Ti.App.size(100),
		layout : 'vertical'
	});
	var viewChuaGiai1 = Ti.UI.createView({
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		width : Ti.App.size(120),
		layout : 'vertical',
		left : Ti.App.size(10),
	});
	var viewChuaGiai2 = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(10),
	});
	var viewChuaGiai3 = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(10)
	});
	var viewChuaGiai4 = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(10)
	});
	for (var i = 10; i > 0; i--) {
		////
		viewTenGiai[i] = view_result(setHeightRow(i), Ti.App.size(140));
		viewTenGiai[i].setText(TenGiaiMN[i], setColor(i), setFont(i));
		viewchua[i] = view_result(setHeightRow(i), Ti.App.size(120));
		viewchua2[i] = view_result(setHeightRow(i), Ti.App.size(120));
		viewchua3[i] = view_result(setHeightRow(i), Ti.App.size(120));
		viewchua4[i] = view_result(setHeightRow(i), Ti.App.size(120));
		viewChuaTenGiai.add(viewTenGiai[i]);
		viewChuaGiai1.add(viewchua[i]);
		viewChuaGiai2.add(viewchua2[i]);
		viewChuaGiai3.add(viewchua3[i]);
		viewChuaGiai4.add(viewchua4[i]);
		/////
	}
	//////tinh 1
	TenTinh1 = label(0, 1);
	viewchua[10].add(TenTinh1);
	lblKQ[0] = label(0, 0);
	viewchua[1].add(lblKQ[0]);
	for (var i = 0; i < 17; i++) {
		lblKQ[17 - i] = label(1, 0);
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
		lblKQ2[17 - i] = label(1, 0);
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
	////tinh 3
	TenTinh3 = label(0, 1);
	viewchua3[10].add(TenTinh3);
	lblKQ3[0] = label(0, 0);
	viewchua3[1].add(lblKQ3[0]);
	for (var i = 0; i < 17; i++) {
		lblKQ3[17 - i] = label(1, 0);
	}
	viewchua3[9].add(lblKQ3[17]);
	viewchua3[8].add(lblKQ3[16]);
	viewchua3[7].add(lblKQ3[15]);
	viewchua3[7].add(lblKQ3[14]);
	viewchua3[7].add(lblKQ3[13]);
	viewchua3[6].add(lblKQ3[12]);
	viewchua3[5].add(lblKQ3[11]);
	viewchua3[5].add(lblKQ3[10]);
	viewchua3[5].add(lblKQ3[9]);
	viewchua3[5].add(lblKQ3[8]);
	viewchua3[5].add(lblKQ3[7]);
	viewchua3[5].add(lblKQ3[6]);
	viewchua3[5].add(lblKQ3[5]);
	viewchua3[4].add(lblKQ3[4]);
	viewchua3[4].add(lblKQ3[3]);
	viewchua3[3].add(lblKQ3[2]);
	viewchua3[2].add(lblKQ3[1]);
	////////tinh 4
	TenTinh4 = label(0, 1);
	viewchua4[10].add(TenTinh4);
	lblKQ4[0] = label(0, 0);
	viewchua4[1].add(lblKQ4[0]);
	for (var i = 0; i < 17; i++) {
		lblKQ4[17 - i] = label(1, 0);
	}
	viewchua4[9].add(lblKQ4[17]);
	viewchua4[8].add(lblKQ4[16]);
	viewchua4[7].add(lblKQ4[15]);
	viewchua4[7].add(lblKQ4[14]);
	viewchua4[7].add(lblKQ4[13]);
	viewchua4[6].add(lblKQ4[12]);
	viewchua4[5].add(lblKQ4[11]);
	viewchua4[5].add(lblKQ4[10]);
	viewchua4[5].add(lblKQ4[9]);
	viewchua4[5].add(lblKQ4[8]);
	viewchua4[5].add(lblKQ4[7]);
	viewchua4[5].add(lblKQ4[6]);
	viewchua4[5].add(lblKQ4[5]);
	viewchua4[4].add(lblKQ4[4]);
	viewchua4[4].add(lblKQ4[3]);
	viewchua4[3].add(lblKQ4[2]);
	viewchua4[2].add(lblKQ4[1]);

	/////
	var isLoading = false;
	var interval = null;
	viewKQ.setParam = function(param) {
		clearInterval(interval);
		var kqTinh1 = [];
		var mangstring1 = [];
		var mangkq1 = [];
		var kqTinh2 = [];
		var mangstring2 = [];
		var mangkq2 = [];
		var kqTinh3 = [];
		var mangstring3 = [];
		var mangkq3 = [];
		var kqTinh4 = [];
		var mangstring4 = [];
		var mangkq4 = [];

		if (param.length == 4) {
			TenTinh3.setText(param[2].provide.name);
			TenTinh1.setText(param[0].provide.name);
			TenTinh2.setText(param[1].provide.name);
			TenTinh4.setText(param[3].provide.name);
			for (var i = 0; i < (param[2].lines.length); i++)
				kqTinh3.push(param[2].lines[i].result);
			for (var i = 0; i < (param[0].lines.length); i++)
				kqTinh1.push(param[0].lines[i].result);
			for (var i = 0; i < (param[1].lines.length); i++)
				kqTinh2.push(param[1].lines[i].result);
			for (var i = 0; i < (param[3].lines.length); i++)
				kqTinh4.push(param[3].lines[i].result);
		} else {
			TenTinh1.setText(param[0].provide.name);
			TenTinh2.setText(param[1].provide.name);
			for (var i = 0; i < (param[0].lines.length); i++)
				kqTinh1.push(param[0].lines[i].result);
			for (var i = 0; i < (param[1].lines.length); i++)
				kqTinh2.push(param[1].lines[i].result);
		}
		for (var i = 0; i < (kqTinh1.length); i++) {
			mangstring1 = (kqTinh1[i].toString()).split(',');
			for (var j = 0; j < (mangstring1.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq1.push(mangstring1[j]);
			};
		}
		for (var i = 0; i < (kqTinh2.length); i++) {
			mangstring2 = (kqTinh2[i].toString()).split(',');
			for (var j = 0; j < (mangstring2.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq2.push(mangstring2[j]);
			};
		}
		for (var i = 0; i < (kqTinh3.length); i++) {
			mangstring3 = (kqTinh3[i].toString()).split(',');
			for (var j = 0; j < (mangstring3.length); j++) {
				// Ti.API.info('mang string:' + mangstring[j]);
				mangkq3.push(mangstring3[j]);
			};
		}
		for (var i = 0; i < (kqTinh4.length); i++) {
			mangstring4 = (kqTinh4[i].toString()).split(',');
			for (var j = 0; j < (mangstring4.length); j++) {
				mangkq4.push(mangstring4[j]);
			};
		}
		mangkq1.reverse();
		mangkq2.reverse();
		mangkq3.reverse();
		mangkq4.reverse();
		if(mangkq1.length==18)
		for (var i = 0; i < (mangkq1.length); i++) {
			if (mangkq1[i].toString().indexOf("&") > 0) {
				lblKQ[17 - i].setText(mangkq1[i].replace("&", ""));
				lblKQ[17 - i].setColor('yellow');
			} else {
				lblKQ[17-i].setText(mangkq1[i]);
			}
		}
		if(mangkq2.length==18)
		for (var i = 0; i < (mangkq2.length); i++) {
			if (mangkq2[i].toString().indexOf("&") > 0) {
				lblKQ2[17 - i].setText(mangkq2[i].replace("&", ""));
				lblKQ2[17 - i].setColor('yellow');
			} else {
				lblKQ2[17-i].setText(mangkq2[i]);
			}
		}
		if(mangkq3.length==18)
		for (var i = 0; i < (mangkq3.length); i++) {
			if (mangkq3[i].toString().indexOf("&") > 0) {
				lblKQ3[17 - i].setText(mangkq3[i].replace("&", ""));
				lblKQ3[17 - i].setColor('yellow');
			} else {
				lblKQ3[17-i].setText(mangkq3[i]);
			}
		}
		if(mangkq4.length==18)
		for (var i = 0; i < (mangkq4.length); i++) {
			if (mangkq4[i].toString().indexOf("&") > 0) {
				lblKQ4[17 - i].setText(mangkq4[i].replace("&", ""));
				lblKQ4[17 - i].setColor('yellow');
			} else {
				lblKQ4[17-i].setText(mangkq4[i]);
			}
		}
	};

	viewKQ.setParamLive = function() {
		var param = null;
		var xhr = Titanium.Network.createHTTPClient();
		var data = {
			"regionid" : "2"
		};
		laykq_tructiep(xhr, data, lblKQ, lblKQ2, lblKQ3, lblKQ4, interval, TenTinh1, TenTinh2, TenTinh3, TenTinh4);
		interval = setInterval(function() {
			Ti.API.info('lay ket qua');
			laykq_tructiep(xhr, data, lblKQ, lblKQ2, lblKQ3, lblKQ4, interval, TenTinh1, TenTinh2, TenTinh3, TenTinh4);

		}, 15000);
	};
	///
	viewKQ.clearInterVal = function() {
		clearInterval(interval);
	};
	////
	
	viewKQ.getID=function(){
		return id;
	};
	/////////
	viewKQ.add(viewChuaTenGiai);
	viewKQ.add(viewChuaGiai1);
	viewKQ.add(viewChuaGiai2);
	viewKQ.add(viewChuaGiai3);
	viewKQ.add(viewChuaGiai4);
	return viewKQ;
};

function setHeightRow(i) {
	if (i == 7)
		return Ti.App.size(160);
	if (i == 5)
		return Ti.App.size(320);
	if (i == 4) {
		return Ti.App.size(120);
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
			fontSize : Ti.App.size(25),
			fontWeight : 'bold'
		};
	} else {
		return {
			fontSize : Ti.App.size(20),
			fontWeight : 'bold',
		};
	}
};

function laykq_tructiep(xhr, data, lblkq1, lblkq2, lblkq3, lblkq4, interval, TenTinh1, TenTinh2, TenTinh3, TenTinh4) {
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
		var kqTinh1 = [];
		var mangstring1 = [];
		var mangkq1 = [];
		var kqTinh2 = [];
		var mangstring2 = [];
		var mangkq2 = [];
		var kqTinh3 = [];
		var mangstring3 = [];
		var mangkq3 = [];
		var kqTinh4 = [];
		var mangstring4 = [];
		var mangkq4 = [];
		if (param[0].lines) {
			TenTinh1.setText(param[0].provide.name);
			TenTinh2.setText(param[1].provide.name);
			TenTinh3.setText(param[2].provide.name);
			TenTinh4.setText(param[3].provide.name);
			for (var i = 0; i < (param[0].lines.length); i++)
				kqTinh1.push(param[0].lines[i].result);
			for (var i = 0; i < (param[1].lines.length); i++)
				kqTinh2.push(param[1].lines[i].result);
			for (var i = 0; i < (param[2].lines.length); i++)
				kqTinh3.push(param[2].lines[i].result);
			for (var i = 0; i < (param[3].lines.length); i++)
				kqTinh4.push(param[3].lines[i].result);
		}
		for (var i = 0; i < (kqTinh1.length); i++) {
			mangstring1 = (kqTinh1[i].toString()).split(',');
			for (var j = 0; j < (mangstring1.length); j++) {
				mangkq1.push(mangstring1[j]);
			};
		}
		for (var i = 0; i < (kqTinh2.length); i++) {
			mangstring2 = (kqTinh2[i].toString()).split(',');
			for (var j = 0; j < (mangstring2.length); j++) {
				mangkq2.push(mangstring2[j]);
			};
		}
		for (var i = 0; i < (kqTinh3.length); i++) {
			mangstring3 = (kqTinh3[i].toString()).split(',');
			for (var j = 0; j < (mangstring3.length); j++) {
				mangkq3.push(mangstring3[j]);
			};
		}
		for (var i = 0; i < (kqTinh4.length); i++) {
			mangstring4 = (kqTinh4[i].toString()).split(',');
			for (var j = 0; j < (mangstring4.length); j++) {
				mangkq4.push(mangstring4[j]);
			};
		}
		mangkq1.reverse();
		mangkq2.reverse();
		mangkq3.reverse();
		mangkq4.reverse();
		for (var i = 0; i < (mangkq1.length); i++) {
			if (mangkq1[i].toString().indexOf("&") > 0) {
				lblkq1[17 - i].setText(mangkq1[i].replace("&", ""));
				lblkq1[17 - i].setColor('yellow');
			} else {
				lblkq1[17 - i].setText(mangkq1[i]);
			}
		}
		for (var i = 0; i < (mangkq2.length); i++) {
			if (mangkq2[i].toString().indexOf("&") > 0) {
				lblkq2[17 - i].setText(mangkq2[i].replace("&", ""));
				lblkq2[17 - i].setColor('yellow');
			} else {
				lblkq2[17 - i].setText(mangkq2[i]);
			}
		}
		for (var i = 0; i < (mangkq3.length); i++) {
			if (mangkq3[i].toString().indexOf("&") > 0) {
				lblkq3[17 - i].setText(mangkq3[i].replace("&", ""));
				lblkq3[17 - i].setColor('yellow');
			} else {
				lblkq3[17 - i].setText(mangkq3[i]);
			}
		}
		for (var i = 0; i < (mangkq4.length); i++) {
			if (mangkq4[i].toString().indexOf("&") > 0) {
				lblkq4[17 - i].setText(mangkq4[i].replace("&", ""));
				lblkq4[17 - i].setColor('yellow');
			} else {
				lblkq4[17 - i].setText(mangkq4[i]);
			}
		}
		if ((param[2].lines[0].result.length > 0) && (param[1].lines[0].result.length > 0) && (param[0].lines[0].result.length > 0) && (param[3].lines[0].result.length > 0)) {
			Ti.API.info('clear inter val');
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
			height : v_height,
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
			fontSize : Ti.App.size(20),
			fontWeight : 'bold',
		} : {
			fontWeight : 'bold',
			fontSize : Ti.App.size(25)
		},
		touchEnabled : false,
		backgroundColor : 'transparent',
		center : 'true',
	});
	return lbl_result;
};