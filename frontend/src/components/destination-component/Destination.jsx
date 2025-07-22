import image1 from "../../assets/image/Manali.jpg";
import image2 from "../../assets/image/nainital.jpg";
import image3 from "../../assets/image/Darjeeling.jpg";
import image4 from "../../assets/image/India_Goa_Arambol_Beach.jpg";
import image5 from "../../assets/image/Jal_Mahal,_Jaipur,_India.jpeg";
import image6 from "../../assets/image/tajmahal.jpg";
import DestinationCard from "./DestinationCard";
import "./Destination.css"


const Destination = () => {
  const destinationdata = [
    {
      image: image1,
      heading: "Enjoy the Beauty of the himanchal",
      para: "Manali-Stream of Beas River",
      rating: "*4.7",
      review: "70 Review",
    },
    {
      image: image2,
      heading: "Enjoy the Beuty of the Uttarakhand",
      para: "Nainital the Lake District of India",
      rating: "*4.7",
      review: "70 Review",
    },
    {
      image: image3,
      heading: "Enjoy the Beauty of the sikkim",
      para: "Darjeeling with the Himalaya and Kanchenjunga",
      rating: "*4.7",
      review: "70 Review",
    },
    {
      image: image4,
      heading: "Enjoy the Beauty of the goa",
      para: "Goa Arambol Beach",
      rating: "*4.7",
      review: "70 Review",
    },
    {
      image: image5,
      heading: "Enjoy the Beauty of the Rajasthan",
      para: "Jal Mahal, Jaipur - India",
      rating: "*4.7",
      review: "70 Review",
    },
    {
      image: image6,
      heading: "Enjoy the Beauty of the Uttar Pradesh",
      para: "Taj Mahal, Delhi - India",
      rating: "*4.7",
      review: "70 Review",
    },
  ];

  return (
    <>
      <div className="destination-container">
        <div className="destination-content">
          <div className="destination-header">
            <h2>Explore Top Destination</h2>
          </div>
          <div className="destination-grid">
            {destinationdata.map((card, index) => (
              <DestinationCard
                key={index}
                image={card.image}
                heading={card.heading}
                para={card.para}
                rating={card.rating}
                review={card.review}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
