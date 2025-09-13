
import img1 from "../images/categories/category-1.jpg"; // Main women's fashion
import img2 from "../images/categories/category-2.jpg";
import img3 from "../images/categories/category-3.jpg";
import img4 from "../images/categories/category-4.jpg";
import img5 from "../images/categories/category-5.jpg";

const HeroSection = () => {
  return (
    <div className="grid-container">
      <div className="grid-item large" style={{ backgroundImage: `url(${img1})` }}>
        <div className="content first">
          <h2>Women's fashion</h2>
          <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>

      <div className="grid-item" style={{ backgroundImage: `url(${img2})` }}>
        <div className="content">
          <h4>Men’s fashion</h4>
          <p>358 items</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>

      <div className="grid-item" style={{ backgroundImage: `url(${img3})` }}>
        <div className="content">
          <h4>Kid’s fashion</h4>
          <p>273 items</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>

      <div className="grid-item" style={{ backgroundImage: `url(${img4})` }}>
        <div className="content">
          <h4>Cosmetics</h4>
          <p>159 items</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>

      <div className="grid-item" style={{ backgroundImage: `url(${img5})` }}>
        <div className="content">
          <h4>Accessories</h4>
          <p>792 items</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
