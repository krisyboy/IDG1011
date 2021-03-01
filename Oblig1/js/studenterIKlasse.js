var bigeomat = document.getElementById('BIGEOMAT');
const bwu = document.getElementById('BWU');
const arweb = document.getElementById('ÅRWEB');
const bixd = document.getElementById('BIXD');
const all = document.getElementById('all');

const action = {
  capture: true
};

bigeomat.addEventListener("click", showBigeomat, action);
bwu.addEventListener("click", showBwu, action);
arweb.addEventListener("click", displayText);
bixd.addEventListener("click", displayText);
all.addEventListener("click", displayText)

function myJson () {
  fetch('https://raw.githubusercontent.com/krisyboy/IDG1011/master/Oblig1/studenter.json')
    .then(data=>data.json())
    .then(json=> {
      const obj = JSON.parse(json);
    });
}

function showBwu () {
  fetch("./studenter.json")
    .then(data=>data.json())
    .then(json=> {
      let studenter = document.querySelector('.studenter');
      json.forEach(student=>{
          let li = document.createElement('LI');
          li.innerHTML = `<p>${student.etternavn}, ${student.fornavn}`;
          studenter.appendChild(li);
      })
    });
}

function showBigeomat(event) {
  console.log("balle");
}

function displayText () {
  document.querySelector(".studenter").innerHTML = "halla";
}







/*
const once = {
  once : true
};
bwu.addEventListener('click', onceHandler, once);
bigeomat.addEventListener('click', onceHandler2, once);

function onceHandler(event) {
  fetch("./studenter.json")
    .then(data=>data.json())
    .then(json=> {

      let studenter = document.querySelector('.studenter');
      json.forEach(student=>{
          let li = document.createElement('LI');
          li.innerHTML = `<p>${student.etternavn}, ${student.fornavn}`;
          studenter.appendChild(li);
      })
    });
}

function onceHandler2(event) {
  fetch("./studenter.json")
    .then(data=>data.json())
    .then(json=> {

      let studenter = document.querySelector('.studenter');
      json.forEach(student=>{
          let li = document.createElement('LI');
          li.innerHTML = `<p>${student.etternavn}, ${student.fornavn}`;
          studenter.appendChild(li);
      })
    });
}

*/


//console.log(bwu);
