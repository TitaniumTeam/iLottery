var customRow = function(params) {
	var view = Ti.UI.createView(params);
	view.pressed = false;
	view.BackgroundNormal = view.backgroundGradient;

	view.addEventListener('touchstart', function(e) {
		if (!view.pressed) {
			view.pressed = true;
			//set image background press
			// if( view.backgroundSelectedColor.trim()!='' ){
			view.backgroundGradient = view.backgroundSelectedColor;
			// }
		}
	});

	view.addEventListener('touchend', function(e) {
		Ti.API.info('nhay vao touch end');
		view.pressed = false;
		//set image background normal
		// if( view.backgroundSelectedColor.trim()!='' ){
		view.backgroundGradient = view.BackgroundNormal;
		// }
	});
	view.addEventListener('touchmove', function(e) {
		view.pressed = true;
		view.backgroundGradient = view.BackgroundNormal;
	});
	view.addEventListener('touchcancel', function(e) {
		view.pressed = true;
		view.backgroundGradient = view.BackgroundNormal;
	});
	return view;
};
module.exports = customRow;
