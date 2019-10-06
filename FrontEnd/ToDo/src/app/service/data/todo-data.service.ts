import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todo/list-todo.component';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllToDos(name) {
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${name}/todos`);
    // console.log("Hello world bean");
  }
  deleteToDo(name, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${name}/todos/${id}`);
  }

  retrieveToDo(name, id) {
    return this.http.get<ToDo>(`${TODO_JPA_API_URL}/users/${name}/todos/${id}`);
  }

  updateToDo(name, id, todo) {
    return this.http.put(`${TODO_JPA_API_URL}/users/${name}/todos/${id}`, todo);
  }
  addToDo(name, todo) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${name}/todos`, todo);
  }
}
