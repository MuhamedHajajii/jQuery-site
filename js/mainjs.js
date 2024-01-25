$('#asideBtn').on('click',function(){
  $('#asideBar').animate({width:"250px"},500)
  $('.heroSection-content').animate({marginLeft:250})
  $('#asideBtn').animate({marginLeft:"250px"},500)
})
$('.closebtn').on('click',function(){
  $('#asideBtn').animate({marginLeft:"0"},500)
  $('#asideBar').animate({width:"0"},500)
  $('.heroSection-content').animate({marginLeft:0})
})

let Herosection = $('#heroSection').offset().top

$('aside ul a[href^="#"]').on("click",function(e){
  let targetSection = $(e.target).attr('href')
  let currentSection = $(targetSection).offset().top
  $('body,html').animate({scrollTop:currentSection},700)
})

$('.headerSinger').on('click',function(e){
  $(e.target).siblings('.singerParg').slideUp()

  // $(e.target).next().slideDown()
  if ($(e.target).next().css('display') == 'block'){
    $(e.target).next().slideUp()
  } else {
    $(e.target).next().slideDown()

  }

})

// date is 10-2-2024

let dateCount = new Date('2024-8-21 23:59:59').getTime()
let counter = setInterval(()=> {
  let currentDate = new Date().getTime()
let remindmm = dateCount - currentDate
let remindDays = Math.floor(remindmm / (1000 * 60 * 60 * 24)) 
let remindHours = Math.floor((remindmm % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let remindMinutes = Math.floor((remindmm % (1000 * 60 * 60)) / (1000 * 60))
let remindSeconds = Math.floor((remindmm % (1000 * 60)) / 1000)
$('#days').html(`${remindDays} D`)
$('#hours').html(`${remindHours} h`)
$('#minutes').html(`${remindMinutes} m`)
$('#seconds').html(`${remindSeconds < 10 ? "0"+remindSeconds : remindSeconds} s`)

})

let counterTextArea = 100;

$('#textareaa').on('input',function(){

  $('#textCounter').html(100 - $('#textareaa').val().length )
  console.log($('#textareaa').val().length);
  if ($('#textareaa').val().length >= 100 ) {
    $('#textAreaWarning').css('display','inline')
  } else {
    $('#textAreaWarning').css('display','none')

  }
})
