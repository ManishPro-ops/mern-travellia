const DestinationCard=({image,heading,para,rating,review})=>{
    return (
        <>
        <a href="#">
            <div className="destination-card">
              <div className="destination-card-image">
                <img
                  src={image}
                  alt="loading"
                  className="destination-image"
                />
              </div>
              <div className="destination-description">
                <div className="destination-text">
                  <p className="destination-text-heading">
                    {heading}
                  </p>
                  <p className="destination-text-para">
                    {para}
                  </p>
                </div>
                <div className="destination-rating">
                  <p>{rating}</p>
                  <p>({review})</p>
                </div>
              </div>
            </div>
          </a>
        </>
    )
}

export default DestinationCard