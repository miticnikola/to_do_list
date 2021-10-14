// 
let form = document.querySelector('form');
let input = document.getElementById('typeRes');
let submitBtn = document.getElementById('submit');
let radioTop = document.getElementById('top');
let radioBottom = document.getElementById('bottom');
let respList = document.getElementById('listResp');
let li = document.querySelectorAll('li');



form.addEventListener('submit', e => {
    e.preventDefault();

    // for(let i < )
    respList.innerHTML += `<li>${input.value}</li>`;
    form.reset();
});

console.log(li);