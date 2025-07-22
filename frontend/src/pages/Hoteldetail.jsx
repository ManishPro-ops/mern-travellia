import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Hoteldetail.css";

const Hoteldetail = () => {
  const { id: hotelId } = useParams();

  const [hotelInfo, setHotelInfo] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [mapUrl, setMapUrl] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);

  const headers = {
    "x-rapidapi-key": "58e3d52b82msh903227370fc4f8bp14af6ejsn7ad09c409acc",
    "x-rapidapi-host": "booking-com.p.rapidapi.com",
  };

  const getStarRatingHTML = (review_score) => {
    const rating = review_score / 2;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = "★".repeat(fullStars);
    if (hasHalfStar) stars += "½";
    return stars;
  };

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const dataRes = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=${hotelId}&locale=en-gb`,
          { headers }
        );
        const data = await dataRes.json();
        setHotelInfo(data);
      } catch (err) {
        console.error("Error fetching hotel info", err);
      }
    };

    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=${hotelId}&locale=en-gb`,
          { headers }
        );
        const result = await res.json();
        setImages(result.slice(0, 5));
      } catch (err) {
        console.error("Error loading images", err);
      }
    };

    const fetchDescription = async () => {
      try {
        const res = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/description?locale=en-gb&hotel_id=${hotelId}`,
          { headers }
        );
        const result = await res.json();
        setDescription(result.description);
      } catch (err) {
        console.error("Error loading description", err);
      }
    };

    const fetchFacilities = async () => {
      try {
        const res = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/facilities?locale=en-gb&hotel_id=${hotelId}`,
          { headers }
        );
        const result = await res.json();
        setFacilities(result.slice(0, 10));
      } catch (err) {
        console.error("Error loading facilities", err);
      }
    };

    const fetchMap = async () => {
      try {
        const res = await fetch(
          `https://booking-com.p.rapidapi.com/v1/hotels/map-markers?locale=en-gb&hotel_id=${hotelId}`,
          { headers }
        );
        const result = await res.json();
        setMapUrl(result.map_preview_url);
      } catch (err) {
        console.error("Error loading map", err);
      }
    };

    if (hotelId) {
      fetchHotelData();
      fetchImages();
      fetchDescription();
      fetchFacilities();
      fetchMap();
    }
  }, [hotelId]);

  return (
    <div className="hotel-detail-wrapper">
      {hotelInfo && (
        <div className="hotel-header">
          <div className="location">
            <h2 className="hotel-name">{hotelInfo.name}</h2>
            <img className="location-img" src="location.png" alt="Location" />
            {hotelInfo.address}, {hotelInfo.city}, {hotelInfo.country_trans} -
            <a href="#"> Excellent location - show map</a>
          </div>
          <div className="stars">
            <h2 className="hotel-rating">Rating</h2>
            {getStarRatingHTML(hotelInfo.review_score)}
          </div>
        </div>
      )}

      <div className="gallery">
        {images.map((img, i) => (
          <div key={i} className={`img-box img-${i + 1}`} onClick={() => setSelectedImg(img.url_max)}>
            <img
              src={img.url_max}
              alt={`Hotel ${i + 1}`}
              className="gallery-img"
              loading="lazy"
            />
            {i === 4 && images.length >= 5 && (
              <div className="overlay-text">+{images.length - 4} photos</div>
            )}
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <span className="close">×</span>
          <img className="modal-content" src={selectedImg} alt="Modal View" />
        </div>
      )}

      {description && (
        <div className="about-section">
          <h1 className="about-heading">Hotel Description :-</h1>
          <h2 className="about-heading">
            Get the celebrity treatment with world-class service at {hotelInfo?.name}
          </h2>
          <p className="about-para">{description}</p>
        </div>
      )}

      {facilities.length > 0 && (
        <div className="facility-list">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-item">
              <div className="facility-icon">🔹</div>
              <div className="facility-name">{facility.facility_name}</div>
            </div>
          ))}
        </div>
      )}

      {mapUrl && <img id="mapPreview" src={mapUrl} alt="Hotel Map Preview" />}
    </div>
  );
};

export default Hoteldetail;
