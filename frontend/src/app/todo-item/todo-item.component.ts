import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from '../todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

@Input()todo: Todo;
@Output() todoRemoved = new EventEmitter<Todo>();
@Output() todoUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  completeTodo =()=>{
    this.todoUpdated.emit({task:this.todo.task, complete: !this.todo.complete, _id: this.todo._id});
  }
  remove=(todo)=>{
    this.todoRemoved.emit(todo);
  }

}
