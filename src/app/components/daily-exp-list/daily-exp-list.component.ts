import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { DailyExpDataService } from '../../services/daily-exp-data.service';
import { MatTableModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ExpSingleLinkList} from '../../services/expSingleLinkList';




@Component({
  selector: 'app-daily-exp-list',
  templateUrl: './daily-exp-list.component.html',
  styleUrls: ['./daily-exp-list.component.css']
})
export class DailyExpListComponent implements OnInit {

  dailyExpList: Observable<any[]>;
  allExpList = [];
  total: number;
  constructor(
    private dailyExpDataService: DailyExpDataService,
    private  expSingleLinkList:ExpSingleLinkList) {
    this.allExpList = this.dailyExpDataService.allExpLists;
  }

  ngOnInit() {

  }
  deleteExpense(index,exp){
    this.dailyExpDataService.delete(index);
    console.log(exp);
    this.expSingleLinkList.delete(exp);
  }

}
