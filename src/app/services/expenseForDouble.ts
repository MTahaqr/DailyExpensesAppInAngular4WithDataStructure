export class ExpenseForDouble {
    exp: string;
    price: number;
    Date: string;
    Day: string;
    next: ExpenseForDouble;
    previousNode: ExpenseForDouble;
    constructor(expense, price, date, day) {
        this.exp = expense;
        this.price = price;
        this.Date = date;
        this.Day = day;
        this.next = null;
        this.previousNode = null;
    }
}