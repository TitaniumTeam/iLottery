/*_top,_left,_width: top,left,width cua view chua label ket qua
 *_conso: ket qua so xo nhan tu server
 * _visible: visible cua line doc,
 * _border:set border cho row child -gia tri truyen vao: true hoac false
 * _bg:set backgroundcolor cho row child -gia tri truyen vao: true hoac false
 */

module.exports = function(_top, _left, _width, _height, _conso, _visible, _border, _bg, _border2) {
	var view_contain = Ti.UI.createView({
		width : _width,
		height : _height,
		top : _top,
		left : _left,
	});
	var line_doc = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(70),
		right : 0,
		backgroundColor : Ti.App.Color.magenta,
		visible : _visible
	});
	view_contain.add(line_doc);
	var lbl_kq = Ti.UI.createLabel({
		text : _conso,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(40)
		}
	});
	view_contain.add(lbl_kq);
	view_contain.setColor_Line = function(_color) {
		line_doc.backgroundColor = _color;
	};
	if (_border == true) {
		view_contain.borderColor = 'black';
		view_contain.borderRadius = 3;
		view_contain.borderWidth = 1;
	};
	if (_border2 == true) {
		view_contain.borderWidth = 1;
		view_contain.borderColor = 'black';
	};
	if (_bg == true) {
		view_contain.backgroundColor = Ti.App.Color.red;
		lbl_kq.color = Ti.App.Color.superwhite;
	}
	return view_contain;
};