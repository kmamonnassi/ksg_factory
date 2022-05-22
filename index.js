const swipe_wrapper = document.getElementsByClassName("swiper-wrapper")[0];

function Add(contentsName) {
	let path = "game_scrolls/" + contentsName;
	swipe_wrapper.insertAdjacentHTML("beforeend", '<div class="swiper-slide"><a href="'+ path +'/index.html"><img src="' + path + '/screenshot_1.png"></a></div>');
}

Add("KARAGE");
Add("Disjointed");
Add("RoadsideInHell");

//スワイプでスクロールできるように
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	effect: 'coverflow',
});