$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    $('#news-toggle').click(function() {
        var $more = $('#news-more-rows');
        var expanded = $more.hasClass('open');
        $more.toggleClass('open');
        $(this).toggleClass('open');
        $(this).html(expanded
            ? 'show more <i class="fas fa-chevron-down"></i>'
            : 'show less <i class="fas fa-chevron-up"></i>');
    });
});
