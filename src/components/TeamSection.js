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
            <TeamCard
              image={teamImg7}
              name="Muzammil Haider"
              designation="CEO"
              facebook=""
              instagram=""
              linkedin="https://www.linkedin.com/in/muzammil-haider-1a8526148"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              image={teamImg5}
              name="Md Asfar"
              designation="COO"
              linkedin="https://www.linkedin.com/in/md-afsar/"
            />
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
            <TeamCard
              image={teamImg4}
              name="Ameer A. Khammas"
              designation="Marketing Lead"
              linkedin=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              image={teamImg3}
              name="M. Abdullah Shahid"
              designation="Blockchain Developer"
              linkedin="https://www.linkedin.com/in/muhammad-abdullah-s-0781a394/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              image={teamImg2}
              name="Mehfooz-ur-Rehman"
              designation="Full Stack Developer"
              linkedin="https://www.linkedin.com/in/mehfooz-rehman-37a1b0231/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              image={teamImg1}
              name="Hammad Habib"
              designation="UI/UX Design Lead"
              linkedin="www.linkedin.com/in/hammadhabib"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
