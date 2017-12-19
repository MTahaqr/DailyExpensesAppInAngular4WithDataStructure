import { Component, OnInit } from '@angular/core';
import { ExpDoubleLinkList } from '../../services/expDoubleLinkList';


@Component({
  selector: 'app-one-by-one-view',
  templateUrl: './one-by-one-view.component.html',
  styleUrls: ['./one-by-one-view.component.css']
})
export class OneByOneViewComponent implements OnInit {

  constructor(
    private expDoubleLinkList: ExpDoubleLinkList) {
     }

  ngOnInit() {
  }
  forward() {
    this.expDoubleLinkList.forward();
  }
  backward(){
    this.expDoubleLinkList.backward();
    
  }

}
