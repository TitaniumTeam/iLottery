/**
 * Nơi lưu trữ các biến toàn cục, được sử dụng trong toàn bộ app
 */

function AllData() {
	// color
	Ti.App.Color = new (require('/ui-controller/Color'))();
	Ti.App.loading = new (require('/ui-controller/loading'))();
	// size
	var SizeMultiScreen = new (require('ui-controller/SizeMultiScreen'))(2);
	Ti.App.widthScreen = SizeMultiScreen.widthApp;
	Ti.App.heightScreen = SizeMultiScreen.heightApp;
	Ti.App.size = SizeMultiScreen.size;
}

module.exports = AllData;
