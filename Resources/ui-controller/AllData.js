/**
 * Nơi lưu trữ các biến toàn cục, được sử dụng trong toàn bộ app
 */

function AllData() {
	// color
	Ti.App.Color = new (require('/ui-controller/Color'))();
	//Ti.App.customToast = new (require('/ui-controller/customToast'))();
	// Ti.App.showSmsDialog=new (require('/ui-controller/showSmsDialog'))();
	var vIndicatorWindow = require('ui-controller/vIndicatorWindow');
	Ti.App.g_IndicatorWindow = new vIndicatorWindow();
	// size
	var SizeMultiScreen = new (require('/ui-controller/SizeMultiScreen'))(2);
	Ti.App.widthScreen = SizeMultiScreen.widthApp;
	Ti.App.heightScreen = SizeMultiScreen.heightApp;
	Ti.App.size = SizeMultiScreen.size;
}

module.exports = AllData;
