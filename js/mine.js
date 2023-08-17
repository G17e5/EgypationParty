$(".open-Nav").click(function(){
    $("#menu").animate({width:"20%"},100);
    $("#Home-content").animate({marginLeft :'290px'},100)
    })

$(".closebtn").click(function(){
    $("#menu").animate({width:"00%"},100);
    $("#Home-content").animate({marginLeft :'0px'},100)
        
    })   
$("#sliderDown .toggle").click(function(){
    $(".inner").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})  


// counter


  function calcTime(count) {
  
        let futureDate = new Date(count);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  calcTime(count); }, 1000);
  }
  
window.onload = function() {
   
    calcTime("20 may 2023 10:40:70");
  }








// textara
let maxlength=100;
$(".form-control").keyup(function () { 
    let length=$(this).val().length
    let total=maxlength-length;
    if(total<=0){
        $('#chars').text("finshed chars")
    }
    else{
        $('#chars').text(total)
     
    }
    
});

$("#menu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var SectionOff = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:SectionOff},2000);
    
})
