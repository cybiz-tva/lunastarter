import { useEffect, useState } from "react";
import home__section__pic from "../assets/homeSVG.gif";
import logoBig from "../assets/logoBig.png";
import roadMapPic from "../assets/roadMapPic.png";
import teamImg1 from "../assets/image1.jpeg";
import teamImg2 from "../assets/image2.jpeg";
import teamImg3 from "../assets/image3.jpeg";
import teamImg4 from "../assets/image4.jpeg";
import teamImg5 from "../assets/image5.png";
import teamImg6 from "../assets/image6.jpeg";
import teamImg7 from "../assets/image7.jpeg";
import Iconawesomefacebook from "../assets/Icon awesome-facebook-f.png";
import Iconawesomeyoutube from "../assets/Icon awesome-youtube.png";
import Iconpaymentapplepay from "../assets/Icon payment-apple-pay.png";
import Iconsimplesamsung from "../assets/Icon simple-samsung.png";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWallet } from "@terra-money/wallet-provider";

function IDO({ setWalletAddress, setIsOn, json }) {
  const navigate = useNavigate();
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [teamsPerView, setTeamsPerView] = useState(4);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    setIsOn("home");
    if (window.innerWidth <= 400) {
      setSlidesPerView(1);
      setTeamsPerView(1);
    } else if (window.innerWidth <= 550) {
      setSlidesPerView(2);
      setTeamsPerView(2);
    } else if (window.innerWidth <= 900) {
      setSlidesPerView(3);
      setTeamsPerView(3);
    } else if (window.innerWidth <= 1360) {
      setSlidesPerView(4);
      setTeamsPerView(4);
    } else if (window.innerWidth <= 1440) {
      setSlidesPerView(5);
      setTeamsPerView(4);
    } else {
      setSlidesPerView(6);
      setTeamsPerView(4);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 400) {
        setSlidesPerView(1);
        setTeamsPerView(1);
      } else if (window.innerWidth <= 550) {
        setSlidesPerView(2);
        setTeamsPerView(1);
      } else if (window.innerWidth <= 900) {
        setSlidesPerView(3);
        setTeamsPerView(2);
      } else if (window.innerWidth <= 1360) {
        setSlidesPerView(4);
        setTeamsPerView(4);
      } else if (window.innerWidth <= 1440) {
        setSlidesPerView(5);
        setTeamsPerView(4);
      } else {
        setSlidesPerView(6);
        setTeamsPerView(4);
      }
    });
  }, [window.innerWidth]);
  const { wallets, network } = useWallet();
  // console.log("homenetwork", network);

  return (
    <>
      <div className="home__section" style={{ marginBottom: 50, height: 500 }}>
        <div
          className="home__section__entry"
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Applications are not open yet
        </div>
      </div>
    </>
  );
}

export default IDO;
