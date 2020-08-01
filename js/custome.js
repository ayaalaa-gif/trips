$( function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker-to" ).datepicker();
	
	// price slider
	$('.tour-item').hide().first().show();
	$(".trip_info ul.listed-info li a").click(function(e) {
		$(this).closest('li').addClass("list-active").siblings().removeClass("list-active");
		// e.preventDefault();
		$($(this).attr('href')).show().siblings('.tour-item').hide();
		var currentTab = $(this).attr("href");
	})

	// listing of info trips
	
	
});
// input range slider
 function getVals(){
	// Get slider values
	var parent = this.parentNode;
	// input
	var slides = parent.getElementsByTagName("input");
	// first value from
	  var slide1 = parseFloat( slides[0].value );
	//   second value to
	  var slide2 = parseFloat( slides[1].value );
	// Neither slider will clip the other, so make sure we determine which is larger
	// if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

	// span carry values
	var displayElement = parent.getElementsByClassName("rangeValues")[0];
		displayElement.innerHTML = 'من' + ' ' + slide1 + " يوم ";
		var range_sec = parent.getElementsByClassName("range-sec-slide")[0];
		range_sec.innerHTML = ' ' + 'الي' + ' ' +  slide2 + "يوم"
  }
 function getVals2(){
	// Get slider values
	var parent = this.parentNode;
	// input
	var slides = parent.getElementsByTagName("input");
	// first value from
	  var slide1 = parseFloat( slides[0].value );
	//   second value to
	  var slide2 = parseFloat( slides[1].value );
	// Neither slider will clip the other, so make sure we determine which is larger
	// if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

	// span carry values
	var displayElement = parent.getElementsByClassName("rangeValues")[0];
		displayElement.innerHTML = 'من' + ' ' + slide1 + " جنيه ";
		var range_sec = parent.getElementsByClassName("range-sec-slide")[0];
		range_sec.innerHTML = ' ' + 'الي' + ' ' +  slide2 + "جنيه"
  }

  
  


  window.onload = function(){
	// Initialize Sliders
	var sliderSections = document.getElementsByClassName("range-slider");
		for( var x = 0; x < sliderSections.length; x++ ){
		  var sliders = sliderSections[x].getElementsByTagName("input");
		  for( var y = 0; y < sliders.length; y++ ){
			  console.log(sliders[y])
			var priceInput = sliders[y].className
			console.log(priceInput);
			if( sliders[y].type ==="range" ){
                if (priceInput == 'f-input') { //call fun 1
					sliders[y].oninput = getVals;
					sliders[y].oninput();

                } else if (priceInput == 's-input') { //call fun 2
					sliders[y].oninput = getVals2;
					sliders[y].oninput();
                }

			  // Manually trigger event first time to display values
			  
			}
		  }
		}
  }
  



