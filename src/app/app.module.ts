import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapFormComponent,
    JumbotronComponent,
    BootstrapTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
