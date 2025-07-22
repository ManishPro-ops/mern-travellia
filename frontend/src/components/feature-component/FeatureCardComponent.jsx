const FeatureCardComponent=({image,title,descprition})=>{
    
    return (
        <>
        <div className="feature-card">
            <div className="feature-card-image">
              <img
                src={image}
                alt="loading"
                className="feature-image"
              />
            </div>
            <div className="feature-card-content">
              <h2 className="feature-card-heading">{title}</h2>
              <p className="feature-card-desc">
                {descprition}
              </p>
            </div>
          </div>
        </>
    )
}

export default FeatureCardComponent