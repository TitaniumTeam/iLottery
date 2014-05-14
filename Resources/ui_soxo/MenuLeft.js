/**
 * view chứa menu bên trái
 */

function ViewMenuLeft() {
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
			// viewBackground.animate({opacity: 0.7, duration : 150}, function(e) {
				// viewBackground.visible = true;
				// viewBackground.opacity = 0.7;
			// });

			viewMenu.animate({
				top : 0,
				left : 0,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = true;
			});
		} else {
			viewMenu.animate({
				top : 0,
				left : -viewMenu.width,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = false;
				// viewBackground.visible = false;
			});
			
			viewBackground.animate({opacity: 0, duration : 150}, function(e) {
				viewBackground.visible = false;
				viewBackground.opacity = 0;
			});
		}
	};

	viewBackground.hideMenu = function() {
		if (viewMenu.isShowing) {
			viewMenu.animate({
				top : 0,
				left : -viewMenu.width,
				duration : 200
			}, function(e) {
				viewMenu.isShowing = false;
				viewBackground.visible = false;
			});
		}
	};

	viewBackground.addEventListener('touchstart', function(e) {
		if (e.x > viewMenu.width)
			viewBackground.hideMenu();
	});

	// Menu
	var viewMenu = Ti.UI.createView({
		backgroundColor : 'white',
		width : Ti.App.size(505),
		height : Ti.App.heightScreen,
		top : 0,
		left : -Ti.App.size(505),
		isShowing : false
	});
	viewBackground.add(viewMenu);

	return viewBackground;
};

module.exports = ViewMenuLeft;
