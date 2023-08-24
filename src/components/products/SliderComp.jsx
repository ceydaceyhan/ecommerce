import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-4xl font-bold">Best Laptop Bag!</div>
            <div className="text-lg my-4">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve.
            </div>
            <div className="border rounded-full cursor-pointer text-xl w-[150px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://www.robertwayne.com/cdn/shop/products/RW-48911-A_grande.jpg?v=1644018593"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-4xl font-bold">
              John Hardy Women's Chain Bracelet!
            </div>
            <div className="text-lg my-4">
              From our Legends Collection, the Naga was inspired by the mythical
              water dragon that protects the ocean's pearl. Wear facing inward
              to be bestowed with love and abundance, or outward for protection.
            </div>
            <div className="border rounded-full cursor-pointer text-xl w-[150px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/41AwI0MK9UL._AC_SY580_.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
