var Wag = true;
console.log(Wag);

$('.SelectButton').on('click', function() {

	if (Wag == true) {
  	$('.message').text('Live in one of the greatest cities in the world!');
  	Wag = false;
  } else { 
  	$('.message').text('Eat free food at Puck');
    Wag = true;
  }
	
  console.log(Wag);
	
})