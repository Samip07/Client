import React from "react";

function HotelCard(props){
    return (
        <div className="hotel-item">
          <a href="/stay"><img src={props.imgURL} alt="hotel" /></a>
          <div className="hotel-text">
            <h3>{props.name}</h3>
            <p>{props.standard}</p>
            <h4 className="before-discount">{props.beforePrice}</h4>
            <h4 className="after-discount">{props.afterPrice}</h4>
          </div>
        </div>
    )
}

export default HotelCard;