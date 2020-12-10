import React, { useContext } from 'react';
import "./style.css";
import { Card } from "react-bootstrap";

function SearchResults(props) {
    // console.log(props);

    return (
        <div >
            <h3>Results </h3>
            <Card className="resultsContainer">
                <Card.Body>
                    <Card.Title>Title: {props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Authors: {props.authors}</Card.Subtitle>
                    <Card.Text>
                        Description: {props.description}
                    </Card.Text>
                    {/* <Card.Img>  </Card.Img> */}
                    <Card.Link href="#">Google Books Link: {props.link}</Card.Link>
                </Card.Body>
            </Card>

        </div>

    );
}

export default SearchResults;