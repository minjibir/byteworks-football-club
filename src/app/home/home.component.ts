import { Component, OnInit } from '@angular/core';
import { StandingService } from '../services/standing.service';
import { Leagues } from '../enums/leagues.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leagueCode = Leagues.champion;
  result = null;
  competition: any;
  standing = null;
  index = 0;

  constructor(private standingService: StandingService) { }

  ngOnInit() {
    this.changeLeague(this.leagueCode);
  }

  next(): void {
    if (this.index < this.result.standings.length) {
      this.standing = this.result.standings[++this.index];
    }
  }
  prev(): void {
    if (this.index > 0) {
      this.standing = this.result.standings[--this.index];
    }
  }

  changeLeague(leagueCode: Leagues) {
    this.standingService
      .getTable(this.leagueCode)
      .subscribe(
        res => {
          this.result = res;
          this.competition = this.result.competition;
          this.standing = this.result.standings[this.index];
        },
        err => console.error(err.message, err)
      );
  }

  getGroup(group: string): string {
    return group.split('_')[1];
  }

  getStage(stage: string): string {
    return stage.replace('_', ' ');
  }
}
