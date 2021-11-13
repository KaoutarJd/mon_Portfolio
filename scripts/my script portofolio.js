$(document).ready(function(){
  $(window).scrollTop(0);
  /*start header*/
    $(".separator").animate({width:"100%"},1000,function(){
      $(".title").animate({opacity:1},1000);
    });
  /*end header*/

   $(window).scroll(function(){
    if($(window).scrollTop()>=$("header").offset().top+50){
      $(".title-apropos").animate({
        marginTop:20
      },1000,function(){
        if($(window).scrollTop()>=$("header").offset().top+100){
          $(".text-apropos").animate({opacity:1},500);
          $(".underline-apropos").animate({width:100,},500);
        }
      });
    }

    /*start image profile*/
    if($(window).scrollTop()>=$("header").offset().top+400){
      $(".parent-to-face").addClass("rotation");
      $(".parent-to-face").animate({marginBottom:20, marginTop:20, opacity:1},1000);
    }
    /*end image profile*/

   });

   $(window).scroll(function(){
    if($(window).scrollTop()>=$(".title-apropos").offset().top){
      $(".text-presentation").fadeIn(1000);
    }

    if($(window).scrollTop()>=$(".container-to-face").offset().top+400){
      $(".section-experience").slideDown(1000);

      if($(window).scrollTop()>=$(".title-professionel").offset().top){
        $(".title-competences").show().animate({marginTop:30},500,function(){
          $(".underline-competences").animate({width:100},300);
          $(".technologie-evaluation").fadeIn(400,function(){
            $(".html-percent").css({width:"90%"},500);
            $(".css-percent").css({width:"80%"},500);
            $(".js-percent").css({width:"60%"},500);
            $(".php-percent").css({width:"70%"},500);
            $(".c-percent").css({width:"80%"},500);
            $(".net-percent").css({width:"80%"},500);
          });

          if($(window).scrollTop()>=$(".html-percent").offset().top){
            $(".background-footer").animate({opacity:1});
          }
        });
      }
    }

   
   });

  });