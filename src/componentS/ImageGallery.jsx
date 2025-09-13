import image1 from "../images/insta/insta-1.jpg"
import image2 from "../images/insta/insta-2.jpg"
import image3 from "../images/insta/insta-3.jpg"
import image4 from "../images/insta/insta-4.jpg"
import image5 from "../images/insta/insta-5.jpg"
import image6 from "../images/insta/insta-6.jpg"

const ImageGallery = () => {
  const images = [
    image1, // Replace with the actual image paths
    image2, 
    image3,
    image4, 
    image5, 
    image6, 
    // "path_to_image_2",
    // "path_to_image_3",
    // "path_to_image_4",
    // "path_to_image_5",
    // "path_to_image_6",
  ];

  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;

// import image1 from "../images/insta/insta-1.jpg";
// import image2 from "../images/insta/insta-2.jpg";
// import image3 from "../images/insta/insta-3.jpg";
// import image4 from "../images/insta/insta-4.jpg";
// import image5 from "../images/insta/insta-5.jpg";
// import image6 from "../images/insta/insta-6.jpg";

// const ImageGallery = () => {
//   const images = [image1, image2, image3, image4, image5, image6];

//   return (
//     <div className="image-gallery">
//       {images.map((src, index) => (
//         <div key={index} className="gallery-item">
//           <img src={src} alt={`Gallery Image ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
