/*_top,_left,_width: top,left,width cua view chua label ket qua
 *_conso: ket qua so xo nhan tu server
 * _visible: visible cua line doc,
 * _border:set border cho row child -gia tri truyen vao: true hoac false
 * _bg:set backgroundcolor cho row child -gia tri truyen vao: true hoac false
 */

module.exports = function(_top, _left, _width,_height, _conso, _visible,_border,_bg,_border2) {
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
		sv.ui.view_contain.borderColor=Ti.App.Color.nauden;
		sv.ui.view_contain.borderRadius=Ti.App.size(3);
	};
	if(_border2==true){
		sv.ui.view_contain.borderWidth=Ti.App.size(1);
		sv.ui.view_contain.borderColor=Ti.App.Color.nauden;
	};
	if(_bg==true){
		sv.ui.view_contain.backgroundColor=Ti.App.Color.red;
		sv.ui.lbl_kq.color=Ti.App.Color.superwhite;
	}
	return sv.ui.view_contain;
};
