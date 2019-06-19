import {NgModule} from '@angular/core';
import {EventDialogComponent} from './component/dialog/eventDialog.component';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule, MatDialogModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatPaginatorModule,
    MatTableModule,
    MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

@NgModule({
    declarations: [
        EventDialogComponent
    ],
    imports: [MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule, MatDialogModule,
        MatFormFieldModule, MatIconModule,
        MatInputModule, MatPaginatorModule,
        MatTableModule,
        MatToolbarModule, MatTooltipModule,
        OwlDateTimeModule, OwlNativeDateTimeModule],
    exports: [MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule, MatDialogModule,
        MatFormFieldModule, MatIconModule,
        MatInputModule, MatPaginatorModule,
        MatTableModule,
        MatToolbarModule, MatTooltipModule,
        OwlDateTimeModule, OwlNativeDateTimeModule],
    providers: [MatDatepickerModule, {provide: OWL_DATE_TIME_LOCALE, useValue: 'us'}],
    bootstrap: [],
    entryComponents: []

})
export class PublicModule {
}
