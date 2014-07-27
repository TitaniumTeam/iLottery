module.exports = function() {
	var view_contain = Titanium.UI.createView({
		height : Ti.App.size(90),
		backgroundColor : 'transparent'
	});
	var lbl_fix = Ti.UI.createLabel({
		color : Ti.App.Color.superwhite,
	});
	view_contain.add(lbl_fix);
	var lblfirst = Titanium.UI.createLabel({
		color : Ti.App.Color.superwhite,
		id : "MB"
	});
	view_contain.add(lblfirst);
	var icon = Ti.UI.createImageView({
		width : Ti.App.size(40),
		height : Ti.App.size(40),
		left : Ti.App.size(10),

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
		top : 0
	});
	// view_contain.add(lineView);
	//
	var tableview = Ti.UI.createTableView({
		separatorColor : "#393939",
		right : Ti.App.size(25),
		backgroundColor : "#33030c",
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
			lbl_fix.setFont({
				fontSize : Ti.App.size(30),
				fontWeight : 'bold'
			});
			lblfirst.setFont({
				fontSize : Ti.App.size(30),
				fontWeight : 'bold'
			});
			lbl_fix.setLeft(Ti.App.size(65));
			lblfirst.setLeft(Ti.App.size(300));
			lbl_fix.setText("Chọn tỉnh thành:");
			icon.setImage("/assets/icon/icon_place.png");
		}
		if (check == 2) {
			lbl_fix.setFont({
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			});
			lblfirst.setFont({
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			});
			lbl_fix.setLeft(Ti.App.size(65));
			lblfirst.setLeft(Ti.App.size(120));
			lbl_fix.setText("Từ");
			icon.setImage("/assets/icon/icon_calendar.png");
		}
		if (check == 3) {
			lbl_fix.setFont({
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			});
			lblfirst.setFont({
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			});
			lbl_fix.setLeft(Ti.App.size(65));
			lblfirst.setLeft(Ti.App.size(120));
			lbl_fix.setText("Đến");
			icon.setImage("/assets/icon/icon_calendar.png");
		}
		if (check == 4) {
			lblfirst.setFont({
				fontSize : Ti.App.size(30),
				fontWeight : 'bold'
			});
			lblfirst.setLeft(Ti.App.size(65));
			icon.setImage("/assets/icon/icon_place.png");
		}
		if (check == 5) {
			lblfirst.setFont({
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			});
			lblfirst.setLeft(Ti.App.size(65));
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
					fontSize : Ti.App.size(30),
					fontWeight:'bold'
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
