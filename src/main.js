// SLIDER
$(document).ready(function(){
	$('.katalog-slider').slick({
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 2000,
  		dots: true,
  		infinite: true,
  		speed: 700,
  		fade: true,
  		cssEase: 'linear'
	});
    $('.tov-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tov-slider-down'
    });
    $('.tov-slider-down').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.tov-slider',
        dots: false,
        centerMode: false,
        focusOnSelect: true
});

// Show hide popover
    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });
});
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        } 
});

// POLZUNOK
$(function () {
    $("#range").ionRangeSlider({
        hide_min_max: false,
        keyboard: true,
        min: 0,
        max: 900000,
        from: 0,
        to: 500000,
        type: 'double',
        step: 100,
        grid: false
    });
});

// WAVES
Waves.attach(".float-button-light", [
    "waves-button",
    "waves-float",
    "waves-light"
]);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunctionstwo() {
    document.getElementById("myDropdowntwo").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




