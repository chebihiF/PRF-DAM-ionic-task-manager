import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  taskName! : string

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(){
    this.taskService.addTask(this.taskName)
  }



}
