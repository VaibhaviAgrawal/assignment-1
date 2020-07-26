import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ScoreDetailComponent } from './score-detail/score-detail.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "jumbotron", component: JumbotronComponent},
  {path: "bootstrap-form", component: BootstrapFormComponent},
  {path: "bootstrap-table", component: BootstrapTableComponent} ,
  {path: "score-detail", component: ScoreDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
