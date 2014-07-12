module.exports = function() {
	var view_contain = Titanium.UI.createView({
		height : Ti.App.size(90),
		backgroundColor : 'transparent'
	});
	var lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(30)
		},
		left : Ti.App.size(65),
		id : "MB"
	});
	view_contain.add(lblfirst);
	var icon=Ti.UI.createImageView({
		width:Ti.App.size(40),
		height:Ti.App.size(40),
		left:Ti.App.size(10),
		
	});
	view_contain.add(icon);
	var arrowdown = Titanium.UI.createImageView({
		backgroundImage : '/assets/icon/icon_dropdown.png',
		width : Ti.App.size(40),
		height : Ti.App.size(40),
		right : Ti.App.size(40)
	});
	view_contain.add(arrowdown);
	view_contain.getLblFirst = function() {
		return lblfirst;
	};
	var lineView = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		right : 0,
		width : Ti.App.size(3),
		height : Ti.App.size(88),
		visible : false,
		top:0
	});
	view_contain.add(lineView);
	//
	var tableview = Ti.UI.createTableView({
		separatorColor : Ti.App.Color.red_press,
		right : Ti.App.size(25),
		// visible : false,
		backgroundColor : Ti.App.Color.nauden,
		zIndex : 10,
		showVerticalScrollIndicator : 'true',
		scrollable : true,
		height : Ti.UI.SIZE
	});
	// view_contain.add(tableview);
	view_contain.setPos = function(_top, _textlbl, _left, _width, _toptbl, check) {
		tableview.setTop(_toptbl);
		tableview.setWidth(_width);
		tableview.setLeft(_left);
		view_contain.setTop(_top);
		view_contain.setLeft(_left);
		view_contain.setWidth(_width);
		lblfirst.setText(_textlbl);
		if (check == 1) {
			icon.setImage("/assets/icon/icon_place.png");
		}
		else{
			icon.setImage("/assets/icon/icon_calendar.png");
		}
	};
	view_contain.setTable = function(_tinh) {
		var data = [];
		for (var i = 0; i < _tinh.length; i++) {
			var rowTbl = Ti.UI.createTableViewRow({
				height : Ti.App.size(93),
				left : Ti.App.size(20),
				top : Ti.App.size(26),
				width : Ti.UI.FILL,
				// width : _width,
				tenrow : (_tinh[i].name) || (_tinh[i]),
				id : _tinh[i].id,
			});
			var tinhthanh = Ti.UI.createLabel({
				color : Ti.App.Color.superwhite,
				font : {
					fontSize : Ti.App.size(30)
				},
				text : (_tinh[i].name) || (_tinh[i]),
				backgroundSelectedColor : 'yellow',
				left : Ti.App.size(20),
			});

			rowTbl.add(tinhthanh);
			data.push(rowTbl);
		}
		tableview.setData(data);
	};
	view_contain.getTableView = function() {
		return tableview;
	};

	return view_contain;
};
