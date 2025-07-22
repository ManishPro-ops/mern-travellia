import image1 from "../../assets/image/service-icon-1.svg";
import image2 from "../../assets/image/service-icon-2.svg";
import image3 from "../../assets/image/service-icon-3.svg";
import "../../App.css";
import "./Feature.css";
import FeatureCardComponent from "./FeatureCardComponent";
import FeatureContent from "./FeatureContent";

const Feature = () => {
  const cardData = [
    {
      image: image1,
      title: "Lot Of Choices",
      description: "Total 30+ destination that we work with.",
    },
    {
      image: image2,
      title: "Best Tour Guide",
      description: "Our tour guide with 15+ years of experience.",
    },
    {
      image: image3,
      title: "Easy Booking",
      description: "With an easy and fast ticket purchase process.",
    },
  ];

  return (
    <>
      <div className="feature-container">
        <div className="feature-content">
          <FeatureContent />
          <div className="feature-content-grid">
            {cardData.map((card, index) => (
              <FeatureCardComponent
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
