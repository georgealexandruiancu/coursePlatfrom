$(document).ready(function () {

    // hide our element on page load
    $('#titleSplashHolder').css('opacity', 0);
    $('#btnSplashHolder').css('opacity', 0); 
    $('#left-featured').css('opacity', 0);
    $('#center-featured').css('opacity', 0);
    $('#right-featured').css('opacity', 0);
    $('#leftInfo').css('opacity', 0);
    $('#rightInfo').css('opacity', 0);
    $('#holder1Reg').css('opacity', 0);
    $('#holder2Reg').css('opacity', 0);




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

    $('#courseDescription').waypoint(function () {
        $('#leftInfo').addClass('fadeInLeft');
        $('#rightInfo').addClass('fadeInRight');
    }, { offset: '70%' });

    $('#animHolder1Reg').waypoint(function () {
        $('#holder1Reg').addClass('fadeInLeft');
    }, { offset: '10%' });

    $('#animHolder2Reg').waypoint(function () {
        $('#holder2Reg').addClass('fadeInLeft');
    }, { offset: '10%' });
    $('#animFadeOutReg').waypoint(function (direction) {
        if (direction === 'down') {
            $('#holder1Reg').addClass('fadeOutLeft');
            $('#holder2Reg').addClass('fadeOutLeft');
            $('#holder1Reg').removeClass('fadeInLeft');
            $('#holder2Reg').removeClass('fadeInLeft');
        }
        else if (direction === 'up'){
            
            $('#holder1Reg').addClass('fadeInLeft');
            $('#holder2Reg').addClass('fadeInLeft');
            $('#holder1Reg').removeClass('fadeOutLeft');
            $('#holder2Reg').removeClass('fadeOutLeft');
        }   
    }, { offset: '100px' });

});