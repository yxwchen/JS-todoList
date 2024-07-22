let elTodoInput = document.querySelector('#todoInput');
let elTodoAddBtn = document.querySelector('#todoAddBtn');
let elTodoList = document.querySelector('#todolist');
let elTodoListData = [];
// console.log(elTodoInput, elTodoAddBtn);

elTodoAddBtn.addEventListener('click', addTodo);

function addTodo() {

    //test fn
    // console.log('good!');
    //抓input的值
    // console.log(elTodoInput.value);
    if (elTodoInput.value === '') {
        console.log('輸入錯誤');
    } else {
        //塞入list
        elTodoListData.push(elTodoInput.value);
        console.log(elTodoListData);
    }



    //清除input的值
    elTodoInput.value = "";
    renderTodo();
}


function renderTodo() {
    console.log(`${elTodoListData[0]}`);
    elTodoList.innerHTML = elTodoListData.map(todo => `<li> <input type="checkbox"> ${todo}</li>`).join('');
}