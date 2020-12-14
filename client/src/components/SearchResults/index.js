import React from 'react';
import "./style.css";
import { Card } from "react-bootstrap";
import API from "../../utils/API";

function SearchResults(props) {
    console.log(props.books);
    
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleSaveBook(saveBook) {
        console.log(saveBook);

        API.saveBook(saveBook)
        .then(res => console.log("Book successfully saved!") )
        .then(res => alert("This book has been saved!"))
        .catch(err => console.log(err));
    }
    

    return (
        <div>
            <h3>Results for: {props.searched}</h3>
            
            {props.books.map( (res, index) => {
                let id = index+1;

                return (
                    <Card key={id} className="resultsContainer" border="dark">
                        <Card.Body>
                            <Card.Title>
                                Title: {res.volumeInfo.title} 
                                <div className="saveBtn btn" title="Save Book"
                                    onClick={() => handleSaveBook({            
                                        title: res.volumeInfo.title,
                                        authors: res.volumeInfo.authors,
                                        description: res.volumeInfo.description,
                                        image: res.volumeInfo.imageLinks.thumbnail,
                                        link: res.volumeInfo.infoLink
                                    })} > 
                                    <i className="fa fa-save"></i> 
                                </div>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Authors: {res.volumeInfo.authors}</Card.Subtitle>
                            <Card.Text>
                                Description: {res.volumeInfo.description}
                            </Card.Text>
                            {/* <Card > <img src={res.volumeInfo.imageLinks.thumbnail} alt="book image"> </img> </Card> */}
                            <Card.Link href={res.volumeInfo.infoLink} > {res.volumeInfo.title} </Card.Link>
                        </Card.Body>
                    </Card>

                )
            })} 

        </div>

    );
}

export default SearchResults;