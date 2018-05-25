$(document).ready(function() {
    initialAnimation();
});

function initialAnimation() {
    let imgArr = [
        './images/stanford-01.jpg',
        './images/stanford-02.jpg',
        './images/stanford-03.jpg',
        './images/stanford-04.jpg',
        './images/stanford-05.png',
        './images/stanford-06.jpeg',
        'https://www-media.stanford.edu/wp-content/uploads/2018/05/01105844/admit-weekend-splash-land.jpg'
    ];

    imgArr.forEach(function(url, index) {
        setTimeout(function() {
            $('#p-img image').attr('href', url);
        }, 300 * index);
    });

    // change background
    setTimeout(function() {
        $('.animation-container .overlay').addClass('opacity-min');
        $('.img-layer').css({ fill: "#fff" });
        $('.typewriter h1').addClass('dark-orange');
    }, 3500);


    // fade-in navigation
    setTimeout(function() {
        $('#pop-up-navigation-container nav ul li').each(function() {
            $(this).find('a').addClass('opacity-max');
        });
    }, 4000);
}
