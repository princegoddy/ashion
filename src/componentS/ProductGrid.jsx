import { products } from "../data";


const ProductGrid = () => {
    return (
      <div className="product-grid">
        <div className="product-container">
        <h2 className="section-prod"><span>NEW P</span>RODUCT</h2>
            <ul>
                <li> <span className="all">All</span> </li>
                <li>Women’s</li>
                <li>Men’s</li>
                <li>Kid’s</li>
                <li>Accessories</li>
                <li>Cosmetics</li>
            </ul>
        </div>
        <div className="products">
          { products.map((product) => {
            const {id, name, price, image, tag, rating} = product
            return(
                <div key={id} className="product-card">
              {tag && (
                <span className={`product-tag ${product.tag.replace(" ", "-").toLowerCase()}`}>
                  {tag}
                </span>
              )}
              <img src={image} alt={name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <div className="product-rating">{"★".repeat(rating)}</div>
                <p className="product-price">${price.toFixed(1)}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;