// selector
let todoInput = document.querySelector('.todo-input');
let todoBtn = document.querySelector('.todo-btn');
let totdoList = document.querySelector('.todo-list');

// event listener
todoBtn.addEventListener('click', (e)=>{
	// PREVENT DEFAULT
	e.preventDefault();

	// create li
	let listItem = document.createElement('li');
	listItem.innerText = todoInput.value;
	totdoList.appendChild(listItem);

	// clear input box
	todoInput.value = '';
});
