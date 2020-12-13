import React from 'react';
import "./style.css";
import { Form, Button } from "react-bootstrap";

function SearchForm(props) {

    return (
        <Form className="searchContainer">
            <div className="searchContents">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search for a book</Form.Label>
                    <Form.Control 
                        type="book" 
                        placeholder="Title" 
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="search"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={props.handleFormSubmit}>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default SearchForm;