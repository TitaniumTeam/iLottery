/*_top,_left,_width: top,left,width cua view chua label ket qua
 *_conso: ket qua so xo nhan tu server
 * _visible: visible cua line doc 
 */

module.exports=function(_top,_left,_width,_conso,_visible){
	var sv = {};
	sv.ui = {};
	sv.ui.view_contain=Ti.UI.createView({
		width:_width,
		height:Ti.App.size(70),
		top:_top,
		left:_left,
	});
	sv.ui.line_doc=Ti.UI.createView({
		width:1,
		height:Ti.App.size(70),
		right:0,
		backgroundColor : Ti.App.brown,
		visible:_visible
	});
	sv.ui.view_contain.add(sv.ui.line_doc);
	sv.ui.lbl_kq=Ti.UI.createLabel({
		text:_conso,
		color:'black',
		textAlign:'left'
	});
	sv.ui.view_contain.add(sv.ui.lbl_kq);
	return sv.ui.view_contain;
};
