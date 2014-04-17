/*_height: chieu cao cua row,_ten : ten cua giai,_conso: la ket qua so xo
 */

module.exports = function(_height, _ten, _conso) {
	var sv = {};
	sv.ui = {};
	sv.arr = {};
	sv.arr.top1 = [Ti.App.size(30), Ti.App.size(115)];
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
		backgroundColor : Ti.App.Color.magenta,
		bottom : 0
	});
	sv.ui.row1.add(sv.ui.line);
	sv.ui.lblvien = Ti.UI.createView({
		width : Ti.App.size(480),
		height : Ti.App.size(60),
		left : Ti.App.size(200),
		top : Ti.App.size(30),
	});
	sv.ui.lblso = Ti.UI.createLabel({
		text : _conso,
		color : 'white',
	});
	sv.ui.lblvien.add(sv.ui.lblso);
	if (_ten == 'Đặc biệt') {
		sv.ui.lblvien.backgroundColor = 'red';
		sv.ui.row1.add(sv.ui.lblvien);
	}
	if (_ten == 'Nhất') {
		sv.ui.lblvien.backgroundColor = Ti.App.Color.nauden;
		sv.ui.row1.add(sv.ui.lblvien);
	}
	if (_ten == 'Nhì') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(175), Ti.App.size(250), _conso[0], true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(425), Ti.App.size(250), _conso[1], false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
	}
	if (_ten == 'Ba') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(175), Ti.App.size(165), '11212', true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(340), Ti.App.size(165), '11212', true);
		sv.ui.row33 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(505), Ti.App.size(165), '11212', false);
		sv.ui.row34 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(175), Ti.App.size(165), '11212', true);
		sv.ui.row35 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(340), Ti.App.size(165), '11212', true);
		sv.ui.row36 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(505), Ti.App.size(165), '11212', false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
		sv.ui.row1.add(sv.ui.row33);
		sv.ui.row1.add(sv.ui.row34);
		sv.ui.row1.add(sv.ui.row35);
		sv.ui.row1.add(sv.ui.row36);
	}
	if (_ten == 'Tư') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(190), Ti.App.size(120), '1234', true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(310), Ti.App.size(120), '1256', true);
		sv.ui.row33 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(430), Ti.App.size(120), '1256', true);
		sv.ui.row34 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(550), Ti.App.size(120), '3456', false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
		sv.ui.row1.add(sv.ui.row33);
		sv.ui.row1.add(sv.ui.row34);
	}
	if (_ten == 'Năm') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(175), Ti.App.size(165), '1121', true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(340), Ti.App.size(165), '1121', true);
		sv.ui.row33 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(505), Ti.App.size(165), '1112', false);
		sv.ui.row34 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(175), Ti.App.size(165), '1212', true);
		sv.ui.row35 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(340), Ti.App.size(165), '1112', true);
		sv.ui.row36 = new (require('/ui/RowChild'))(sv.arr.top1[1], Ti.App.size(505), Ti.App.size(165), '1112', false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
		sv.ui.row1.add(sv.ui.row33);
		sv.ui.row1.add(sv.ui.row34);
		sv.ui.row1.add(sv.ui.row35);
		sv.ui.row1.add(sv.ui.row36);

	}
	if (_ten == 'Sáu') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(175), Ti.App.size(165), '112', true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(340), Ti.App.size(165), '112', true);
		sv.ui.row33 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(505), Ti.App.size(165), '112', false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
		sv.ui.row1.add(sv.ui.row33);
	}
	if (_ten == 'Bảy') {
		sv.ui.row31 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(175), Ti.App.size(120), '12', true);
		sv.ui.row32 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(295), Ti.App.size(120), '56', true);
		sv.ui.row33 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(415), Ti.App.size(120), '12', true);
		sv.ui.row34 = new (require('/ui/RowChild'))(sv.arr.top1[0], Ti.App.size(535), Ti.App.size(120), '36', false);
		sv.ui.row1.add(sv.ui.row31);
		sv.ui.row1.add(sv.ui.row32);
		sv.ui.row1.add(sv.ui.row33);
		sv.ui.row1.add(sv.ui.row34);
	}
	return sv.ui.row1;
};