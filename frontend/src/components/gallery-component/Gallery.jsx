import image1 from "../../assets/image/gallery-1.jpg";
import image2 from "../../assets/image/gallery-2.jpg";
import image3 from "../../assets/image/gallery-3.jpg";
import image4 from "../../assets/image/gallery-4.jpg";
import image5 from "../../assets/image/gallery-5.jpg";
import image6 from "../../assets/image/gallery-6.jpg";
import "./Gallery.css"
function Gallery() {
  return (
    <div>
      <div className="gallery-container">
      <div className="gallery-content">
        <h2 className="gallery-heading">Photo's from Travelers</h2>
        <div className="gallery">
          <img src={image1} className="img1" />
          <img src={image2} className="img2" />
          <img src={image3} className="img3" />
          <img src={image4} className="img4" />
          <img src={image5} className="img5" />
          <img src={image6} className="img6" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery
