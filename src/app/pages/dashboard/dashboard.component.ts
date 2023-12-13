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
    // handleDelete(competition: CompetitionResponse) {
    //   if(confirm("etes vous sure?"))
    //   this.productService.deleteProduct(product).subscribe({
    //     next: value => {
    //       //this.getProducts();
    //       this.Products.filter(p => p.id != product.id);
    //     }
    //   })
    // }
    
  }

  deleteCompetition(competition: CompetitionResponse){
    if(confirm("etes vous sure?"))
    this.competitionService.deleteProduct(competition).subscribe({
      next: value => {
        this.competitions.filter(c => c.id != competition.id);
      }
    });
  }

}


