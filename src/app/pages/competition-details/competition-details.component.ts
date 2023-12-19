import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {

  competitionId!: number;

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.competitionId = +params['id'];
  // });
  }

}
