import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { NavController } from '@ionic/angular';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task: Task = {
    id: 0,
    title: '',
    exp_date: new Date(),
    description: ''
  }

  constructor
  (
    private taskService: TaskService,
    private navController: NavController
    ) { }

  ngOnInit() {
  }

  addTask(){
    this.taskService.addTask(this.task)
    this.navController.navigateBack("/task-list")
  }



}
