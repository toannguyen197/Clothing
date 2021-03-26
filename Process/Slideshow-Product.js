var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  var cards=document.getElementsByClassName("card");
  if (n > 3) {slideIndex = 1}     
  if (n < 1) {slideIndex = 3}  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  for(i=0;i<cards.length;i++){
    cards[i].style.display="none";  
  }
  if(n===1){
    for(count=0;count<12;count++){
        cards[count].style.display="block";
    }
  }

  if(n===2){
    for(count=12;count<24;count++){
        cards[count].style.display="block";
    }
  }
  
  if(n===3){
    for(count=24;count<36;count++){
        cards[count].style.display="block";
    }
  }
  if(n>3){
    for(count=0;count<12;count++){
        cards[count].style.display="block";
    }
  }
  if(n<1){
    for(count=24;count<36;count++){
        cards[count].style.display="block";
    }
  }
  dots[slideIndex-1].className += " active";
}