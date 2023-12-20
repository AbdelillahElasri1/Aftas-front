import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionResponse } from 'src/app/models/CompetitionResponseModels';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  competitions: Array<CompetitionResponse> = [];

  showMemberList: boolean = false;
  showPodium: boolean = false;

  toggleMemberListVisibility() {
    this.showMemberList = !this.showMemberList;
  }
  togglePodiumvisibility(){
    this.showPodium = !this.showPodium;
  }

  
  
  isPopupVisible = false;

  isPopupMemberVisible = false;
  openPopup(){
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }

  openMemberPopup(){
    this.isPopupMemberVisible = true;
  }
  closeMemberPopup(){
    this.isPopupMemberVisible = false;
  }

  constructor(private competitionService: CompetitionService,
     private fb: FormBuilder,
     private route: ActivatedRoute,
     private router: Router
     ){}

  

  getAllCompetitions(){
    this.competitionService.getAllCompetitions()
    .subscribe({
      next: data => {
        this.competitions = data
      },
      error: err => {
        console.log(err);
      }
    });
    
  }

  deleteCompetition(competition: CompetitionResponse){
    if(confirm("etes vous sure?"))
    this.competitionService.deleteProduct(competition).subscribe({
      next: value => {
        this.competitions.filter(c => c.id != competition.id);
      }
    });
  }


  selectedCompetition: any;
  openCompetition: any = null;
  showDetailsPopup: boolean = true;


  togglePopup(competition: any): void {
    // Toggle the visibility of the popup
    competition.showPopup = !competition.showPopup;


    if (this.openCompetition && this.openCompetition !== competition) {
      this.openCompetition.showPopup = false;
    }

    // Set the currently open competition
    this.openCompetition = competition;

    if (!competition.showPopup) {
      competition.showDetailsPopup = false;
    }
  }

  deletedCompetition(competition: CompetitionResponse): void {
  
    if(confirm("etes vous sure?"))
    this.competitionService.deleteProduct(competition).subscribe({
      next: value => {
        this.competitions = this.competitions.filter(c => c.id !== competition.id);
        
      }
    });
  }

  updateCompetition(): void {
    if (this.selectedCompetition) {
      // Implement the update logic
      console.log('Updating competition:', this.selectedCompetition);
    }
  }

  showDetails(competition: any): void {
    if (this.selectedCompetition) {
      // Implement the show details logic
      console.log("Before toggle:", competition.showDetailsPopup);
      console.log("After toggle:", competition.showDetailsPopup);
      console.log("Details popup toggled for competition:", competition);
      console.log("give the pop up details");
    }
    this.selectedCompetition = competition;

    competition.showDetailsPopup = !competition.showDetailsPopup;
  }
  closeDetailsPopup(): void {
    // Set the showDetailsPopup property to false to hide the popup
    this.selectedCompetition.showDetailsPopup = false;

    // Optionally, you can perform additional logic here if needed
  }

  addMember(): void {
    if (this.selectedCompetition) {
      // Implement the add member logic
      console.log('Adding member to competition:', this.selectedCompetition);
    }
  }




  // pagination front end logic 

  page:number = 1;
  size:number = 0;
  totalPages : number = 0;
  ListCompetitions : Array<CompetitionResponse> = [];
  ngOnInit(): void {
    this.getAllCompetitions();
    //this.loadCompetitions();

    this.route.queryParams.subscribe(params => {
      this.page = params['page'] || 1;
      this.size = params['size'] || 7;
      this.competitionService.getByPage(this.page,this.size).subscribe({
        next: data => {
          console.log(data);
          this.ListCompetitions = data.content as CompetitionResponse[];
          this.totalPages = data.totalPages;
        },
        error: error => {
          console.error('There was an error!', error);
          console.log(error.error.message);
          error.error.message;
        }
      });
  });
  }

}


