import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0])
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
       
    }

function search(event) {
    event.preventDefault();
    // alert(`Searching for definition of ${keyword}.`);
    //documentation" http://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001304f6c49c87d460e8dffdb8cee65580f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
}

function handleKeywordChange(event) { 
    //need to set state to keep this to use later
    setKeyword(event.target.value);
}
    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." />
                </form>
                <div className="hint">
                    suggested words: sunset, flower, truck...
                </div>
                </section> 
                <div>
                    <Results results={results} />
                    <Photos photos={photos} />
               </div>
                </div>
    );
}