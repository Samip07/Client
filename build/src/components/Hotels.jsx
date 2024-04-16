import React from "react";
import hotels from "../assets/dataFiles/hotels";
import HotelCard from "./HotelCard";

function createHotelCard(hotel) {
  return (
    <HotelCard 
        key={hotel.id}
        name={hotel.name}
        imgURL={hotel.imgURL}
        standard={hotel.standard}
        beforePrice={hotel.beforePrice}
        afterPrice={hotel.afterPrice}
    />
    )
}

function Hotels() {
  return (
    <section className="book">
      <h2>Book Us</h2>
      <p className="para">Choose where do you want to stay....</p>
      <div className="hotel">
        {hotels.map(createHotelCard)}
      </div>
      <button id="bhotel" type="submit">
        View More Hotels
      </button>
    </section>
  );
}

export default Hotels;
