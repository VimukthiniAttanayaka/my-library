import React from "react";
import { Row, Col } from "react-bootstrap";
import { IBook } from "../types/LibraryTypes";
import Book from "./Book";

const BookList:React.FC = () => {
    const books:IBook[] = [
        {name:"vimu",price:"532745",author:"hftgyt"},
        {name:"vimu",price:"532745",author:"hftgyt"},
        {name:"vimu",price:"532745",author:"hftgyt"},
    ]

    const randerBook = () => {
        if(books.length==0){
            return(
                <p className="empty-book mt-2"><i>No Book Listed Here</i></p>
            )
        }
        else{
            return(
                <ul className="p-3 m-0">
                {
                    books.map((book:IBook, index:number) =>
                            <Book book={book} index={index} key={index}/>
                    )
                }
                </ul>
            )
        }
    }
    return (
        <Row>
            <Col xs={12} className="p-0">
                {randerBook()}
            </Col>
        </Row>
    )
}
export default BookList;