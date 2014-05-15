module.exports=function(){
	var viewchua=Ti.UI.createView({
		width:Ti.App.size(720),
		height:Ti.App.size(1000),
		top:0,
		backgroundColor:'transparent'
	});
	for(var i=0;i<7;i++){
		
	}
	
	
	return viewchua;
};
function setwidth(i){
	if(i==0||i==1||i==2||i==4||i==6||i==7){
		return Ti.App.size(120);
	}
	else{
		return Ti.App.size(180);
	}
};
function setten(i){
	data=['Đặc biệt','Nhất','Nhì','Ba','Tư','Năm','Sáu','Bảy'];
	return data[i];
};
function setborder(i){
	// if(i==0||i==2||i==)
}
