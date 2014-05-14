module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
		createRemove(sv);
	})();
	return sv;
};

///khoi tao bien
function tao_bien(sv){
	sv.arr={};
	sv.vari={};
}
/**khoi tao UI
 * */
function tao_ui(sv) {
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : 0,
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'transparent',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
	});

	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.ui.row = require('/ui_soxo/RowContain');
	//row 1
	sv.ui.row1 = new sv.ui.row(sv.arr.height[0], 0, false);
	sv.ui.scrollView.add(sv.ui.row1);
	///row 2
	sv.ui.row2 = new sv.ui.row(sv.arr.height[0], 1, false);
	sv.ui.scrollView.add(sv.ui.row2);
	//row 3
	sv.arr.kq_giainhi = [1213, 14122];
	sv.ui.row3 = new sv.ui.row(sv.arr.height[0], 2, sv.arr.kq_giainhi);
	sv.ui.scrollView.add(sv.ui.row3);
	//row 4
	sv.ui.row4 = new sv.ui.row(sv.arr.height[1], 3);
	sv.ui.scrollView.add(sv.ui.row4);
	//row 5
	sv.ui.row5 = new sv.ui.row(sv.arr.height[0],4);
	sv.ui.scrollView.add(sv.ui.row5);
	//row 6
	sv.ui.row6 = new sv.ui.row(sv.arr.height[1],5);
	sv.ui.scrollView.add(sv.ui.row6);
	//row 7
	sv.ui.row7 = new sv.ui.row(sv.arr.height[0],6);
	sv.ui.scrollView.add(sv.ui.row7);
	//row 8
	sv.ui.row8 = new sv.ui.row(sv.arr.height[0],7);
	sv.ui.scrollView.add(sv.ui.row8);
	////
	createUI_Event(sv);

}

function createUI_Event(sv) {
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('remove event kqsx');
	};
}