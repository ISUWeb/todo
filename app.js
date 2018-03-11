// Only execute the following code when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-todo-form').onsubmit = () => {
        
        // Don't allow empty todos
        if(document.querySelector('#new-todo-text-field').value === '') return false;

        // Create todo element
        const todo = document.createElement('li');
        todo.innerHTML = document.querySelector('#new-todo-text-field').value;

        // Add element to list
        document.querySelector('#todo-list').append(todo);

        // Clear input field 
        document.querySelector('#new-todo-text-field').value = '';

        // Don't submit the form; prevent the page from reloading
        return false;
    }

    document.querySelector('#todo-list').addEventListener('click', (e) => {
        
        // Don't attempt to remove list from itself cause that makes no sense
        if(document.querySelector('#todo-list') === e.target) return;

        // Remove element from list
        document.querySelector('#todo-list').removeChild(e.target);
    });
});