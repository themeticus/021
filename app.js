

function loadTitleMenu() {  

  var stories = document.getElementById('stories').getElementsByTagName('h1');
  var titles = document.createDocumentFragment();

  for (var i = 0; i < stories.length; i++ ) { 
    var newTitle = document.createElement('h1')
    newTitle.innerText = stories[i].innerText
    newTitle.classList.add('morenu')
    titles.appendChild(newTitle)
  }

  document.getElementById('searchByTitle').appendChild(titles);
  			
}

// loadTitleMenu()

var editor = {
	simple: 'data:text/html;charset=utf-8, <html contenteditable></code>',
	base64: 'data:text/html;base64,PGh0bWwgY29udGVudGVkaXRhYmxlPg==',
	matrix: 'data:text/html, <style>html,body{margin: 0; padding: 0;}</style><textarea style="font-size: 1.5em; line-height: 1.5em; background: %23000; color: %233a3; width: 100%; height: 100%; border: none; outline: none; margin: 0; padding: 90px;" autofocus placeholder="wake up Neo..." />'
}