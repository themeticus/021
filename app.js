/**
*  Update background noise 
*/
var inks = document.querySelector('div.bb-img').getElementsByTagName('img');

for (var i = 0; i < inks.length; i++) {
	var link = inks[i];
	link.setAttribute('onclick', 'changeBackgroundImage(this)')
}

/*  */
function changeBackgroundImage(imgref) {
	 document.body.style.backgroundImage = "url('"+imgref.getAttribute('src')+"')";
}


/** 
* Update font familia 
*/
var current_fonts = document.querySelector('div.fnt').getElementsByTagName('a');

for (var i = 0; i < current_fonts.length; i++) {
	var current_font = current_fonts[i];
	current_font.setAttribute('onclick', 'changeFontFamily(this)')
}

function changeFontFamily(fontref) {  
  $('h1, p, em, pre, i, b, strong, .content a, #menu a').css({'font-family' : fontref.innerHTML})
}


/** 
* Secondary navigation 
*/
document.querySelector('#moveUp').addEventListener('click', function() {
    $.fn.fullpage.moveSectionUp()
});

document.querySelector('#moveDown').addEventListener('click', function() {
    $.fn.fullpage.moveSectionDown()
});


/** Use addClass
*
*/
function onFormation() {
    $('#moveUp').css({'bottom':'10%', 'right':'calc((100% - 3%) / 2)'}) 
    $('#moveDown').css({'bottom':'5%', 'right':'calc((100% - 3%) / 2)'}) 
    $('.fp-prev').css({'bottom':'7%', 'right':'calc((100% - -4%) / 2)'}) 
    $('.fp-next').css({'bottom':'7%', 'right':'calc((100% - 10%) / 2)'}) 
}

function onUniformation() {
    $('#moveUp, #moveDown, .fp-prev, .fp-next').css({'bottom':'5%', 'right':'calc((100% - 3% )/ 2)'});
}


/** 
* Lazy loader
*/
$('#pad, #moveUp, #moveDown, .fp-prev, .fp-next').hover( function () {
    onFormation();
}, function() {
    $('#moveUp, #moveDown, .fp-prev, .fp-next').hover(function() {
        onFormation();
    }, function() {        
        onUniformation()
    });   
   onUniformation()
});  


/**
* Lazy settings
*/

$('#cntrl-fnt > div, .quickSee, #cntrl-bg > div').hide();


$("#love").draggable({revert:true});
$("#biggie").droppable({
  drop: function( event, ui ) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeIn(1000); 
  }
});

$('.indi-dots ul').on('mouseenter', function (e) {
    console.log('beep');
    $('.indi-dots ul').css('opacity', '1 !important')
}).on('mouseleave', function(e) {
    $('.indi-dots ul').css('opacity', '0.2 !important')
});

$('#user-cntrl').on('mouseenter', function(e) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeIn(2000);
}).on('mouseleave', function(e) {
    $('#cntrl-fnt > div, #cntrl-bg > div').fadeOut(2000);
});

document.addEventListener('mouseout', function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
        $('#cntrl-fnt > div, #cntrl-bg > div').fadeOut(1000);
    }
});


/**
* Clean up
*/
document.addEventListener('DOMContentLoaded', function() {

    function initialization(){
        $('#onepage').fullpage({
        sectionsColor: ['transparent', 'transparent', 'transparent'],
        anchors: ['love', 'biggie', 'smalls'],  
        animateAnchor:true,
        scrollOverflow: true,            
        //autoScrolling:true, 
        fitSection: true,
        menu: '#menu',
        navigation: true,
        navigationPosition: 'bottom',
        css3: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        //showActiveTooltip: true,
        continuousVertical:false,     
        afterLoad: function(anchorLink, index){
            $('#menu li').css({'background' : "transparent", "transition" : "all 1s ease"});          
            $('#'+anchorLink).css({'background' : "rgba(0, 0, 0, 0.2) none repeat scroll 0% 0%", "transition" : "all 1s ease"});  
            }
        });
    }

    initialization();  

    $('#woordtjies div.hori-indi ul > li a').hover( function() {
        $('.content').css('opacity' , '0.05');
        $('.quickSee').show();
        var preview = this.getAttribute('id');
        var bemoer = parseInt(preview) + 1;
        var minipreview = $('#woordtjies .slide:nth-child('+bemoer.toString()+')');        
        var titlepreview = minipreview.find('h1').text();
        var storypreview = minipreview.find('p').text();
        $('.quickSee').html("<h2>" + titlepreview + "</h2><br/>" + storypreview +"");
        
    }, function() {        
        $('.content').css('opacity' , '1');
        $('.quickSee').hide()
    });    

	var $storytainer = $('.indi-dots ul'),   
    droll = 10000;   

    $('.R').hover(function() {
        $storytainer.animate({
            'scrollLeft': droll
        },{duration: 2000, queue: false});
    }, function(){
        $storytainer.stop();

    });
    
    $('.L').hover(function() {
        $storytainer.animate({
            'scrollLeft': -1
        },{duration: 2000, queue: false});
      }, function(){
        $storytainer.stop();
    }); 	

	var $bbtainer = $('.bb-img ul'),   
    bbimgist = 10000;   

    $('.imgR').hover(function() {
        $bbtainer.animate({
            'scrollLeft': bbimgist
        },{duration: 10000, queue: false});
    }, function(){
        $bbtainer.stop();

    });
    
    $('.imgL').hover(function() {
        $bbtainer.animate({
            'scrollLeft': -1
        },{duration: 10000, queue: false});
      }, function(){
        $bbtainer.stop();
    }); 	

    var $fftainer = $('.fnt ul'),   
    ffist = 10000;   

    $('.fntR').hover(function() {
        $fftainer.animate({
            'scrollLeft': ffist
        },{duration: 10000, queue: false});
    }, function(){
        $fftainer.stop();
    });
    
    $('.fntL').hover(function() {
        $fftainer.animate({
            'scrollLeft': -1
        },{duration: 10000, queue: false});
      }, function(){
        $fftainer.stop();
    });    

    document.querySelector('#loading').style.display='none';   

    $("div.content, h1, p").draggable();

    $("div.content").resizable({
      resize: function( event, ui ) {
        ui.size.height = Math.round( ui.size.height / 30 ) * 30;
      }
    });

    /* Grab IMAGE from anywhere */
    // document.body.setAttribute('style', 'background-image:url(http://localhost/021/wp-content/uploads/2016/03/dsc1314.jpg);');

    /* Grab FONT from anwyhere */
    // same size

});