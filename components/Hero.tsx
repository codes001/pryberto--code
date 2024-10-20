import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { slides } from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero: React.FC = () => {
  return (
    <Swiper
      id="hero"
      className="h-[80vh] md:h-[90vh] w-full flex items-center justify-center bg-gray-700 text-white"
      spaceBetween={50}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-screen relative flex justify-center items-center  -mt-16 md:-mt-6 "
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="relative z-10 text-left text-white px-4">
              <h1 className="text-xl md:text-3xl font-bold">{slide.title}</h1>
              <p className="text-lg md:text-xl font-normal mt-4">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Hero;
