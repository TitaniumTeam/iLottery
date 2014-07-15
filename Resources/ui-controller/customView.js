var customView = function(params){
	var view = Ti.UI.createView(params);
	view.pressed = false;
	view.urlBackgroundNormal = view.backgroundImage;
	
	view.addEventListener('touchstart', function(e){
		if( !view.pressed ){
			view.pressed = true;
			//set image background press
			if( view.backgroundSelectedImage.trim()!='' ){
				view.backgroundImage = view.backgroundSelectedImage;
			}
		}
	});
	
	view.addEventListener('touchend', function(e){
		view.pressed = false;
		//set image background normal
		if( view.backgroundSelectedImage.trim()!='' ){
			view.backgroundImage = view.urlBackgroundNormal;
		}
	});
	
	return view;
};
module.exports = customView;
