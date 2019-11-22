let addBtn = document.getElementById('addBtn');
let pCounter = 0;

let addElements = document.getElementById('addElements');
let keyPress = document.getElementById('keyPress');

let todoList = [];

keyPress.addEventListener('keypress', function (e) {
    // console.log(e.code);
    if (e.code == 'Enter' && keyPress.value != '') {
        // entered into p tag.
        createItem(keyPress.value);

        // save value into array
        todoList.push(keyPress.value);
        //save item to localStorage
        localStorage.setItem('todo', JSON.stringify(todoList));
        //clears  entered
        keyPress.value = null;
    }
});


//--------------------------------------------------------------------------------------------//

let itemCounter = 0;

function createItem(content) {
    let divA = document.createElement('div');
    divA.setAttribute('class', 'list-group-item d-flex align-items-center pl-1 m-2');
    addElements.append(divA);

    let delImg = document.createElement('img')
    delImg.setAttribute('src', 'https://img.icons8.com/metro/26/000000/delete-sign.png');
    delImg.setAttribute('width', '20px');
    delImg.setAttribute('itemCounter', itemCounter.toString());
    delImg.setAttribute('alt', 'delete');
    console.log(delImg);

    delImg.addEventListener('click', function () {
        this.parentElement.remove();
        saveStorage();
    });

    divA.append(delImg);

   

    let pA = document.createElement('p');
    pA.setAttribute('class', 'mb-0 listItem ');

    pA.addEventListener('click', function () {
        pA.contentEditable = 'true';
    });

    pA.addEventListener('keypress', function (e) {
        setTimeout(() => {
            saveStorage();
        }, 100);
    })

    pA.innerText = content;
    divA.append(pA);
    
    itemCounter++;
}



//--------------------------------------------------------------------------------------------//

function loadItems() {
    if (localStorage.getItem('todo') != undefined) {
        console.log(JSON.parse(localStorage.getItem('todo')))
        let todoLocal = JSON.parse(localStorage.getItem('todo'));
        //populate array items into p tags
        for (let i = 0; i < todoLocal.length; i++) {
            createItem(todoLocal[i]);
        }
        //saving local storage array into our array.
        todoList = todoLocal;
    }
}



function saveStorage() {
    let myArr = [];
    let pByClass = document.getElementsByClassName('listItem');
    for (let i = 0; i < pByClass.length; i++) {
        myArr.push(pByClass[i].innerText);
        console.log(myArr);
    }
    todoList = localStorage.setItem('todo', JSON.stringify(myArr));
    
}

loadItems();
