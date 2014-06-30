/**
 * Indicator window with a spinner and a label
 *
 * @param {Object} args
 */
function createIndicatorWindow(args) {
	var width = 180, height = 50;

	var args = args || {};
	var top = args.top || 140;
	var text = args.text || 'Đang tải ...';

	var win = Titanium.UI.createWindow({
		height : height,
		width : width,
		top : top,
		// borderRadius : 10,
		touchEnabled : false,
		backgroundColor : 'transparent',
		navBarHidden:true,
		tabBarHidden:true,
	});
	win.add(Ti.UI.createView({
		backgroundColor:'black',
		opacity:0.5,
		width:"100%",
		height:"100%"
	}));
	var view = Ti.UI.createView({
		height : height,
		width : width,
		center : {
			x : (width / 2),
			y : (height / 2)
		},
		layout : 'horizontal',
		zIndex:2
	});

	function osIndicatorStyle() {
		style = Ti.UI.iPhone.ActivityIndicatorStyle.BIG;

		if ('iPhone OS' !== Ti.Platform.name) {
			style = Ti.UI.ActivityIndicatorStyle.BIG;
		}

		return style;
	}

	var activityIndicator = Ti.UI.createActivityIndicator({
		style : osIndicatorStyle(),
		left : 20,
		height : Ti.UI.FILL,
		width : 30,
	});

	var label = Titanium.UI.createLabel({
		left : 10,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		text : text,
		color : 'white',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 16,
			fontWeight : 'bold'
		}
	});

	view.add(activityIndicator);
	view.add(label);
	win.add(view);

	function openIndicator() {
		win.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
		activityIndicator.show();
	}


	win.openIndicator = openIndicator;

	function closeIndicator() {
		activityIndicator.hide();
		win.close();
	}


	win.closeIndicator = closeIndicator;

	return win;
}

// Public interface
exports.createIndicatorWindow = createIndicatorWindow;