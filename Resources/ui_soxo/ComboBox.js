module.exports = function(_topv,_toptbl,_textlbl,_width) {
	var view_contain = Titanium.UI.createView({
		top : _topv,
		width : _width,
		left : Ti.App.size(25),
		height : Ti.App.size(95),
		borderColor : Ti.App.Color.gray,
		borderWidth : 1,
		backgroundColor:Ti.App.Color.superwhite
	});
	var lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40)
		},
		text : _textlbl,
		left:Ti.App.size(20)
	});
	view_contain.getLblFirst=function(){
		return lblfirst;
	};
	//
	var tableview = Ti.UI.createTableView({
		separatorColor : Ti.App.Color.nauden,
		top : _toptbl,
		width : Ti.App.size(670),
		left :  Ti.App.size(25),
		right : Ti.App.size(25),
		visible : false,
		backgroundColor:Ti.App.Color.magenta,
		zIndex:10,
		borderColor:Ti.App.Color.nauden,
		borderWidth:1,
		showVerticalScrollIndicator:'true',
		scrollable:true,
		height:Ti.UI.SIZE
	});
	view_contain.setTable = function(_tinh) {
		var data=[];
		for (var i = 0; i < _tinh.length; i++) {
			var rowTbl = Ti.UI.createTableViewRow({
				height : Ti.App.size(93),
				left : Ti.App.size(20),
				top : Ti.App.size(26),
				width : Ti.App.size(585),
				tenrow:_tinh[i],
			});
			var tinhthanh = Ti.UI.createLabel({
				color : Ti.App.Color.nauden,
				font : {
					fontSize : Ti.App.size(30)
				},
				text : _tinh[i],
				backgroundSelectedColor:'yellow',
				left:Ti.App.size(20)
			});

			rowTbl.add(tinhthanh);
			data.push(rowTbl);
		}
		tableview.setData(data);
	};
	view_contain.add(lblfirst);
	view_contain.getTableView = function() {
		return tableview;
	};
	
	return view_contain;
};
