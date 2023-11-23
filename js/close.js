$(() => {

    $('#kontakt').on('click', () => {
        $('#popForm').css('display','flex');
    });

    $('#confirmQuit').on('click', () => {
        $('#popForm').hide();
    });

});