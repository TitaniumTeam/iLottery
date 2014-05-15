///param1 gom co:
/*
param1.thoigian
param1.san
param1.tendoi1
param1.tendoi2
param1.tengiai
* */
module.exports = function(_top, param1) {
	var viewtong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(290),
		backgroundColor : 'transparent',
		left : 0,
		top : _top,
		borderColor : Ti.App.Color.xanhnhat,
		borderWidth : 1
	});
	var hang1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(90),
		backgroundColor : 'transparent',
		left : 0,
		top : 0,
	});
	var icon_thoigian = Ti.UI.createImageView({
		left : Ti.App.size(295),
		top : Ti.App.size(25),
		width : Ti.App.size(25),
		height : Ti.App.size(25),
		backgroundImage : '/assets/images/icon/icon-time.png'
	});
	var lbl_thoigian = Ti.UI.createLabel({
		text : param1.thoigian,
		left : Ti.App.size(325),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		width : Ti.App.size(85),
		textAlign : 'left',
		top : Ti.App.size(20)
	});

	var icon_diadiem = Ti.UI.createImageView({
		left : Ti.App.size(290),
		top : Ti.App.size(60),
		width : Ti.App.size(15),
		height : Ti.App.size(20),
		backgroundImage : '/assets/images/icon/icon-address.png'
	});

	var lbl_diadiem = Ti.UI.createLabel({
		left : Ti.App.size(320),
		top : Ti.App.size(60),
		font : {
			fontSize : Ti.App.size(25)
		},
		text : 'Sân ' + param1.san
	});
	///
	var hang2 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(200),
		left : 0,
		top : Ti.App.size(90)
	});
	var lbl_vs = Ti.UI.createLabel({
		top : Ti.App.size(30),
		width : Ti.App.size(318),
		// height : Ti.App.size(40),
		left : Ti.App.size(200),
		text : 'VS',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		textAlign : 'center'
	});
	var lbl_tengiai = Ti.UI.createLabel({
		top : Ti.App.size(70),
		width : Ti.App.size(318),
		left : Ti.App.size(200),
		text : param1.tengiai,
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center'
	});
	var logo_doi1 = Ti.UI.createImageView({
		width : Ti.App.size(124),
		height : Ti.App.size(124),
		top : 0,
		left : Ti.App.size(75),
		image : '/assets/images/1/Manchester-United.png',
	});
	var lbl_tendoi1 = Ti.UI.createLabel({
		width : Ti.App.size(275),
		// height : Ti.App.size(50),
		left : 0,
		text : param1.tendoi1,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		top : Ti.App.size(124),
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center'
	});
	var logo_doi2 = Ti.UI.createImageView({
		width : Ti.App.size(124),
		height : Ti.App.size(124),
		top : 0,
		left : Ti.App.size(518),
		image : '/assets/images/1/Chelsea_FC.png'
	});
	var ten_doi2 = Ti.UI.createLabel({
		width : Ti.App.size(275),
		// height : Ti.App.size(50),
		text : param1.tendoi2,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		top : Ti.App.size(124),
		font : {
			fontSize : Ti.App.size(30)
		},
		right : 0,
		textAlign : 'center'
	});
	////
	hang1.add(lbl_thoigian);
	hang1.add(icon_diadiem);
	hang1.add(icon_thoigian);
	hang1.add(lbl_diadiem);
	hang2.add(logo_doi1);
	hang2.add(lbl_vs);
	hang2.add(lbl_tendoi1);
	hang2.add(lbl_tengiai);
	hang2.add(logo_doi2);
	hang2.add(ten_doi2);
	viewtong.add(hang1);
	viewtong.add(hang2);

	return viewtong;
};

