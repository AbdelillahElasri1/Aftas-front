import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberRequest } from 'src/app/models/MemberRequestModels';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit{
  @Output() closePopup = new EventEmitter<void>();
  close(){
    this.closePopup.emit();
  }
  public memberForm!: FormGroup;

  constructor(
     private memberService: MemberService,
     private fb: FormBuilder,
     private datePipe: DatePipe
     ){}

  ngOnInit() {
    this.memberForm = this.fb.group({
      name: this.fb.control('',[Validators.required]),
      familyName: this.fb.control('',[Validators.required]),
      accessionDate: this.fb.control('',[Validators.required]),
      nationality: this.fb.control('',[Validators.required]),
      identifyDocumentType: this.fb.control('',[Validators.required]),
      identifyNumber: this.fb.control('',[Validators.required]),
      
    })
  }

  
 

  saveMember(){
    let member : MemberRequest = this.memberForm.value;
    this.memberService.saveMember(member).subscribe({
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
