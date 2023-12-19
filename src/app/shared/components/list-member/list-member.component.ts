import { Component, OnInit } from '@angular/core';
import { MemberResponse } from 'src/app/models/MemberResponseModels';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit{

  listMember: Array<MemberResponse> = []

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
    this.getAllMembers();
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
  

}
