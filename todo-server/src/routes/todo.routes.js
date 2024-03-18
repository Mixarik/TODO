const Router = require("express");
const router = new Router();
const todoController = require("../controllers/todo.controller");

router.get('/todos', todoController.getTodos);
router.post('/todo', todoController.createTodo);
router.put('/todo', todoController.changeCompletedTodo);
router.delete('/todos/:id', todoController.removeTodo);


module.exports = router;
