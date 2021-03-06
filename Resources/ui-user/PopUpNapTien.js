module.exports = function(_winparent) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv,_winparent);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
}

function createUI(sv,_winparent) {
	var customButton = require('ui-controller/customButton');
	var customView = require('ui-controller/customView');
	sv.ui.Window = Ti.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : false,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));
	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(504),
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(590),
		borderRadius : 5,
		top : Ti.App.size(200),
		left : Ti.App.size(25)
	});
	sv.ui.ViewIcon = Ti.UI.createView({
		top : 0,
		height : Ti.App.size(100),
		left : Ti.App.size(0),
		backgroundColor : "transparent",
		width : Ti.App.size(590),
	});
	sv.ui.IconNap = Titanium.UI.createImageView({
		left : Ti.App.size(20),
		image : "/assets/icon/icon_nap_xu.png",
		width : Ti.App.size(60),
		height : Ti.App.size(60),
	});
	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/icon/btn_cancel.png',
		width : Ti.App.size(90),
		height : Ti.App.size(90),
		right : 0,
		top : Ti.App.size(150),
		zIndex : 10
	});
	sv.ui.ThongBao1 = Ti.UI.createLabel({
		text : 'Nạp xu bằng mã thẻ',
		font : {
			fontSize : Ti.App.size(35),
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		left : Ti.App.size(80)
	});
	sv.ui.line = Titanium.UI.createView({
		width : Ti.App.size(525),
		height : Ti.App.size(2),
		backgroundColor : Ti.App.Color.gray,
		top : Ti.App.size(105)
	});
	sv.ui.txt_soseri = Ti.UI.createTextField({
		backgroundColor : Ti.App.Color.superwhite,
		hintText : 'Nhập số seri',
		width : Ti.App.size(525),
		height : Ti.App.size(80),
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		top : Ti.App.size(130),
		textAlign : 'center',
		borderRadius : 5,
		maxLength : 13,
		autocorrect : false,
		keyboardToolbarHeight : Ti.App.size(30)
	});
	sv.ui.txt_mathe = Ti.UI.createTextField({
		backgroundColor : Ti.App.Color.superwhite,
		hintText : 'Nhập mã thẻ',
		width : Ti.App.size(525),
		height : Ti.App.size(80),
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		top : Ti.App.size(230),
		textAlign : 'center',
		borderRadius : 5,
		maxLength : 13,
		autocorrect : false,
		keyboardToolbarHeight : Ti.App.size(30)
	});
	sv.ui.btn_nap = customView({
		width : Ti.App.size(526),
		height : Ti.App.size(96),
		bottom : Ti.App.size(30),
		backgroundSelectedImage : "/assets/icon/btn_nap_select.png",
		backgroundImage : "/assets/icon/btn_nap.png"
	});
	createUI_Event(sv,_winparent);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.btn_nap.addEventListener('click', sv.fu.eventClicknaptien);
	sv.ui.Window.addEventListener('android:back', sv.fu.eventClickIcon);
	sv.ui.Window.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.line);
	sv.ui.ViewPopUp.add(sv.ui.ViewIcon);
	sv.ui.ViewPopUp.add(sv.ui.txt_soseri);
	sv.ui.ViewPopUp.add(sv.ui.txt_mathe);
	sv.ui.ViewPopUp.add(sv.ui.btn_nap);
	sv.ui.ViewIcon.add(sv.ui.IconNap);
	sv.ui.ViewIcon.add(sv.ui.ThongBao1);
	sv.ui.Window.add(sv.ui.ViewPopUp);
}

function createUI_Event(sv,_winparent) {
	sv.fu.eventClicknaptien = function(e) {
		sv.vari.db = Ti.Database.open('userinfo');
		sv.vari.sql = sv.vari.db.execute('SELECT * FROM SaveInfo');
		sv.vari.username = sv.vari.sql.fieldByName("username");
		sv.vari.db.close();
		sv.vari.sql.close();
		// sv.vari.type = sv.vari.sql.fieldByName("type");
		naptien({
			"username" : sv.vari.username,
			"serial" : sv.ui.txt_soseri.value,
			"pin" : sv.ui.txt_mathe.value
		}, sv,_winparent);
	};
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.btn_nap.removeEventListener('click', sv.fu.eventClicknaptien);
		sv.ui.Window.removeEventListener('android:back', sv.fu.eventClickIcon);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window nap tien, sv=' + sv);
	};
}

function naptien(data, sv,_winparent) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=chargebalance');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('code' + dl.code);
		if (dl.code == 0) {
			var jsonResult=JSON.parse(dl);
			var db=Ti.Database.open("userinfo");
			db.execute("UPDATE SaveInfo SET balance+=?",parseInt(jsonResult.balance));
			var wdPopUPThanhCong = new (require('/ui-user/PopUpThanhCong'))();
			wdPopUPThanhCong.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			if(_winparent)
			_winparent.setUserInfo();
			db.close();
			sv.ui.Window.close();
		} else {
			var wdPopUpThatBai = new (require('/ui-user/PopUpThatBai'))(0);
			wdPopUpThatBai.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
			
			sv.ui.Window.close();
		}

	};

};
