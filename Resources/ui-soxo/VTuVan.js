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
	sv.arr.rows = [];
	sv.arr.View_rows = [];
	sv.arr.Label_ten_dv = [];
	sv.arr.Label_dvcon = [];
	sv.arr.ViewBack = [];
	sv.arr.ViewChuaLbl = [];
	sv.arr.cacdichvu = {};
	sv.arr.cacdichvu.id = [];
	sv.arr.cacdichvu.name = [];
	sv.arr.cacdichvu.action = [];
	sv.arr.cacdichvu.params = [];
	sv.arr.cacdichvu.servicenumber = [];
	sv.arr.cacdichvu.price = [];

	sv.vari.param = [];
	sv.vari.action = null;
	sv.vari.price = null;

};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createScrollView({
		top : Ti.App.size(165),
		showVerticalScrollIndicator : 'true',
		contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL,
		zIndex : 0,
		horizontalWrap : false,
		disableBounce : "true",
		layout:"vertical",
		backgroundImage : "/assets/icon/bg_tuvan.png"
	});

	// }
	// sv.ui.ViewChua = Ti.UI.createScrollView({
		// backgroundColor : 'transparent',
		// top : Ti.App.size(90),
		// left : 0,
		// showVerticalScrollIndicator : 'true',
		// contentHeight : Ti.UI.FILL,
		// height : Ti.UI.FILL,
		// zIndex : 0,
		// horizontalWrap : false,
		// disableBounce : "true"
		// // layout:"vertical"
	// });
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(640),
		height : Ti.UI.FILL,
		top : Ti.App.size(10),
		separatorColor : "transparent",
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	get_menu(sv);
	// sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function removeSK(sv) {
	sv.removeAllEvent = function(e) {
		// if (sv.fu.evt_tblrow_click != null && sv.fu.evt_tblrow_click != undefined) {
		// sv.ui.tbl1.removeEventListener('click', sv.fu.evt_tblrow_click);
		// sv.ui.opt_dialog.removeEventListener('click', sv.fu.evt_optdialog);
		Ti.API.info('remove su kien tu van bongda');
		// }

	};
};
function tao_sukien(sv) {
};
function get_menu(sv) {
	var xhr = Titanium.Network.createHTTPClient();
	var data = null;
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.user_info = sv.vari.db.execute("SELECT * FROM SaveInfo");
	if (sv.vari.user_info.isValidRow()) {
		sv.vari.user_name = sv.vari.user_info.fieldByName("username");
		data = {
			"username" : sv.vari.user_name,
			"type" : "0"
		};
	} else {
		data = {
			"username" : "",
			"type" : "0"
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
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		sv.vari.user_info.getRowCount();
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		var menucap1 = [];
		var menucap2 = [];
		var menucap3 = [];
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			if (jsonResuilt.menus[i].parentid == 0) {
				menucap1.push(jsonResuilt.menus[i]);
			}
		};
		for (var i = 0; i < (jsonResuilt.menus.length); i++)
			for (var j = 0; j < (menucap1.length); j++) {
				if (jsonResuilt.menus[i].parentid == menucap1[j].id) {
					menucap2.push(jsonResuilt.menus[i]);
				}
			}
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			for (var j = 0; j < (menucap2.length); j++) {
				if (jsonResuilt.menus[i].parentid == menucap2[j].id) {
					menucap3.push(jsonResuilt.menus[i]);
				}
			}
		};
		sv.vari.user_info.close();
		sv.vari.db.close();

		for (var i = 0; i < (menucap1.length); i++) {
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				width : Ti.App.size(640),
				left : 0,
				height : Ti.App.size(90),
			});

			sv.arr.View_rows[i] = Titanium.UI.createView({
				width : Ti.App.size(640),
				height : Ti.App.size(90),
				left : 0,
				backgroundImage : "/assets/icon/btn_tuvan.png",
				top : 0,
				id : menucap1[i].id,
				idrow : i,
				expanded : false,
			});
			sv.arr.Label_ten_dv[i] = Ti.UI.createLabel({
				left : Ti.App.size(20),
				width : Ti.UI.SIZE,
				textAlign : "left",
				color : Ti.App.Color.superwhite,
				height : Ti.App.size(90),
				touchEnabled : false,
				font : {
					fontSize : Ti.App.size(30)
				},
				text : menucap1[i].name,
				touchEnabled : false
			});
			sv.arr.ViewBack[i] = Ti.UI.createView({
				left : 0,
				top : Ti.App.size(90),
				width : Ti.App.size(640),
				layout : "vertical",
			});
			sv.arr.View_rows[i].add(sv.arr.Label_ten_dv[i]);
			sv.arr.rows[i].add(sv.arr.View_rows[i]);
			sv.arr.rows[i].add(sv.arr.ViewBack[i]);
		}
		sv.ui.tbl1.setData(sv.arr.rows);
		// tao_sukien(sv);
		for (var i = 0; i < (menucap1.length); i++) {
			sv.arr.View_rows[i].addEventListener('click', function(e) {
				// Ti.API.info('click row thu' + e.source.idrow);
				if (e.source.expanded) {
					e.source.expanded = false;
					// sv.arr.rows[e.source.idrow].setHeight(Ti.App.size(90));
					for (var j = 0; j < (menucap1.length); j++) {
						// if (j != (e.source.idrow)) {
							sv.arr.View_rows[j].expanded = false;
							sv.arr.rows[j].setHeight(Ti.App.size(90));
						// }
					}
				} else {
					// var dem = 0;
					e.source.expanded = true;
					sv.arr.rows[e.source.idrow].setHeight(Ti.App.size(90 *4));
					sv.arr.ViewBack[e.source.idrow].setHeight(Ti.App.size(90 * 3));
					for (var j = 0; j < (menucap1.length); j++) {
						if (j != (e.source.idrow)) {
							sv.arr.View_rows[j].expanded = false;
							sv.arr.rows[j].setHeight(Ti.App.size(90));
						}
					}
					for (var k = 0; k < (menucap2.length); k++) {
						if (e.source.id == menucap2[k].parentid) {
							// dem++;
							sv.arr.ViewChuaLbl[k] = Titanium.UI.createView({
								width : Ti.App.size(640),
								height : Ti.App.size(90),
								left : 0,
								_id_menucap2 : menucap2[k].id,
								_action : menucap2[k].action ? menucap2[k].action : null,
								_params : menucap2[k].params ? menucap2[k].params : null,
								_servicenumber : menucap2[k].servicenumber ? menucap2[k].servicenumber : null,
								_price : menucap2[k].price ? menucap2[k].price : null,
								backgroundSelectedColor : Ti.App.Color.magenta
							});
							sv.arr.Label_dvcon[k] = Ti.UI.createLabel({
								left : Ti.App.size(20),
								width : Ti.App.size(620),
								textAlign : "left",
								color : Ti.App.Color.superwhite,
								height : Ti.App.size(90),
								font : {
									fontSize : Ti.App.size(30)
								},
								backgroundColor : "transparent",
								text : menucap2[k].name.toString(),
								touchEnabled : false
							});
							sv.arr.ViewChuaLbl[k].add(sv.arr.Label_dvcon[k]);
							sv.arr.ViewBack[e.source.idrow].add(sv.arr.ViewChuaLbl[k]);
							sv.arr.ViewChuaLbl[k].addEventListener('click', function(e) {
								Ti.API.info('action****' + e.source._action);
								Ti.API.info('param******' + e.source._params);
								Ti.API.info('servicenum****' + e.source._servicenumber);
								Ti.API.info('price*******' + e.source._price);
								if (e.source._action) {
									tuvan_soxo({
										"command" : e.source._action,
										"param" : e.source._params,
										"price" : e.source._price,
									});
								} else {
									var name_menucap3 = [];
									var id_menucap3 = [];
									for ( z = 0; z < (menucap3.length); z++) {
										if (menucap3[z].parentid == e.source._id_menucap2) {
											name_menucap3.push(menucap3[z].name);
											id_menucap3.push(menucap3[z].id);
										}
									}
									var opt = Ti.UI.createOptionDialog({
										buttonNames : ["Thoát"],
										options : name_menucap3,
										opaquebackground : true,
										title : "Lựa chọn các tỉnh thành",
									});
									opt.show();
									opt.addEventListener('click', function(e) {
										if (e.button) {
											opt.hide();
										} else {
											var _cmd = null;
											var _param = null;
											var _price = null;
											for (var q = 0; q < (menucap3.length); q++) {
												if (menucap3[q].name == name_menucap3[e.index]) {
													_cmd = menucap3[q].action;
													_param = menucap3[q].params;
													_price = menucap3[q].price;
												}
											}
											tuvan_soxo({
												"command" : _cmd,
												"param" : _param,
												"price" : _price ,
											});
										}
									});
								}
							});
						}
					}
				}
			});
			sv.ui.tbl1.setData(sv.arr.rows);
		};
		// sv.ui.opt_dialog.addEventListener('click', sv.fu.evt_optdialog);
	};
}

function tuvan_soxo(data) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=menuaction');
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
				var wdTuvan = new (require('/ui-bongda/WinTuVan'))();
				wdTuvan.setLink(jsonResuilt.advisor);
				wdTuvan.ui.winTuVan.open();
			} else {
				Ti.API.info('khong co link');
			}
		}

	};

};

function kt_mang() {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE || Ti.Network.networkType == Ti.Network.NETWORK_UNKNOWN) {
		var pop_upsms = new (require('/ui-user/PopUpSmsOff'))();
		pop_upsms.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});
	}
};