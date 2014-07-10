var showSmsDialog = function(_type) {
	var dauso = null;
	var noidung = null;
	var db = Ti.Database.open("userinfo");
	var user = db.execute("SELECT * FROM SaveInfo");
	if (user.isValidRow()) {
		if (_type == 0) {
			var dv_bongda = db.execute("SELECT * FROM DV_Bongda");
			if (dv_bongda.isValidRow()) {
				dauso = dv_bongda.fieldByName("servicenumber");
				noidung = dv_bongda.fieldByName("noidung") + " " + dv_bongda.fieldByName("thamso");
			} else {
				dauso = "88XX";
				noidung = "KQ TT";
			}
			dv_bongda.close();
		} else {
			var dv_soxo = db.execute("SELECT * FROM DV_Soxo");
			if (dv_soxo.isValidRow()) {
				dauso = dv_soxo.fieldByName("servicenumber");
				noidung = dv_soxo.fieldByName("noidung") + " " + dv_soxo.fieldByName("thamso");
			} else {
				dauso = "88XX";
				noidung = "KQSX";
			}
			dv_soxo.close();
		}
	} else {
		if (_type == 1) {
			var dv_bongda_free = db.execute("SELECT * FROM DV_Bongda_free");
			if (dv_bongda_free.isValidRow()) {
				dauso = dv_bongda_free.fieldByName("servicenumber");
				noidung = dv_bongda_free.fieldByName("noidung") + " " + dv_bongda_free.fieldByName("thamso");
			} else {
				dauso = "88XX";
				noidung = "KQ TT";
			}
			dv_bongda_free.close();
		} else {
			var dv_soxo_free = db.execute("SELECT * FROM DV_Soxo_free");
			var dv_soxo_free = db.execute("SELECT * FROM DV_Soxo");
			if (dv_soxo_free.isValidRow()) {
				dauso = dv_soxo_free.fieldByName("servicenumber");
				noidung = dv_soxo_free.fieldByName("noidung") + " " + dv_soxo_free.fieldByName("thamso");
			} else {
				dauso = "88XX";
				noidung = "KQSX";
			}
			dv_soxo_free.close();
		}

	}
	db.close();
	user.close();
	if (Ti.Platform.osname == 'ipad' || Ti.Platform.osname == 'iphone') {
		var sms = require('bencoding.sms').createSMSDialog({
			barColor : '#336699'
		});
		if (!sms.canSendText) {
			var noSupport = Ti.UI.createAlertDialog({
				title : 'Không được hỗ trợ ',
				message : "Thiết bị không hỗ trợ gửi tin nhắn văn bản "
			}).show();

			return;
		}

		sms.setMessageBody(noidung);

		sms.setToRecipients([dauso]);

		sms.open({
			animated : true
		});
	} else if (Ti.Platform.osname == 'android') {
		var intent = Titanium.Android.createIntent({
			action : Ti.Android.ACTION_SENDTO,
			data : 'smsto:' + dauso
		});
		// intent.putExtra('sms_body', messageBody);
		intent.putExtra('sms_body', noidung);
		Ti.Android.currentActivity.startActivity(intent);
	} else {
		//mobile web
		var noSupport = Ti.UI.createAlertDialog({
			title : 'Không được hỗ trợ ',
			message : "Thiết bị chưa hỗ trợ gửi tin nhắn văn bản!"
		}).show();
	}
};
module.exports = showSmsDialog;
