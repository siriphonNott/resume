(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Custom By NottDev 05/06/19
  $('.item-profile img').on('mouseover', function(){
    $(this).next('.view-message').css('display', 'none');
  });
  $('.item-profile img').on('mouseout', function(){
    $(this).next('.view-message').css('display', 'block');
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("zoomImg");
  var captionText = document.getElementsByClassName("zoomImgCaption")[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  $('.item-profile img ,.view-message').on('click', function(){
    var  src_, alt_ = '' ;
    if( $(this).prev().hasClass('nolink') ) {
      src_ = $(this).prev().attr('src');
      alt_ = $(this).prev().attr('alt');
    } else if($(this).hasClass('nolink')){
      src_ = this.src;
      alt_ = this.alt;
    }
    if(src_ && alt_) {
      modal.style.display = "block";
      modalImg.src = src_
      captionText.innerHTML = alt_;
    }
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

})(jQuery); // End of use strict
