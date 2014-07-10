module.exports = function() {
	var db = Ti.Database.open('userinfo');
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER);');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Soxo(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Bongda(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Soxo_free(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	db.execute('CREATE TABLE IF NOT EXISTS DV_Bongda_free(tendv TEXT PRIMARY KEY,noidung TEXT,servicenumber TEXT,thamso TEXT,gia INTERGER)');
	var userinfo = db.execute("SELECT * FROM SaveInfo");
	if (userinfo.isValidRow()) {
		Ti.API.info('du lieu user:' + userinfo.getRowCount() + userinfo.fieldByName("username") + "/" + userinfo.fieldByName("type") + "/" + userinfo.fieldByName("balance"));
	}
	var win = Ti.UI.createWindow({
		backgroundImage : "/assets/icon/100_Main_screen.png",
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'Bong da',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white",
		top : Ti.App.size(702),
		left : Ti.App.size(125)
	});
	var bButton = Ti.UI.createButton({
		title : 'So xo',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		color : "white",
		top : Ti.App.size(702),
		right : Ti.App.size(125)

	});
	var evt_btnBongda = function(e) {
		userinfo.close();
		db.close();
		var win = new (require('/ui-bongda/WinBongDa'));
		win.open();
	};
	var evt_btnSoxo = function(e) {
		userinfo.close();
		db.close();
		var win = new (require('/ui-soxo/WinSoXo'));
		win.open();
	};
	var evt_openWin = function(e) {
		Ti.API.info('open window home');
	};
	var evt_closeWin = function(e) {
		win.removeEventListener('open', evt_openWin);
		aButton.removeEventListener('click', evt_btnBongda);
		bButton.removeEventListener('click', evt_btnSoxo);
		win.removeEventListener('close', evt_closeWin);
		Ti.API.info('remove su kien win home');
	};
	aButton.addEventListener('click', evt_btnBongda);
	bButton.addEventListener('click', evt_btnSoxo);
	win.addEventListener('open', evt_openWin);
	win.addEventListener('close', evt_closeWin);
	win.add(aButton);
	win.add(bButton);

	// Listen for click events.

	return win;
};
