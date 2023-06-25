var setCategoryClicksBackup = function() {
    $(".categoryButton").unbind();
    $('.categoryButton').click(function(){
        
        var value = $(this).attr('data-filter');
       
        if (value === 'all') {
            $('.categoryFilter').show('1000');
            $(this).addClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
        } else if ($(this).hasClass('categoryButtonSelected')) {
            $('.categoryFilter').show('1000');
            $(this).removeClass('categoryButtonSelected');
            $('.allCategoryButton').addClass('categoryButtonSelected');
        }
        else {
            $('.categoryFilter').not('.' + value).hide('3000');
            $('.categoryFilter').filter('.' + value).show('3000');
            $('.allCategoryButton').removeClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
            $(this).toggleClass('categoryButtonSelected');
        }
    });

    $("a[rel=scrollGroup]").fancybox({
        'transitionIn'		: 'fade',
        'transitionOut'		: 'fade',
        'titlePosition' 	: 'over',
        'type'              : 'image',
        'titleFormat'		: function(title) {
            return '<span id="fancybox-title-over">' + title + '';
        }
    });
}