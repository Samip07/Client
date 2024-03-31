import { Navbar, CheckInForm, Footer } from "../components";

const Stay = () => {
  return (
    <div>
      <Navbar />

      <div className="trek-page">
        <h2>The Soaltee Hotel</h2>
        <p>Luxurious propert in the heart of capital city of Nepal</p>
        <div className="trek-item">
          <div className="trek-img">
            <img src="img/p13hotel.jpg" />
          </div>
          <div className="stays-description">
            <div className="stays-description-item">
              <h2>Hotel Description:</h2>
              <p>
                The Soaltee Hotel Kathmandu is a luxurious and iconic hotel
                nestled amidst the serene landscapes of Nepal's capital city.
                With its rich heritagehyper and contemporary amenities, it offers a
                perfect blend of traditional charm and modern comfort. Boasting
                elegant rooms, exquisite dining options, and world-class
                facilities like a spa, pool, and fitness center, it ensures an
                unforgettable experience for business and leisure travelers
                alike.
              </p>
            </div>
            <div className="stays-description-item">
              <h2>Amenities:</h2>
              <div className="Amenities">
                <div className="Amenities-item">
                    <span>
                        <img src="img/wifi.png" />
                        <p>Free Wifi</p>
                    </span>
                    <span>
                        <img src="img/parking-area.png" />
                        <p>Parking Space</p>
                    </span>
                    <span>
                        <img src="img/water-boiler.png" />
                        <p>Hot Water</p>
                    </span>
                </div>
                <div className="Amenities-item">
                    <span>
                        <img src="img/toiletries.png" />
                        <p>Toiletries</p>
                    </span>
                    <span>
                        <img src="img/charge.png" />
                        <p>Power Backup</p>
                    </span>
                    <span>
                        <img src="img/watch-tv.png" />
                        <p>TV</p>
                    </span>
                </div>
              </div>
            </div>
            <div className="stays-description-item">
              <h2>Hotel Policies:</h2>
              <ul>
                <li>Check-In: 12pm, Check-Out: 11am</li>
                <li>
                  Guests can check in using any Government issued ID proof
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CheckInForm />
        <div className="stays-main">
          <div className="stays-main-container1">
          <h2>Our location:</h2>
          <div className="stays-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5458415606467!2d85.2908345!3d27.7004284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18609488cdb7%3A0x44edd8fc9a17af63!2sThe%20Soaltee%20Kathmandu!5e0!3m2!1sen!2snp!4v1689961631373!5m2!1sen!2snp"
              width="300"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
          <div className="stays-main-container2">
          <h2>Available Rooms:</h2>
          <div className="stays-location">
            <table>
              <thead></thead>
              <tbody>
              <tr>
                <th >Room Type</th>
                <th>No.of Guests</th>
                <th>Status</th>
              </tr>
              <tr>
                <td >Deluxe King Room -1 large double bed</td>
                <td><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/></td>
                <td><button className="btn-guest">Show Prices</button></td>
              </tr>
              <tr>
                <td >King Suite with Private Balcony and Garden View - 1 King size bed</td>
                <td><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/></td>
                <td><button className="btn-guest">Show Prices</button></td>
              </tr>
              <tr>
                <td >Deluxe Family Room -2 large double bed</td>
                <td><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/></td>
                <td><button className="btn-guest">Show Prices</button></td>
              </tr>
              <tr>
                <td >Deluxe Triple Room - 3 large double bed</td>
                <td><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/><img src="img/user.png" className="guest-img"/></td>
                <td><button className="btn-guest">Show Prices</button></td>
              </tr>
              </tbody>
              <tfoot></tfoot>
              
            </table>
          </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stay;
