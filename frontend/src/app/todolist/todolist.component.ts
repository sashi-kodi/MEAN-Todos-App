    import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

todos: Todo[];
error='';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos=()=>{
    this.todoService.getTodos()
    .subscribe(data=>{
       this.todos = data;
       console.log(data);
    }, error=>{
       console.log(error);
       
       this.todos=[];
    });
  }
  removeTodo = (todo)=>{
      this.todoService.removeTodo(todo).subscribe((data)=>{
      this.getTodos();
      });
     
  }
  updateTodo =(todo:Todo)=>{
    this.todoService.updateTodo(todo).subscribe(data=>{
      this.getTodos();
    })
  }
  addTodo = (newtodo: Todo| any)=>{
   
    this.todoService.addTodo(newtodo).subscribe(()=>{
      this.getTodos();
    });
  }

}
