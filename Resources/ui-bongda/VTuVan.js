module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv);
		removeSK(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.winTuVan = require('/ui-bongda/WinTuVan');
	sv.arr.rows = [];
	sv.arr.cacdichvu = {};
	sv.arr.cacdichvu.id = [];
	sv.arr.cacdichvu.name = [];
	sv.arr.cacdichvu.action = [];
	sv.arr.cacdichvu.params = [];
	sv.arr.cacdichvu.servicenumber = [];
	sv.arr.cacdichvu.price = [];
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : Ti.App.size(163),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});
	get_menu(sv);
	// }
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		data : sv.arr.rows,
		top : 0,
		separatorColor : Ti.App.Color.xanhnhat,
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	// sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.tbl1.removeEventListener('click', sv.fu.evt_tblrow_click);
		Ti.API.info('remove su kien tu van');
	};
};
function tao_sukien(sv) {
	sv.fu.evt_tblrow_click = function(e) {
		Ti.API.info(e.row.title);
		Ti.API.info(e.row.params);
		Ti.API.info(e.row.price);
		Ti.API.info(e.row.action);
		sv.vari.action = e.row.action;
		sv.vari.price = e.row.price;
		if (e.row.params == "") {
			tuvan_soxo("menuaction", {
				"command" : sv.vari.action,
				"param" : "",
				"price" : sv.vari.price
			}, sv);
		} else {
			sv.vari.param = [];
			sv.vari.params = e.row.params.toString();
			sv.vari.param = (sv.vari.params.split(','));
			sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
				title : "Lựa chọn tỉnh thành",
				options : sv.vari.param,
			});
			sv.ui.opt_dialog.show();
			sv.ui.opt_dialog.addEventListener('click', function(e) {
				tuvan_soxo("menuaction", {
					"command" : sv.vari.action,
					"param" : sv.vari.param[e.index],
					"price" : sv.vari.price
				}, sv);
			});
		};
	};
};
function get_menu(sv) {
	var xhr = Titanium.Network.createHTTPClient();
	data = {
		"username" : "",
		type : "1"
	};
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=getmenu');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		// Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		// Ti.API.info('du lieu' + jsonResuilt.menus);
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			sv.arr.cacdichvu.id.push(jsonResuilt.menus[i].id);
			sv.arr.cacdichvu.name.push(jsonResuilt.menus[i].name);
			sv.arr.cacdichvu.action.push(jsonResuilt.menus[i].action);
			sv.arr.cacdichvu.servicenumber.push(jsonResuilt.menus[i].servicenumber);
			sv.arr.cacdichvu.price.push(jsonResuilt.menus[i].price);
			if (jsonResuilt.menus[i].params) {
				sv.arr.cacdichvu.params.push(jsonResuilt.menus[i].params);
			} else {
				sv.arr.cacdichvu.params.push("");
			}

		}
		for (var i = 0; i < (sv.arr.cacdichvu.id.length); i++) {
			Ti.API.info('****id:' + sv.arr.cacdichvu.id[i]);
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				title : sv.arr.cacdichvu.name[i],
				action : sv.arr.cacdichvu.action[i],
				params : sv.arr.cacdichvu.params[i],
				price : sv.arr.cacdichvu.price[i],
				width : Ti.App.size(640),
				left : Ti.App.size(20),
				backgroundColor : Ti.App.Color.red,
				height : Ti.App.size(90),
				color : Ti.App.Color.superwhite,
				font : {
					fontSize : Ti.App.size(30)
				},
			});
		}
		sv.ui.tbl1.setData(sv.arr.rows);
		tao_sukien(sv);
		sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
	};
}

function tuvan_soxo(_cmd, data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		if (jsonResuilt.result.code == 0 && jsonResuilt.advisor) {
			// var link = jsonResuilt.advisor;
			Ti.API.info('nhay vao day******');
			if (jsonResuilt.advisor) {
				sv.vari.wdTuVan = new sv.vari.winTuVan();
				sv.vari.wdTuVan.setLink(jsonResuilt.advisor);
				sv.vari.wdTuVan.ui.winTuVan.open();
				// sv.ui.ViewTong.removeAllChildren();
				// sv.ui.ViewTong.add(sv.ui.webview);
				// sv.ui.webview.html = jsonResuilt.advisor;
			} else {
				Ti.API.info('khong co link');
			}
		}

	};

};