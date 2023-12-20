import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetitionResponse } from 'src/app/models/CompetitionResponseModels';
import { FishResponse } from 'src/app/models/FishResponseModels';
import { HuntingRequest } from 'src/app/models/HuntingRequestModels';
import { MemberResponse } from 'src/app/models/MemberResponseModels';
import { CompetitionService } from 'src/app/services/competition.service';
import { HuntingService } from 'src/app/services/hunting.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrls: ['./add-hunting.component.css']
})
export class AddHuntingComponent implements OnInit{
  @Output() closePopup = new EventEmitter<void>();
  close(){
    this.closePopup.emit();
  }

  fishList: Array<FishResponse> = []
  MemberList: Array<MemberResponse> = []
  CompetitionList: Array<CompetitionResponse> = []
  public HuntingForm!: FormGroup;

  constructor(
    private huntingService: HuntingService,
    private fb : FormBuilder,
    private memberService: MemberService,
    private compettitionService: CompetitionService
  ){}
  ngOnInit(): void {
    this.getAllFish();
    this.getAllCompetitions();
    this.getAllMembers();
    this.HuntingForm = this.fb.group({
      numberOfFish: this.fb.control(0,[Validators.required]),
      fish_id: this.fb.control(0, [Validators.required]),
      competition_id: this.fb.control(0, [Validators.required]),
      num_member: this.fb.control(0, [Validators.required]),
    });  
  }

  saveHunting(){
    let hunting : HuntingRequest = this.HuntingForm.value;
    this.huntingService.saveHunting(hunting).subscribe({
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
  
  getAllFish(){
    this.huntingService.getAllfish().subscribe({
      next: data => {
        this.fishList = data;
      },
      error: err => {
        console.log(err);
        
      }
    })
  }
  getAllMembers(){
    this.memberService.getAllMember().subscribe({
      next: data => {
        this.MemberList = data;
      }, 
      error: err => {
        console.log(err);
        
      }
    })
  }
  getAllCompetitions(){
    this.compettitionService.getAllCompetitions().subscribe({
      next: data => {
        this.CompetitionList = data;
      }, 
      error: err => {
        console.log(err);
        
      }
    })
  }
}
