import {AddTodoComponent} from './components/add/add.component';
import {ListTodoComponent} from './components/list/list.component';
import {UpdateTodoComponent} from './components/update/update.component';
import {EventDialogComponent} from '../public/component/dialog/eventDialog.component';
import {HttpClientModule} from '@angular/common/http';
import {OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import {NgModule} from '@angular/core';
import {TodoRoutingModule} from './todo-routing.module';
import {PublicModule} from '../public/public.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        AddTodoComponent,
        ListTodoComponent,
        UpdateTodoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        TodoRoutingModule,
        PublicModule

    ],
    providers: [
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'us'}
    ],
    bootstrap: [],
    entryComponents: [EventDialogComponent]

})
export class TodoModule { }
