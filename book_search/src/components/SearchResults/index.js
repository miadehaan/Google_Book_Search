import React from 'react';
import "./style.css";
import { Card } from "react-bootstrap";

function SearchResults(props) {
    console.log(props.books);

    return (
        <div >
            <h3>Results for: {props.searched}</h3>
            
            {props.books.map( (res, index) => {
                let id = index+1;
                return (
                    <Card key={id} className="resultsContainer">
                        <Card.Body>
                            <Card.Title>Title: {res.volumeInfo.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Authors: {res.volumeInfo.authors}</Card.Subtitle>
                            <Card.Text>
                                Description: {res.volumeInfo.description}
                            </Card.Text>
                            {/* <Card.Img href={res.volumeInfo.imageLinks.thumbnail} >  </Card.Img> */}
                            <Card.Link href={res.volumeInfo.infoLink} > {res.volumeInfo.title} </Card.Link>
                        </Card.Body>
                    </Card>

                )
            })} 

        </div>

    );
}

export default SearchResults;