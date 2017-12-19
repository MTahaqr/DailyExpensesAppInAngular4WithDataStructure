import { Expense } from './expense';
export class ExpSingleLinkList {

    Header: Expense;
    Pointer: Expense;

    constructor() {
        this.Header = null;
        this.Pointer = null;
    }
    add(exp, price, dates, day) {
        let expence = new Expense(exp, price, dates, day);
        if (this.Header == null) {
            this.Header = expence;
        }
        else {
            this.Pointer.next = expence
        }
        this.Pointer = expence;
        // this.dailyExpDataService.add(this.pointer);
        // this.exp='';
        // this.price=0;

        // console.log(this.Header);

        // this.dailyExpList = this.afDB.list(`UserExpenses/${this.uid}/${this.year}/${this.month}`);
        // this.dailyExpList.push(this.Pointer);
    }
    delete(exp)
        {
            let expNode:Expense;
            let previousExpNode:Expense;
            expNode= this.Header;
            // Node node = this.Header;
            previousExpNode;
            if(this.Header.exp == exp)
            {
                this.Header = expNode.next;
            }
            else
            {
                previousExpNode = this.Header;
                expNode = this.Header.next;
                while (expNode != null)
                {
                    if(expNode.exp == exp)
                    {
                        //node = previousExpNode.next.next;
                        //node = node.next.next;
                        previousExpNode.next = expNode.next;
                        break;
                    }
                    previousExpNode = previousExpNode.next;
                    expNode = expNode.next;
                }
                
            }
                        console.log(this.Header);
            
        }
}