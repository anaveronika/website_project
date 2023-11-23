$(() => {


    $('#hyper-image1, #arrow-left2, #arrow-right2').on('click', () => {
        $('#galerija1').css('display', 'flex');
        $('#galerija2').css('display', 'none');
        $('.gallery-wrapper').css('display', 'flex');
        $('.article-wrapper').css('display', 'none');
    });

    $('#hyper-image2, #arrow-left1, #arrow-right1').on('click', () => {
        $('#galerija2').css('display', 'flex');
        $('.gallery-wrapper').css('display', 'flex');
        $('#galerija1').css('display', 'none');
        $('.article-wrapper').css('display', 'none');

    });

    $('#closeBtn').on('click', ()=>{
        $('.article-wrapper').css('display', 'unset');
        $('.gallery-wrapper').css('display', 'none');
    });

});