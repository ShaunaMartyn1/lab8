import React from "react";
import {Books} from './books';
import axios from "axios";

export class Read extends React.Component{

    /* reads in data from URL   */
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=> {
            this.setState({books:response.data})//took out myBookd
        })
        .catch((error)=>{
            console.log(error);//log errors to console
        });
    }
    /* Empty array of books  */
    state = {
        books:[]
            
    }

     
    render()
    {
        return(
            <div>
                <h3>Hello from Read Component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}