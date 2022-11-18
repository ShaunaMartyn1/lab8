import React from "react";
import {BookItem} from "./bookItem";

export class Books extends React.Component{
    render(){
        return this .props.books.map(
            (book)=>{
                //passing a unique ID book everytime instead of isbn 
                return <BookItem book = {book}> key ={book._id}</BookItem>
            }
        );
    }
}