const inputBox1 = document.querySelector('.t1r1-input');
const inputBox2 = document.querySelector('.t2r1-input');

const listContainer1 = document.querySelector('.t1-list-container');
const listContainer2 = document.querySelector('.t2-list-container');

function AddTask1(){
    if(inputBox1.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer1.appendChild(li);
        inputBox1.value = '';

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
}

function AddTask2(){
    if(inputBox2.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
        inputBox2.value = '';

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
}

listContainer1.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);

listContainer2.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);

const leftBtn = document.getElementById('leftBTN');

leftBtn.addEventListener('click', function () {
    const checkedItems = listContainer1.querySelectorAll('.checked');
    
    // Iterate through checked items in table1
    checkedItems.forEach(function (checkedItem) {
        // Clone the checked item
        const clonedItem = checkedItem.cloneNode(true);

        // Remove the checked class from the cloned item
        clonedItem.classList.remove('checked');

        // Append the cloned item to table2
        listContainer2.appendChild(clonedItem);

        // Remove the original checked item from table1
        checkedItem.remove();
    });
});

const rightBtn = document.getElementById('rightBTN');

rightBtn.addEventListener('click', () => {
    const checkedItems = listContainer2.querySelectorAll('.checked');

    // Iterate through checked items in table1
    checkedItems.forEach(function(checkedItem){
        
        // Remove the checked class from the item
        checkedItem.classList.remove('checked');

        // Append the item to table2
        listContainer1.appendChild(checkedItem);
    });
});