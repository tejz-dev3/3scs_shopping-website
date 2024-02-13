


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  "https://cdn.dummyjson.com/product-images/1/1.jpg",
  "https://cdn.dummyjson.com/product-images/11/1.jpg",
  "https://cdn.dummyjson.com/product-images/11/2.jpg",
  "https://cdn.dummyjson.com/product-images/1/3.jpg",
  "https://cdn.dummyjson.com/product-images/1/4.jpg",
  "https://cdn.dummyjson.com/product-images/8/4.jpg",
  "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
  "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  "https://cdn.dummyjson.com/product-images/2/1.jpg",
  "https://cdn.dummyjson.com/product-images/2/2.jpg",
  "https://cdn.dummyjson.com/product-images/2/3.jpg",
  "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
   "https://cdn.dummyjson.com/product-images/4/4.jpg",
  "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
]

const Carousels = () => {
  // console.log('Carousel Images:', carouselImages ); // Add this line

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
      <Carousel responsive={responsive}>
      {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img className="product_img" src={image} alt="" />
          </div>
        ))}
    </Carousel>
      
    )
}


export default Carousels