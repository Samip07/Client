import React from "react";

function Destinations(){

    return (
        <section className="destination">
        <h1>Famous Destinations</h1>
        <p>Places to visit to enjoy holiday...</p>
        <div className="famous_destination">
            <div className="ktm">
                <a href="/destination"><img src="img/p2.jpeg" alt="kathmandu" className="select-img"/></a>
                <div className="ktm_text">
                    <h3>Kathmandu</h3>
                </div>
            </div>
            <div className="pkr">
                <a href="/destination"><img src="img/p3.jpg" alt="pokhara" className="select-img" /></a>
                <div className="pkr_text">
                    <h3>Pokhara</h3>
                </div>
            </div>
        </div>
        <div className="famous_destination2">
            <div className="lumbini">
                <a href="/destination"><img src="img/p4.jpg" alt="lumbini" className="select-img" /></a>
                <div className="lumbini_text">
                    <h3>Lumbini</h3>
                </div>
            </div>
            <div className="bandipur">
            <a href="/destination"><img src="img/p5.jpg" alt="bandipur" className="select-img" /></a>
                <div className="bandipur_text">
                    <h3>Bandipur</h3>
                </div>
            </div>
            <div className="chitwan">
            <a href="/destination"><img src="img/p6.jpg" alt="chitwan" className="select-img" /></a>
                <div className="chitwan_text">
                    <h3>Chitwan</h3>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Destinations;