import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  inputTodo : string;

  constructor() { }

  ngOnInit(): void {
    this.todos =[];    
  }
  

  deleteTodo(id:number){
    this.todos.splice(id,1);
    console.log(id);
  }

  addTodo(){
    this.todos.splice(0,this.todos.length);
    if(this.inputTodo != ""){
      this.todos.push({
        content : this.inputTodo,
        completedTask : false
      })
      this.inputTodo = "";
    }
    

    
  }

}
