import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
   
    if (props.results) {
    return (
     
    <div className="Results">
        <section className="book">
       <section className="answers">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
            return (
                <div key={index}>
                    <Phonetic phonetic={phonetic} />
                    </div>
            );
        })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
            return (
                <section className="answers" key={index}>
                    <Meaning meaning={meaning} />
                 </section>   
                    
            );
        })}
        </section>
        </div>
        
            );
            
}  else {
    return null;
    }
    
}
