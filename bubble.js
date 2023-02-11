document.getElementById('li').addEventListener('click', function(event){
    event.stopImmediatePropagation();
    console.log('hello li');
});

// document.getElementById('ulContainer').addEventListener('click', function(){
//     console.log('hello Ul Container');
// });

document.getElementById('body').addEventListener('click', function(){
    console.log('hello Body Container');
});

