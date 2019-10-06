import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ToDo } from '../list-todo/list-todo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: ToDo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    // if(this.id === -1){
    //   console.log('i am -1')
    // }else{
    //    console.log('i am not-1')
    // }
    this.todo = new ToDo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveToDo(this.basicAuthenticationService.getLoggedUser(), this.id).subscribe(
      data => this.todo = data
    ); }
  }

  save() {
    if (this.id != -1) {
      this.todoService.updateToDo(this.basicAuthenticationService.getLoggedUser(), this.id, this.todo).subscribe(
      data => {
        //  console.log(data);
         this.router.navigate(['listTodo']);
      }
    ); } else {
      // console.log(this.todo);
      this.todoService.addToDo(this.basicAuthenticationService.getLoggedUser(), this.todo).subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['listTodo']); }
      ); }
  }

}
