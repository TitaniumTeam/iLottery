module.exports=function(){
	var win=Ti.UI.createWindow({
		backgroundColor:'transparent',
		fullscreen:true
	});
	var viewchua=Ti.UI.createView({
		width:Ti.App.size(720),
		height:Ti.App.size(1000),
		top:0,
		backgroundColor:'white'
	});
	win.add(viewchua);
	
	//(_top, _left, _width, _height, _visible, _border, _bg, _border2)
	var data=[];
	var datalabel=[];
	for(var i=0;i<8;i++){
		var row=Ti.UI.createTableViewRow({
			width:Ti.App.size(700),
			height:setheight(i),
			color:'blue',
			title:setten(i)
		});
		var rowcon=get_row(i);
		row.add(rowcon);
		datalabel.push(rowcon);
		data.push(row);
	}
for(var i=0;i<7;i++){
	datalabel[i].setKq('1111111');
}
	var tableview=Ti.UI.createTableView({
		data:data,
		width:Ti.App.size(700),
		height:Ti.UI.SIZE,
		top:0,
		backgroundColor:'transparent',
		left:0,
		right:Ti.App.size(10),
		separatorColor:'red'
	});
	viewchua.add(tableview);
	// return viewchua;
	return win;
};
function setheight(i){
	if(i==0||i==1||i==2||i==4||i==6||i==7){
		return Ti.App.size(120);
	}
	else{
		return Ti.App.size(200);
	}
};
function setten(i){
	data=['Đặc biệt','Nhất','Nhì','Ba','Tư','Năm','Sáu','Bảy'];
	return data[i];
};
function get_row(i){
	var rowchild=require('/ui_soxo/RowChild');
	var lblketqua;
	if(i==0){
	lblketqua=new rowchild(Ti.App.size(42),Ti.App.size(200),Ti.App.size(480),Ti.App.size(62),false,false,true,Ti.App.Color.red,false);
	}
	else{
		if(i==1){
			lblketqua=new rowchild(Ti.App.size(42),Ti.App.size(200),Ti.App.size(480),Ti.App.size(62),false,false,true,Ti.App.Color.gray,false);
		}
		else{
			lblketqua=new rowchild(Ti.App.size(42),Ti.App.size(200),Ti.App.size(480),Ti.App.size(62),true,true,false,null,false);
		}
	}
	return lblketqua;
}
