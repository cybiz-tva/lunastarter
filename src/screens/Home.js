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
import partner1 from "../assets/ab.png";
import partner2 from "../assets/cardence.png";
import partner3 from "../assets/coinpublic.png";
import partner4 from "../assets/oddiyana.png";
import partner5 from "../assets/Cryptokingdom.png";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { useWallet } from "@terra-money/wallet-provider";
import FeatureSection from "components/FeatureSection";
import AboutSection from "components/AboutSection";
import PartnerSection from "components/PartnerSection";
import TeamSection from "components/TeamSection";
import RoadMapSection from "components/RoadMapSection";

export default function Home({ setWalletAddress, setIsOn, json }) {
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
      <div className="home__section">
        <img
          src={home__section__pic}
          alt="home__section__pic"
          className="home__section__pic"
        />
        <div className="home__section__heading">
          First tierless launchpad and incubator on Terra
        </div>
        {wallets.map((item, i) => {
          setWalletAddress(item.terraAddress);
          return (
            <span
              key={i}
              className="header__nav__link__value"
              style={{ marginBottom: "2em" }}
            >
              {item.terraAddress}
            </span>
          );
        })}
        <div className="home__section__buttons">
          <button
            className="home__section__buttons__btn home__section__buttons__btn__primary"
            onClick={() => {
              navigate("/stake");
            }}
          >
            Stake $LST
          </button>
          <a
            href="https://t.me/LunaStarter"
            target="_blank"
            className="home__section__buttons__btn home__section__buttons__btn__secondary"
          >
            Join Community
          </a>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          INCUBATED BY
          <img
            src={partner2}
            alt="partner2"
            style={{ height: 250, marginTop: -70, marginBottom: -130 }}
          />
        </div>
      </div>
      <FeatureSection />
      <AboutSection logoBig={logoBig} />
      <RoadMapSection roadMapPic={roadMapPic} />
      <PartnerSection
        partner1={partner1}
        partner2={partner2}
        partner4={partner4}
        partner3={partner3}
        partner5={partner5}
      />
      <TeamSection
        teamsPerView={teamsPerView}
        teamImg7={teamImg7}
        teamImg5={teamImg5}
        teamImg4={teamImg4}
        teamImg3={teamImg3}
        teamImg2={teamImg2}
        teamImg1={teamImg1}
      />
    </>
  );
}
