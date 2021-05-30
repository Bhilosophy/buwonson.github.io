// click시 text 변경
$('#intro').click(function () {
    $(this).html("Welcome to Website");
})

// hover시 이미지 투명도 변경
$('#profile').hover(function () {
    $(this).animate({
        opacity: 0.5
        }, 500);
    }, function() {
        $(this).animate({
        opacity: 1.0
    }, 500);
});

$('.project').hover(function() {
    $(this).animate({
        opacity: 0.5
    }, 500);
    }, function() {
    $(this).animate({
        opacity: 1.0
    }, 500);
});

// click시 WebStie 이동
$('#twitter').click(function () {
    location.href = 'http://www.twitter.com';
});

$('#instagram').click(function () {
    location.href = 'http://www.instagram.com';
});

$('#pinterest').click(function () {
    location.href = 'http://www.pinterest.com';
});

$('#facebook').click(function () {
    location.href = 'http://www.facebook.com';
});