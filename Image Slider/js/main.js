$(document).ready(function() {
  // Set options
  var speed = 500;                // fade speed
  var autoswitch = true;          // auto slider options
  var autoswitch_speed = 4000;    // Auto sliderspeed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  // Switches to next slide
  function goToNextSlide() {
    // Current slide goes from active to oldActive
    $('.active').removeClass('active').addClass('oldActive');

    // Go back to the first slide if you click next on the last slide
    if ($('.oldActive').is(':last-child')) {
      $('.slide').first().addClass('active');
    } else {
      // Go to the next sibling and give them the active class
      $('.oldActive').next().addClass('active');
    }
    // Remove the class oldActive because it is not used for anything other than a pointer-like marker for the current slide
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // Switches to previous slide
  function goToPrevSlide() {
    // Current slide goes from active to oldActive
    $('.active').removeClass('active').addClass('oldActive');

    // Go back to the last slide if you click next on the first slide
    if ($('.oldActive').is(':first-child')) {
      $('.slide').last().addClass('active');
    } else {
      // Go to the previous sibling and give them the active class
      $('.oldActive').prev().addClass('active');
    }
    // Remove the class oldActive because it is not used for anything other than a pointer-like marker for the current slide
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }


// Next Button handler
  $('#next').on('click', goToNextSlide);

// Previous button handler
  $('#prev').on('click', goToPrevSlide);

// AUTOSWITCH
  if (autoswitch == true) {
    setInterval(goToNextSlide, autoswitch_speed) // setInterval evaluates a function/expression at specified intervals
  }
});
