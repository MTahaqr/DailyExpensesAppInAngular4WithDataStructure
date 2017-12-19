import { Component, OnInit } from '@angular/core';
import { ExpDoubleLinkList } from '../../services/expDoubleLinkList';


@Component({
  selector: 'app-search-expense',
  templateUrl: './search-expense.component.html',
  styleUrls: ['./search-expense.component.css']
})
export class SearchExpenseComponent implements OnInit {

  exp='';
  constructor(
    private expDoubleLinkList: ExpDoubleLinkList
  ) { }

  ngOnInit() {
  }
  search(){
    this.expDoubleLinkList.search(this.exp);
  }

}
