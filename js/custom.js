$(function(){

  

  $('.group-bt-item').slick();

  $('.item').slick({
    infinite: true,
    arrows:true,
    dots:false,
    slidesToShow: 10,
    slidesToScroll: 2,
    prevArrow:'<i class="fa fa-angle-double-left left-a" aria-hidden="true"></i> ',
    nextArrow:'<i class="fa fa-angle-double-right right-a" aria-hidden="true"></i>',

    responsive: [
            {
               breakpoint: 1024,
              settings: {
                 slidesToShow: 4,
                slidesToScroll: 1,
                 //infinite: true,
                 //dots: true
               }
             },
            {
               breakpoint: 776,
               settings: {
                slidesToShow: 4,
                 slidesToScroll: 1
              }
            },
             {
               breakpoint: 576,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
               }
            }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
           ]
  });

//   $('.re-it').slick({
//     arrows:false,
//     dots:true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 776,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]

//   });

  
   
  
  

//     //brand item

//     $('.item').slick({
//       slidesToShow: 5,
//       slidesToScroll: 5,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       arrows:false,
//       dots:false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 776,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 576,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]
     
//    });


//    $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });


//   $('.card-slider').slick({
//     slidesToShow: 1.1,
//     slidesToScroll: 1,
//     //autoplay: true,
//     autoplaySpeed: 2000,
//     //verticalScroll:true,
//     //verticalSwiping:true,
//     vertical: true,
//     //centerMode:true,
//     arrows:true,
//     dots:false,
//     prevArrow:' <i class="fa fa-arrow-left pre-1" aria-hidden="true"></i>',
//     nextArrow:'<i class="fa fa-arrow-right pre-2" aria-hidden="true"></i>',
   
//   });
  

//     $('.monir').slick({
//          //autoplay: true,
//          slidesToShow: 3,
//          slidesToScroll: 3,
//          autoplaySpeed: 4000,
//          centerMode:true,
//          arrows:false,
//          dots:true,
//          responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 776,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           },
//           {
//             breakpoint: 576,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//           // You can unslick at a given breakpoint now by adding:
//           // settings: "unslick"
//           // instead of a settings object
//         ]
        
        
//       });

 

   

$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
  




     
    
 
 

   

 });

