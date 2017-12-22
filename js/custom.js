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

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

/* Barra separadora inteligente */

function botonCerrar(){
    document.getElementById("cajaSuscripcion").style.left = "-2000px";
//    document.getElementsById("sombra-caja-suscripcion").style.display = "none";
};

function botonContactar(){
    document.getElementById("cajaSuscripcion").style.left = "0";
//    document.getElementsById("sombra-caja-suscripcion").style.display = "block";
};