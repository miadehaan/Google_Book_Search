import React from 'react';
import "./style.css";
import { Card } from "react-bootstrap";

function SearchResults() {
    return (
        <div >
            <h3>Results </h3>
            <Card className="resultsContainer">
                <Card.Body>
                    <Card.Title>Book Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Authors</Card.Subtitle>
                    <Card.Text>
                        Description: Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* <Card.Img>  </Card.Img> */}
                    <Card.Link href="#">Google Books Link</Card.Link>
                </Card.Body>
            </Card>

        </div>

    );
}

export default SearchResults;