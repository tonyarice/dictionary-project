import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if(props.photos) {
    console.log(props.photos);    
    return <section className="Photos">
        <div className="row">
            {props.photos.map(function(photo, index) {
                return (
                    <div className="col-4" key={index}><a href={photo.src.original} alt="picture" target="_blank" rel="noreferrer">
                <img src={photo.src.landscape}className="img-fluid" alt="definition-image" /></a>
                </div>
                );

            })}
            </div> 
            </section>
    } else {
        return null;
    }
     
}