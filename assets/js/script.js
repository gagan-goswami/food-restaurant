// counter //

$(document).ready(function () {
    $('.counter-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});



// menu-tabs//

var postFilter = $(".filter-init");
$.each(postFilter, function (index, value) {
    var el = $(this);
    var parentClass = $(this).parent().attr("class");
    var $selector = $("#" + el.attr("id"));
    $($selector).imagesLoaded(function () {
        var festivarMasonry = $($selector).isotope({
            itemSelector: ".filter-item",
            percentPosition: true,
            masonry: {
                columnWidth: 0,
                gutter: 0,
            },
        });
        $(".collapse").on(
            "shown.bs.collapse hidden.bs.collapse",
            function () {
                festivarMasonry.isotope("layout");
            }
        );
        $(document).on(
            "click",
            "." + parentClass + " .tab-filter button",
            function () {
                var filterValue = $(this).attr("data-filter");
                festivarMasonry.isotope({
                    filter: filterValue,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            }
        );
        $(".filter-wrapper .tab-filter a:first-child").click();
    });
});

$(document).on("click", ".tab-filter button", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});


// testimonial-section

// owl carousel //

$(document).ready(function () {

    $('.slider-2').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: false,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        dots: true,
        autoplay: true,
        slideBy: 4,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            992: {
                items: 1
            }
        }
    })
});


// gallery-section

$(".slider-3").owlCarousel({
    slideBy: 2,
    autoplay: false,
    animateOut: 'fadeOut',
    loop: true,
    margin: false,
    nav: false,
    dot: true,
    responsive: {
        0: {
            items: 1,
        },
        350: {
            items: 2,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        },
    },
});




// sticky menu bar //

function menuSticky() {
    if ($(".is-sticky-on").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('.is-sticky-on').addClass('is-sticky-menu');
            } else {
                $('.is-sticky-on').removeClass('is-sticky-menu');
            }
        });
    }
}
menuSticky()


// top button //


$(document).ready(function () {
    $('.top').hide(0)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(300);
        }
    });
    $('.top').click(function () {
        event.preventDefault();

        $('html , body').animate({ scrollTop: 0 }, 500);
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// JavaScript
function playVideo() {
    // JavaScript
    class VideoModalManager {
        constructor() {
            this.init();
        }
        init() {
            $('.video-btn').click(function () {
                const $videoSrc = $(this).data("src");
                $('.modal').data("videoSrc", $videoSrc);
            });
            $('.modal').on('shown.bs.modal', function (e) {
                const $videoSrc = $(this).data("videoSrc");
                console.log("Video Source in modal:", $videoSrc); // Debugging
                $(this).find("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
            });
            $('.modal').on('hide.bs.modal', function (e) {
                $(this).find("#video").attr('src', '');
            });
        }
    }
    // Initialize the VideoModalManager
    const videoModalManager = new VideoModalManager();
}

playVideo()
