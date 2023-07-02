var setCategoryClicks = function() {
    $(".categoryButton").unbind();
    $('.categoryButton').click(function(){
        // let offsetHeight = document.getElementById('galleryRowContainer').offsetHeight.toString() + 'px';
        var value = $(this).attr('data-filter');
        // $('#galleryRowContainer').css({'min-height':offsetHeight}); 

        // setTimeout(function(){
        //     $('#galleryRowContainer').animate({'min-height':'0'});
        // },3000)

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
    
    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){
        
        $(this).removeClass('transition');
    });

    $("a[rel=scrollGroup]").fancybox({
        'transitionIn'		: 'fade',
        'transitionOut'		: 'fade',
        'titlePosition' 	: 'inside',
        'type'              : 'image',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">' + title + '';
        }
    });
}