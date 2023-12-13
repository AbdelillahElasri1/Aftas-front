import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompetitionComponent } from './pages/add-competition/add-competition.component';

const routes: Routes = [
  {path: "addCompetition" , component: AddCompetitionComponent},
  // {path: "updateCompetition", component:},
  // {path: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
