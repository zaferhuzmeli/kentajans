$(window).on("load", function() {
    "use strict";
    $(".loading-overlay").fadeOut(1e3)
}),
$(function() {
    "use strict";
    $(window).scroll(function() {
        var e = $(".navbar");
        $(window).scrollTop() >= e.height() ? e.addClass("scrolled") : e.removeClass("scrolled")
    }),
    $(".navbar-toggle").on("click", function() {
        $(".navbar-toggle").toggleClass("change")
    }),
    $("body").scrollspy({
        target: ".navbar",
        offset: 50
    }),
    $("#menuicon a").on("click", function(e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 1e3, function() {
                window.location.hash = t
            })
        }
    }),
    $(".hero-img").backstretch(["img/background/1.jpg", "img/background/2.jpg", "img/background/3.jpg"], {
        duration: 3e3,
        fade: 750
    }),
    $('a[data-toggle="tab"]').on("shown.bs.tab", function() {
        $(".testimonials-container").backstretch("resize")
    }),
    $(".scroll-down").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#services").offset().top
        }, 1e3)
    }),
    $("html").niceScroll({
        cursorcolor: "#bdd96b",
        cursorborder: "none",
        zindex: 999
    });
    var e = $("#scroll-top");
    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ? e.show() : e.hide()
    }),
    e.on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 2e3)
    })    
});

$(document).ready(function(){
    var feed = new Instafeed({
        get: "user",
        userId: "2257867146",
        limit: 8,
        resolution: "standard_resolution",
        accessToken: "2257867146.1677ed0.94bc3eb2aa4b43129cb8768584c4872d",
        template: '<div class="col-lg-3 col-xs-12 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    });
    feed.run();
});

