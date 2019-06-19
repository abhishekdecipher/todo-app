import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EventDialogComponent} from './modules/public/component/dialog/eventDialog.component';
import {PublicModule} from './modules/public/public.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PublicModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [EventDialogComponent]

})
export class AppModule {
}
