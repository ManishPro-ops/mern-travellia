import React, { useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async () => {
    const city = document.getElementById("city").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (checkout <= checkin) {
      alert("Checkout date must be after check-in date");
      return;
    }

    if (!city || !checkin || !checkout || !guests) {
      alert("Please fill all the fields");
      return;
    }

    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(
      city
    )}&api_key=67f0cca071f2a100007751mjxe80bc7`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        getHotelData(lat, lon, checkin, checkout, guests);
      } else {
        console.log("No location found.");
      }
    } catch (error) {
      console.error("Error fetching geolocation:", error);
    }
  };

  const getHotelData = async (latitude, longitude, checkin, checkout, guests) => {
    const url = `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?children_ages=5%2C0&include_adjacency=true&adults_number=${guests}&checkout_date=${checkout}&filter_by_currency=INR&checkin_date=${checkin}&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&units=metric&order_by=popularity&children_number=2&locale=en-gb&page_number=0&room_number=1&latitude=${latitude}&longitude=${longitude}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "58e3d52b82msh903227370fc4f8bp14af6ejsn7ad09c409acc",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHotels(data.result || []);
    } catch (error) {
      console.error("Failed to fetch hotel data:", error);
    }
  };

  return (
    <div>
      <div className="search-controls">
        <input id="city" placeholder="City" />
        <input id="checkin" type="date" />
        <input id="checkout" type="date" />
        <input id="guests" type="number" placeholder="Guests" />
        <button id="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div id="card-container" className="card-container">
        {hotels.map((hotel) => (
          <div key={hotel.hotel_id} className="card">
            <div className="card-img">
              <img
                src={
                  hotel.max_photo_url ||
                  "https://via.placeholder.com/300x180?text=No+Image"
                }
                alt={hotel.hotel_name}
              />
            </div>
            <div className="card-content">
              <div className="hotel-name">{hotel.hotel_name}</div>
              <div className="location">{hotel.address}</div>
            </div>
            <div className="price-section">
              <p>Price per night</p>
              <div className="price">
                ₹{hotel.price_breakdown?.gross_price || "N/A"}
              </div>
              <Link to={`/hotel/${hotel.hotel_id}`} className="view-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
