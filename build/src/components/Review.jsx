import React from "react";

function Review(){
    return (
        <section className="review">

        <p>What we have done for you and what's your reviews for Yatri...</p>
        <div className="customer_review">
            <h2>Your Review for Yatri</h2>
            <input type="text" id="creview" name="name" /><br />
            <button type="submit">Submit</button>
        </div>

    </section>
    )
}

export default Review;