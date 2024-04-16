import React from "react";

function CheckInForm(){
    return (
        <form>
        <div className="nation">
            <div className="choose_nation">
                <label >Nationality:</label>
                <select name="cnation" id="cnation">
                    <option value="nation">Where are you from?</option>
                    <option value="nepal">Nepal</option>
                    <option value="america">America</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="japan">Japan</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="uae">Dubai</option>

                </select>
            </div>
            <div className="check_in">
                <label htmlFor="checkin">Check-In</label>
                <input type="date" id="cindate" name="cindate" />
                <label htmlFor="checkout">Check-Out</label>
                <input type="date" id="coutdate" name="coutdate" />
            </div>
            <div className="search">

                    <button id="b1" type="submit">Search</button>
    
            </div>
        </div>
    </form>
    )
}

export default CheckInForm;