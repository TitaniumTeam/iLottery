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
		removeSK(sv);
	})();

	return sv;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari.wdnew = require('/ui-bongda/NewsContent');
	//sv.vari.SoTinTuc = 7;
	sv.arr.linkbai = [];
	sv.vari.TopView = Ti.App.size(235);
	sv.vari.HeightView = Ti.App.size(235);
	sv.arr.ViewTinTuc = [];
	sv.arr.ViewRow = [];
	sv.arr.AnhTinTuc = [];
	sv.arr.TenTinTuc = [];
	sv.arr.ThoiGianTinTuc = [];
	sv.arr.TTTinTuc = [];
	sv.arr.eventClickViewTinTuc = [];
	sv.arr.ViewCover = [];
	sv.arr.ViewContent = [];
	// sv.vari.timeout = null;
}

function createUI(sv) {
	var data = {
		"matchid" : "3"
	};

	createUI_Event(sv);

	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(165),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
		bottom : Ti.App.size(100)
	});

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.publicvm.com:7788/api?cmd=' + "getmatchnews");
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
		Ti.API.info('Cac Tin Tuc : ', jsonResuilt.news);
		sv.vari.SoTinTuc = jsonResuilt.news.length;

		for (var i = 0; i < sv.vari.SoTinTuc; i++) {
			sv.arr.linkbai.push(jsonResuilt.news[i].content);
			sv.arr.ViewRow[i] = Ti.UI.createTableViewRow({
				height : Ti.App.size(500),
				left : 0,
				// top : Ti.App.size(500 * i),
				backgroundColor : Ti.App.Color.nauden,
				width : Ti.App.size(640),
				id : i,
				backgroundSelectedColor : null,
				backgroundSelectedImage : null
			});
			Ti.App.g_IndicatorWindow.openIndicator(sv.arr.ViewRow[i]);
			sv.arr.ViewTinTuc[i] = Ti.UI.createView({
				height : Ti.App.size(465),
				left : 0,
				backgroundColor : "transparent",
				top : 0,
				width : Ti.App.size(640),
			});
			sv.arr.AnhTinTuc[i] = Ti.UI.createImageView({
				image : jsonResuilt.news[i].image,
				top : 0,
				width : Ti.App.size(640),
				height : Ti.App.size(500),
				left : 0,
			});
			sv.arr.ViewCover[i] = Titanium.UI.createView({
				bottom : 0,
				width : Ti.App.size(640),
				height : Ti.App.size(170),
				left : 0,
				zIndex : 0,
				touchEnabled : false,
				backgroundImage : "/assets/icon/bg70.png"
			});
			sv.arr.ViewContent[i] = Titanium.UI.createView({
				bottom : 0,
				width : Ti.App.size(640),
				height : Ti.App.size(170),
				left : 0,
				zIndex : 10,
				backgroundColor : "transparent",
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				// touchEnabled : false
			});
			sv.arr.TenTinTuc[i] = Ti.UI.createLabel({
				text : jsonResuilt.news[i].title.toString(),
				font : {
					fontSize : Ti.App.size(25),
					fontFamily : 'Aria',
					fontWeight : 'bold',
					textAlign : 'left'
				},
				color : Ti.App.Color.superwhite,
				left : Ti.App.size(20),
				top : Ti.App.size(10),
				height : Ti.UI.SIZE,
				right : Ti.App.size(10),
				touchEnabled : false
				// width:Ti.App.size(470)
				// bottom : Ti.App.size(130)
			});

			sv.arr.ThoiGianTinTuc[i] = Ti.UI.createLabel({
				text : jsonResuilt.news[i].time,
				font : {
					fontSize : Ti.App.size(25),
					fontFamily : 'Aria',
					textAlign : 'left'
				},
				color : Ti.App.Color.superwhite,
				right : 0,
				top : Ti.App.size(10),
				width : Ti.App.size(150),
				touchEnabled : false
			});

			sv.arr.TTTinTuc[i] = Ti.UI.createLabel({
				text : jsonResuilt.news[i].intro.toString(),
				font : {
					fontSize : Ti.App.size(20),
					fontFamily : 'Aria',
					textAlign : 'left'
				},
				color : Ti.App.Color.superwhite,
				left : Ti.App.size(20),
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				right : Ti.App.size(10),
				top : Ti.App.size(70),
				touchEnabled : false
				// bottom:Ti.App.size(10)
			});

			sv.arr.ViewTinTuc[i].add(sv.arr.AnhTinTuc[i]);
			sv.arr.ViewTinTuc[i].add(sv.arr.ViewContent[i]);
			sv.arr.ViewTinTuc[i].add(sv.arr.ViewCover[i]);
			sv.arr.ViewContent[i].add(sv.arr.TenTinTuc[i]);
			sv.arr.ViewContent[i].add(sv.arr.TTTinTuc[i]);
			sv.arr.ViewRow[i].add(sv.arr.ViewTinTuc[i]);
		}
		sv.ui.ViewListTinTuc = Ti.UI.createTableView({
			top : Ti.App.size(0),
			left : 0,
			right : 0,
			data : sv.arr.ViewRow,
			separatorColor : Ti.App.Color.nauden,
			width : Ti.App.size(640),
			showVerticalScrollIndicator : 'true'
		});
		createUI_Event(sv);
		for (var i = 0; i < sv.arr.linkbai.length; i++) {
			sv.arr.ViewRow[i].addEventListener('click', sv.arr.eventClickViewTinTuc[i]);
			sv.arr.ViewRow[i].addEventListener('postlayout', function(e) {
				Ti.App.g_IndicatorWindow.closeIndicator(sv.arr.ViewTinTuc[i]);
			});
		}

		sv.ui.ViewTong.add(sv.ui.ViewListTinTuc);

	};

}

function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		if (sv.arr.eventClickViewTinTuc != null || sv.arr.eventClickViewTinTuc != undefined) {
			for (var i = 0; i < sv.arr.linkbai.length; i++) {
				sv.arr.ViewRow[i].removeEventListener('click', sv.arr.eventClickViewTinTuc[i]);
			}
			Ti.API.info('remove su kien tin tuc');
		}

	};
};
function createUI_Event(sv) {
	for (var i = 0; i < sv.arr.linkbai.length; i++) {
		sv.arr.eventClickViewTinTuc[i] = function(e) {
			Ti.API.info('link bai:' + sv.arr.linkbai[e.row.id]);
			sv.vari.wdtintuc = new sv.vari.wdnew();
			sv.vari.wdtintuc.setLink(sv.arr.linkbai[e.row.id]);
			sv.vari.wdtintuc.ui.winBXH.open();
		};
	}
}

function kt_mang() {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))(1);
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
};
