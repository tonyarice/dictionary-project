import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault();
    alert(`Searching for definition of ${keyword}.`);
}

function handleKeywordChange(event) {
    console.log(event.target.value);
    //need to set state to keep this to use later
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                </form>
                </div>
    );
}