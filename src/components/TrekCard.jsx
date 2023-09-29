import React from "react";

function TrekCard(props){
    return(
            <div className="trek">
                <a href="/trek"><img src={props.imgURL} alt="Trek Route"/></a>
                <div className="trek-text">
                    <h3>{props.place}</h3>
                    {props.text}
                </div>
            </div> 
    )
}

export default TrekCard;