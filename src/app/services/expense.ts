export class Expense{
    exp:string;
    price:number;
    Date:string;
    Day:string;
    next:Expense;
    constructor(expense,price,date,day){
        this.exp= expense;
        this.price = price;
        this.Date = date;
        this.Day= day;
        this.next = null;
    }
}