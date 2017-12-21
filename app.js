var stories = document.getElementById('stories').getElementsByTagName('h1');
var titles = document.createDocumentFragment();

function loadTitleMenu() {  

  for (var i = 0; i < stories.length; i++ ) { 
    var newTitle = document.createElement('h1');
    newTitle.innerText = stories[i].innerText;
    titles.appendChild(newTitle);
  }

  document.getElementById('searchByTitle').appendChild(titles);

}