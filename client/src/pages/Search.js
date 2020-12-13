import React, { useState, useEffect } from 'react';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Search() {
    // state variable
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    // didMount:
    // useEffect(() => {
    //     if (!search) {
    //         return;
    //     }
    // }, [search]); // whenever 'search' state changes, this hook is going to run

    function googleAPI(input) {
        API.getGoogleBook(input)
        .then(res => {
            // console.log(res);

            if (res.data.length === 0) {
                throw new Error("No results found");
            }
            if (res.data.status === "error"){
                throw new Error(res.data.message);
            }
            setResults(res.data);
        })
        .catch(err => console.log("error - not connecting to Google API"));
    }

    const handleInputChange = event => {
        setSearch(event.target.value);
        googleAPI(search);
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(search);

        googleAPI(search);

        // console.log(results);
        // setSearch("");
    };

    return (
        <div>
            <h2> Search for a Book </h2>
        
            <SearchForm 
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                results={search}
            />
            <SearchResults books={results} searched={search}/>
            
        </div>
    );
}

export default Search;