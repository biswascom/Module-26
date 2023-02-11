document.getElementById('btn-push').addEventListener('click', function(){
    const text = document.getElementById('textarea');
    const message = text.value;

    const pushHere = document.getElementById('main-area');
    const p = document.createElement('p');
    p.innerText = message;
    pushHere.appendChild(p);
    text.value = '';
});