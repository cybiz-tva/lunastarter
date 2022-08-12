import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TeamCard from "./TeamCard";

export default function TeamSection({
  teamsPerView,
  teamImg7,
  teamImg5,
  teamImg4,
  teamImg3,
  teamImg2,
  teamImg1,
}) {
  return (
    <div className="team__section">
      <div className="feature__section__heading">OUR TEAM</div>
      <div className="team__section__content">
        <Swiper
          spaceBetween={30}
          slidesPerView={teamsPerView}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
          {/* <SwiperSlide>
         <TeamCard
           image={teamImg6}
           name="Mustafa Tahseen"
           designation="CMO"
           linkedin=""
         />
        </SwiperSlide> */}
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
          
          </SwiperSlide>
          <SwiperSlide>
           
          </SwiperSlide>
          <SwiperSlide>
           
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
