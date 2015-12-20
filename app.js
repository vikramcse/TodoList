(function() {
	'use strict';

	// This will get the element id of input element
	var input = document.getElementById('input');

	// This will get the element id of button 
	var button = document.getElementById('submit');

	// create a single list object having todo and done
	// objects
	var list = {
		todo: document.getElementById('todo'),
		done: document.getElementById('done')
	};

	var createTask = function(task, onCheck) {
		var el = document.createElement('li');
		var checkbox = document.createElement('input');
		var label = document.createElement('span');

		checkbox.type = 'checkbox';
		checkbox.addEventListener('click', onCheck);
		label.textContent = task;

		el.appendChild(checkbox);
		el.appendChild(label);

		return el;
	};

	var addTodo = function(task) {
		list.todo.appendChild(task);
	};

	var onCheck = function(e) {
		// this will have the input element
		var task = e.target.parentElement;
		// this will have the li
		var element = task.parentElement;

		// now check if the id parent element is todo
		// then move the above li to done list
		
		if (element.id === 'todo') {
			list.done.appendChild(task);
			this.checked = false;
		} else if (element.id === 'done') {
			list.todo.appendChild(task);
			this.checked = false;
		}
	};

	var addInput = function() {
		var text = input.value.trim();
		if (text.length > 0) {
			addTodo(createTask(text, onCheck));
			input.value = '';
		}
	};

	button.addEventListener('click', addInput);
	input.addEventListener('keyup', function(e) {
		var code = e.keyCode;
		if(code === 13) {
			addInput()
		}
	});
	input.focus();

}());