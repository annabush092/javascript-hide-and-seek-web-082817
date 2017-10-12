function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')
  for(let i=0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
  return
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
