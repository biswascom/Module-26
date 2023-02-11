// document.getElementById('btn-add').addEventListener('click', function () {
//     const addUlContainer = document.getElementById('ulContainer');
//     const li = document.createElement('li');
//     li.innerText = 'New line added';
//     addUlContainer.appendChild(li);
// });

// document.getElementById('ulContainer').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// });

document.getElementById('btn-add').addEventListener('click', function(){
    const addUlContainer = document.getElementById('ulContainer');

    const li = document.createElement('li');
    li.innerText = 'New Line added here';
    addUlContainer.appendChild(li);
});

document.getElementById('ulContainer').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});