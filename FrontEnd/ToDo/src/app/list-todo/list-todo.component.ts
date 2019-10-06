import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targetDate: Date) { }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  Todos: ToDo[];
  message: string;
  // Todos: ToDo[] = [
  //   new ToDo(1, 'Master the art of programming', false, new Date()),
  //   new ToDo(2, 'Start the dairy farm,', false, new Date()),
  //   new ToDo(3, 'Being a people person', false, new Date()),
  // ];
  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.refreshToDos();
  }

  refreshToDos() {
    this.todoService.retrieveAllToDos(this.basicAuthenticationService.getLoggedUser()).subscribe(
      response => { // console.log(response);
        this.Todos = response;
      });
  }
  deleteToDo(id) {
    // console.log(id);
    this.todoService.deleteToDo(this.basicAuthenticationService.getLoggedUser(), id).subscribe(
      response => {
        // console.log(response);
        this.message = `ToDo ${id} was successfully deleted`;
        this.refreshToDos();
      });
  }
  updateToDo(id) {
  //  console.log(id);
   this.router.navigate(['todos', id]);
  }

  addToDo() {
    this.router.navigate(['todos', -1]);
  }
}
