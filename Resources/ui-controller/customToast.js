module.exports = function() {
	// window container
	indWin = Titanium.UI.createWindow({
		navBarHidden : true,
	});

	//  view
	var indView = Titanium.UI.createView({
		height : 50,
		width : 250,
		borderRadius : 10,

	});
	indView.add(Ti.UI.createView({
		width : "100%",
		height : "100%",
		backgroundColor : 'black',
		opacity : 0.5
	}));
	indWin.add(indView);

	// message
	var message = Titanium.UI.createLabel({
		color : 'white',
		width : 'auto',
		height : 'auto',
		textAlign : 'center',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 12,
			fontWeight : 'bold'
		}
	});

	indView.add(message);
	indWin.showToast = function(customMessage, interval) {
		message.setText(customMessage);
		indWin.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
		interval = interval ? interval : 3000;
		setTimeout(function() {
			indWin.close({
				opacity : 0,
				duration : 1000
			});
		}, interval);
	};
	// indWin.open();
	return indWin;
};
