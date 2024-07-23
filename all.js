let elTodoInput = document.querySelector('#todoInput');
let elTodoAddBtn = document.querySelector('#todoAddBtn');
let elAlertWord = document.querySelector('#alertWord');
let elTodoList = document.querySelector('#todolist');
let elTodoListData = [];
// console.log(elTodoInput, elTodoAddBtn);

elTodoAddBtn.addEventListener('click', addTodo);
// 新增代辦fn
function addTodo() {

    //test fn
    // console.log('good!');
    //抓input的值
    // console.log(elTodoInput.value);
    if (elTodoInput.value === '') {
        elAlertWord.textContent = '輸入錯誤，不可輸入空白，請重新輸入。';
    } else {
        //塞入list
        elTodoListData.push(elTodoInput.value);
        console.log(elTodoListData);
    }
    // 畫線代辦fn
    function lineThroughTodo() {
        // elTodoListData.addEventListener('click', function () {
        //     console.log('a');
        // })
    }
    //清除input的值
    elTodoInput.value = "";
    renderTodo();
}


function renderTodo() {
    console.log(`${elTodoListData[0]}`);
    // 渲染列表
    elTodoList.innerHTML = elTodoListData.map((todo, index) =>
        `<li>
             <input type="checkbox" id="todoCheckbox-${index}"> 
             <lable for="todoCheckbox-${index}">${todo}</lable>
             <button id="todoDeleteBtn-${index}">刪除</button>
        </li>`
    ).join('');
    //任務畫線
    elTodoListData.forEach((todo, index) => {
        let elCheckbox = document.querySelector(`#todoCheckbox-${index}`);
        elCheckbox.addEventListener('change', function () {
            if (elCheckbox) {
                console.log(`tttt${index}`);

            }

        });

    });

}