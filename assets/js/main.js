// preloader
window.onload = function () {
    window.setTimeout(function() {
        // document.body.classList.add('loaded');
        $('.preloader').fadeOut()
    }, 2100)
};

lottie.loadAnimation({
    container: document.getElementById('divided-heart'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/json/preloader.json'
});
lottie.loadAnimation({
    container: document.getElementById('logoAnimate'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/data.json'
});

// href
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = $('header nav').height();
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
});

$('.clearing .bgLine').height($('body').height() - $('header').height() - 100)