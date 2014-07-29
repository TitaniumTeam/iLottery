module.exports = function() {
	var TenGiaiMN = ["", "Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải tư", "Giải năm", "Giải sáu", "Giải bảy", "Giải tám", "Giải"];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var lblKQ2 = [];
	var lblKQ3 = [];
	var viewchua = [];
	var viewchua2 = [];
	var viewchua3 = [];
	var viewKQ = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		backgroundColor : "transparent",
		left : 0,
		top : 0,
		touchEnabled : false,
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
		width : Ti.App.size(160),
		layout : 'vertical',
		left : Ti.App.size(160),
	});
	var viewChuaGiai2 = Ti.UI.createView({
		width : Ti.App.size(150),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(330),
	});
	var viewChuaGiai3 = Ti.UI.createView({
		width : Ti.App.size(150),
		height : Ti.UI.FILL,
		backgroundColor : "transparent",
		top : 0,
		layout : 'vertical',
		left : Ti.App.size(490)
	});
	for (var i = 10; i > 0; i--) {
		viewTenGiai[i] = Titanium.UI.createView({
			height : setHeightRow(i),
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
			height : Ti.UI.SIZE,
			text : TenGiaiMN[i],
			textAlign : "center",
			color : setColor(i),
			width : Ti.App.size(140),
			zIndex : 1,
			top : Ti.App.size(20),
			font : setFont(i),
		});
		viewchua[i] = Titanium.UI.createView({
			width : Ti.App.size(150),
			// right : Ti.App.size(10),
			height : setHeightRow(i),
			backgroundColor : "transparent",
			top : Ti.App.size(10)
		});
		viewchua[i].add(Ti.UI.createView({
			width : "100%",
			height : "100%",
			backgroundImage : "/assets/icon/image.png",
			// opacity : 0.2,
			zIndex : 0
		}));
		lblKQ[i] = Ti.UI.createLabel({
			textAlign : "center",
			height : Ti.UI.SIZE,
			width : setWidth(i),
			zIndex : 1,
			color : setColor(i),
			top : Ti.App.size(20),
			font : setFont(i),
		});
		//////
		viewchua2[i] = Titanium.UI.createView({
			// left : Ti.App.size(180),
			width : Ti.App.size(150),
			height : setHeightRow(i),
			backgroundColor : "transparent",
			top : Ti.App.size(10)
		});
		viewchua2[i].add(Ti.UI.createView({
			width : "100%",
			height : "100%",
			backgroundImage : "/assets/icon/image.png",
			// opacity : 0.2,
			zIndex : 0
		}));
		lblKQ2[i] = Ti.UI.createLabel({
			textAlign : "center",
			height : Ti.UI.SIZE,
			width : setWidth(i),
			zIndex : 1,
			color : setColor(i),
			top : Ti.App.size(20),
			font : setFont(i),
		});
		//////
		viewchua3[i] = Titanium.UI.createView({
			// left : Ti.App.size(180),
			width : Ti.App.size(150),
			height : setHeightRow(i),
			backgroundColor : "transparent",
			top : Ti.App.size(10)
		});
		viewchua3[i].add(Ti.UI.createView({
			width : "100%",
			height : "100%",
			backgroundImage : "/assets/icon/image.png",
			zIndex : 0
		}));
		lblKQ3[i] = Ti.UI.createLabel({
			textAlign : "center",
			height : Ti.UI.SIZE,
			width : setWidth(i),
			zIndex : 1,
			color : setColor(i),
			font : setFont(i),
			top : Ti.App.size(20),
			wordWrap : true,
		});
		/////
		viewTenGiai[i].add(lblTenGiai[i]);
		viewchua[i].add(lblKQ[i]);
		viewchua2[i].add(lblKQ2[i]);
		viewchua3[i].add(lblKQ3[i]);
		viewChuaTenGiai.add(viewTenGiai[i]);
		viewChuaGiai1.add(viewchua[i]);
		viewChuaGiai2.add(viewchua2[i]);
		viewChuaGiai3.add(viewchua3[i]);
	}

	////////
	viewKQ.setParam = function(param) {
		Ti.API.info('nhay vao set text');
		if (param[0].lines) {
			lblKQ[10].setText(param[0].provide.name);
			lblKQ2[10].setText(param[1].provide.name);
			lblKQ3[10].setText(param[2].provide.name);
			for (var i = 0; i < (param[0].lines.length); i++) {
				lblKQ[i + 1].setText((param[0].lines[i].result.toString()).replace(/,/g, ' '));
			}
			for (var i = 0; i < (param[1].lines.length); i++) {
				lblKQ2[i + 1].setText(param[1].lines[i].result.toString().replace(/,/g, ' '));
			}
			for (var i = 0; i < (param[2].lines.length); i++) {
				lblKQ3[i + 1].setText(param[2].lines[i].result.toString().replace(/,/g, ' '));
			}
		}
		else{
			lblKQ[10].setText("-----");
			lblKQ2[10].setText("-----");
			lblKQ3[10].setText("-----");
			for (var i = 0; i < (10); i++) {
				lblKQ[i + 1].setText("-----");
			}
			for (var i = 0; i < (10); i++) {
				lblKQ2[i + 1].setText("-----");
			}
			for (var i = 0; i < (10); i++) {
				lblKQ3[i + 1].setText("-----");
			}
		}
	};

	/////////
	viewKQ.add(viewChuaTenGiai);
	viewKQ.add(viewChuaGiai1);
	viewKQ.add(viewChuaGiai2);
	viewKQ.add(viewChuaGiai3);
	return viewKQ;
};

function setHeightRow(i) {
	if (i == 7)
		return Ti.App.size(160);
	if (i == 5)
		return Ti.App.size(420);
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
			fontSize : Ti.App.size(25),
			fontWeight : 'bold'
		};
	}
	if (i == 1) {
		return {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		};
	} else {
		return {
			fontSize : Ti.App.size(30),
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
