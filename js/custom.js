(function ($) {
                
    // Navigation scrolls
    $(".navbar-nav li a").on('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    // Add smooth scrolling to all links in navbar
    $("a.mouse-hover, a.boton-fondo, a.popup-with-zoom-anim").on('click', function(event) {
      var hash = this.hash;
      if( hash ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'easeInOutExpo');
      }
    });
})(jQuery);

jQuery(function ($) {
    var roles = ['NEGOCIO', 'BLOG PERSONAL', 'EMPRENDIMIENTO', 'INSTITUCIÓN', 'EMPRESA'];
    //used to determine which is the next roles to be displayed
    var counter = 0;
    var $role = $('#role')
    //repeat the passed function at the specified interval - it is in milliseconds
    setInterval(function () {
        //display the role and increment the counter to point to next role
        $role.text(roles[counter++]);
        //if it is the last role in the array point back to the first item
        if (counter >= roles.length) {
            counter = 0;{
                
            }
        }
    }, 3500, 'easeInOutExpo')
})

/* Barra separadora inteligente */


