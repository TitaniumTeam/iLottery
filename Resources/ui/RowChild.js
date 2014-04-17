/*_top,_left,_width: top,left,width cua view chua label ket qua
 *_conso: ket qua so xo nhan tu server
 * _visible: visible cua line doc
 */

module.exports = function(_top, _left, _width,_height, _conso, _visible,_border) {
	var sv = {};
	sv.ui = {};
	sv.ui.view_contain = Ti.UI.createView({
		width : _width,
		height : _height,
		top : _top,
		left : _left,
	});
	sv.ui.line_doc = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(70),
		right : 0,
		backgroundColor : Ti.App.Color.magenta,
		visible : _visible
	});
	sv.ui.view_contain.add(sv.ui.line_doc);
	sv.ui.lbl_kq = Ti.UI.createLabel({
		text : _conso,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(40)
		}
	});
	sv.ui.view_contain.add(sv.ui.lbl_kq);
	sv.ui.view_contain.setColor_Line = function(_color) {
		sv.ui.line_doc.backgroundColor=_color;
	};
	if(_border==true){
		sv.ui.view_contain.borderColor=Ti.App.Corlor.nauden;
		
	};
	return sv.ui.view_contain;
};
