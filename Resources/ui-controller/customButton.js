var customButton = function(params) {
	var view = Ti.UI.createView(params);
	view.pressed = false;
	view.BackgroundNormal = view.backgroundColor;

	view.addEventListener('touchstart', function(e) {
		if (!view.pressed) {
			view.pressed = true;
			//set image background press
			if (view.backgroundSelectedColor.trim() != '') {
				view.backgroundColor = view.backgroundSelectedColor;
			}
		}
	});

	view.addEventListener('touchend', function(e) {
		view.pressed = false;
		//set image background normal
		if (view.backgroundSelectedColor.trim() != '') {
			view.backgroundColor = view.BackgroundNormal;
		}
	});
	view.addEventListener('touchmove', function(e) {
		view.pressed = true;
		view.backgroundColor = view.BackgroundNormal;
	});
	view.addEventListener('touchcancel', function(e) {
		view.pressed = true;
		view.backgroundColor = view.BackgroundNormal;
	});
	return view;
};
module.exports = customButton;
