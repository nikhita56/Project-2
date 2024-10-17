$(document).ready(function() {

  
    $('.image-container1 img').click(function() {
        $(this).hide(); 
    });

    $('.bgimage').hover(
        function() { 
            $(this).addClass('vibrate');
        },
        function() { 
            $(this).removeClass('vibrate');
            
        }
    );


  
    $(".draggableimages img").draggable(
        {
        drag: function(event, ui) {
         
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

          
            if (ui.position.left > windowWidth - $(this).width() && 
                ui.position.top > windowHeight - $(this).height()) {
                $(this).fadeOut(); 
            }
        }
    });

});


$(document).ready(function() {
  
    $(".drag1, .drag2, .drag3").draggable(
        {
        drag: function(event, ui) {
         
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

          
            if (ui.position.left > windowWidth - $(this).width() && 
                ui.position.top > windowHeight - $(this).height()) {
                $(this).fadeOut(); 
            }
        }
    });

});
