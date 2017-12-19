import { ExpenseForDouble } from './expenseForDouble';
export class ExpDoubleLinkList {
    Header: ExpenseForDouble;
    Pointer: ExpenseForDouble;
    previousNode: ExpenseForDouble;
    currentNode: ExpenseForDouble;

    curExpList = [];
    expOBj: any = {};
    searchOBj: any = {};
    start = 0;
    end = 0;
    print=false;
    constructor() {
        this.Header = null;
        this.Pointer = null;
        this.previousNode = null;
    }

    add(exp, price, date, day) {
        let node: ExpenseForDouble;
        node = new ExpenseForDouble(exp, price, date, day);

        if (this.Header == null) {
            this.Header = node;
            this.Pointer = node;
        }
        else {
            this.Pointer.next = node;
            node.previousNode = this.Pointer;
            this.Pointer = this.Pointer.next;
        }
        this.Print();
    }

    Print() {
        let printNode: ExpenseForDouble;
        printNode = this.Header;
        this.curExpList.length = 0;
        while (printNode != null) {
            this.curExpList.push(printNode)
            printNode = printNode.next;
        }
    }
    Delete(exp) {
        let deleteNode: ExpenseForDouble
        deleteNode = this.Header;
        if (this.Header.exp == exp) {
            this.Header = this.Header.next;
        }
        else if (this.Pointer.exp == exp) {
            this.Pointer = this.Pointer.previousNode;
            this.Pointer.next = null;
        }

        while (deleteNode != null) {
            if (deleteNode.exp == exp) {
                deleteNode.previousNode.next = deleteNode.next;
                deleteNode.next.previousNode = deleteNode.previousNode;
            }
            deleteNode = deleteNode.next;
        }
        this.Print();
    }

    forward() {
        if (this.start == 0) {
            this.currentNode = this.Header;
            this.expOBj = this.Header;
            this.start++;
        }
        else {
            if (this.currentNode.next != null) {
                this.currentNode = this.currentNode.next;
                this.expOBj = this.currentNode;
            }
        }
    }
    backward() {
        if (this.end == 0) {
            this.currentNode = this.Pointer;
            this.expOBj = this.Pointer;
            this.end++;
        }
        else {
            if (this.currentNode.previousNode != null) {
                this.currentNode = this.currentNode.previousNode;
                this.expOBj = this.currentNode;
            }
        }
    }
    search(exp) {
        let searchNode: ExpenseForDouble = this.Header;
        while (searchNode != null) {
            if (searchNode.exp == exp) {
                this.searchOBj = searchNode;
                break;
            }
            searchNode = searchNode.next;
        }
        if (searchNode == null) {
            alert("Value doesn't Exists");
        }
    }

    printInOppDirec() {
        if(!this.print){
            this.printReverse();
            this.print=!this.print
        }
        else{
            this.Print();
            this.print=!this.print;
        }

    }
    printReverse() {
        let printNode: ExpenseForDouble = this.Pointer;
        this.curExpList.length = 0;
        while (printNode != null) {
            this.curExpList.push(printNode)
            printNode = printNode.previousNode;
        }
    }
}


//  public void Search(int Value)
//         {
//             Node searchNode = Header;
//             while (searchNode != null)
//             {
//                 if (searchNode.value == Value)
//                 {
//                     Console.WriteLine("Value Exists");
//                     break;
//                 }
//                 searchNode = searchNode.next;
//             }

//             if (searchNode == null)
//             {
//                 Console.WriteLine("Value doesn't Exists");
//             }
//         }

//         public void Print()
//         {
//             Node printNode = Header;
//             while (printNode != null)
//             {
//                 Console.WriteLine(printNode.value);
//                 printNode = printNode.next;
//             }
//         }

//         public void ReversePrint()
//         {
//             Node printNode = Pointer;
//             while (printNode != null)
//             {
//                 Console.WriteLine(printNode.value);
//                 printNode = printNode.previous;
//             }
//         }