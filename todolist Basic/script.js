let TodoList = JSON.parse(localStorage.getItem('TodoList')) || [];
function add() {
    let Element = document.querySelector('.js-input');
    let storage = Element.value;
    let datevaue = document.querySelector('.js-date');
    let date = datevaue.value;
    TodoList.push({
        storage: storage,
        date: date,
    },);
    localStorage.setItem('TodoList', JSON.stringify(TodoList));
    Element.value = '';
}
document.querySelector('.js-button1').addEventListener('click', () => {
    add();
})
document.querySelector('.js-button-2').addEventListener('click', () => {
    render();
})
render();
function render() {
    let itemsof = '';
    TodoList.forEach(function (print, index) {
        let storage = print.storage;
        let date = print.date;
        let todo = `<tr><td>${ storage }</td><td>${ date }</td> <td><button class ="delete">Delete</button></td></tr>`;
        itemsof += todo;
    })
    document.querySelector('table').innerHTML = itemsof;
    document.querySelectorAll('.delete').forEach((param, index) => {

        param.addEventListener('click', () => {
            deleting(index);
        })
    })
}
function deleting(index) {
    TodoList.splice(index, 1);
    localStorage.setItem('TodoList', JSON.stringify(TodoList));
    render();
}






