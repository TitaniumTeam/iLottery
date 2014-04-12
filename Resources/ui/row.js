module.exports = function(_height, _ten) {
	var sv = {};
	sv.ui = {};
	sv.ui.row1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : _height,
		left : 0,
		top : 0,
	});
	sv.ui.lbl_tengiai = Ti.UI.createLabel({
		width : Ti.App.size(160),
		height : Ti.App.size(60),
		left : Ti.App.size(20),
		top : Ti.App.size(30),
		text : _ten
	});
	sv.ui.row1.add(sv.ui.lbl_tengiai);
	sv.ui.line = Ti.UI.createView({
		width : Ti.App.size(680),
		height : 1,
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		backgroundColor : Ti.App.Color.gray,
		bottom : 0
	});
	sv.ui.row1.add(sv.ui.line);
	return sv.ui.row1;
};
