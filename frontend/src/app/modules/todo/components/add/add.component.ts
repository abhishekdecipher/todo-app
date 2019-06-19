import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/TodoService';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {Todo} from '../../model/Todo';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddTodoComponent implements OnInit {

    addTodoForm: FormGroup;
    todoList: Todo []; // Contains a List of added TODOs
    todoData: Todo = {};

    constructor(private router: Router, private fb: FormBuilder, private todoService: TodoService, private dialog: MatDialog) {
    }

    /**
     * Intializes Todo form
     */
    ngOnInit() {
        this.createForm();
        this.getTodoList();
    }

    /**
     * create form group
     */
    createForm() {
        this.addTodoForm = this.fb.group({
            todoName: ['', Validators.required],
            description: ['', Validators.required],
            time: ['', [Validators.required]]
        });
    }

    /**
     * get todo list
     */
    getTodoList() {
        this.todoService.getTodoList().subscribe(response => {
            this.todoList = response;
        });
    }

    /**
     * Adds TODO
     */

    addTodo() {
        console.log(this.addTodoForm);
        if (this.addTodoForm.valid) {
            const eventDateInMillis = Date.parse(this.addTodoForm.controls.time.value + '');
            const todayDateInMillis = Date.parse(new Date() + '');

            // Stops execution when event time is less than or equal to current time

            if (eventDateInMillis <= todayDateInMillis) {
                this.todoService.messageDialogBox('Event Time should be greater than current time');
                return;
            }

            this.todoData.todoName = this.addTodoForm.controls.todoName.value;
            this.todoData.description = this.addTodoForm.controls.description.value;
            this.todoData.time = eventDateInMillis;

            this.todoService.addTodo(this.todoData).subscribe(res => {
                this.todoService.messageDialogBox('Added Successfully');
                this.router.navigate(['/list']);
                this.addTodoForm.reset();
            }, error => {
                this.todoService.messageDialogBox('Some Internal Error Occured');
            });
        } else {

            // Triggers all required field error if any field is left empty

            this.addTodoForm.controls.todoName.markAsTouched();
            this.addTodoForm.controls.description.markAsTouched();
            this.addTodoForm.controls.time.markAsTouched();
        }
    }
}
