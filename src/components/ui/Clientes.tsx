import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

let IMG = 'http://elevsales.com/wp-content/uploads/2025/03/logotipo-clietes-topedindo-3.png'

export default function () {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Logo/></SwiperSlide>
        <SwiperSlide><Logo/></SwiperSlide>
        <SwiperSlide><Logo/></SwiperSlide>
        <SwiperSlide><Logo/></SwiperSlide>
        <SwiperSlide><Logo/></SwiperSlide>
        <SwiperSlide><Logo/></SwiperSlide>
v        <SwiperSlide><Logo/></SwiperSlide>

 
      </Swiper>
    </>
  );
}


const Logo=()=>{
    return(
        <img  src={IMG} className=' size-48 object-cover rounded-full'/>
    )
}
