import { Component, OnInit } from '@angular/core';
import {ExpDoubleLinkList} from '../../services/expDoubleLinkList';

@Component({
  selector: 'app-review-current-exp',
  templateUrl: './review-current-exp.component.html',
  styleUrls: ['./review-current-exp.component.css']
})
export class ReviewCurrentExpComponent implements OnInit {

  curExpList=[];
  constructor(
    private expDoubleLinkList:ExpDoubleLinkList) {
      this.curExpList= this.expDoubleLinkList.curExpList;
   }

  ngOnInit() {
  }
  delete(exp){
    this.expDoubleLinkList.Delete(exp);
  }
  printInOppDirec(){
    this.expDoubleLinkList.printInOppDirec();
  }
 

  

}
