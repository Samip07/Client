import { Navbar,TrekCard,Footer } from "../components"
// import trekking from "../assets/dataFiles/navTrek";

// function createTrekItem(trekkings){
    
// }

const Trek = () => {


  return (
    <div>
        <Navbar />

        <div className="trek-page">
                    <h2>Khumai Dada Trek</h2>
                    <p>A Short Popular Trek Route (Est. 3-4 days)</p>
                <div className="trek-item">
                    <div className="trek-img">
                        <img src="img/p7.jpg"/>
                    </div>
                    <div className="trek-itinery">
                        <h2>Trek Itinery:</h2>
                        <ul>
                            <li>Day 1: Take Flight/Bus from Kathmandu to Pokhara</li>
                            <li>Day 2:Drive from Pokhara to Hemja and trek to Hile Kharka via Ghachowk</li>
                            <li>Day 3: Trek from Hile to Khumai Danda (3245m)</li>
                            <li>Day 4: Hike to Korchan Danda (3700m) and hike down to Ghachowk and drive to Pokhara</li>
                        </ul>
                    </div>
                </div>
                <div className="trek-guides">
                    <h2>Available Guides:</h2>
                    <div className="trek-guides-container">
                        <div className="trek-guides-item">
                            <img src="img/mingma.jpg" alt="guide"/>
                            <h2>Mingma David Sherpa</h2>
                            <p>Languages Spoken: English, Indian, Chinese, Japanese</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/nisha.jpg" alt="guide"/>
                            <h2>Manisha Chhettri</h2>
                            <p>Languages Spoken: English, Korean</p>
                        </div>
                    </div>
                </div>
        </div>





        {/* 2nd trek */}
        <div className="trek-page">
                    <h2>Mardi Himal Trek</h2>
                    <p>A Short Popular Trek Route (Est. 5-7 days)</p>
                <div className="trek-item">
                    <div className="trek-img">
                        <img src="img/p8.jpg"/>
                    </div>
                    <div className="trek-itinery">
                        <h2>Trek Itinery:</h2>
                        <ul>
                            <li>Day 1: Take Flight/Bus from Kathmandu to Pokhara</li>
                            <li>Day 2:Drive from Pokhara to Phedi and trek to Deurali (2200m, about 3 to 4 hours trek)</li>
                            <li>Day 3: Trek to Low Camp (2,900m);7 hours walking.</li>
                            <li>Day 4: Trek to High Camp (3585m) 5-6 hours trekking.</li>
                            <li>Day 5: Hike Mardi Himal BC (4500m); back to Middle Camp (3200m)</li>
                            <li>Day 6: Trek to Kalimaati (1,750m) 6 to 7 hours walking and drive back to Pokhara.</li>
                        </ul>
                    </div>
                </div>
                <div className="trek-guides">
                    <h2>Available Guides:</h2>
                    <div className="trek-guides-container">
                        <div className="trek-guides-item">
                            <img src="img/tshiring.jpg" alt="guide"/>
                            <h2>Anil Shrestha</h2>
                            <p>Languages Spoken: English, Spanish, French</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/nisha.jpg" alt="guide"/>
                            <h2>Manisha Chhettri</h2>
                            <p>Languages Spoken: English, Korean</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/hari.jpg" alt="guide"/>
                            <h2>Santosh Magar</h2>
                            <p>Languages Spoken: English, Indian, Korean</p>
                        </div>
                    </div>
                </div>
        </div>





        {/* 3rd trek */}
        <div className="trek-page">
                    <h2>Gosainkunda Trek</h2>
                    <p>A Short Popular Trek Route (Est. 5-6 days)</p>
                <div className="trek-item">
                    <div className="trek-img">
                        <img src="img/p9.jpeg"/>
                    </div>
                    <div className="trek-itinery">
                        <h2>Trek Itinery:</h2>
                        <ul>
                            <li>Day 1: Drive from Kathmandu to Dhunche</li>
                            <li>Day 2:Drive from Pokhara to Phedi and trek to Deurali (2200m, about 3 to 4 hours trek)</li>
                            <li>Day 3: Trek to Low Camp (2,900m);7 hours walking.</li>
                            <li>Day 4: Trek to High Camp (3585m) 5-6 hours trekking.</li>
                            <li>Day 5: Hike Mardi Himal BC (4500m); back to Middle Camp (3200m)</li>
                            <li>Day 6: Trek to Kalimaati (1,750m) 6 to 7 hours walking and drive back to Pokhara.</li>
                        </ul>
                    </div>
                </div>
                <div className="trek-guides">
                    <h2>Available Guides:</h2>
                    <div className="trek-guides-container">
                        <div className="trek-guides-item">
                            <img src="img/tshiring.jpg" alt="guide"/>
                            <h2>Anil Shrestha</h2>
                            <p>Languages Spoken: English, Spanish, French</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/nisha.jpg" alt="guide"/>
                            <h2>Manisha Chhettri</h2>
                            <p>Languages Spoken: English, Korean</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/hari.jpg" alt="guide"/>
                            <h2>Santosh Magar</h2>
                            <p>Languages Spoken: English, Indian, Korean</p>
                        </div>
                    </div>
                </div>
        </div>





        {/* 4th trek */}
        <div className="trek-page">
                    <h2>Annapurna Base Camp Trek</h2>
                    <p>One Of The Best Trek Route (Est. 7-10 days)</p>
                <div className="trek-item">
                    <div className="trek-img">
                        <img src="img/abc.jpg"/>
                    </div>
                    <div className="trek-itinery">
                        <h2>Trek Itinery:</h2>
                        <ul>
                            <li>Day 1: Drive from Kathmandu to Pokhara</li>
                            <li>Day 2: Drive to Phedi and hike to Tolka (1750m), 5-6 hrs walk.</li>
                            <li>Day 3: Trek to Sinuwa (Altitude 2100m) – 5-7 hours walk</li>
                            <li>Day 4: Trek to Deurali (Altitude 3230m) 6-7 hrs walk.</li>
                            <li>Day 5: Trek to ABC (Annapurna Base Camp) Elevation 4130m, walk 5-6 hrs.</li>
                            <li>Day 6: Trek down to Dovan – Bamboo (2310m). 6-7 hrs walk.</li>
                            <li>Day 7: Trek to Ghandruk (1940m), 7-8 hours walk.</li>
                            <li>Day 8: Drive to Pokhara / Kathmandu.</li>
                        </ul>
                    </div>
                </div>
                <div className="trek-guides">
                    <h2>Available Guides:</h2>
                    <div className="trek-guides-container">
                        <div className="trek-guides-item">
                            <img src="img/nims.jpg" alt="guide"/>
                            <h2>Nirmal Purja</h2>
                            <p>Languages Spoken: English, Korean, Chinese</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/tshiring.jpg" alt="guide"/>
                            <h2>Anil Shrestha</h2>
                            <p>Languages Spoken: English, Spanish, French</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/hari.jpg" alt="guide"/>
                            <h2>Santosh Magar</h2>
                            <p>Languages Spoken: English, Indian, Korean</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/mingma.jpg" alt="guide"/>
                            <h2>Mingma David Sherpa</h2>
                            <p>Languages Spoken: English, Indian, Chinese, Japanese</p>
    
                        </div>
                    </div>
                </div>
        </div>
       




        {/* 5th trek */}
        <div className="trek-page">
                    <h2>Panch Pokhari</h2>
                    <p>A Short Popular Trek Route (Est. 4-5 days)</p>
                <div className="trek-item">
                    <div className="trek-img">
                        <img src="img/p11_panchpokhari.jpg"/>
                    </div>
                    <div className="trek-itinery">
                        <h2>Trek Itinery:</h2>
                        <ul>
                            <li>Day 1: Drive from Kathmandu to Bhotang Village (1800 meters)</li>
                            <li>Day 2: Trek to Nasimpati</li>
                            <li>Day 3: Trek to Panch Pokhari Lakes (4100 meters)</li>
                            <li>Day 4: Trek down to Bhotang village</li>
                            <li>Day 5: Drive to Kathmandu</li>
                        </ul>
                    </div>
                </div>
                <div className="trek-guides">
                    <h2>Available Guides:</h2>
                    <div className="trek-guides-container">
                        <div className="trek-guides-item">
                            <img src="img/tshiring.jpg" alt="guide"/>
                            <h2>Anil Shrestha</h2>
                            <p>Languages Spoken: English, Spanish, French</p>
                        </div>
                        <div className="trek-guides-item">
                            <img src="img/hari.jpg" alt="guide"/>
                            <h2>Santosh Magar</h2>
                            <p>Languages Spoken: English, Indian, Korean</p>
                        </div>
                    </div>
                </div>
        </div>





        <Footer />
    </div>
  )
}


export default Trek;