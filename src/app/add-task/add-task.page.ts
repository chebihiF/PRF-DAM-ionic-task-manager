import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  taskName! : string

  constructor
  (
    private taskService: TaskService,
    private navController: NavController
    ) { }

  ngOnInit() {
  }

  addTask(){
    this.taskService.addTask(this.taskName)
    this.navController.navigateBack("/task-list")
  }



}
