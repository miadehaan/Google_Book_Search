import React from 'react';
import "./style.css";
import booksGraphic from "../../assets/booksGraphic.svg";

function NoSearches() {
    return (
        <div className="noResultsContainer" >
            <h1> ... </h1>
            <img className="noResultsImg" src={booksGraphic} alt="" />
        </div> 
            
    );
}

export default NoSearches;
