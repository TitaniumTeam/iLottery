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
		top : Ti.App.size(165),
		left : 0,
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		backgroundImage : "/assets/icon/bg_tuvan.png"
	});
	get_menu(sv);
	// }
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(640),
		height : Ti.UI.SIZE,
		data : sv.arr.rows,
		top : Ti.App.size(10),
		separatorColor : "transparent",
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	// sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		if (sv.fu.evt_tblrow_click != null && sv.fu.evt_tblrow_click != undefined) {
			sv.ui.tbl1.removeEventListener('click', sv.fu.evt_tblrow_click);
			Ti.API.info('remove su kien tu van');
		}

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
	var data = null;
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
	sv.vari.dv1=sv.vari.db.execute("SELECT * FROM DV_Soxo");
	sv.vari.dv2=sv.vari.db.execute("SELECT * FROM DV_Soxo_free");
	if (sv.vari.user_info.isValidRow()) {
		sv.vari.user_name = sv.vari.user_info.fieldByName("username");
		// sv.vari.user_info.close();
		// sv.vari.db.close();
		data = {
			"username" : sv.vari.user_name,
			type : "0"
		};
	} else {
		// sv.vari.user_info.close();
		// sv.vari.db.close();
		data = {
			"username" : "",
			type : "0"
		};
	}
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
		sv.vari.user_info.getRowCount();
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
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
		if (sv.vari.user_info.isValidRow()) {
			for (var i = 0; i < (jsonResuilt.menus.length); i++) {
				sv.vari.db.execute('INSERT OR IGNORE INTO DV_Soxo (tendv,noidung,servicenumber,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, jsonResuilt.menus[i].params, jsonResuilt.menus[i].price);
			}
		} else {
			for (var i = 0; i < (jsonResuilt.menus.length); i++) {
				sv.vari.db.execute('INSERT OR IGNORE INTO DV_Soxo_free (tendv,noidung,servicenumber,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, jsonResuilt.menus[i].params, jsonResuilt.menus[i].price);
			}
		}
		Ti.API.info('row dich vu soxo not free'+sv.vari.dv1.getRowCount());
		Ti.API.info('row dich vu so xo free'+sv.vari.dv2.getRowCount());
		sv.vari.user_info.close();
		sv.vari.db.close();
		for (var i = 0; i < (sv.arr.cacdichvu.id.length); i++) {
			Ti.API.info('****id:' + sv.arr.cacdichvu.id[i]);
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				title : sv.arr.cacdichvu.name[i],
				action : sv.arr.cacdichvu.action[i],
				params : sv.arr.cacdichvu.params[i],
				price : sv.arr.cacdichvu.price[i],
				width : Ti.App.size(640),
				left : Ti.App.size(20),
				height : Ti.App.size(90),
				color : Ti.App.Color.superwhite,
				font : {
					fontSize : Ti.App.size(30)
				},
				// backgroundColor:"transparent"
				backgroundImage : "/assets/icon/btn_tuvan.png"
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
			} else {
				Ti.API.info('khong co link');
			}
		}

	};

};