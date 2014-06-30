module.exports = function(_top, _textlbl, _left, _width, _toptbl, check) {
	var view_contain = Titanium.UI.createView({
		top : _top,
		width : _width,
		height : Ti.App.size(100),
		// backgroundColor :Ti.App.Color.brown,
		left : _left,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.magenta
	});

	var arrow_right = Ti.UI.createImageView({
		right : Ti.App.size(20),
		image : '/assets/images/icon/arrow-right.png',
		width : Ti.App.size(18),
		height : Ti.App.size(30),
		touchEnabled : false
	});
	view_contain.add(arrow_right);
	if (check == true) {
		var arrow_left = Ti.UI.createImageView({
			left : Ti.App.size(20),
			image : '/assets/images/icon/arrow-left.png',
			width : Ti.App.size(18),
			height : Ti.App.size(30),
			touchEnabled : false
		});
		view_contain.add(arrow_left);
		var line_view = Ti.UI.createView({
			backgroundColor : Ti.App.Color.red,
			height : Ti.App.size(50),
			width : Ti.App.size(2),
			left : Ti.App.size(52),
			touchEnabled : false
		});
		view_contain.add(line_view);
		var line_view_right = Ti.UI.createView({
			backgroundColor : Ti.App.Color.red,
			height : Ti.App.size(50),
			width : Ti.App.size(2),
			left : Ti.App.size(190),
			touchEnabled : false
		});
		view_contain.add(line_view_right);
	}

	var lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(25),
			fontWeight : 'bold'
		},
		text : _textlbl,
		left : Ti.App.size(56),
		id : "MB",
		width : Ti.App.size(135),
		touchEnabled : false,
		textAlign : 'center'
	});
	view_contain.add(lblfirst);
	view_contain.getLblFirst = function() {
		return lblfirst;
	};
	//
	var tableview = Ti.UI.createTableView({
		separatorColor : Ti.App.Color.red,
		top : _toptbl,
		width : _width,
		left : _left,
		right : Ti.App.size(25),
		visible : false,
		backgroundColor : Ti.App.Color.nauden,
		zIndex : 10,
		borderColor : Ti.App.Color.nauden,
		borderWidth : 1,
		showVerticalScrollIndicator : 'true',
		scrollable : true,
		height : Ti.UI.SIZE
	});
	// view_contain.add(tableview);
	view_contain.setTable = function(_tinh) {
		var data = [];
		for (var i = 0; i < _tinh.length; i++) {
			var rowTbl = Ti.UI.createTableViewRow({
				height : Ti.App.size(93),
				left : Ti.App.size(20),
				top : Ti.App.size(26),
				width : _width,
				tenrow : (_tinh[i].name) || (_tinh[i]),
				id : _tinh[i].id
			});
			var tinhthanh = Ti.UI.createLabel({
				color : Ti.App.Color.superwhite,
				font : {
					fontSize : Ti.App.size(30),
					fontWeight : 'bold'
				},
				text : (_tinh[i].name) || (_tinh[i]),
				backgroundSelectedColor : 'yellow',
				left : Ti.App.size(20),
				textAlign : 'center'
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
