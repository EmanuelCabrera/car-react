import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      title: "Luxury Cars",
      description: "Find your dream car"
    },
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      title: "Sports Cars",
      description: "Experience the thrill"
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      title: "Classic Cars",
      description: "Timeless elegance"
    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider; 