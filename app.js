

var stories = document.getElementById('story').getElementsByTagName('h1')
var titles = document.createDocumentFragment()
for (let i = 0; i < stories.length; i++ ) { 
  let newTitle = document.createElement('h1')
  let titleNo = document.createElement('small')

  titleNo.innerText = (''+(i+1)+'')
  newTitle.innerText = stories[i].innerText
  newTitle.prepend(titleNo)
  newTitle.classList.add('morenu')
  titles.appendChild(newTitle)
  let title = $("#story>div[data-anchor]")[i].getAttribute('data-anchor')
  newTitle.addEventListener('click', function(){
    $('#searchByTitle').fadeOut(200)
    scrollToTitle($("#story>div[data-anchor="+title+"]")[0])
  })
}

function loadTitleMenu() {  
  document.getElementById('searchByTitle').appendChild(titles)
  document.getElementById('menuOverlay').addEventListener('click', function() {
    window.scrollTo(0,0)
    $('#searchByTitle').fadeIn(300)
  })  			
} 

function scrollToTitle(name) {
  scrollToResolver(name);
}

function scrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2)
  document.body.scrollTop += jump
  document.documentElement.scrollTop += jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump)
    setTimeout(function() { scrollToResolver(elem)}, 30)
  } else {
    elem.lastjump = null
  }
}

function showTitleMenu() {
  window.scrollTo(0,0)
  $('#searchByTitle').fadeIn(500)
}

var editor = {
	simple: 'data:text/html;charset=utf-8, <html contenteditable></code>',
	base64: 'data:text/html;base64,PGh0bWwgY29udGVudGVkaXRhYmxlPg==',
	matrix: 'data:text/html, <style>html,body{margin: 0; padding: 0;}</style><textarea style="font-size: 1.5em; line-height: 1.5em; background: %23000; color: %233a3; width: 100%; height: 100%; border: none; outline: none; margin: 0; padding: 90px;" autofocus placeholder="wake up Neo..." />'
}


  var container = document.querySelector( 'div.storycontainer' ),
    triggerBttn = document.getElementById( 'trigger-overlay' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );

  function toggleOverlay() {

    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open')
      container.classList.remove('overlay-open')
      overlay.classList.add('close')
    } else {
      overlay.classList.add('open')
      container.classList.add('overlay-open')     
    }

  }

var stories = document.getElementById('story').getElementsByTagName('h1')
var titles = document.createDocumentFragment()
for (let i = 0; i < stories.length; i++ ) { 
  let newTitle = document.createElement('h1')
  let titleNo = document.createElement('small')

  titleNo.innerText = (''+(i+1)+'')
  newTitle.innerText = stories[i].innerText
  newTitle.prepend(titleNo)
  newTitle.classList.add('morenu')
  titles.appendChild(newTitle)
  let title = $("#story>div[data-anchor]")[i].getAttribute('data-anchor')
  newTitle.addEventListener('click', function(){
    $('#searchByTitle').fadeOut(200)
    scrollToTitle($("#story>div[data-anchor="+title+"]")[0])
  })
}

function loadTitleMenu() {  
  document.getElementById('searchByTitle').appendChild(titles)
  document.getElementById('menuOverlay').addEventListener('click', function() {
    window.scrollTo(0,0)
    $('#searchByTitle').fadeIn(300)
  })            
} 

function scrollToTitle(name) {
  scrollToResolver(name);
}

function scrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2)
  document.body.scrollTop += jump
  document.documentElement.scrollTop += jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump)
    setTimeout(function() { scrollToResolver(elem)}, 30)
  } else {
    elem.lastjump = null
  }
}

function showTitleMenu() {
  window.scrollTo(0,0)
  $('#searchByTitle').fadeIn(500)
}

var editor = {
    simple: 'data:text/html;charset=utf-8, <html contenteditable></code>',
    base64: 'data:text/html;base64,PGh0bWwgY29udGVudGVkaXRhYmxlPg==',
    matrix: 'data:text/html, <style>html,body{margin: 0; padding: 0;}</style><textarea style="font-size: 1.5em; line-height: 1.5em; background: %23000; color: %233a3; width: 100%; height: 100%; border: none; outline: none; margin: 0; padding: 90px;" autofocus placeholder="wake up Neo..." />'
}


  var container = document.querySelector( 'div.storycontainer' ),
    triggerBttn = document.getElementById( 'trigger-overlay' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );

  function toggleOverlay() {

    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open')
      container.classList.remove('overlay-open')
      overlay.classList.add('close')
    } else {
      overlay.classList.add('open')
      container.classList.add('overlay-open')     
    }

  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  closeBttn.addEventListener( 'click', toggleOverlay );



