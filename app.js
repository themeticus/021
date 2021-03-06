/**
*  1ove
*/
var slides = $('section').children()
for (var s = 0; s < slides.length; s++) {
    slides[s].setAttribute('class', 'slide')
} 


/**
*  
*/
var inks = document.querySelector('div.bb-img').getElementsByTagName('img')

for (var i = 0; i < inks.length; i++) {
	var link = inks[i]
	link.setAttribute('onclick', 'changeBackgroundImage(this)')
}

function changeBackgroundImage(imgref) {
	 document.body.style.backgroundImage = "url('"+imgref.getAttribute('src')+"')"
}


/** 
* 
*/
var fontTitle = document.querySelector('div.fnt').getElementsByTagName('a')


for (var i = 0; i < fontTitle.length; i++) {
	var current_font = fontTitle[i]
	current_font.setAttribute('onclick', 'changeFontFamily(this)')
}

function changeFontFamily(fontref) {  
  $('h1, p, em, pre, i, b, strong, .content a, #menu a').css({'font-family' : fontref.innerHTML})
}


/** 
* 
*/
document.querySelector('#moveUp').addEventListener('click', function() {
    $.fn.fullpage.moveSectionUp()
})

document.querySelector('#moveDown').addEventListener('click', function() {
    $.fn.fullpage.moveSectionDown()
})


/**
*  
*/
function onFormation() {
    $('#moveUp').css({'bottom':'10%', 'right':'calc((100% - 3%) / 2)'}) 
    $('#moveDown').css({'bottom':'5%', 'right':'calc((100% - 3%) / 2)'}) 
    $('.fp-prev').css({'bottom':'7%', 'right':'calc((100% - -4%) / 2)'}) 
    $('.fp-next').css({'bottom':'7%', 'right':'calc((100% - 10%) / 2)'}) 
}

function onUniformation() {
    $('#moveUp, #moveDown, .fp-prev, .fp-next').css({'bottom':'5%', 'right':'calc((100% - 3% )/ 2)'})
}


/**
*  
*/
$('#pad, #moveUp, #moveDown, .fp-prev, .fp-next').hover( function () {
    onFormation()
}, function() {
    $('#moveUp, #moveDown, .fp-prev, .fp-next').hover(function() {
        onFormation()
    }, function() {        
        onUniformation()
    });   
   onUniformation()
}) 


/**
*  
*/

$('#cntrl-fnt > div, .quick, #cntrl-bg > div').hide()


$("#love").draggable({revert:true})
$("#biggie").droppable({
  drop: function( event, ui ) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeIn(1000); 
  }
})

$('.indi-dots ul').on('mouseenter', function (e) {
    console.log('beep')
    $('.indi-dots ul').css('opacity', '1 !important')
}).on('mouseleave', function(e) {
    $('.indi-dots ul').css('opacity', '0.2 !important')
})

$('#user-cntrl').on('mouseenter', function(e) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeIn(2000)
}).on('mouseleave', function(e) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeOut(2000)
})

document.addEventListener('mouseout', function(e) {
    e = e ? e : window.event
    var from = e.relatedTarget || e.toElement
    if (!from || from.nodeName == "HTML") {
        $('#cntrl-fnt > div, #cntrl-bg > div').fadeOut(1000)
    }
})


/**
*  
*/
document.addEventListener('DOMContentLoaded', function() {

    //drawLoop()

    function initialization(){
        $('#onepage').fullpage({
        sectionsColor: ['transparent', 'transparent', '#000000'],
        anchors: ['love', 'biggie', 'smalls'],  
        animateAnchor:true,
        scrollOverflow: true,            
        fitSection: true,
        menu: '#menu',
        navigation: true,
        navigationPosition: 'bottom',
        css3: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        continuousVertical:false,     
        afterLoad: function(anchorLink, index){
            var same = $('#menu li'),
            came = $('#'+anchorLink)

            same.css({'background' : "transparent", "opacity" : "0"})     
            came.css({'background' : "rgba(0, 0, 0, 0.2) none repeat scroll 0% 0%", "opacity" : "1"})

            $('.slide').css('background','black !important')

            $('#menu li').hover( function() {
                if(came) {
                    same.css({"transition" : "all 1s ease", "opacity" : "1"})
                }
            }, function () {
                if(!came) {
                    same.css({"transition" : "all 1s ease", "opacity" : "0"})
                } 
            }); 
            }
        })

    }

    initialization() 

    $('#woordtjies div.hori-indi ul > li a').hover( function() {
        $('.content').css('opacity' , '0.05')
        $('.quick').show()
        var preview = this.getAttribute('id')
        var bemoer = parseInt(preview) + 1
        var minipreview = $('#woordtjies .slide:nth-child('+bemoer.toString()+')')      
        var titlepreview = minipreview.find('h1').text()
        var storypreview = minipreview.find('p').text()
        $('.quick').html("<h2>" + titlepreview + "</h2><br/>" + storypreview +"")
        
    }, function() {        
        $('.content').css('opacity' , '1')
        $('.quick').hide()
    })  

	var $storytainer = $('.indi-dots ul'),   
    droll = 10000 

    $('.R').hover(function() {
        $storytainer.animate({
            'scrollLeft': droll
        },{duration: 2000, queue: false})
    }, function(){
        $storytainer.stop()
    })

    $('.L').hover(function() {
        $storytainer.animate({
            'scrollLeft': -1
        },{duration: 2000, queue: false})
      }, function(){
        $storytainer.stop();
    })	

	var $bbtainer = $('.bb-img ul'),   
    bbimgist = 10000

    $('.imgR').hover(function() {
        $bbtainer.animate({
            'scrollLeft': bbimgist
        },{duration: 10000, queue: false})
    }, function(){
        $bbtainer.stop()
    })
    
    $('.imgL').hover(function() {
        $bbtainer.animate({
            'scrollLeft': -1
        },{duration: 10000, queue: false})
      }, function(){
        $bbtainer.stop()
    })	

    var $fftainer = $('.fnt ul'),   
    ffist = 10000 

    $('.fntR').hover(function() {
        $fftainer.animate({
            'scrollLeft': ffist
        },{duration: 10000, queue: false})
    }, function(){
        $fftainer.stop()
    })
    
    $('.fntL').hover(function() {
        $fftainer.animate({
            'scrollLeft': -1
        },{duration: 10000, queue: false})
      }, function(){
        $fftainer.stop()
    })

    document.querySelector('#loading').style.display = 'none'; 

    //$("canvas").draggable()

    /**
     *
        $('.link').on('click', function(e){
            var targetpage = $($(this).attr("href"));
            targetpage.slideDown(500).siblings('div').slideUp(500)
            return false
        });
    */

    /*
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('./sw.js', {scope: './'})
            .then(function (registration) {
                console.log(registration);
            })
            .catch(function (e) {
                console.error(e);
            })
    } else {
        console.log('haaties-brudder')
    }
    */

});


/**
 *
 */

var canvas = document.createElement('canvas')
var ball, ctx, size, centerX, centerY, radius, x, y, angle, points, table

setParameters({
    nopac : 100,
    table : 0,
    size : canvas.width,
    color : "#cccccc"
})

function setParameters(params) {
    ball = document.getElementById('gameDiv')
    ctx = canvas.getContext('2d')
    ctx.strokeStyle = params.color
    points = params.nopac
    table = params.table
    centerX = params.size
    centerY = params.size
    radius = params.size
    size = params.size
}

function placeCanvas() {
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight
    ball.appendChild(canvas)
}

function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 1; i < points; i++) { 
        angle = Math.PI*2/points*i
        x = Math.cos(angle)*radius + centerX
        y = Math.sin(angle)*radius + centerY
        ctx.beginPath()
        ctx.moveTo(x, y)
        angle = angle*table
        x = Math.cos(angle)*radius + centerX
        y = Math.sin(angle)*radius + centerY 
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.fillText(Math.round(table), 0, 0)
        ctx.fillText(Math.round(points), 0, 0)
    }
}

function drawLoop() {
    placeCanvas()
    requestAnimationFrame(drawLoop)
    drawFrame()
    points += 0.01
    table += 0.001001
}