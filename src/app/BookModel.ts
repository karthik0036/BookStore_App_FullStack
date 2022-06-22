export class Book{
    bookName:string;
    bookAuthor:string;
    bookDescription:string;
    bookLogo:string;
    bookPrice:number;
    bookQuantity:number;

    constructor(bookName:string,bookAuthor:string,bookDescription:string,bookLogo:string,bookPrice:number,bookQuantity:number){
        this.bookName=bookName;
        this.bookAuthor=bookAuthor;
        this.bookDescription=bookDescription;
        this.bookLogo=bookLogo;
        this.bookPrice=bookPrice;
        this.bookQuantity=bookQuantity;

    }
}