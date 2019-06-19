import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoService} from '../../services/TodoService';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListTodoComponent implements OnInit {
    todoList: Todo [];
    displayedColumns: string[] = ['select', 'id', 'todoName', 'description', 'time', 'actions'];
    dataSource = new MatTableDataSource<Todo>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private todoService: TodoService, private router: Router, private dialog: MatDialog) {
    }

    /**
     * Refreshes todos list on page load
     */
    ngOnInit() {
        this.reLoadTodoList();
    }

    /**
     * Reloads TodoList On Deletion/Updation
     */
    reLoadTodoList() {
        this.todoService.getTodoList().subscribe(response => {
            this.todoList = response;
            this.todoList.forEach(todo => {
                todo.checked = false;
            });
            if (this.todoList.length === 0) {
                this.router.navigate(['/add']);
            }

            this.dataSource = new MatTableDataSource(this.todoList);
            this.dataSource.paginator = this.paginator;
        });
    }

    /**
     *  Record data to update list of todos
     */
    setUpdateTodo(dataToUpdate) {
        this.todoService.setItemToUpdate(dataToUpdate);
        this.router.navigate(['/update']);
    }

    /**
     * Delete an item from a list of todos
     */
    deleteSingleTodoItem(id) {
        this.todoService.deleteTodo(id).subscribe(res => {
            this.reLoadTodoList();
        }, error => {
            this.todoService.messageDialogBox('Some Internal Error Occured');
        });
    }

    /**
     *  Mark/UnMark the todos to be deleted
     */
    toggleCheckBox(element) {
        element.checked = !element.checked;
    }

    /**
     *  Deletes all checked item from list of todos
     */
    deleteMultipleTodoItem() {
        let atLeastOneIsChecked = false;
        const idListToDelete = [];
        this.todoList.forEach(todo => {
            if (todo.checked) {
                atLeastOneIsChecked = true;
                idListToDelete.push(todo.id);
            }
        });
        if (!atLeastOneIsChecked) {
            this.todoService.messageDialogBox('At least one Item needs to be selected');
        } else {
            this.todoService.deleteMultipleTodos(idListToDelete).subscribe(res => {
                this.reLoadTodoList();
            }, error => {
                this.todoService.messageDialogBox('Some Internal Error Occured');
            });
        }
    }
}
