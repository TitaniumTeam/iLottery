var customDialog = function(_loai) {
	var isAndroid = Titanium.Platform.osname === 'android';
	this.textfield_value = null;
	this.win_dialog = Ti.UI.createWindow({
		backgroundColor : "transparent",
		modal : isAndroid ? true : false,
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	this.win_dialog.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%",
	}));
	this.view_dialog = Ti.UI.createView({
		height : Ti.App.size(486),
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25),
		layout : "vertical",
		borderWidth : Ti.App.size(10)
	});
	this.text_field = Ti.UI.createTextField({
		width : Ti.App.size(550),
		backgroundColor : "white",
		autocorrect : false,
		maxLength : 50,
		font : {
			fontSize : Ti.App.size(25)
		},
		color : Ti.App.Color.nauden,
		textAlign : "left",
		top : Ti.App.size(10)
	});
	this.TxtHeader = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.nauden,
		textAlign : "left",
		backgroundColor : "transparent",
		touchEnabled : false,
		top : Ti.App.size(10)
	});
	this.btnOK = Ti.UI.createButton({
		width : Ti.App.size(350),
		height : Ti.UI.SIZE,
		backgroundColor : "black",
		color : "white",
		title : "OK",
		textAlign : "center",
	});
	this.view_dialog.add(this.TxtHeader);
	this.view_dialog.add(this.text_field);
	this.win_dialog.add(this.view_dialog);
	this.view_dialog.add(this.btnOK);
	this.btnOK.addEventListener('click', function(e) {
		this.textfield_value = this.text_field.getValue();
		this.win_dialog.close();
	});
};
customDialog.prototype.openDialog = function() {
	this.win_dialog.open();

};
customDialog.prototype.getTextValue = function() {
	return this.textfield_value;
};
customDialog.prototype.closeDialog = function() {
	this.win_dialog.close();
};

module.exports = customDialog;
