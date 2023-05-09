//filter 
function filter(coll, predicate) {
    if(Array.isArray(coll)){
        var acc = [];
        each(coll, function(element,i) {
            if (predicate(element,i)) {
                acc.push(element);
            }
        });
        return acc 
    
    }
        else{
            var obj={}
            each(coll,function(value,key){
                if(predicate(value,key)){
                    obj[key]=value 
            }})
            return obj
        }
        
    }
//each 
function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}

//Cars maker
function Car(name,src){
    return {name,src}
    }
    var LamborghiniHurican=Car("Lamborghini Hurican","Images/lamborghini/LamboHurican.webp")
    var LamborghiniUrus=Car("Lamborghini Urus","Images/lamborghini/LamboUrus.webp")
    var BentlyGTC=Car("BentlyGTC","Images/Bently/2022-white-w-red-bentley-gtc-for-sale-mph-club-295k.webp")
    var McLaren720spider=Car("McLaren720spider","Images/McLaren/2022-cyan-mclaren-720s-spider-for-sale-mph-club-395k.webp")
    var McLaren720s=Car("McLaren720s","Images/McLaren/2020-white-mclaren-720s-for-sale-mph-club-279k.webp")
    var McLaren570s=Car("McLaren570s","Images/McLaren/2019-white-mclaren-570s-spider-for-sale-mph-club-179k-2.webp")
    var RollsRoyceCullinanB=Car("Rolls Royce CullinanB","Images/RollsRoyce/2023-black-exterior-orange-interior-rolls-royce-cullinan-black-badge-for-sale-mph-club-525k.webp")
    var RollsRoycePhantom=Car("Rolls Royce Phantom","Images/RollsRoyce/2023-white-exterior-red-interior-rolls-royce-phantom-for-sale-mph-club-595k.webp")
    var RollsRoyceDawnBlackBadge=Car("Rolls Royce Dawn BlackBadge","Images/RollsRoyce/2018-white-royce-dawn-for-sale-mph-club-355k.webp")
    
    var Allcars=[LamborghiniHurican,LamborghiniUrus,BentlyGTC,McLaren720spider, McLaren720s,McLaren570s,RollsRoyceCullinanB,RollsRoycePhantom,RollsRoyceDawnBlackBadge]
    
    $("#AllCars").click(function(){
        if(($(".cars-holder div").length)!==0){

            for(var i=0;i<$(".cars-holder div").length;i++){
                $(".cars-holder div").empty()  }
                
            }
        for(var i=0;i<Allcars.length;i++){
            $(".cars-holder").append("<div class='cars'><span class='car-title'>" +
            Allcars[i].name +
            "</span><img class=car-image src=" +
            Allcars[i].src +
            " />")
        }
    })
    $("#McLaren").click(function(){
        if(($(".cars-holder div").length)!==0){

        for(var i=0;i<$(".cars-holder div").length;i++){
            $(".cars-holder div").empty()        }
        var Lambos= filter(Allcars,function(element){
           return element.name.includes("McLaren");  
        })}
        


        
        for(var i=0;i<Lambos.length;i++){
            $(".cars-holder").append("<div class='cars'><span class='car-title'>" +
            Lambos[i].name +
            "</span><img class=car-image src=" +
            Lambos[i].src +
            " />")
        }
    
    })
    
    $("#Lambo").click(function(){
        if(($(".cars-holder div").length)!==0){

            for(var i=0;i<$(".cars-holder div").length;i++){
                $(".cars-holder div").empty()        }

        var Lambos= filter(Allcars,function(element){
           return element.name.includes("Lamborghini");  
        })}
        
        for(var i=0;i<Lambos.length;i++){
            $(".cars-holder").append("<div class='cars'><span class='car-title'>" +
            Lambos[i].name +
            "</span><img class=car-image src=" +
            Lambos[i].src +
            " />")
        }
    })
    $("#Bently").click(function(){
        if(($(".cars-holder div").length)!==0){

            for(var i=0;i<$(".cars-holder div").length;i++){
                $(".cars-holder div").empty()        }
        var Lambos= filter(Allcars,function(element){
           return element.name.includes("Bently");  
        })}
        
        for(var i=0;i<Lambos.length;i++){
            $(".cars-holder").append("<div class='cars'><span class='car-title'>" +
            Lambos[i].name +
            "</span><img class=car-image src=" +
            Lambos[i].src +
            " />")
        }
    
    })
    $("#RollsRoyce").click(function(){
        if(($(".cars-holder div").length)!==0){

            for(var i=0;i<$(".cars-holder div").length;i++){
                $(".cars-holder div").empty()        }
        var Lambos= filter(Allcars,function(element){
           return element.name.includes("Rolls Royce");  
        })}
     
        for(var i=0;i<Lambos.length;i++){
            $(".cars-holder").append("<div class='cars'><span class='car-title'>" +
            Lambos[i].name +
            "</span><img class=car-image src=" +
            Lambos[i].src +
            " />")
        }
    }
    )
    