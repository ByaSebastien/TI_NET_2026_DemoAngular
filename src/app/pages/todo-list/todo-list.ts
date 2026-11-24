import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskDto } from '../../models/task-dto';
import { NgClass } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-todo-list',
  styleUrl: './todo-list.scss',
  templateUrl: './todo-list.html',
})
export class TodoList {
  taskInput: string = '';
  tasks: TaskDto[] = [];

  addTask() {
    let task = this.taskInput.trim();

    if (!task) {
      return;
    }

    this.tasks.push({
      title: task,
      done: false,
    });

    this.taskInput = '';
  }

  checkTask(i: number) {
    this.tasks[i].done = !this.tasks[i].done;
  }
}
