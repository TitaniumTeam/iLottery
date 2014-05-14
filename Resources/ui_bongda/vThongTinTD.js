///param1 gom co:
/*
param1.thoigian
param1.ngay
param1.tendoi1
param1.tendoi2
param1.tyle1(gom 3 thong so)
param1.ck (gom 2 thong so)
* */
module.exports = function(_top, param1) {
	var viewtong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(190),
		backgroundColor : 'transparent',
		left : 0,
		top : _top,
		borderColor : Ti.App.Color.xanhnhat,
		borderWidth : 1
	});
	var hang1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		backgroundColor : 'transparent',
		left : 0,
		top : 0,
	});
	var hang2 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		height : Ti.App.size(50),
		left : Ti.App.size(140),
		text : 'VS',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		top : Ti.App.size(70)
	});
	var hang3 = Ti.UI.createView({
		top : Ti.App.size(120),
		width : Ti.App.size(720),
		height : Ti.App.size(50),
		left : 0,
		backgroundColor : 'transparent',
	});
	var lbl_thoigian = Ti.UI.createLabel({
		text : param1.thoigian,
		left : Ti.App.size(35),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		height : Ti.App.size(70),
		width : Ti.App.size(85),
		textAlign : 'left',
	});

	var lbl_tendoi1 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		height : Ti.App.size(70),
		left : Ti.App.size(140),
		text : param1.tendoi1,
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(30)
		},
	});

	var lbl_tyle1 = Ti.UI.createLabel({
		width : Ti.App.size(40),
		left : Ti.App.size(480),
		height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		text : param1.tyle[0],
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_ck1 = Ti.UI.createLabel({
		left : Ti.App.size(620),
		width : Ti.App.size(75),
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.brown,
				position : 0.5
			}, {
				color : Ti.App.Color.brown,
				position : 0.50
			}]
		},
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		text : param1.ck[0],
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		height : Ti.App.size(40),
	});

	///

	///
	var lbl_thoigian3 = Ti.UI.createLabel({
		text : param1.ngay,
		left : Ti.App.size(35),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		height : Ti.App.size(70),
		width : Ti.App.size(85),
		textAlign : 'left',
	});

	var lbl_tendoi2 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		height : Ti.App.size(70),
		left : Ti.App.size(140),
		text : param1.tendoi2,
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(30)
		},
	});

	var lbl_tyle2 = Ti.UI.createLabel({
		width : Ti.App.size(40),
		left : Ti.App.size(480),
		height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		text : param1.tyle[1],
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_tyle3 = Ti.UI.createLabel({
		width : Ti.App.size(60),
		left : Ti.App.size(540),
		height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		text : param1.tyle[2],
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_ck2 = Ti.UI.createLabel({
		left : Ti.App.size(620),
		width : Ti.App.size(75),
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.brown,
				position : 0.5
			}, {
				color : Ti.App.Color.brown,
				position : 0.50
			}]
		},
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		text : param1.ck[1],
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		height : Ti.App.size(40),
	});
	hang1.add(lbl_thoigian);
	hang1.add(lbl_tendoi1);
	hang1.add(lbl_tyle1);
	hang1.add(lbl_ck1);
	hang3.add(lbl_ck2);
	hang3.add(lbl_thoigian3);
	hang3.add(lbl_tendoi2);
	hang3.add(lbl_tyle2);
	hang3.add(lbl_tyle3);
	viewtong.add(hang1);
	viewtong.add(hang2);
	viewtong.add(hang3);
	return viewtong;
};
