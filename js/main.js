$(document).ready(function () {

    function isMobile() {
        var target = $('.is-mobile');

        if (target.css('display') === 'block') {
            return true;
        } else {
            return false;
        }
    }

    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('.header').toggleClass('is-open');
        $('.page-nav').toggleClass('is-active');
        handleBodyScroll();

        if(!isMobile()){
            $('.page-content__wrap').toggleClass('is-translated-left');
        }
    });

    //reseting header classes on resize
    function headerReset() {
        $('.hamburger').removeClass('is-active');
        $('.header').removeClass('is-open');
        $('.page-nav').removeClass('is-active');
        $('body, html').removeClass('no-scroll');
        $('.page-content__wrap').removeClass('is-translated-left');
    }

    $('.page-nav__list-link').on('click', function (e) {
        headerReset();
    });

    function handleBodyScroll() {
        if(isMobile()){
            $('body, html').toggleClass('no-scroll');
        }
    }

    /*slick slider*/

    $('.hero-slider').slick({
        dots: true,
        arrows: true,
        fade: true
    });

    $('.concerts-slider').slick({
        dots: false,
        arrows: true,
        fade: true
    });

    //load more text directors section
    function handleText(){
        var parent =  $('.director__content-card'),
             p = parent.find('p');
        p.hide();
        p.eq(0).show();
    }

    $('.director__read-more').on('click', function (e) {
        e.preventDefault();
        $('.director__content-card').find('p').slideDown(200);
        $(this).hide();
    });

    $('.events__row').on('mouseenter', function (e) {
        $(this).find('.events__img').addClass('is-visible');
    }).on('mouseleave', function(e){
        $(this).find('.events__img').removeClass('is-visible');
    });

    $('.events__img-close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('is-visible');
    });

    //form page

    function selectChange() {
        $(".form__select-wrap").each(function () {
            $(this).find("p.form__select-placeholder").text($(this).find("select option:selected").text());
        })
    }

    $(".form__select-wrap select").on('change', function () {
        selectChange();
    });

    selectChange();

    handleText();
    $(window).resize(function () {
        if (!isMobile()) {
            headerReset();
        }

    });

});