/**
 * view chứa menu bên phải
 */

function MenuRight() {
	// view nền, chỉ hiện lên khi có lệnh showMenu và ẩn đi khi hideMenu
	// default: false
	var viewBackground = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : 0.7,
		width : Ti.App.widthScreen,
		height : Ti.App.heightScreen,
		top : Ti.App.size(121),
		left : 0,
		visible : false
	});

	viewBackground.showMenu = function() {
		if (!viewMenu.isShowing) {
			viewBackground.visible = true;

			viewMenu.animate({
				top : 0,
				right : 0,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = true;
			});
		} else {
			viewMenu.animate({
				top : 0,
				right : -viewMenu.width,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = false;
				viewBackground.visible = false;
			});
		}
	};

	viewBackground.hideMenu = function() {
		if (viewMenu.isShowing) {
			viewMenu.animate({
				top : 0,
				right : -viewMenu.width,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = false;
				viewBackground.visible = false;
			});
		}
	};

	viewBackground.addEventListener('touchstart', function(e) {
		if (e.x < Ti.App.size(720 - 505))
			viewBackground.hideMenu();
	});

	// Menu
	var viewMenu = Ti.UI.createView({
		backgroundColor : 'white',
		width : Ti.App.size(505),
		height : Ti.App.heightScreen,
		top : 0,
		right : -Ti.App.size(505),
		isShowing : false
	});
	viewBackground.add(viewMenu);

	return viewBackground;
};

module.exports = MenuRight;
