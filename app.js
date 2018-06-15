// $(document).ready(function() {
//     initialAnimation();
// });

// function initialAnimation() {
//     let imgArr = [
//         './images/stanford-01.jpg',
//         './images/stanford-02.jpg',
//         './images/stanford-03.jpg',
//         './images/stanford-04.jpg',
//         './images/stanford-05.png',
//         './images/stanford-06.jpeg',
//         'https://www-media.stanford.edu/wp-content/uploads/2018/05/01105844/admit-weekend-splash-land.jpg'
//     ];

//     imgArr.forEach(function(url, index) {
//         setTimeout(function() {
//             $('#p-img image').attr('href', url);
//         }, 200 * index);
//     });

//     // change background
//     setTimeout(function() {
//         $('.animation-container .overlay').addClass('opacity-min');
//         $('.img-layer').css({ fill: "#fff" });
//         $('.typewriter h1').addClass('dark-orange');
//     }, 1500);

// }

// $('.nav-link').click(function() {
//     $('main').removeClass("affix");
// });

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 1000) {
//         $('main').removeClass("affix");
//         $('#main-spacer').addClass('no-display');
//     } else {
//         $('main').addClass("affix");
//         $('#main-spacer').removeClass('no-display');
//     }
// });

$(document).ready(function() {
    $('#panel-1').addClass('opacity');
    setTimeout(() => {
        $('#panel-2').addClass('opacity');
    }, 0300);
    setTimeout(() => {
        $('#panel-3').addClass('opacity');
    }, 600);
    setTimeout(() => {
        $('#panel-4').addClass('opacity');
    }, 900);
    setTimeout(() => {
        $('#panel-5').addClass('opacity');
    }, 0300);
    setTimeout(() => {
        $('#panel-6').addClass('opacity');
    }, 600);
    setTimeout(() => {
        $('#panel-7').addClass('opacity');
    }, 900);
});

$('.slide-panel').click(function() {
    const el = $(this);

    el.addClass('full-width');
    el.siblings().addClass('no-width');
    $('.pre-expand').addClass('no-display');
    $('.affix-nav').addClass('opacity');

    setTimeout(function() {
        el.children('.post-expand').removeClass('no-display');
        el.children('.post-expand').addClass('opacity');
    }, 400);
    
    // let selected = el.attr('value');
    // $(`#${selected}`).removeClass('no-display');
    $('main').removeClass('no-display');
});

$('.affix-nav').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $(this).removeClass('opacity');
    
    setTimeout(function() {
        $('main').addClass('no-display');
        $('.full-width').siblings().removeClass('no-width');
        $('.full-width').removeClass('full-width');
        $('.pre-expand').removeClass('no-display');
        $('.post-expand').removeClass('opacity');
        $('.post-expand').addClass('no-display');
    }, 500);

    // if (document.body.scrollTop === 0) {
    // }

});