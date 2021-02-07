import React, { useState } from 'react';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import NoSearches from "../components/NoSearches";

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
        .catch(err => console.log(err));
    }

    const handleInputChange = event => {
        setSearch(event.target.value);
        // googleAPI(search);
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(search);

        googleAPI(search);

        // clear input form
        setSearch("");
    };

    return (
        <div style={{  
            backgroundColor: '#1F2041',
            backgroundImage: '-webkit-linear-gradient(40deg, #FEF5EF 50%, #B4C5E4 50%)',
        }}>
        
            <div style={{ paddingBottom: '200px'}}>
                <SearchForm 
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    results={search}
                />
            
                { results.length === 0 ? 
                (   <>      
                    <h3 style={{ fontFamily: ' "Gloria Hallelujah", cursive ', 
                        color: 'white', 
                        textShadow: '1px 2px 1px black',
                        textAlign: 'center',
                        paddingBottom: '10px',
                        paddingTop: '10px'
                    }}> Search for a book! </h3>    
                    <NoSearches />
                    </>
                ) : (
                    <SearchResults books={results} searched={search} />
                )}
                
            </div>   
        </div>
    );
}

export default Search;