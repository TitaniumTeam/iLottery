module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		createRemove(sv);
	})();
	return sv;
};

function tao_bien(sv) {
	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.arr.param = ['09808', '09808', '09808', '09808', '09808', '09990', '09788', '04358', '09899', '09111', '0978', '0435'
	, '0981', '0911', '0978', '0435', '0981', '0911', '0978', '0435', '091', '091', '097', '04', '09', '01', '09'];
};
/**khoi tao UI
 * */
function tao_ui(sv) {
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : 0,
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
	});
	sv.ui.bangkq =bangketqua();
	sv.ui.scrollView.add(sv.ui.bangkq);
	sv.ui.bangkq.setKQ(sv.arr.param);
	////
	createUI_Event(sv);

}

function createUI_Event(sv) {
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('remove event kqsx');
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

////
function bangketqua() {
	var h1 = Ti.App.size(120);
	var h2 = Ti.App.size(200);
	var w1 = Ti.App.size(680);
	var l1 = Ti.App.size(20);
	var l2 = Ti.App.size(10);
	var t1 = Ti.App.size(20);
	var t2 = Ti.App.size(105);
	var data_lbl = [];
	var viewchua = Ti.UI.createScrollView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		top : 0,
		backgroundColor : Ti.App.Color.superwhite,
		left : 0
	});
	var viewche1 = Ti.UI.createScrollView({
		left : 0,
		backgroundColor : Ti.App.Color.superwhite,
		zIndex : 10,
		width : Ti.App.size(30),
		height : Ti.UI.FILL
	});
	viewchua.add(viewche1);
	var viewche2 = Ti.UI.createScrollView({
		right : 0,
		backgroundColor : Ti.App.Color.superwhite,
		zIndex : 10,
		width : Ti.App.size(30),
		height : Ti.UI.FILL
	});
	viewchua.add(viewche2);
	///giai dac biet
	var view1 = Ti.UI.createView({
		top : 0,
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view1);

	var lblgiai1 = Ti.UI.createLabel({
		left : l2,
		text : 'Đặc biệt',
		color : Ti.App.Color.red,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view1.add(lblgiai1);
	data_lbl.push(Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(65),
		backgroundColor : Ti.App.Color.red,
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		left : Ti.App.size(200),
		textAlign : 'center'
	}));
	view1.add(data_lbl[0]);
	///giai nhat
	var view2 = Ti.UI.createView({
		top : h1,
		height : h1,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view2);
	var lblgiai2 = Ti.UI.createLabel({
		left : l2,
		text : 'Nhất',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view2.add(lblgiai2);

	data_lbl.push(Ti.UI.createLabel({
		width : Ti.App.size(500),
		height : Ti.App.size(65),
		backgroundColor : Ti.App.Color.nauden,
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(50),
		},
		left : Ti.App.size(200),
		textAlign : 'center'
	}));
	view2.add(data_lbl[1]);

	///giai nhi
	var view3 = Ti.UI.createView({
		top : Ti.App.size(120 * 2),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view3);
	var lblgiai3 = Ti.UI.createLabel({
		left : l2,
		text : 'Nhì',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view3.add(lblgiai3);
	view3.add(line(t1, Ti.App.size(425)));

	data_lbl.push(lblketqua(Ti.App.size(250)));
	data_lbl.push(lblketqua(Ti.App.size(510)));
	view3.add(data_lbl[2]);
	view3.add(data_lbl[3]);
	///giai ba
	var view4 = Ti.UI.createView({
		top : Ti.App.size(120 * 3),
		height : h2,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view4);
	var lblgiai4 = Ti.UI.createLabel({
		left : l2,
		text : 'Ba',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left',
		top : t1
	});
	view4.add(lblgiai4);
	view4.add(line(t1, Ti.App.size(340)));
	view4.add(line(t1, Ti.App.size(515)));
	view4.add(line(t2, Ti.App.size(340)));
	view4.add(line(t2, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(190), t1));
	data_lbl.push(lblketqua(Ti.App.size(375), t1));
	data_lbl.push(lblketqua(Ti.App.size(545), t1));
	data_lbl.push(lblketqua(Ti.App.size(190), t2));
	data_lbl.push(lblketqua(Ti.App.size(375), t2));
	data_lbl.push(lblketqua(Ti.App.size(545), t2));
	view4.add(data_lbl[4]);
	view4.add(data_lbl[5]);
	view4.add(data_lbl[6]);
	view4.add(data_lbl[7]);
	view4.add(data_lbl[8]);
	view4.add(data_lbl[9]);

	///giai tu
	var view5 = Ti.UI.createView({
		top : Ti.App.size(120 * 3 + 200),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view5);
	var lblgiai5 = Ti.UI.createLabel({
		left : l2,
		text : 'Tư',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view5.add(lblgiai5);
	view5.add(line(t1, Ti.App.size(305)));
	view5.add(line(t1, Ti.App.size(430)));
	view5.add(line(t1, Ti.App.size(560)));

	data_lbl.push(lblketqua(Ti.App.size(195)));
	data_lbl.push(lblketqua(Ti.App.size(315)));
	data_lbl.push(lblketqua(Ti.App.size(448)));
	data_lbl.push(lblketqua(Ti.App.size(575)));
	view5.add(data_lbl[10]);
	view5.add(data_lbl[11]);
	view5.add(data_lbl[12]);
	view5.add(data_lbl[13]);

	///giai nam
	var view6 = Ti.UI.createView({
		top : Ti.App.size(120 * 4 + 200),
		height : h2,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view6);
	var lblgiai6 = Ti.UI.createLabel({
		left : l2,
		text : 'Năm',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left',
		top : t1
	});
	view6.add(lblgiai6);
	view6.add(line(t1, Ti.App.size(340)));
	view6.add(line(t1, Ti.App.size(515)));
	view6.add(line(t2, Ti.App.size(340)));
	view6.add(line(t2, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(190), t1));
	data_lbl.push(lblketqua(Ti.App.size(375), t1));
	data_lbl.push(lblketqua(Ti.App.size(545), t1));
	data_lbl.push(lblketqua(Ti.App.size(190), t2));
	data_lbl.push(lblketqua(Ti.App.size(375), t2));
	data_lbl.push(lblketqua(Ti.App.size(545), t2));
	view6.add(data_lbl[14]);
	view6.add(data_lbl[15]);
	view6.add(data_lbl[16]);
	view6.add(data_lbl[17]);
	view6.add(data_lbl[18]);
	view6.add(data_lbl[19]);
	///giai sau
	var view7 = Ti.UI.createView({
		top : Ti.App.size(120 * 4 + 2 * 200),
		height : h1,
		width : w1,
		left : l1,
	});
	viewchua.add(view7);
	var lblgiai7 = Ti.UI.createLabel({
		left : l2,
		text : 'Sáu',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view7.add(lblgiai7);
	view7.add(line(t1, Ti.App.size(340)));
	view7.add(line(t1, Ti.App.size(515)));

	data_lbl.push(lblketqua(Ti.App.size(200), t1));
	data_lbl.push(lblketqua(Ti.App.size(390), t1));
	data_lbl.push(lblketqua(Ti.App.size(560), t1));
	view7.add(data_lbl[20]);
	view7.add(data_lbl[21]);
	view7.add(data_lbl[22]);

	///giai bay
	var view8 = Ti.UI.createView({
		top : Ti.App.size(120 * 5 + 2 * 200),
		height : h1,
		width : w1,
		left : l1,
		borderColor : Ti.App.Color.magenta,
		borderWidth : 1
	});
	viewchua.add(view8);
	var lblgiai8 = Ti.UI.createLabel({
		left : l2,
		text : 'Bảy',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		width : Ti.UI.SIZE,
		textAlign : 'left'
	});
	view8.add(lblgiai8);
	view8.add(line(t1, Ti.App.size(285)));
	view8.add(line(t1, Ti.App.size(425)));
	view8.add(line(t1, Ti.App.size(565)));

	data_lbl.push(lblketqua(Ti.App.size(195)));
	data_lbl.push(lblketqua(Ti.App.size(330)));
	data_lbl.push(lblketqua(Ti.App.size(470)));
	data_lbl.push(lblketqua(Ti.App.size(595)));
	view8.add(data_lbl[23]);
	view8.add(data_lbl[24]);
	view8.add(data_lbl[25]);
	view8.add(data_lbl[26]);
	///////
	viewchua.setKQ = function(param) {
		for (var i = 0; i < param.length; i++) {
			data_lbl[i].text = param[i];
		}

	};
	viewchua.getDatalbl=function(){
		return data_lbl;
	};

	/////
	return viewchua;
};
function line(_top, _left) {
	var line = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(68),
		backgroundColor : Ti.App.Color.xanhnhat,
		top : _top,
		left : _left
	});
	return line;
};
function lblketqua(_left, _top) {
	var lbl = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(45)
		},
		// top : _top,
		left : _left,
		// text : 'test'
	});
	lbl.top = _top;
	return lbl;
};

