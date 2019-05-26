var express = require('express');
var router = express.Router();
var todoModel= require('../models/todoModel');

//Get all todos
router.get('/', function(req, res, next){
    todoModel.find({}, function(err,data){
        if(err) {
            console.log("error occured while getting todos from database");
            res.send(err)
        }
        else{
            res.json(data);
            console.log(data);
        }
    })
});

//Post a new todo
router.post('/', function(req,res,next){
    let newtodo = new todoModel(req.body);
    newtodo.save()
    .then(newdata=>{
        res.status(200).json({'todo': 'new todo added successfully'})
    })
    .catch(err=> res.status(400).send('Failed to create new Todo'))
})

//update a single todo
router.put('/:id', function(req, res, name){
    let newtodo = req.body;
    todoModel.findOne({_id:req.params.id})
    .then(data=>{
        
        for(key in newtodo){
            data[key]=newtodo[key];
            
        }
        
        data.save(function(err,todo){
            res.status(200).json({message:'Todo updated successfully'});
        });
        
    })
    .catch(err=> res.status(400).json({message: 'Such a todo does not exist'}))
    
})

//Get a single todo
router.get('/:taskname', function(req,res,next){
    todoModel.findOne({task:req.params.taskname})
    .then(data=> res.status(200).json({todo:data}))
    .catch(err=>res.status(400).send({'todo': 'error occured while fetching todo from database'}))
})

//Delete a todo
router.delete('/:id', function(req,res,next){
    todoModel.findOne({_id: req.params.id})
    .then(todo=> {
        if (!todo) {
            console.log('such a todo does not exist')
            res.json({message: 'such a todo does not exist'})
        }
        else {
            todo.remove();
            res.json({message: 'todo has been removed'})
        }
    })
})
module.exports = router;