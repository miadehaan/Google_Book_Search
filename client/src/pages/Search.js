import React, { useState, useEffect } from 'react';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import bg from "../assets/unsplashImg.jpg";

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
        <div >
        
            <div style={{  
                backgroundImage: `url(${bg})`, 
                height: '200px', 
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                
            }}
            >
                <SearchForm 
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    results={search}
                />
            </div>

            <SearchResults books={results} searched={search}/>
            
        </div>
    );
}

export default Search;