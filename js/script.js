let keyPress = document.getElementById('keyPress');

let addStuff = document.getElementById('addStuff');

let pCounter = 0;

keyPress.addEventListener('keypress' , function(e){

    if(e.code == 'Enter' && keyPress.value != ''){
       createListitem(keyPress.value);
    }
    
    
});

function createListitem(content){
    let pElement = document.createElement('p');

        pElement.innerText = content;
        pElement.setAttribute('class', 'list-group-item');
        pElement.setAttribute('id', pCounter);
        addStuff.append(pElement);
        document.getElementById("addStuff").contentEditable = "true";
        pCounter ++;
        keyPress.value=null;

}

/*function deleteItem(){
    .addEventListener('click', function(){
        this.parentElement.remove();
    });
}*/

