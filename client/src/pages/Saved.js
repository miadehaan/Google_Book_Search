import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import "./saved.css";
import { Card } from "react-bootstrap";
import "../components/SearchResults/style.css";
import NoSearches from "../components/NoSearches";

function Saved() {
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    });

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
        .then(res => alert("This book has been deleted!"))
        .catch(err => console.log(err));
    }

    return (
        <div style={{  
            backgroundColor: '#1F2041',
            backgroundImage: '-webkit-linear-gradient(40deg, #FEF5EF 50%, #98B6B1 50%)',
            paddingBottom: '150px'
            }}
        >
            <h2 style={{ fontFamily: ' "Gloria Hallelujah", cursive ', 
                    color: 'white', 
                    textShadow: '1px 2px 1px black',
                    textAlign: 'center',
                    paddingBottom: '20px',
                    paddingTop: '20px'
                }}
            >
                    Saved Books 
            </h2>

                { books.length === 0 ? 
                    (
                        <>      
                            <h4 style={{ fontFamily: ' "Gloria Hallelujah", cursive ', 
                                color: 'white', 
                                textShadow: '1px 2px 1px black',
                                textAlign: 'center',
                                paddingBottom: '10px',
                                paddingTop: '50px'
                            }}> Save new books here! </h4>    
                            <NoSearches />
                        </>
                    ) : (
                        <>
                        {books.map( res => {
                            return (
                                <div className="container frosted">
                                    <Card key={res._id} className="savedContainer" style={{ background: 'none', border: 'none'}}>
                                        <Card.Body>
                                            <Card.Title> 
                                                Title: {res.title} 
                                                <div className="deleteBtn btn" title="Delete Book"
                                                    onClick={() => handleDeleteBook(res._id)} > 
                                                    <i className="fa fa-trash fa-lg" style={{ textShadow: 'none', paddingBottom: '10px' }} ></i> 
                                                </div>
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Authors: {res.authors}</Card.Subtitle>
                                            <Card.Text>
                                                Description: {res.description}
                                            </Card.Text>
                                            <Card.Img src={res.image} style={{ width: '100px'}} />
                                            <Card.Link href={res.link} > {res.title} </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })} 
                        </>
                    )

                }
        </div>
    );
}

export default Saved;