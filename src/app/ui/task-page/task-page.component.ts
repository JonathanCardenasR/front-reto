import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { TaskUseCaseService } from '../../domain/task/application/task-use-case.service';
import { IDomainResponseTask } from '../../domain/task/domain/task.model';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
		MatListModule,
		MatButtonModule,
		MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  private _formBuilder = inject(FormBuilder);
  private _taskUseCaseService = inject(TaskUseCaseService);

  taskForm = this._formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
  });

  listTasks: IDomainResponseTask[] = [];
  loading = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._loadTasks();
  }

  createTask() {

    if (this.taskForm.valid) {
      this.loading = true;
      this._taskUseCaseService
      .createTask(this.taskForm.getRawValue())
      .pipe( finalize(() => {this.loading = false;}))
      .subscribe({
        next: () => {
          console.log("Task created");
          this._loadTasks();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  changeTaskState(task: IDomainResponseTask,id:number) {
    this._taskUseCaseService
    .updateTask({...task, state: !task.state},id)
    .subscribe({
      next: () => {
        console.log("Task state changed");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateTask(task: IDomainResponseTask) {
    this.loading = true;
    this._taskUseCaseService
    .updateTask(task,task.id)
    .pipe( finalize(() => {this.loading = false;}))
    .subscribe({
      next: () => {
        console.log("Task updated");
        this._loadTasks();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteTask(id: number) {
    this.loading = true;
    this._taskUseCaseService
    .deleteTask(id)
    .pipe( finalize(() => {this.loading = false;}))
    .subscribe({
      next: () => {
        console.log("Task deleted");
        this._loadTasks();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  private _loadTasks() {
    this.loading = true;
    this._taskUseCaseService
    .getTasks()
    .pipe( finalize(() => {this.loading = false;}))
    .subscribe({
      next: (tasks) => {
        this.listTasks = tasks;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
