window.addEventListener("load", function() {
    $('div').click(function() {
       $(this).animate({
           width: '+=10px',
           height: '-=6px'
       })
   });
   $('div.red').click(function() {
       $(this).fadeTo("slow", .01);
   })
   $('div.orange').click(function() {
       $(this).removeClass( "orange" ).addClass( "green" );
   })
   $('div.yellow').animate({
       width: '+=20px',
       height: '-=20px'
   });
   $('#left').click(function() {
       $('div.yellow').animate({left: "-10px"}, 'fast');
   })
});

/*Math.floor((Math.random() * 10) + 1);*/