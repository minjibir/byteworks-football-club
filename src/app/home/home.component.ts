import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService
      .getMatches()
      .subscribe(
        res => console.table(res),
        err => console.error(err.message, err)
      );
  }

}
