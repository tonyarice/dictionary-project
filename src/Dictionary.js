import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0])
    }

function search(event) {
    event.preventDefault();
    // alert(`Searching for definition of ${keyword}.`);

    //documentation" http://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
    
    //need to set state to keep this to use later
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                </form>
                <Results results={results} />
               
                </div>
    );
}