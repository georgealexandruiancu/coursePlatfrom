$(document).ready(function () {

    // hide our element on page load
    $('#titleSplashHolder').css('opacity', 0);
    $('#btnSplashHolder').css('opacity', 0); 
    $('#left-featured').css('opacity', 0);
    $('#center-featured').css('opacity', 0);
    $('#right-featured').css('opacity', 0);
    $('#leftInfo').css('opacity', 0);
    $('#rightInfo').css('opacity', 0);



    $('.splashHolder').waypoint(function () {
        $('#titleSplashHolder').addClass('fadeInLeft');
        $('#btnSplashHolder').addClass('fadeInUpBig');
    }, { offset: '50%' });

    
    $('#featuresPannel').waypoint(function () {
        $('#left-featured').addClass('fadeInLeft');
        $('#center-featured').addClass('fadeInUpBig');
        $('#right-featured').addClass('fadeInRight');
    }, { offset: '70%' });

    $('#courseDescription').waypoint(function () {
        $('#leftInfo').addClass('fadeInLeft');
        $('#rightInfo').addClass('fadeInRight');
    }, { offset: '70%' });

});