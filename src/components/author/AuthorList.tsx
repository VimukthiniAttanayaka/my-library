import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../types/LibraryTypes";
import Author from "./Author";

const AuthorList:React.FC = () => {
    const authors:IAuthor[] = [
        {name:"vimu"},
        {name:"vimu"},
        {name:"vimu"},
    ]

    const randerAuthor = () => {
        if(authors.length==0){
            return(
                <p className="empty-author mt-2"><i>No Author Listed Here</i></p>
            )
        }
        else{
            return(
                <ul className="p-3 m-0">
                {
                    authors.map((author:IAuthor, index:number) =>
                            <Author author={author} index={index} key={index}/>
                    )
                }
                </ul>
            )
        }
    }
    return (
        <Row>
            <Col xs={12} className="p-0">
                {randerAuthor()}
            </Col>
        </Row>
    )
}
export default AuthorList;