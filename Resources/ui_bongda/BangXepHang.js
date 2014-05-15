module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
	sv.vari.STTDoiBong = 1;
	sv.vari.SoDoi = 20;
	sv.arr.data = [];
	sv.arr.HinhTron = [];
	sv.arr.STT = [];
	sv.arr.ViewTenDoi = [];
	sv.arr.LabelTenDoi = [];
	sv.arr.ViewST = [];
	sv.arr.LabelST = [];
	sv.arr.ViewT = [];
	sv.arr.LabelT = [];
	sv.arr.ViewH = [];
	sv.arr.LabelH = [];
	sv.arr.ViewB = [];
	sv.arr.LabelB = [];
	sv.arr.ViewHS = [];
	sv.arr.LabelHS = [];
	sv.arr.ViewDiem = [];
	sv.arr.LabelDiem = [];
	sv.arr.DaySo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
	sv.arr.TenDoi = ['Manchester United', 'Manchester City', 'Chelsea'];
}

function createUI(sv) {

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(120),
		left : 0
	});

	sv.ui.ViewListTeam = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(35),
		left : 0
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'PREMIER LEAGUE',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBar = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(35),
		top : Ti.App.size(0),
		left : Ti.App.size(0),
		borderWidth : Ti.App.size(1),
		borderColor : Ti.App.Color.magenta
	});

	sv.ui.ViewToolBarDiem = Ti.UI.createView({
		right : Ti.App.size(40),
		width : Ti.App.size(60),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarDiem = Ti.UI.createLabel({
		text : 'Điểm',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarHS = Ti.UI.createView({
		right : Ti.App.size(120),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarHS = Ti.UI.createLabel({
		text : 'HS',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarB = Ti.UI.createView({
		right : Ti.App.size(170),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarB = Ti.UI.createLabel({
		text : 'B',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarH = Ti.UI.createView({
		right : Ti.App.size(220),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarH = Ti.UI.createLabel({
		text : 'H',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarT = Ti.UI.createView({
		right : Ti.App.size(270),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarT = Ti.UI.createLabel({
		text : 'T',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarST = Ti.UI.createView({
		right : Ti.App.size(320),
		width : Ti.App.size(35),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarST = Ti.UI.createLabel({
		text : 'ST',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.white,
	});

	sv.ui.ViewToolBarDoiBong = Ti.UI.createView({
		left : Ti.App.size(40),
		width : Ti.App.size(310),
		height : Ti.App.size(35)
	});

	sv.ui.LabelToolBarDoiBong = Ti.UI.createLabel({
		text : 'Đội bóng',
		font : {
			fontSize : Ti.App.size(22),
			fontWeight : 'bold',
			fontFamily : 'Aria',
			textAlign : 'left',
		},

		color : Ti.App.Color.white,
	});

	for (var i = 0; i < 15; i++) {

		sv.vari.STTDoiBong = i % 3;

		var row = Ti.UI.createTableViewRow({
			width : Ti.App.size(720),
			height : Ti.App.size(95),
			left : 0,
			id : i,
			backgroundSelectedColor : 'black'
		});

		if (i < 3) {
			sv.arr.HinhTron[i] = Ti.UI.createView({
				backgroundImage : '/assets/images/icon/circle-red.png',
				width : Ti.App.size(50),
				height : Ti.App.size(50),
				left : Ti.App.size(40),
			});
		} else {
			sv.arr.HinhTron[i] = Ti.UI.createView({
				backgroundImage : '/assets/images/icon/circle-black.png',
				left : Ti.App.size(40),
				width : Ti.App.size(50),
				height : Ti.App.size(50),
			});
		}

		sv.arr.STT[i] = Ti.UI.createLabel({
			text : sv.arr.DaySo[i],
			font : {
				fontSize : Ti.App.size(26),
				fontWeight : 'bold',
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.white,
		});

		sv.arr.HinhTron[i].add(sv.arr.STT[i]);
		row.add(sv.arr.HinhTron[i]);

		sv.arr.ViewTenDoi[i] = Ti.UI.createView({
			left : Ti.App.size(100),
			width : Ti.App.size(250),
			height : Ti.App.size(50),
		});

		sv.arr.LabelTenDoi[i] = Ti.UI.createLabel({
			text : sv.arr.TenDoi[sv.vari.STTDoiBong],
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',

			},
			textAlign : 'left',
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewTenDoi[i].add(sv.arr.LabelTenDoi[i]);
		row.add(sv.arr.ViewTenDoi[i]);

		sv.arr.ViewST[i] = Ti.UI.createView({
			right : Ti.App.size(320),
			width : Ti.App.size(35),
			height : Ti.App.size(50),
		});

		sv.arr.LabelST[i] = Ti.UI.createLabel({
			text : '69',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewST[i].add(sv.arr.LabelST[i]);
		row.add(sv.arr.ViewST[i]);

		sv.arr.ViewT[i] = Ti.UI.createView({
			right : Ti.App.size(270),
			width : Ti.App.size(35),
			height : Ti.App.size(50),
		});

		sv.arr.LabelT[i] = Ti.UI.createLabel({
			text : '69',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewT[i].add(sv.arr.LabelT[i]);
		row.add(sv.arr.ViewT[i]);

		sv.arr.ViewH[i] = Ti.UI.createView({
			right : Ti.App.size(220),
			width : Ti.App.size(35),
			height : Ti.App.size(50),
		});

		sv.arr.LabelH[i] = Ti.UI.createLabel({
			text : '69',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewH[i].add(sv.arr.LabelH[i]);
		row.add(sv.arr.ViewH[i]);

		sv.arr.ViewB[i] = Ti.UI.createView({
			right : Ti.App.size(170),
			width : Ti.App.size(35),
			height : Ti.App.size(50),
		});

		sv.arr.LabelB[i] = Ti.UI.createLabel({
			text : '69',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewB[i].add(sv.arr.LabelB[i]);
		row.add(sv.arr.ViewB[i]);

		sv.arr.ViewHS[i] = Ti.UI.createView({
			right : Ti.App.size(120),
			width : Ti.App.size(35),
			height : Ti.App.size(50),
		});

		sv.arr.LabelHS[i] = Ti.UI.createLabel({
			text : '69',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewHS[i].add(sv.arr.LabelHS[i]);
		row.add(sv.arr.ViewHS[i]);

		sv.arr.ViewDiem[i] = Ti.UI.createView({
			right : Ti.App.size(40),
			width : Ti.App.size(60),
			height : Ti.App.size(50),
		});

		sv.arr.LabelDiem[i] = Ti.UI.createLabel({
			text : '999',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewDiem[i].add(sv.arr.LabelDiem[i]);
		row.add(sv.arr.ViewDiem[i]);

		sv.arr.data.push(row);
	};
	sv.ui.ViewListTeam.setData(sv.arr.data);

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);
	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong.add(sv.ui.ViewToolBar);
	sv.ui.ViewTong.add(sv.ui.ViewListTeam);

	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarDiem);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarHS);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarB);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarH);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarT);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarST);
	sv.ui.ViewToolBar.add(sv.ui.ViewToolBarDoiBong);

	sv.ui.ViewToolBarDiem.add(sv.ui.LabelToolBarDiem);
	sv.ui.ViewToolBarHS.add(sv.ui.LabelToolBarHS);
	sv.ui.ViewToolBarB.add(sv.ui.LabelToolBarB);
	sv.ui.ViewToolBarH.add(sv.ui.LabelToolBarH);
	sv.ui.ViewToolBarT.add(sv.ui.LabelToolBarT);
	sv.ui.ViewToolBarST.add(sv.ui.LabelToolBarST);
	sv.ui.ViewToolBarDoiBong.add(sv.ui.LabelToolBarDoiBong);

}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}
