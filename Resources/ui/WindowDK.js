module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_ui(sv);
	})();
	return sv.ui.WindowDK;
};
/*khoi tao UI
 */
function tao_ui(sv) {
	sv.vari = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	sv.ui.WindowDK = Ti.UI.createWindow({
		navBarHidden : true,
		fullscreen : true,
		backgroundColor : 'red',
	});
	sv.ui.scrollView = Ti.UI.createScrollView({
		left : 0,
		right : 0,
		bottom : 0,
		top : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'red',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : false,
		disableBounce : true,
		scrollsToTop : false,
		horizontalBounce : true,
	});
	sv.ui.view_menu_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : 0,
		top : 0,
	});
	sv.ui.menu_icon = Ti.UI.createImageView({
		width : Ti.App.size(56),
		heigth : Ti.App.size(37),
		image : '/assets/images/icon/menu.png',
	});
	sv.ui.view_user_icon = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		right : 0,
		top : 0,
	});
	sv.ui.user_icon = Ti.UI.createImageView({
		width : Ti.App.size(46),
		height : Ti.App.size(58),
		image : '/assets/images/icon/user.png',
	});
	sv.ui.lbl_Login = Ti.UI.createLabel({
		width : Ti.App.size(280),
		height : Ti.App.size(50),
		text : 'ĐĂNG KÝ',
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		font : {
			fontSize : Ti.App.size(50)
		},
	});
	sv.ui.circle1 = Ti.UI.createImageView({
		width : Ti.App.size(400),
		height : Ti.App.size(400),
		borderRadius : Ti.App.size(400) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(130),
		opacity : 0.05,
		borderWidth : 2
	});
	sv.ui.circle2 = Ti.UI.createImageView({
		width : Ti.App.size(320),
		height : Ti.App.size(320),
		borderRadius : Ti.App.size(320) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(170),
		opacity : 0.1,
		borderWidth : 2
	});
	sv.ui.circle3 = Ti.UI.createImageView({
		width : Ti.App.size(240),
		height : Ti.App.size(240),
		borderRadius : Ti.App.size(240) / 2,
		borderColor : 'black',
		backgroundColor : 'transparent',
		top : Ti.App.size(210),
		opacity : 0.15,
		borderWidth : 2
	});
	sv.ui.avatar = Ti.UI.createImageView({
		width : Ti.App.size(180),
		height : Ti.App.size(180),
		image : '/assets/images/icon/avatar-defaut.png',
		top : Ti.App.size(240),
	});
	sv.vari.txt1 = 'Nhập tài khoản';
	sv.vari.txt2 = 'Nhập mật khẩu';
	sv.vari.attr1 = Titanium.UI.iOS.createAttributedString({
		text : sv.vari.txt1,
		attributes :[{
			type : Titanium.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
			value : 'white',
			range : [0, sv.vari.txt1.length]
		},]
	});
	sv.vari.attr2 = Titanium.UI.iOS.createAttributedString({
		text : sv.vari.txt2,
		attributes :[{
			type : Titanium.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
			value : 'white',
			range : [0, sv.vari.txt2.length]
		},]
		
	});
	sv.ui.txtUser = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : 2,
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(600),
		backgroundColor : 'transparent',
		attributedHintText : sv.vari.attr1,font : {
			fontSize : Ti.App.size(40)
		},
	});
	sv.ui.txtPassword = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : 2,
		attributedHintText : sv.vari.attr2,
		textAlign : 'center',
		color : Ti.App.Color.superwhite,
		top : Ti.App.size(720),
		backgroundColor : 'transparent',font : {
			fontSize : Ti.App.size(40)
		},
	});
	sv.ui.btn_dangki=Ti.UI.createLabel({
		width:Ti.App.size(680),
		height:Ti.App.size(100),
		backgroundColor:Ti.App.Color.gray,
		text:'Đăng kí',
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		bottom:Ti.App.size(20),
		color:Ti.App.Color.superwhite,
		textAlign:'center',
		font : {
			fontSize : Ti.App.size(50)
		},
	});
	/////////////
	tao_event(sv);
	sv.ui.btn_dangki.addEventListener('click',sv.fu.eventWindowChoose);
	sv.ui.view_menu_icon.addEventListener('click', sv.fu.eventBackHome);
	sv.ui.WindowDK.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowDK.addEventListener('close', sv.fu.closeWindow);
	////////////////
	sv.ui.WindowDK.add(sv.ui.btn_dangki);
	sv.ui.WindowDK.add(sv.ui.txtPassword);
	sv.ui.WindowDK.add(sv.ui.txtUser);
	sv.ui.view_menu_icon.add(sv.ui.menu_icon);
	sv.ui.WindowDK.add(sv.ui.view_menu_icon);
	sv.ui.view_user_icon.add(sv.ui.user_icon);
	sv.ui.WindowDK.add(sv.ui.view_user_icon);
	sv.ui.WindowDK.add(sv.ui.lbl_Login);
	sv.ui.WindowDK.add(sv.ui.circle1);
	sv.ui.WindowDK.add(sv.ui.circle2);
	sv.ui.WindowDK.add(sv.ui.circle3);
	sv.ui.WindowDK.add(sv.ui.avatar);
}

function tao_event(sv) {
	sv.fu = {};
	sv.fu.eventBackHome = function(e) {
		sv.ui.WindowDK.close();
	};
	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.eventWindowChoose=function(e){
		var windowchoose=new (require('/ui/WindowChoose'))();
		windowchoose.open();
	};
	sv.fu.closeWindow = function(e) {
		sv.ui.btn_dangki.removeEventListener('click',sv.fu.eventWindowChoose);
		sv.ui.view_menu_icon.removeEventListener('click', sv.fu.eventBackHome);
		sv.ui.WindowDK.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowDK.removeEventListener('close', sv.fu.closeWindow);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}
