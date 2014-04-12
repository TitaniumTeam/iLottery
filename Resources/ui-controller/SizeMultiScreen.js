/**
 * @thanhhv
 * Dựa vào thông số (width, height) tiêu chuẩn được truyền vào và kích cỡ màn hình thiết bị
 * @param:
 * 	@style: kiểu 
 * 		1. Đưa ra width, height của ứng dụng, từ đó tính toán được tất cả kích cỡ view theo tỉ lệ
 * 		2. Fill theo chiều rộng
 * 		3. Fill theo chiếu dài
 */

module.exports = function(style) {
	// Object lưu trữ dữ liệu
	var pData = {};

	// kích cỡ chuẩn theo chuẩn thiết kế
	var widthRequire = 720, heightRequire = 1280;

	// màn hình thiết bị
	var widthScreen = Ti.Platform.displayCaps.platformWidth, heightScreen = Ti.Platform.displayCaps.platformHeight;
	// demo nhiều kiểu kích cỡ màn hình
	// if (indexScreen < arrSizeScreenAndroid.length){
	// widthScreen = arrSizeScreenAndroid[parseInt(indexScreen)].wid / 2;
	// heightScreen = arrSizeScreenAndroid[parseInt(indexScreen)].hei / 2;
	// }
	//
	// tỉ lệ zoom
    var scaleScreen = 1;

	// màn hình app
	var widthApp = 0;
	var heighApp = 0;

	pData.size = function(pSize) {
		return (scaleScreen * pSize);
	};

	switch (style) {
		case 1:
			scaleScreen = Math.min(widthScreen / widthRequire, heightScreen / heightRequire);
			break;
		case 2:
			// fill width
			scaleScreen = widthScreen / widthRequire;
			break;
		case 3:
			// fill height
			break;
		default:
			alert('ui-controller/SizeMultiScreen.js - Kiểu ' + style + ' không tồn tại');
			break;
	}

	//
	widthApp = pData.size(widthRequire);
	heighApp = pData.size(heightRequire);
	//
	pData.widthApp = widthApp;
	pData.heightApp = heighApp;

	return pData;
};

// các kích cỡ màn hình tham khảo.
// iPhone Retina 3.5 inch, 
// iPhone Retina 4 inch
// iPad, 
var arrSizeScreenIOS = [{wid: 320, hei: 480}, {wid: 320, hei: 568}, {wid: 768, height: 1024}];
var arrSizeScreenAndroid = [{
	wid : 240,
	hei : 320
},{
	wid : 480,
	hei : 640
},
{
	wid : 240,
	hei : 400
},
{
	wid : 240,
	hei : 432
},
{
	wid : 320,
	hei : 480
},
{
	wid : 480,
	hei : 800
},
{
	wid : 480,
	hei : 854
},
{
	wid : 600,
	hei : 1024
},
{
	wid : 640,
	hei : 960
},
{
	wid : 768,
	hei : 1024
},
{
	wid : 768,
	hei : 1280
},
{
	wid : 1152,
	hei : 1536
},
{
	wid : 1152,
	hei : 1920
},
{
	wid : 1200,
	hei : 1920
},
{
	wid : 1536,
	hei : 2048
},
{
	wid : 1536,
	hei : 2560
},
{
	wid : 1600,
	hei : 2560
},];

