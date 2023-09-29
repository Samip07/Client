import React from "react";
import routes from "../assets/dataFiles/trek";
import TrekCard from "./TrekCard"

function createRoutesCard(route) {
    return  <TrekCard
            key={route.id}
            imgURL={route.img}
            place={route.place}
            text={route.text}
        />
    
}

function Treks(){
    return (
        <section className="quick_destination">
            <h1>Trekking Routes</h1>
            <p>Explore the best trek destinations from city area</p>
            <div className="top_destination">
                {routes.map(createRoutesCard)}
            </div>
        </section>
    )
}

export default Treks;