const swipe_wrapper = document.getElementsByClassName("swiper-wrapper")[0];

function Add(contentsName) {
	swipe_wrapper.insertAdjacentHTML("beforeend", '<div class="swiper-slide"><a href="#"><img src="game_scrolls/' + contentsName + '/screenshot_1.png"></a></div>');
}

Add("KARAGE");
Add("Disjointed");
Add("獄落道中");

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