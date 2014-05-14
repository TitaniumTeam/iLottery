module.exports = function(_top) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.ui.vArrow = Ti.UI.createView({
		width : Ti.App.size(90),
		height : Ti.App.size(95),
		right : Ti.App.size(25),
		top : _top,
		backgroundColor : Ti.App.Color.magenta,
		borderColor : Ti.App.Color.gray,
		borderWidth : 1
	});
	sv.ui.vArrow1 = Titanium.UI.createView({
		width : Ti.App.size(90),
		height : Ti.App.size(46),
		top : 0
	});
	sv.ui.arrow_up = Ti.UI.createImageView({
		backgroundImage : '/assets/images/icon/arrow-top.png',
		width : Ti.App.size(40),
		height : Ti.App.size(25),
		bottom : Ti.App.size(7)
	});
	sv.ui.vArrow1.add(sv.ui.arrow_up);
	sv.ui.vArrow.add(sv.ui.vArrow1);
	sv.ui.vArrow2 = Titanium.UI.createView({
		width : Ti.App.size(90),
		height : Ti.App.size(46),
		top : Ti.App.size(48)
	});
	sv.ui.arrow_dow = Ti.UI.createImageView({
		backgroundImage : '/assets/images/icon/arrow-bottom.png',
		width : Ti.App.size(40),
		height : Ti.App.size(25),
		top : Ti.App.size(7)
	});
	sv.ui.vArrow2.add(sv.ui.arrow_dow);
	sv.ui.vArrow.add(sv.ui.vArrow2);

	sv.ui.vArrow.getvArrow1 = function() {
		return sv.ui.vArrow1;
	};
	sv.ui.vArrow.getvArrow2 = function() {
		return sv.ui.vArrow2;
	};
	return sv.ui.vArrow;
};
