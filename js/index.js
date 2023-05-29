// ====================loadingScreen&colorBox=====================================

$(document).ready(function(){
  $('#loading').fadeOut(600)
  let WBox = $('.boxColor').innerWidth()
  console.log(WBox);
  $('#sideBar').animate({left : `-${WBox}px`},700)
  $('#sideBar i').on('click',function(){
    if($('#sideBar').css('left')== "0px"){
      $('#sideBar').animate({left:`-${WBox}px`},800)
    }else{
      $('#sideBar').animate({left:`0px`},800) 
    }
  })
})

// ==============================owl Carsouel===================================
$(".sajid-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  navSpeed: 700,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa-solid fa-circle-arrow-left text-white  fs-1 "></i>',
    '<i class="fa-solid fa-circle-arrow-right text-white  fs-1"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$(".sajid-1").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  dots:false,
  navSpeed: 800,
  autoplayHoverPause: true,
  navText: [
    '<i class="prev fa-solid fa-circle-arrow-left  fs-1 "></i>',
    '<i class="next fa-solid fa-circle-arrow-right  fs-1"></i>',
  ],
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  
  },
});



// =================================btnUp======================================
let scrollAbout = $("#About").offset().top;
console.log(scrollAbout);
$(window).on("scroll", function () {
  let wScroll = $(window).scrollTop();
  if (wScroll > 300) {
    $("#btnUp").show(100);
  } else {
    $("#btnUp").hide(100);
  }
});

$('#btnUp').on('click',function(){
  $('html,body').animate({scrollTop: "0px"},1000)
})


// =========================headerNav===================================
// let scrollHome = $("#Home").offset().top;
// console.log(scrollHome);
// $(window).on('scroll',function(){
//   let wScroll = $(window).scrollTop();
//   console.log(wScroll);
// if(wScroll > scrollHome ){
//   $("#headerNav").hide(100);
// }else{
 
//   $("#headerNav").show(100);


// }
// })

// ================================Routing==========================================
$('#contactLink').on('click',function(){
  location.href = "contact.html"
})

$('#homeLink').on('click',function(){
  location.href = "index.html"
})
$('#blog').on('click',function(){
  location.href = "blog.html"
})
$('#blogDetails').on('click',function(){
  location.href = "blogDetails.html"
})
$('#Search').on('click',function(){
  location.href = "search.html"
})


// ===============================ChangeColor==========================================

let colorItems = $('.colorItem');
let colors = ['#5f9ea0','#13c5dd','#483d8b','#008080']
for (let i = 0; i < colorItems.length; i++) {
  $(colorItems).eq(i).css('backgroundColor',colors[i])

}
$('.colorItem').on('click',function(e){
  console.log(e.target);

  let oldColor = $(e.target).css('backgroundColor')
 
   
$('.bg-main').css('backgroundColor',oldColor)
$('i,h6,h5').css('color',oldColor)

$(".btn").hover(function(){
  console.log(this);
  let HColor = $(this).css('backgroundColor')
  console.log(HColor);


  $(this).css("backgroundColor", oldColor);
  }, function(){
  $(this).css("backgroundColor", HColor);
});
})

