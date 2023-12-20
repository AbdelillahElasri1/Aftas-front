import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { CompetitionResponse } from 'src/app/models/CompetitionResponseModels';
import { MemberResponse } from 'src/app/models/MemberResponseModels';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit{

  @Output() addHuntingEvent = new EventEmitter<{ competitionCode: string, memberID: string }>();

  listMember: Array<MemberResponse> = []
  listCompetition : Array<CompetitionResponse> = []

  filteredMembers: MemberResponse[] = [];
  selectedCompetitionCode!: number ;

  constructor(
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private route : ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getAllMembers();
    this.getAllCompetitions();
    this.loadMembers();
  }

  loadMembers(): void {
    if(this.selectedCompetitionCode){
    this.memberService.getAllMembersByCompetitionId(this.selectedCompetitionCode).subscribe({
      next: data => {
        this.listMember = data;
        this.filteredMembers = [...this.listMember];
      },
      error: err => {
        console.log(err);
        
      }
    });
  }
  }

  selectedMemberID!: string ;


  // Method to handle competition code change event
  onCompetitionCodeChange(event: any): void {
    const selectedCode = event.target.value;
    const competitionCode = event.target.value;
    const memberID = this.selectedMemberID;

    this.addHuntingEvent.emit({ competitionCode, memberID });

  if (selectedCode) {
    this.selectedCompetitionCode = selectedCode;
    this.loadMembers();
  }
  }

  getAllMembers(){
    this.memberService.getAllMember().subscribe({
      next: data => {
        console.log(data);
        this.listMember = data;
      },
      error: err => {
        console.log(err);
        
      }
    })
  }

  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe({
      next: data => {
        console.log(data);
        this.listCompetition = data
        
      }, 
      error: err => {
        console.log(err);
        
      }
    })
  }




  deleteMember(member: MemberResponse){
    if(confirm("etes vous sure?"))
    this.memberService.deleteMember(member).subscribe({
      next: value => {
        this.getAllMembers();
        //this.listMember.filter(c => c.num != member.num);
        location.reload();
      }
    });
  }


  // toggle : 
  isPopupVisible = false;

  openPopup(){
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }
  

}
