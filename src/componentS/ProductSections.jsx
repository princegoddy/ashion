import { sections } from "../data";

const ProductSections = () => {
    return (
      <div className="product-sections">
        <div className="product-rows">
          {sections.map((section, index) => {
            const {title} = section
            return(
                <div key={index} className="section">
                <h2 className="section-title"><span>{title}</span></h2>
                <div className="section-products">
                  {section.products.map((product, idx) => {
                    const {name, price, rating, image} = product
                    return(
                        <div className="div">
                          <div key={idx} className="section-card">
                        <img src={image} alt={name} className="section-image" />  
                      </div>
                      <div className="sect-info">
                          <h3 className="sect-name">{name}</h3>
                          <div className="sect-rating">{"★".repeat(rating)}</div>
                          <p className="sect-price">${price.toFixed(1)}</p>
                        </div>
                        </div>
                    )
                 })}
                </div>
              </div>
            )

        })}
        </div>
      </div>
    );
  };

  export default ProductSections;