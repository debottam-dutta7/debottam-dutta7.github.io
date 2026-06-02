$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    // Lock date column width so it doesn't shift when extra rows are revealed
    var $newsTable = $('.news table');
    if ($newsTable.length) {
        var dateColWidth = $newsTable.find('th').first().width();
        $newsTable.find('th').css('min-width', dateColWidth + 'px');
    }

    $('#news-toggle').click(function() {
        var expanded = $(this).hasClass('open');
        if (expanded) {
            $('.news-extra-row').css('display', 'none');
        } else {
            $('.news-extra-row').css('display', 'table-row');
        }
        $(this).toggleClass('open');
        $(this).html(expanded
            ? 'show more <i class="fas fa-chevron-down"></i>'
            : 'show less <i class="fas fa-chevron-up"></i>');
    });
});
