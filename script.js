const task = document.getElementById("new_task");
const add_button = document.getElementById("add_button");
const list = document.getElementById("list");

add_button.addEventListener("click" , function(){

    const val_task = task.value.trim();

    if(val_task !== ''){
        const itemList = document.createElement('li');
        itemList.textContent = val_task;

        const rem_button = document.createElement('button');
        rem_button.textContent = '❌'

        rem_button.onclick = function(){
            list.removeChild(itemList);
        }

        itemList.appendChild(rem_button);
        list.appendChild(itemList);

        task.value = '';
        task.focus();
    }
})
