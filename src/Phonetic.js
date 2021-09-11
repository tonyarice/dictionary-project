import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} className="sound" target="_blank" rel="noreferrer">
                Listen
                </a>
            <span className="pronounce">/{props.phonetic.text}/</span>
            </div>
    );
}