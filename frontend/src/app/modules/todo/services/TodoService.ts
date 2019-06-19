import {Injectable} from '@angular/core';
import {Todo} from '../model/Todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {EventDialogComponent} from '../../public/component/dialog/eventDialog.component';
import {MatDialog} from '@angular/material';

@Injectable({
    providedIn: 'root',
})
export class TodoService {

    todoToUpdate: Todo;

    constructor(private http: HttpClient, private dialog: MatDialog) {
    }

    /**
     * Returns a list of {Todo[]} todo
     */
    getTodoList(): Observable<Todo[]> {
        return this.http.get<Todo[]>(environment.apiUrl + '/getAllTodos');
    }

    /**
     * Add Todo
     * @param {Todo} param data
     * @return {Observable<Todo>} Returns an Observable of todo
     */
    addTodo(data: Todo): Observable<Todo> {
        return this.http.post<Todo>(environment.apiUrl + '/addTodo', data);
    }

    /**
     * Record an item that is to be updated
     * @param {Todo} param data
     */
    setItemToUpdate(data: Todo): void {
        this.todoToUpdate = data;
    }

    /**
     * Returns an item that is to be updated
     * @return {Todo} Returns an item that is to be updated
     */
    getItemToUpdate(): Todo {
        return this.todoToUpdate;
    }

    /**
     *  Delete a Todo item
     *  @param {string} param id
     *  @return {Observable<Todo>} Returns an Observable of todo
     */
    deleteTodo(id: string): Observable<Todo> {
        return this.http.delete(environment.apiUrl + '/deleteTodo/' + id);
    }

    /**
     *  Update Todo Item
     *  @param {Todo} param data
     *  @return {Observable<Todo>} Returns an Observable of todo
     */
    updateTodo(data: Todo): Observable<Todo> {
        return this.http.put(environment.apiUrl + '/updateTodo/', data);
    }

    /**
     *  Delete Multiple Todos
     *  @param {Todo[]} param idList
     *  @return {Observable<Todo>} Returns an Observable of todo
     */
    deleteMultipleTodos(idList: Todo[]): Observable<Todo> {
        return this.http.delete(environment.apiUrl + '/deleteMultipleTodos/' + idList);
    }

    /**
     * Dialog Box to display messages
     * @param {string} pram dialogMessage
     */
    messageDialogBox(dialogMessage: string) {
        this.dialog.open(EventDialogComponent, {
            data: {
                message: dialogMessage
            }
        });
    }
}
