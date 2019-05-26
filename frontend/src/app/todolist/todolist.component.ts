    import { Component, OnInit, Injector } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {TodoStatusComponent } from '../todo-status/todo-status.component';
import {createCustomElement} from '@angular/elements';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

todos: Todo[];
error='';

  constructor(private todoService: TodoService, private injector: Injector) { 
   const TodoStatusElement = createCustomElement(TodoStatusComponent, {injector: this.injector});
   customElements.define('my-status',TodoStatusElement);
   }

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
