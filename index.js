function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  var parent = document.getElementById('grand-node')
  var nextChild = parent.children[0]

  while (nextChild) {
    parent = nextChild
    nextChild = parent.children [0]
  }

  return parent
}