$(window).on('resize', function() {
    if($(window).width() > 992) {
        $('#dropdown').addClass('justify-content-end');
        $('#dropdown').removeClass('justify-content-center');
    }else{
        $('#dropdown').addClass('justify-content-center');
        $('#dropdown').removeClass('justify-content-end');
    }
})
console.log('Hello World!');