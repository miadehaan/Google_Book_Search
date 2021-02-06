import React from 'react';
import "./style.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchForm(props) {
    console.log(props);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <InputGroup className="searchContainer" >
                        <FormControl
                            type="book" 
                            placeholder="Title" 
                            value={props.results || ""}
                            onChange={props.handleInputChange}
                            name="search"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="dark" type="submit" onClick={props.handleFormSubmit}>
                                Submit
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="col-2" />
            </div>
        </div>
        
    );
}

export default SearchForm;