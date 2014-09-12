module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.winThayDoiThongTin;
};

function createVariable(sv) {
	sv.vari.rowChucNang1 = [];
	sv.vari.txtChucNang1 = [];
	sv.vari.LabelChucNang1 = [];
	sv.arr.TenChucNang = ["Mật khẩu cũ", "Mật khẩu mới"];
	sv.arr.HintText = ["Nhập mật khẩu cũ", "Nhập mật khẩu mới"];
	sv.vari.lineRow1 = [];
}

function createUI(sv) {
	var customButton = require('ui-controller/customButton');
	var customView=require('ui-controller/customView');
	var isAndroid = Titanium.Platform.osname === 'android';
	sv.ui.winThayDoiThongTin = Titanium.UI.createWindow({
		exitOnClose : false,
		keepScreenOn : true,
		navBarHidden : true,
		fullscreen : isAndroid?false:true,
		orientationModes : [Ti.UI.PORTRAIT],
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(90),
		backgroundImage : "/assets/icon/nav_bar.png",
		top : 0,
		left : 0
	});

	sv.ui.lbl_Header = Titanium.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.superwhite,
		text : "Thay đổi mật khẩu",
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
	});

	/////
	sv.ui.View_Back = customButton({
		width : Ti.App.size(100),
		height : Ti.App.size(90),
		top : 0,
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
	});

	sv.ui.btn_Back = Titanium.UI.createImageView({
		image : '/assets/icon/icon_back.png',
		touchEnabled : false,
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});

	////
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(80),
		width : Ti.App.size(640),
		left : 0,
		layout : "vertical",
		height : Ti.UI.FILL,
		backgroundColor : Ti.App.Color.magenta,
	});

	sv.ui.TableChucNang1 = Ti.UI.createTableView({
		top : Ti.App.size(25),
		width : Ti.App.size(590),
		height : Ti.App.size(200),
		backgroundColor : Ti.App.Color.superwhite,
		separatorColor : "transparent",
		borderColor : Ti.App.Color.xanhnhat,
		borderRadius : 10,
		scrollable : false,
		showVerticalScrollIndicator : false,
	});
	for (var i = 0; i < 2; i++) {
		sv.vari.rowChucNang1[i] = Ti.UI.createTableViewRow({
			width : Ti.App.size(590),
			top : 0,
			left : 0,
			height : Ti.App.size(100),
			id : i
		});
		sv.vari.lineRow1[i] = Ti.UI.createView({
			width : Ti.App.size(590),
			bottom : 0,
			left : 0,
			height : Ti.App.size(3),
			backgroundColor : Ti.App.Color.xanhnhat
		});
		sv.vari.LabelChucNang1[i] = Ti.UI.createLabel({
			left : Ti.App.size(30),
			text : sv.arr.TenChucNang[i],
			color : Ti.App.Color.nauden,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.App.size(30)
			},
			width : Ti.App.size(260),
			textAlign : "left",
		});

		sv.vari.txtChucNang1[i] = Ti.UI.createTextField({
			width : Ti.App.size(330),
			top : 0,
			height : Ti.App.size(90),
			left : Ti.App.size(260),
			backgroundColor : Ti.App.Color.superwhite,
			maxLength : 30,
			hintText : sv.arr.HintText[i],
			color : Ti.App.Color.nauden,
			textAlign : "left",
			font : {
				fontSize : Ti.App.size(25)
			},
			autocorrect : false,
			passwordMask:true
		});
		sv.vari.rowChucNang1[i].add(sv.vari.txtChucNang1[i]);

		sv.vari.rowChucNang1[i].add(sv.vari.lineRow1[i]);
		sv.vari.rowChucNang1[i].add(sv.vari.LabelChucNang1[i]);

	}
	sv.ui.TableChucNang1.setData(sv.vari.rowChucNang1);

	////
	//
	sv.ui.btnXacNhan = customView({
		width : Ti.App.size(590),
		height : Ti.App.size(96),
		backgroundImage : "/assets/icon/btn_xac_nhan.png",
		backgroundSelectedImage : "/assets/icon/btn_xac_nhan_select.png",
		top : Ti.App.size(40)
	});
	///////
	createUI_Event(sv);
	sv.ui.View_Back.addEventListener('click', sv.fu.eventClickIconLeft);
	sv.ui.winThayDoiThongTin.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.winThayDoiThongTin.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.winThayDoiThongTin.addEventListener('android:back', sv.fu.event_androidback);
	sv.ui.btnXacNhan.addEventListener('click', sv.fu.evt_btnXacNhan);
	///
	sv.ui.ViewHeader.add(sv.ui.View_Back);
	sv.ui.View_Back.add(sv.ui.btn_Back);
	sv.ui.ViewHeader.add(sv.ui.lbl_Header);
	sv.ui.winThayDoiThongTin.add(sv.ui.ViewHeader);
	////
	sv.ui.ViewTong.add(sv.ui.TableChucNang1);
	////
	sv.ui.ViewTong.add(sv.ui.btnXacNhan);
	sv.ui.winThayDoiThongTin.add(sv.ui.ViewTong);
}

function createUI_Event(sv) {

	sv.fu.event_androidback = function(e) {
		sv.ui.winThayDoiThongTin.close();
	};
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.winThayDoiThongTin.close();
	};
	sv.fu.evt_btnXacNhan = function(e) {
		sv.vari.db = Ti.Database.open("userinfo");
		sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
		sv.vari.ten_user = sv.vari.user_info.fieldByName("username");
		sv.vari.user_info.close();
		sv.vari.db.close();
		if (sv.vari.txtChucNang1[0].value == "" || sv.vari.txtChucNang1[1].value == "" ) {
			alert("Bạn chưa nhập đầy đủ thông tin vào");
		} else {
			thaydoi_pass({
				"username" : sv.vari.ten_user,
				"pass" : sv.vari.txtChucNang1[0].value,
				"newpass" : sv.vari.txtChucNang1[1].value,
			}, sv);
		}

	};
	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window thay doi thong tin');
	};
	sv.fu.evt_btnDangNhap = function(e) {
	};
	sv.fu.eventCloseWindow = function(e) {
		sv.ui.winThayDoiThongTin.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.winThayDoiThongTin.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.btn_Back.removeEventListener('click', sv.fu.eventClickIconLeft);
		sv.ui.winThayDoiThongTin.removeEventListener('android:back', sv.fu.event_androidback);
		sv.ui.btnXacNhan.removeEventListener('click', sv.fu.evt_btnXacNhan);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window thay doi pass, sv=' + sv);
	};

}

function thaydoi_pass(data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=changepass');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);

		var jsonResuilt = JSON.parse(dl);
		Ti.API.info('code' + jsonResuilt.code);
		if (jsonResuilt.code == 0) {
			var db=Ti.Database.open("userinfo");
			db.execute("UPDATE SaveInfo SET password=?",data.newpass);
			Ti.API.info('thay doi thanh cong');
			db.close();
			sv.ui.winThayDoiThongTin.close();
		} else {
			alert("Thay đổi mật khẩu thất bại");
		}

	};

};
