module.exports = function() {
	var TenGiaiMN = ["Giải ĐB", "Giải nhất", "Giải nhì", "Giải ba", "Giải Tư", "Giải Năm", "Giải Sáu", "Giải Bảy"];
	var viewTenGiai = [];
	var lblTenGiai = [];
	var lblKQ = [];
	var viewchua = [];
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
		width : Ti.App.size(470),
		layout : 'vertical',
		left : Ti.App.size(160),
	});
	for (var i = 0; i < 8; i++) {
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
			width : Ti.App.size(470),
			// right : Ti.App.size(10),
			height : setHeightRow(i),
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
			textAlign : "center",
			height : Ti.UI.SIZE,
			width : Ti.App.size(420),
			zIndex : 1,
			color : setColor(i),
			top : Ti.App.size(20),
			font : setFont(i),
		});
		/////
		viewTenGiai[i].add(lblTenGiai[i]);
		viewchua[i].add(lblKQ[i]);
		viewChuaTenGiai.add(viewTenGiai[i]);
		viewChuaGiai1.add(viewchua[i]);
	}

	////////
	viewKQ.setParam = function(param) {
		if (param[0].lines) {
			for (var i = 0; i < (param[0].lines.length); i++) {
				lblKQ[i].setText((param[0].lines[i].result.toString()).replace(/,/g, '-'));
			}
		}
		else{
			for (var i = 0; i < 8; i++) {
				lblKQ[i].setText("-----");
			}
		}

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
		};
	}
};
