document.getElementById('btn-delete').addEventListener('click', function(){
    const deletedItem = document.getElementById('deleted-item');
    deletedItem.style.display = 'none';
});

document.getElementById('input').addEventListener('keyup', function(event){
    const valu = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(valu === 'delete'){
        deleteButton.removeAttribute('disabled', true);
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
});