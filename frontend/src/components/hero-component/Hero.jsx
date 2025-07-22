import "./Hero.css";
import image1 from '../../assets/image/title-icon (1).svg'
import image2 from '../../assets/image/hero-button-img.jpg'
import image3 from '../../assets/image/first.png'


const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-left">
          <div className="tag">
            <p className="tag-text">Explore the World</p>
            <img
              src={image1}
              alt="icon"
              className="tag-icon"
            />
          </div>
          <div className="tag-desc">
            <h2>it's a Big World Out There, Go Explore</h2>
          </div>
          <div className="tag-para">
            <p>
              We always make our customer happy by providing as many ans choices
              possible
            </p>
          </div>
          <div className="bottomtext">
            <div className="bottomtextleft">
              <p className="bottomtextleft-title">plan a trip {">"} </p>
            </div>
            <div className="bottomtextright">
              <img
                src={image2}
                alt="loading"
                className="hero-image"
              />
              <p className="bottomtextright-title">watch our story</p>
            </div>
          </div>
        </div>
        <div className="hero-container-right">
          <img src={image3} alt="loading" />
        </div>
      </div>
    </>
  );
};

export default Hero;
