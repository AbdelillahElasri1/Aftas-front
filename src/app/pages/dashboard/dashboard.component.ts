import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompetitionResponse } from 'src/app/models/CompetitionResponseModels';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  competitions: Array<CompetitionResponse> = [];
  
  isPopupVisible = false;
  openPopup(){
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }

  constructor(private competitionService: CompetitionService , private fb: FormBuilder){}

  ngOnInit(): void {
    this.getAllCompetitions();
    //this.loadCompetitions();
  }

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

  //TODO here
  competitionList: CompetitionResponse = {} as CompetitionResponse;
  currentPage = 1;
  pageSize = 6;
  totalPages = 0;

  // loadCompetitions(): void {
  //   this.competitionService.getCompetitions(this.currentPage, this.pageSize)
  //     .subscribe({
  //       next: (data:  CompetitionResponse) => {
  //         this.competitionList = data
  //         console.log(data);

          
  //         // this.competitionList = data as CompetitionResponse[];
  //         // // Extract total pages from the response
  //         // this.totalPages = Math.ceil(data.length / this.pageSize);
  //       },
  //       error: err => {
  //         console.log(err);
  //       }
  //     });
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.loadCompetitions();
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.loadCompetitions();
  //   }
  // }

  

}


