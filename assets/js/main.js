// preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
    document.body.style.overflow = 'auto';
};

// preloaderMain
if ($('.preloaderMain').length != 0) {
    window.onload = function () {
        window.setTimeout(function() {
            $('.preloaderMain').fadeOut()
        }, 2100)
    };
}

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
lottie.loadAnimation({
    container: document.getElementById('logoAnimateFooter'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/data.json'
});
lottie.loadAnimation({
    container: document.getElementById('logoClearing'),
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