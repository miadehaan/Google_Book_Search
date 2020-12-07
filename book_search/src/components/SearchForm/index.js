import React from 'react';
import "./style.css";
import { Form, Button } from "react-bootstrap";

function SearchContainer() {
    return (
        <Form className="searchContainer">
            <div className="searchContents">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search for a book</Form.Label>
                    <Form.Control type="book" placeholder="Enter Book Title" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default SearchContainer;