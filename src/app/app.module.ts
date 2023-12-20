import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCompetitionComponent } from './pages/add-competition/add-competition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AddMemberComponent } from './shared/components/add-member/add-member.component';
import { CompetitionDetailsComponent } from './pages/competition-details/competition-details.component';
import { ListMemberComponent } from './shared/components/list-member/list-member.component';
import { PodiumComponent } from './shared/components/podium/podium.component';
import { AddHuntingComponent } from './shared/components/add-hunting/add-hunting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCompetitionComponent,
    AddMemberComponent,
    CompetitionDetailsComponent,
    ListMemberComponent,
    PodiumComponent,
    AddHuntingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
