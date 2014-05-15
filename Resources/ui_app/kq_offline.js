module.exports = function() {
	var view_offline = Ti.UI.createView({
		// width : Ti.App.size(720),
		// height : Ti.App.size(1280),
		backgroundColor : 'transparent',
		zIndex : 10
	});
	view_offline.add(Ti.UI.createView({
		width : "100%",
		height : "100%",
		backgroundColor : 'black',
		opacity : 0.5,
		zIndex : 0
	}));
	var viewchua = Ti.UI.createView({
		zIndex : 1,
		width : Ti.App.size(720),
		height : Ti.App.size(1280),
		backgroundColor : 'transparent',
		top : 0,
		left : 0,
	});
	view_offline.add(viewchua);
	var label = Ti.UI.createLabel({
		top : Ti.App.size(200),
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		text : 'KHÔNG CÓ KẾT NỐI MẠNG...'
	});
	viewchua.add(label);
	var button = Ti.UI.createLabel({
		top : Ti.App.size(300),
		text : 'Soan tin nhan de xem ket qua',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
	});
	viewchua.add(button);
	var thoat = Ti.UI.createLabel({
		top : Ti.App.size(500),
		text : 'Thoat',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		font : {
			fontSize : Ti.App.size(50),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
	});
	viewchua.add(thoat);
	view_offline.testNetwork = function(_currView,_viewadd) {
		if (Titanium.Network.networkType == Titanium.Network.NETWORK_NONE) {
			_currView.add(view_offline);
			var evt_sms = function(e) {
				this.removeEventListener('click', evt_sms);
				var showSmsDialog = new (require('/ui-controller/showSmsDialog'))('88xx', 'KQSXMB');
			};
			var evt_thoat = function(e) {
				this.removeEventListener('click', evt_thoat);
				_currView.remove(view_offline);
			};
			button.addEventListener('click', evt_sms);
			thoat.addEventListener('click', evt_thoat);
		} else {
			_currView.add(_viewadd);
		}
	};

	return view_offline;
};
