module.exports = function(_top, _ten, _bg) {
	var row = Titanium.UI.createView({
		height : Ti.App.size(60),
		top : _top,
		width : Ti.App.size(500),
		backgroundColor:Ti.App.Color.nauden,
		left:0,
		zIndex:10
	});
	var icon1 = Titanium.UI.createImageView({
		width : Ti.App.size(35),
		height : Ti.App.size(35),
		image:_bg,
		left:Ti.App.size(10)
	});
	row.add(icon1);
	var lblten=Ti.UI.createLabel({
		width:Ti.App.size(440),
		text:_ten,
		textAlign:'left',
		color:Ti.App.Color.brown,
		font:{fontSize:Ti.App.size(30)},
		left:Ti.App.size(60)
	});
	row.add(lblten);
	
	return row;
};
