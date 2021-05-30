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

// 라우터?
$('#click_banner').click(function () {
    $('#banner').css('display', 'flex');
    $('#projects').css('display', 'none');
    $('#gallery').css('display', 'none');
    $('#contact').css('display', 'none');
})

$('#click_projects').click(function () {
    $('#banner').css('display', 'none');
    $('#projects').css('display', 'block');
    $('#gallery').css('display', 'none');
    $('#contact').css('display', 'none');
})

$('#click_gallery').click(function () {
    $('#banner').css('display', 'none');
    $('#projects').css('display', 'none');
    $('#gallery').css('display', 'block');
    $('#contact').css('display', 'none');
})

$('#click_contact').click(function () {
    $('#banner').css('display', 'none');
    $('#projects').css('display', 'none');
    $('#gallery').css('display', 'none');
    $('#contact').css('display', 'block');
})