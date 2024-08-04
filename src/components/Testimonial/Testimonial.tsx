
import { TestimonialList } from "../../data/data"
import TestimonialCard from "./TestimonialCard"
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 3000
  };
  return (
    <div id="testimonial" className="bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 xl:py-20 text-center border-b border-black ">
        <h3 className="text-secondary-500 text-lg">✅ WHAT CLIENTS SAY</h3>
        <h2 className="my-8 uppercase text-neutral-200 text-3xl xl:text-6xl font-semibold">Testimonial</h2>
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1">
        <Slider {...settings}>
          {
            TestimonialList.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))
          }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial