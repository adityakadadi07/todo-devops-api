
const express = require('express');

const app = express();
app.use(express.json());

let todos = [
    { id: 1, title: 'Learn DevOps', completed: false }
];

// Health endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a todo
app.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    };

    todos.push(todo);
    res.status(201).json(todo);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Todo API running on port ${PORT}`);
    });
}

module.exports = app;
// Feature branch update for Git merge demonstration
