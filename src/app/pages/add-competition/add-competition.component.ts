import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetitionRequest } from 'src/app/models/CompetitionRequestModels';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit{
  @Output() closePopup = new EventEmitter<void>();
  close(){
    this.closePopup.emit();
  }
  public competitionForm!: FormGroup;

  constructor(
    private competitionService: CompetitionService,
     private fb: FormBuilder,
     private datePipe: DatePipe
     ){}

  ngOnInit() {
    this.competitionForm = this.fb.group({
      code: this.fb.control('',[Validators.required]),
      date: this.fb.control('',[Validators.required]),
      startTime: this.fb.control('',[Validators.required]),
      endTime: this.fb.control('',[Validators.required]),
      numberOfParticipants: this.fb.control(0,[Validators.required]),
      location: this.fb.control('',[Validators.required]),
      amount: this.fb.control(0,[Validators.required]),
    })
  }

  
 

  saveCompetition(){
    let competition : CompetitionRequest = this.competitionForm.value;
    this.competitionService.saveProduct(competition).subscribe({
      next: data => {
        console.log(data);
        alert(JSON.stringify(data))
        location.reload();
      },
      error: err => {
        console.log(err);
        
      }
    })
  }
}
