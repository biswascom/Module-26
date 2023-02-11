function buttonTest() {
    const change = document.getElementById('titleText');
    change.innerText = 'Successful';
}

document.getElementById('btn-update').addEventListener('click', function(){
    const inputValue = document.getElementById('input');
    const inputText = inputValue.value;
    const p = document.getElementById('change-text');
    p.innerText = inputText;
    inputValue.value = '';
})

document.getElementById('btn-send').addEventListener('click', function(){
    const h1Change = document.getElementById('text3');
    h1Change.innerText = 'This command is sent successfully';
})

document.getElementById('btn-comment').addEventListener('click', function(){
    const text = document.getElementById('text-area');
    const fullText = text.value;

    const textSend = document.getElementById('text-add');
    const para = document.createElement('p');
    para.innerText = fullText;
    textSend.appendChild(para);
    text.value = '';
})