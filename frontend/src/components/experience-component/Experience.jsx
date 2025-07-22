import image1 from "../../assets/image/experience-banner.png";
import "./Experience.css"
const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <div className="experience-content">
          <div className="left-experience-content">
            <img src={image1} alt="loading" className="experience-image" />
          </div>
          <div className="right-experience-content">
            <div className="right-experience-content-heading">
              <p className="experience-text">OUR EXPERIENCE</p>
              <h2 className="experience-heading">
                With Our Experience We Will Serve You
              </h2>
              <p className="experience-desc">
                since we first opened we have always prioritized the
                convienience of users by providing low pricing and with a easy
                process
              </p>
            </div>
            <div className="right-experience-content-number">
              <div className="right-experience-content-number-left">
                <p className="number">20</p>
                <p className="years">Years</p>
                <p className="experience">Experience</p>
              </div>
              <div className="right-experience-content-number-left">
                <p className="number">460+</p>
                <p className="years">Destinaion</p>
                <p className="experience">Collaboration</p>
              </div>
              <div className="right-experience-content-number-left">
                <p className="number">50K+</p>
                <p className="years">Happy</p>
                <p className="experience">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
