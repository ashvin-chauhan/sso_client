// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require owl.carousel
//= require tether.min
//= require bootstrap.min
//= require jquery.meanmenu
//= require jquery.selectric
//= require easyResponsiveTabs
//= require jquery-scrolltofixed
//= require cascadingDivs.min
//= require jquery.matchHeight
//= require jquery-equal-height
//= require jquery.mCustomScrollbar.concat.min
//= require accordion-main
//= require menu


$(document).ready(function(){
        ////////////////////
        /*$('#desktopnemu').meanmenu({
            meanScreenWidth     : "800",
            meanMenuContainer   : '#hand-over'
        });*/
        var pushLeft = new Menu({
            wrapper: '#o-wrapper',
            type: 'push-left',
            menuOpenerClass: '.c-button',
            maskId: '#c-mask'
        });

        var pushLeftBtn = document.querySelector('#c-button--push-left');

        pushLeftBtn.addEventListener('click', function(e) {
            e.preventDefault;
            pushLeft.open();
        });
        ////
        $('#cookie-notice .button.bootstrap').click(function(event) {
            event.preventDefault()
            $('#cookie-notice').fadeOut('fast');
        })
        ///
        $('.play-bt').click(function(event) {
            event.preventDefault()
            var getid = $(this).attr('data-url');
            //alert(getid);
            $('#video_modal iframe').attr("src", getid + "?autoplay=1");
            $('#video_modal').modal('show');
        })
        $('#video_modal').on('hidden.bs.modal', function() {
            $('#video_modal iframe').attr("src", "");
        });
        //same-height
        $('.same-height').jQueryEqualHeight('.full-box .loop-box .blue-button');
        $('.same-height').jQueryEqualHeight('.full-box .loop-box .title');
        $('.same-height').jQueryEqualHeight('.full-box .loop-box .body-text');
        $('.same-height').jQueryEqualHeight('.full-box');
        ///video-row
        $("#sp-scroll").mCustomScrollbar({
            setHeight: 560,
            theme: "dark"
        });
        //$('.jQueryEqualHeight3').jQueryEqualHeight('.full-box .card-body .card-title');
        //$('.jQueryEqualHeight3').jQueryEqualHeight('.full-box .card-body .card-text');
        //$('.jQueryEqualHeight3').jQueryEqualHeight('.card');
        /*$('#developers-users ul li').matchHeight({
        target: $(this).find('.link-box')
    });*/
        //$(".sp-content").mCustomScrollbar();
        /*$(".video-row").mCustomScrollbar({
            setHeight:280,
            theme:"inset-2-dark"
        });*/
        //
        $('#developerTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                /*var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();*/
            }
        });
        //
        function makeSameHeight(getele) {
            var spDivH = 0;
            $(getele).each(function(index) {
                console.log(index + ": " + $(this).text());
                var th = $(this).height();
                if (th > spDivH) {
                    spDivH = th;
                }
            });

            return spDivH;
        }
        var getHH = makeSameHeight('#developers-users ul li');
        $('#developers-users ul li .link-box').css({ 'min-height': getHH });
        ///////

        ///////
        //side-nav
        var getSNH = $('.page-wapper').height();
        //alert(getSNH);
        if ($(window).width() > 768) {
            $('.side-nav').css({ 'min-height': getSNH - 20 });
        }
        //
        $('select').selectric();
        //
        $('#paragraphs').cascadingDivs();
        var sph = 0;
        $('.nav-content-holder > div').each(function(index) {
            console.log(index + ": " + $(this).text());
            var th = $(this).outerHeight();
            if (th > sph) {
                sph = th;
            }
        });
        $('.nav-content-holder > div').css({ 'position': 'absolute' });
        $('.nav-content-holder').css({ 'min-height': sph });
        $('#paragraphs > div').click(function() {
            var getid = $(this).attr('data-id');
            //alert(getid);
            $('.nav-content-holder > div').fadeOut('fast', function() {
                $('.nav-content-holder > div#' + getid).fadeIn('fast');
                //alert(getid);
                var getHH_two = makeSameHeight('#' + getid + ' ul li');
                //alert(getHH_two);
                //$('.nav-content-holder > div#'+getid).find('.link-box').css({'min-height':getHH_two});
            });
        })
        /////
    });
    $(window).load(function() {
        var getdocH = $(document).height();
        var getwinH = $(window).height();
        var getwinW = $(window).width();
        //alert(getdocH+', '+getwinH);
        var getHeaderH = $('header').outerHeight();
        var getLinkH = $('.link-block').outerHeight();
        var getPaddingH = (getdocH - getLinkH);
        var maxh = getwinH - getHeaderH;
        getPaddingH = (getPaddingH - getHeaderH) / 2;
        //if(getwinW > 768){
        //$('.right-panel').css({'padding-top':getHeaderH+20, 'min-height':getdocH});
        //$('.links-massage').css({'padding-top':getPaddingH});
        $('.links-massage').css({ 'padding-top': '30px' });
        $('.right-panel .link-block').css({ 'max-height': maxh - 150 });
        $('.right-panel .link-block').mCustomScrollbar();
        //}
        ///
        /*$("#content-3").mCustomScrollbar({
            scrollButtons:{enable:true},
            theme:"light-thick",
            scrollbarPosition:"outside",
            setHeight:200
        });*/
        ///
    });