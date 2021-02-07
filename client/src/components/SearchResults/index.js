import React from 'react';
import "./style.css";
import { Card } from "react-bootstrap";
import API from "../../utils/API";
import ReactTextCollapse from "react-text-collapse";

function SearchResults(props) {
    // console.log(props.books);
    
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleSaveBook(saveBook) {
        console.log(saveBook);

        API.saveBook(saveBook)
        .then(res => console.log("Book successfully saved!") )
        .then(res => alert("This book has been saved!"))
        .catch(err => console.log(err));
    }
    
    const TEXT_COLLAPSE_OPTIONS = {
        collapse: true, // default state when component rendered
        collapseText: "... show more", // text to show when collapsed
        expandText: "show less", // text to show when expanded
        minHeight: 80, // component height when closed
        maxHeight: 150,
        textStyle: {
            // pass the css for the collapseText and expandText here
            color: "blue",
            fontSize: "16px",
        },
    };
    

    return (
        <div>
            {props.books.map( (res, index) => {
                let id = index+1;
                return (
                    <div key={id} className="container" style={{  }}>
                    <Card className="resultsContainer" style={{backgroundColor: 'white'}}>
                        <Card.Body as="div">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <Card.Title>
                                        Title: {res.volumeInfo.title} 
                                        <span className="saveBtn btn" title="Save Book"
                                            onClick={() => handleSaveBook({            
                                                title: res.volumeInfo.title,
                                                authors: res.volumeInfo.authors,
                                                description: res.volumeInfo.description,
                                                image: res.volumeInfo.imageLinks.thumbnail,
                                                link: res.volumeInfo.infoLink
                                            })} > 
                                            <i className="fa fa-save fa-lg"></i> 
                                        </span>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Authors: {res.volumeInfo.authors}</Card.Subtitle>
                                    <Card.Text>
                                        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}> 
                                            Description: {res.volumeInfo.description}
                                        </ReactTextCollapse>
                                    </Card.Text>
                                    <div style={{ marginTop: '80px' }}>
                                        <Card.Link href={res.volumeInfo.infoLink} style={{ position: 'absolute', bottom: '0', left: '0' }} > 
                                            Check it out on Google
                                        </Card.Link>
                                    </div>

                                </div>

                                <div className="col-sm-6 col-12">
                                    <img 
                                        className="bookPhoto"
                                        src={res.volumeInfo.imageLinks.thumbnail} 
                                        alt={res.title}
                                    />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                )
            })} 
        </div>
    );
}

export default SearchResults;