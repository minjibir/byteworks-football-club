import { Component, OnInit } from '@angular/core';
import { StandingService } from '../services/standing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  standings: [];
  tables: [];
  index = 0;

  constructor(private standingService: StandingService) { }

  ngOnInit() {
    this.standingService
      .getTable('CL')
      .subscribe(
        res => {
           this.standings = res.standings;
           this.tables = res.standings
            .map(s => s.table.map(e => e))
            .filter(t => t !== undefined);
           this.tables.forEach(e => console.log(e));
        },
        err => console.error(err.message, err)
      );


  }

  async getTables() {
    // this.tables = await  
  }

  nextGroup(standing: any) {
    this.index++;
  }

}
