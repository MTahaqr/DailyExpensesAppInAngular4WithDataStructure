import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DailyExpDataService } from '../../services/daily-exp-data.service';
import {ExpSingleLinkList} from '../../services/expSingleLinkList';
import {ExpDoubleLinkList} from '../../services/expDoubleLinkList';



@Component({
  selector: 'app-save-daily-exp',
  templateUrl: './save-daily-exp.component.html',
  styleUrls: ['./save-daily-exp.component.css']
})
export class SaveDailyExpComponent implements OnInit {


  showTxtBox = false;

  // dailyExpForm;
  exp: string;
  price: number;
  dates: String;
  day: string;
  blankForm;
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // header: Expense;
  // pointer: Expense;

  constructor(
    private dailyExpDataService: DailyExpDataService,
    private expSingleLinkList:ExpSingleLinkList,
    private expDoubleLinkList:ExpDoubleLinkList) {
    this.dates = ((new Date).getDate()) + '-' + this.months[(new Date).getMonth()];
    this.day = this.weekdays[(new Date).getDay()];
    // this.header = null;
    // this.pointer = null;
  }

  ngOnInit() {
    // this.dailyExpForm = new FormGroup({
    //   exp: new FormControl('', Validators.compose([Validators.required])),
    //   price: new FormControl('', Validators.compose([Validators.required])),
    //   Date: new FormControl(this.dates, Validators.compose([Validators.required])),
    //   Day: new FormControl(this.day, Validators.compose([Validators.required])),
    // });
  }
  add() {
    this.expSingleLinkList.add(this.exp, this.price, this.dates, this.day);
    this.dailyExpDataService.add(this.exp, this.price, this.dates, this.day);
    this.expDoubleLinkList.add(this.exp, this.price, this.dates, this.day);
    this.showTxtBox = !this.showTxtBox;
    

    // ExpSingleLinkList.add()
    // this.dailyExpForm.reset();
    // this.ngOnInit();

    // let expence = new Expense(this.exp, this.price, this.dates, this.day);
    // if (this.header == null) {
    //   this.header = expence;
    // }
    // else {
    //   this.pointer.next = expence
    // }
    // this.pointer = expence;
    // this.dailyExpDataService.add(this.pointer);
    // this.exp='';
    // this.price=0;
    
    // console.log(this.header);


  }
  showTextBox() {
    this.showTxtBox = !this.showTxtBox;
    console.log("ShowTextBox");
  }

}
