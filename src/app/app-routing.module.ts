import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompetitionComponent } from './pages/add-competition/add-competition.component';
import { CompetitionDetailsComponent } from './pages/competition-details/competition-details.component';
import { PodiumComponent } from './shared/components/podium/podium.component';

const routes: Routes = [
  {path: "addCompetition" , component: AddCompetitionComponent},
  {path: "showCompetitionDetails", component: CompetitionDetailsComponent},
  {path: "podium" , component: PodiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
