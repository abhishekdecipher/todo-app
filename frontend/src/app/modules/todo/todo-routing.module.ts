import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTodoComponent} from './components/add/add.component';
import {ListTodoComponent} from './components/list/list.component';
import {UpdateTodoComponent} from './components/update/update.component';

const routes: Routes = [
    {path: '', component: AddTodoComponent},
    {path: 'add', component: AddTodoComponent},
    {path: 'list', component: ListTodoComponent},
    {path: 'update', component: UpdateTodoComponent},
    {path: '**', redirectTo: '/add' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule { }
