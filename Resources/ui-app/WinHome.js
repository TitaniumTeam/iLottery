module.exports = function() {
	var win = Ti.UI.createWindow({
		backgroundColor : "black"
	});
	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'Bong da',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white"
	});
	var bButton = Ti.UI.createButton({
		title : 'So xo',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white",
		bottom : "100dp"
	});
	aButton.addEventListener('click', function() {
		var win = new (require('/ui-bongda/WinBongDa'));
		win.open();
	});
	bButton.addEventListener('click', function() {
		var win = new (require('/ui-soxo/WinSoXo'));
		win.open();
	});

	win.add(aButton);
	win.add(bButton);

	// Listen for click events.

	return win;
};
