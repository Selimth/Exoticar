//Home Image SlideShow
function slideShow(){ 
    var img=$("img")[0]
   if(img.src==="http://127.0.0.1:5500/Images/exotic-car-rental-mph-club-hq-miami-gardens-scaled.webp"){
       img.src="http://127.0.0.1:5500/Images/fb_hote_money_shot-2_contrast.jpg"

   }
   else{
    img.src="http://127.0.0.1:5500/Images/exotic-car-rental-mph-club-hq-miami-gardens-scaled.webp"
   }
   return setTimeout(slideShow,4000)
}
slideShow()

$("#bl").click(function(){
    if(($("#inpName").val())===undefined){
       alert("Enter a your name")        
    }
})