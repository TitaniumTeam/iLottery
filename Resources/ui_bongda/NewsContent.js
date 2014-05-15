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
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
	sv.vari.SoDoi = 20;
}

function createUI(sv) {

	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(120),
		left : 0
	});

	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/icon/header.jpg',
		width : Ti.App.WidthScreen,
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'TIN TỨC',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
	});

	sv.ui.BGHeader = Ti.UI.createView({
		backgroundImage : '/assets/images/1/BGHeader.jpeg',
		right : Ti.App.size(0),
		height : Ti.App.size(405),
		top : Ti.App.size(0),
		left : 0
	});

	sv.ui.ViewTinHot = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		right : Ti.App.size(0),
		left : Ti.App.size(0),
		height : Ti.App.size(120),
		bottom : Ti.App.size(0),
		opacity : 0.8
	});

	sv.ui.LabelTinHot = Ti.UI.createLabel({
		text : 'Juventus vừa thông báo rằng chỉ sau một lượt đấu nữa sẽ là vô địch',
		font : {
			fontSize : Ti.App.size(24),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center'
		},
		color : Ti.App.Color.white,
		left : Ti.App.size(40),
		right : Ti.App.size(40)
	});

	sv.ui.ViewDocBao = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(405),
		width : Ti.App.size(720)
	});

	sv.ui.LabelDocBao = Ti.UI.createLabel({
		top : Ti.App.size(45),
		text : 'Trong quá khứ, Messi luôn tạo ra ác mộng với các cầu thủ Atletico. Theo thống kê, chân sút người Argentina có tới 20 lần sút tung lưới Atletico. Thậm chí, số 10 của sân Nou Camp còn lập 3 cú hat-trick vào lưới đội bóng thành Madrid. Thế nhưng, dưới bàn tay của HLV Diego Simeone ở mùa giải năm nay, người anh em cùng thành phố với Real đã hoàn toàn lột xác. Tính tổng cộng, từ đầu mùa giải, Barca và Atletico gặp nhau tổng cộng 5 lần gồm 2 trận tranh Siêu cup Tây Ban Nha, 2 trận đấu bán kết Champions League và trận lượt đi La Liga. Đáng chú ý trong những màn so tài này, Messi đều không ghi bàn dù đá chính 4 trận và 1 trận vào thay người (thay Iniesta chấn thương tại lượt đi La Liga). Barca & CK La Liga: Khi Messi chỉ là kép phụ. Và để lý giải cho mờ nhạt của Messi mỗi khi đối đầu Atletico ở mùa giải năm nay, chắc chắn phải kể tới chiến lược gia Simeone. Vị thuyền trưởng của đội bóng thành Madrid rất thận trọng mỗi khi các học trò phải đối đầu Messi. Trước trận đấu, Simeone luôn đưa ra các phương án “bắt chết” số 10 bên phía Barca cho các học trò. Dù trên sân, Messi thi đấu trong vai trò tiền đạo trung tâm, chạy cánh phải, hay lùi sâu giống hộ công, thì điều đó cũng không còn đáng ngại với Atletico. Bởi ở bất cứ nơi đâu, mỗi khi Messi có bóng, chân sút người Argentina luôn được sự chăm sóc rất chặt chẽ bởi 2, 3 hoặc nhiều hơn nữa các hậu vệ Atletico. Đây cũng được coi là chìa khóa giúp đội bóng thành Madrid vượt qua Gã khổng lồ xứ Catalunya tại vòng bán kết Champions League trong khoảng thời gian vừa qua. Chính vì thế, ở màn tiếp đón Altetico trên sân nhà Nou Camp tới đây, rõ ràng HLV Martino không nên xoay chuyển các phương án tấn công xung quanh Messi. Bởi dù ông xếp số 10 ở bất kỳ nơi đâu thì các cầu thủ Atletico cũng luôn sẵn sàng đối phó. Thế nên, thay vào đó, đội chủ sân Nou Camp chỉ nên coi Messi là “kép phụ”. Thậm chí, số 10 cần phải vào vai “chim mồi” thu hút sự chú ý của hàng phòng ngự đối phương, tạo điều kiện cho các đồng đội ghi bàn. Giải pháp nào cho hàng tấn công? Thực tế, dù không đặt nhiều hy vọng vào Messi nhưng số 10 vẫn đóng vai trò hết sức quan trọng trên hành trình giúp Barca giành 3 điểm tiếp đón Atletico để bảo vệ ngôi vị vô địch La Liga. Bởi trong trường hợp HLV Martino bố trí Messi thi đấu tự do trong vai trò tiền đạo lùi, ngôi sao người Argentina sẽ khiến hàng phòng ngự đội khách phải liên tục có sự xoay chuyển. Điều này tạo cơ hội thuận lợi cho Pedro và Sanchez tung ra đòn kết liễu đối thủ. Barca & CK La Liga: Khi Messi chỉ là "kép phụ" - 2 Pedro và Sanchez sẽ nhận trách nhiệm ghi bàn Xét về khả năng dứt điểm, có thể Pedro và Sanchez không thể so sánh với số 10. Nhưng nên nhớ, ở mùa giải năm nay, thành tích ghi bàn của 2 cầu thủ này cũng rất đáng ngưỡng mộ. Tính đến trước vòng 37, Pedro và Sanchez đều phá vỡ kỷ lục ghi bàn của chính cá nhân họ ở 1 mùa giải tại La Liga (Pedro có 15 bàn, Sanchez có 18 bàn). Ngoài ra, việc không đặt áp lực ghi bàn cho Messi sẽ giúp ngôi sao người Argentina có được tâm lý thoải mái. Số 10 sẽ không phải đối mặt với áp lực khoan thủng hàng phòng ngự Atletico. Và quan trọng hơn, với Messi, Pedro và Sanchez trong đội hình, Barca sẽ không có quá nhiều thay đổi về mặt nhân sự. Sự khác biệt có chẳng chỉ là vai trò của Messi trước hàng phòng ngự bên phía Atletico.',
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
	});

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.eventClickIconLeft);

	sv.ui.Window.add(sv.ui.ViewHeader);
	sv.ui.Window.add(sv.ui.ViewTong);

	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong.add(sv.ui.BGHeader);
	sv.ui.ViewTong.add(sv.ui.ViewDocBao);

	sv.ui.BGHeader.add(sv.ui.ViewTinHot);

	sv.ui.ViewTinHot.add(sv.ui.LabelTinHot);

	sv.ui.ViewDocBao.add(sv.ui.LabelDocBao);
}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.eventClickIconLeft);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};

}
