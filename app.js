var STORAGE_KEY = 'edu.ifiguer.todo.0.1';
var storage = {
    fetch: function() {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        storage.uid = todos.length;
        return todos;
    },
    save: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};

var app = new Vue({
    el: '#app',
    data: {
        todos: storage.fetch(),
        newTodo: ''
    },
    watch: {
        todos: {
            handler: function(todos) {
                storage.save(todos);
            },
            deep: true
        }
    },
    methods: {
        add: function() {
            if(!this.newTodo) return;
            this.todos.push({
                id: storage.uid++,
                text: this.newTodo
            });
            this.newTodo = '';
        },
        del: function(e) {
            this.todos = this.todos.filter((todo) => {
                return todo.id != e.target.id;
            });
        }
    }
});