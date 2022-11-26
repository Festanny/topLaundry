// preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
    document.body.style.overflow = 'auto';

    // animation block
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('el-show');
            }
        });
    }
    let options = {
        threshold: [0.3]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.el');

    for (let elm of elements) {
        observer.observe(elm);
    }
    
    let placeholderBlock = document.querySelectorAll('.portfolio .info-block .block .img');
    
    placeholderBlock.forEach(el => {
       el.style.display = 'block';
    });
};

lottie.loadAnimation({
    container: document.getElementById('divided-heart'),
    renderer : 'svg',
    loop     : true,
    autoplay : true,
    path     : 'assets/json/preloader.json'
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