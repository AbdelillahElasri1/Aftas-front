import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompetitionComponent } from './pages/add-competition/add-competition.component';
import { CompetitionDetailsComponent } from './pages/competition-details/competition-details.component';

const routes: Routes = [
  {path: "addCompetition" , component: AddCompetitionComponent},
  {path: "showCompetitionDetails", component: CompetitionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
