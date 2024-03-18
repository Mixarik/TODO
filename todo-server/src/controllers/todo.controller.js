const db = require("../db");

class TodoController {
  async getTodos(req, res) {
    const todos = await db.query("SELECT * FROM todo_list");
    res.json(todos.rows);
  }
  async createTodo(req, res) {
    const newTodo = await db.query(
      "INSERT INTO todo_list (label) values ($1) RETURNING *",
      [req.body.label]
    );
    res.json(newTodo.rows[0]);
  }
  async changeCompletedTodo(req, res) {
    const { id, completed } = req.body;
    const todo = await db.query(
      "UPDATE todo_list set completed = $1 where id = $2 RETURNING *",
      [completed, id]
    );
    res.json(todo.rows[0]);
  }
  async removeTodo(req, res) {
    const todo = await db.query("DELETE from todo_list where id = $1", [req.params.id]);
    res.json(todo.rows[0]);
  }
}

module.exports = new TodoController();
