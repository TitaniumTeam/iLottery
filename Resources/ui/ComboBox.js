module.exports = function(_topv,_toptbl,_textlbl,_width) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.ui.view_contain = Titanium.UI.createView({
		top : _topv,
		width : _width,
		left : Ti.App.size(25),
		height : Ti.App.size(95),
		borderColor : Ti.App.Color.gray,
		borderWidth : 1,
		backgroundColor:Ti.App.Color.superwhite
	});
	sv.ui.lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.nauden,
		font : {
			fonSize : Ti.App.size(30)
		},
		text : _textlbl,
		left:Ti.App.size(20)
	});
	sv.ui.view_contain.getLblFirst=function(){
		return sv.ui.lblfirst;
	};
	//
	sv.ui.tableview = Ti.UI.createTableView({
		separatorColor : Ti.App.Color.nauden,
		top : _toptbl,
		width : Ti.App.size(670),
		left :  Ti.App.size(25),
		right : Ti.App.size(25),
		visible : false,
		backgroundColor:Ti.App.Color.magenta,
		height:Ti.UI.SIZE,
		zIndex:10,
		borderColor:Ti.App.Color.nauden,
		borderWidth:1
	});
	sv.ui.view_contain.setTable = function(_tinh) {
		sv.arr.data = [];
		// sv.vari.dodai = _tinh.length;
		for (var i = 0; i < _tinh.length; i++) {
			sv.ui.rowTbl = Ti.UI.createTableViewRow({
				height : Ti.App.size(93),
				left : Ti.App.size(20),
				top : Ti.App.size(26),
				width : Ti.App.size(585),
				tenrow:_tinh[i],
			});
			sv.ui.tinhthanh = Ti.UI.createLabel({
				color : Ti.App.Color.nauden,
				font : {
					fontSize : Ti.App.size(30)
				},
				text : _tinh[i],
				backgroundSelectedColor:'yellow',
				left:Ti.App.size(20)
			});

			sv.ui.rowTbl.add(sv.ui.tinhthanh);
			sv.arr.data.push(sv.ui.rowTbl);
		}
		sv.ui.tableview.setData(sv.arr.data);
	};
	sv.ui.view_contain.add(sv.ui.lblfirst);
	sv.ui.view_contain.getTableView = function() {
		return sv.ui.tableview;
	};
	
	return sv.ui.view_contain;
};
