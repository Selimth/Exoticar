
function slideShow(){ 
    var img=$("img")[0]
   if(img.src==="http://127.0.0.1:5500/Images/exotic-car-rental-mph-club-hq-miami-gardens-scaled.webp"){
       img.src="http://127.0.0.1:5500/Images/fb_hote_money_shot-2_contrast.jpg"

   }
   else{
    img.src="http://127.0.0.1:5500/Images/exotic-car-rental-mph-club-hq-miami-gardens-scaled.webp"
   }
   return setTimeout(slideShow,6000)
}
slideShow()

var Allcars={lambo:{
    "Lamborghini Hurican":"Images\Lambo\Lambo Hurican.webp",
    "Lamborghini Urus":"Images\Lambo\Lambo Urus.webp"
},
"Bently":{"Bently GTC":""

}
}