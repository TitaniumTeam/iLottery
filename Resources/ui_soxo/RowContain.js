/*_height: chieu cao cua row,_ten : ten cua giai,_conso: la ket qua so xo
 * _kt: de hien thi giua menu result realtime va menu result
 */

module.exports = function(_height, _ten, _kt) {
	top1 = [Ti.App.size(30), Ti.App.size(115)];
	row1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : _height,
		left : 0,
		top : 0,
	});
	lbl_tengiai = Ti.UI.createLabel({
		width : Ti.App.size(160),
		height : Ti.App.size(60),
		left : Ti.App.size(20),
		top : Ti.App.size(30),
		text : set_ten(_ten),
		font : {
			fontSize : Ti.App.size(40)
		},
		color : Ti.App.Color.nauden
	});
	row1.add(lbl_tengiai);
	line = Ti.UI.createView({
		width : Ti.App.size(680),
		height : 1,
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		backgroundColor : Ti.App.Color.magenta,
		bottom : 0
	});
	row1.add(line);
	lblvien = Ti.UI.createView({
		width : Ti.App.size(480),
		height : Ti.App.size(60),
		left : Ti.App.size(200),
		top : Ti.App.size(30),
	});
	lblso = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(50)
		},
		textAlign : 'center'
	});
	lblvien.add(lblso);
	var rowchild = require('/ui_soxo/RowChild');
	if (_ten == 0) {
		if (_kt == true) {
			row1.add(lblvien);
			lblso.setColor(Ti.App.Color.red);
			lblso.setFont({
				fonWeight : 'bold',
				fontSize : Ti.App.size(50)
			});
		} else {
			lblso.color = Ti.App.Color.white;
			lblvien.backgroundColor = 'red';
			row1.add(lblvien);

		}
	}
	if (_ten == 1) {
		if (_kt == true) {
			row1.add(lblvien);
			lblso.setColor(Ti.App.Color.nauden);
		} else {
			lblso.color = Ti.App.Color.white;
			lblvien.backgroundColor = Ti.App.Color.nauden;
			row1.add(lblvien);
		}

	}
	if (_ten == 2) {
		row31 = new rowchild(top1[0], Ti.App.size(175), Ti.App.size(250), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(425), Ti.App.size(250), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
	}
	if (_ten == 3) {
		row31 = new rowchild(top1[0], Ti.App.size(175), Ti.App.size(165), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(340), Ti.App.size(165), Ti.App.size(70), true);
		row33 = new rowchild(top1[0], Ti.App.size(505), Ti.App.size(165), Ti.App.size(70), false);
		row34 = new rowchild(top1[1], Ti.App.size(175), Ti.App.size(165), Ti.App.size(70), true);
		row35 = new rowchild(top1[1], Ti.App.size(340), Ti.App.size(165), Ti.App.size(70), true);
		row36 = new rowchild(top1[1], Ti.App.size(505), Ti.App.size(165), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
		row1.add(row33);
		row1.add(row34);
		row1.add(row35);
		row1.add(row36);
	}
	if (_ten == 4) {
		row31 = new rowchild(top1[0], Ti.App.size(190), Ti.App.size(120), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(310), Ti.App.size(120), Ti.App.size(70), true);
		row33 = new rowchild(top1[0], Ti.App.size(430), Ti.App.size(120), Ti.App.size(70), true);
		row34 = new rowchild(top1[0], Ti.App.size(550), Ti.App.size(120), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
		row1.add(row33);
		row1.add(row34);
	}
	if (_ten == 5) {
		row31 = new rowchild(top1[0], Ti.App.size(175), Ti.App.size(165), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(340), Ti.App.size(165), Ti.App.size(70), true);
		row33 = new rowchild(top1[0], Ti.App.size(505), Ti.App.size(165), Ti.App.size(70), false);
		row34 = new rowchild(top1[1], Ti.App.size(175), Ti.App.size(165), Ti.App.size(70), true);
		row35 = new rowchild(top1[1], Ti.App.size(340), Ti.App.size(165), Ti.App.size(70), true);
		row36 = new rowchild(top1[1], Ti.App.size(505), Ti.App.size(165), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
		row1.add(row33);
		row1.add(row34);
		row1.add(row35);
		row1.add(row36);

	}
	if (_ten == 6) {
		row31 = new rowchild(top1[0], Ti.App.size(175), Ti.App.size(165), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(340), Ti.App.size(165), Ti.App.size(70), true);
		row33 = new rowchild(top1[0], Ti.App.size(505), Ti.App.size(165), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
		row1.add(row33);
	}
	if (_ten == 7) {
		row31 = new rowchild(top1[0], Ti.App.size(175), Ti.App.size(120), Ti.App.size(70), true);
		row32 = new rowchild(top1[0], Ti.App.size(295), Ti.App.size(120), Ti.App.size(70), true);
		row33 = new rowchild(top1[0], Ti.App.size(415), Ti.App.size(120), Ti.App.size(70), true);
		row34 = new rowchild(top1[0], Ti.App.size(535), Ti.App.size(120), Ti.App.size(70), false);
		row1.add(row31);
		row1.add(row32);
		row1.add(row33);
		row1.add(row34);
	}
	return row1;
};
function set_ten(i)
{
	var data=['Đặc biệt','Nhất','Nhì','Ba','Tư','Năm','Sáu','Bảy'];
	return data[i];
}
