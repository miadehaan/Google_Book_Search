import React from 'react';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Search() {





    return (
        <div>
            <h1> Search for a Book </h1>
            <SearchForm />
            <SearchResults />
        </div>
    );
}

export default Search;