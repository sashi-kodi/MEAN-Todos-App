import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '../todo';



@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css']
})
export class TodoStatusComponent implements OnInit {
 @Input() todos: Todo[];
 complete=0;
 total=0;
 
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    this.complete = this.todos ? this.todos.filter(el=> el.complete).length : 0;
    this.total = this.todos ? this.todos.length : 0;
  }

}
