$(document).on('click', '.toggle-menu', function(){
    $(this).toggleClass('on');
    $('.show').slideToggle();
});