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
