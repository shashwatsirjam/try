var index = 0;

show_slide = (i) => {
  //increment/decrement slide index
  index += i;

  //grab all the images
  var images = document.getElementsByClassName("imag");
  //grab all the dots
  var dots = document.getElementsByClassName("dot");

  // hide all the images
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1) 
    index = 0 ;
  
  // if index is less than zero (set it to the length of images)
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";
  // only make the current dot active
  dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));



var index1 = 0;

show_slide1 = (i) => {
  //increment/decrement slide index
  index1 += i;

  //grab all the images
  var images1 = document.getElementsByClassName("imag1");
  //grab all the dots
  var dots1 = document.getElementsByClassName("dot1");

  // hide all the images
  for (i = 0; i < images1.length; i++) 
    images1[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots1.length; i++) 
    dots1[i].className = dots1[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  if (index1 > images1.length - 1) 
    index1 = 0 ;
  
  // if index is less than zero (set it to the length of images)
  if (index1 < 0)
    index1 = images1.length - 1;

  // only display the image that's next or previous
  images1[index1].style.display = "block";
  // only make the current dot active
  dots1[index1].className += " active";

}

window.addEventListener("onload", show_slide1(index));