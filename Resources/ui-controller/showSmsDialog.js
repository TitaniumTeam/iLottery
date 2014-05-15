var showSmsDialog = function(toRecipient, messageBody) {
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

		sms.setMessageBody(messageBody);

		sms.setToRecipients([toRecipient]);

		sms.open({
			animated : true
		});
	} else if (Ti.Platform.osname == 'android') {
		var intent = Titanium.Android.createIntent({
			action : Ti.Android.ACTION_SENDTO,
			data : 'smsto:' + toRecipient
		});
		// intent.putExtra('sms_body', messageBody);
		intent.putExtra('sms_body',messageBody);
		Ti.Android.currentActivity.startActivity(intent);
	} else {
		//mobile web
		var noSupport = Ti.UI.createAlertDialog({
			title : 'Không được hỗ trợ ',
			message : "Thiết bị chưa hỗ trợ gửi tin nhắn văn bản!"
		}).show();
	}
};
module.exports=showSmsDialog;