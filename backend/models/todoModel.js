var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
    task: String,
    complete: Boolean   
});

var todoModel = mongoose.model('TodoModel', todoSchema, 'Todos');
module.exports = todoModel;