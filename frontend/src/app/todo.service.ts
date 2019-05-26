import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "http://localhost:3000/api/todos";
  
  constructor(private http: HttpClient) { }
  
  getTodos = ()=>{
    return this.http.get<Todo[]>(this.url);
    
  }
  
  
  
  removeTodo = (todo: Todo)=>{
    return this.http.delete(this.url+ '/'+ todo._id);
    
  }
  
  addTodo = (todo: Todo)=>{
    return this.http.post<Todo>(this.url, todo);
  }
  
  updateTodo = (todo: Todo)=>{
    return this.http.put(this.url + '/' + todo._id, todo);
  }
}
