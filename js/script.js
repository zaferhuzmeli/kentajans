function initMap() {
    "use strict";
    var e = new google.maps.Map(document.getElementById("map"),{
        center: {
            lat: 47.285339,
            lng: 9.644274
        },
        zoom: 15,
        styles: [{
            elementType: "geometry",
            stylers: [{
                color: "#272e32"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#272e32"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#403e3e"
            }]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#909090"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#dbfb7e"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#414242"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#909090"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#bdd96b"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#849457"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#eefbc8"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#364605"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#ababab"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#ebfdb7"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#777777"
            }]
        }, {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#6b6b6b"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#414d54"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#6b6b6b"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#272727"
            }]
        }]
    });
    new google.maps.Marker({
        position: {
            lat: 47.285339,
            lng: 9.644274
        },
        map: e,
        title: "Friseur",
        icon: "img/map/blank.png"
    })
}
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
    }),
    $(".datepicker").datepicker(),
    new Instafeed({
        get: "user",
        userId: "7439059566",
        limit: 12,
        resolution: "standard_resolution",
        accessToken: "7439059566.1677ed0.a668bf15a2fb4f72ac40b0ea975e97d4",
        sortBy: "most-recent",
        template: '<div class="col-lg-4 col-xs-4 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    }).run()
});
