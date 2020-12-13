import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import { Card } from "react-bootstrap";
import "../components/SearchResults/style.css";

function Saved() {
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // API call to database
    function loadBooks() {
        API.getBooks()
        .then(res => setBooks(res.data) )
        .catch(err => console.log(err));

        console.log(books);
    }

    function handleDeleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks() )
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h2> Saved Books </h2>

            {books.map( (res, index) => {
                let id = index+1;
                return (
                    <Card key={id} className="resultsContainer" border="dark">
                        <Card.Body>
                            <Card.Title> 
                                Title: {res.title} 
                                <div className="deleteBtn btn" title="Delete Book"
                                    onClick={() => handleDeleteBook(id)} > 
                                    <i className="fa fa-trash"></i> 
                                </div>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Authors: {res.authors}</Card.Subtitle>
                            <Card.Text>
                                Description: {res.description}
                            </Card.Text>
                            {/* <Card.Img src={res.image} >  </Card.Img> */}
                            <Card.Link href={res.link} > {res.title} </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })} 

        </div>
    );
}

export default Saved;