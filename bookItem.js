import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export class BookItem extends React.Component{
    render(){
        return(
        <div>
            {/*<h3>{this.props.book.title}</h3>
            <img src = {this.props.book.book.thumbnailUrl}></img>
        <h6>{this.props.book.autjors[0]}</h6>*/}
    <Card>
            <Card.Header >{this.props.book.title}</Card.Header>
      <Card.Body>
        <img src = {this.props.book.cover}></img>
        <footer>
            {this.props.book.author}  
        </footer>  
        
      </Card.Body>
      {/* link to localhost3000/edit* from read when new edit button is clicked/*/}
      <Link to={'/edit/'+this.props.book._id} className = "btn btn-primary">Edit</Link>
    </Card>
</div>

        );
    }
}