const button = document.querySelector('#btn');
const twt = document.querySelector('#twitter');
const linktr = document.querySelector('#linktree');

button.addEventListener('click', () => {
    twt.classList.remove('invisible');
    button.innerHTML = "Double click";
})

button.addEventListener('dblclick', () => {
    linktr.classList.remove('invisible');
    button.innerHTML = "Have a nice day ^^";
    button.disabled = true;
})