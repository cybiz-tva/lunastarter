import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import home__section__pic from "./assets/home__section__pic.svg";
import logoBig from "./assets/logoBig.png";
import roadMapPic from "./assets/roadMapPic.png";
import teamImg1 from "./assets/teamImg1.png";
import teamImg2 from "./assets/teamImg2.png";
import teamImg3 from "./assets/teamImg3.png";
import teamImg4 from "./assets/teamImg4.png";
import Iconawesomefacebook from "./assets/Icon awesome-facebook-f.png";
import Iconawesomeyoutube from "./assets/Icon awesome-youtube.png";
import Iconpaymentapplepay from "./assets/Icon payment-apple-pay.png";
import Iconsimplesamsung from "./assets/Icon simple-samsung.png";
import { Facebook, Instagram, Linkedin } from "react-feather";

function FeatureEntry() {
  return (
    <div className="feature__section__content__entry">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90.627"
        height="102.222"
        className="feature__section__content__entry__svg"
        viewBox="0 0 90.627 102.222"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#3480a1" />
            <stop offset="0.761" stopColor="#2eaab4" />
            <stop offset="1" stopColor="#26e4cf" />
          </linearGradient>
        </defs>
        <path
          id="Chain-agnostic-platform.8302d7ea"
          d="M43.263.32A7.422,7.422,0,0,0,39.79,2.394a7.671,7.671,0,0,0-2.457,6.414c.072.714.151,1.5.175,1.757.039.406-1.243,1.2-11.447,7.1L14.569,24.314l-1-.813a11.584,11.584,0,0,0-2.1-1.308A6.315,6.315,0,0,0,8.174,21.7a6.17,6.17,0,0,0-3.322.527A8.221,8.221,0,0,0,5.77,37.492l.806.238V64.62l-.806.238a8.215,8.215,0,0,0-.893,15.263c.973.46,1.351.52,3.3.525,2.056,0,2.282-.035,3.5-.618a11.111,11.111,0,0,0,2.082-1.312l.784-.689,11.407,6.581c6.274,3.62,11.47,6.638,11.548,6.709a3.986,3.986,0,0,1-.091,1.476A7.937,7.937,0,0,0,39.832,100a7.626,7.626,0,0,0,4.314,2.194,8.2,8.2,0,0,0,9.342-9.4,4,4,0,0,1-.091-1.479c.077-.072,4.817-2.826,10.532-6.12s10.845-6.257,11.4-6.585l1.007-.6.89.767c1.163,1,1.746,1.2,2.548.861,1.152-.484,1.119-1.916-.062-2.709A6.216,6.216,0,0,1,77.6,73.869a5.266,5.266,0,0,1,1.461-4.915,4.663,4.663,0,0,1,3.586-1.388,5.13,5.13,0,0,1,3.083,9.268,3.5,3.5,0,0,0-1.032,1.234,1.581,1.581,0,0,0,1.973,1.7,8.244,8.244,0,0,0,3.291-3.57,5.558,5.558,0,0,0,.753-3.531,5.7,5.7,0,0,0-.627-3.332,8.352,8.352,0,0,0-4.92-4.465l-.849-.251L84.263,51.2c-.048-12.654-.031-13.43.3-13.536a8.161,8.161,0,0,0,5.392-4.423,5.563,5.563,0,0,0,.755-3.536,5.707,5.707,0,0,0-.637-3.352,8.122,8.122,0,0,0-8.6-4.728,9.838,9.838,0,0,0-4.339,2.012l-.783.688-7.411-4.28c-4.076-2.354-9.209-5.315-11.408-6.579s-4.06-2.357-4.137-2.428a4,4,0,0,1,.091-1.478,8.159,8.159,0,0,0-.764-5.022A9.123,9.123,0,0,0,48.506.615,9.669,9.669,0,0,0,43.263.32Zm4.486,3.249a6.187,6.187,0,0,1,2.416,2.442,4.614,4.614,0,0,1,.368,2.2,4.314,4.314,0,0,1-1.363,3.565A4.427,4.427,0,0,1,45.445,13.3a4.427,4.427,0,0,1-3.725-1.522,4.315,4.315,0,0,1-1.363-3.565A4.313,4.313,0,0,1,41.72,4.645a5.46,5.46,0,0,1,2.325-1.457A6.669,6.669,0,0,1,47.749,3.569ZM40.1,14.327a8.127,8.127,0,0,0,10.772-.059c.4-.39.816-.676.921-.636s5.331,3.04,11.616,6.668l11.426,6.595-.157.8A11.419,11.419,0,0,0,74.9,32.34a8.419,8.419,0,0,0,5.154,5.077l1.159.422V64.511l-1.159.422A8.457,8.457,0,0,0,74.9,70.011a11.2,11.2,0,0,0-.219,4.646l.156.8-11.425,6.6c-6.284,3.627-11.511,6.627-11.615,6.667s-.519-.246-.921-.636a8.073,8.073,0,0,0-10.7-.117,7.342,7.342,0,0,1-.976.78c-.049,0-1.3-.7-2.775-1.549L24.9,80.552l-8.838-5.1.154-.9a14.964,14.964,0,0,0,.134-2.2,7.982,7.982,0,0,0-5.517-7.42l-1.159-.422V37.839l1.159-.422a8.418,8.418,0,0,0,5.151-5.072,11.046,11.046,0,0,0,.233-4.551l-.151-.9L27.507,20.27c6.293-3.644,11.521-6.634,11.618-6.645A3.317,3.317,0,0,1,40.1,14.327Zm3.946,8.8c-.613.251-21.507,12.35-22.123,12.81a4.268,4.268,0,0,0-1.049,1.324c-.4.827-.41,1.148-.41,13.879,0,14.174-.032,13.758,1.136,14.925.327.327,5.488,3.426,11.47,6.889l10.875,6.3h3l10.863-6.282c5.974-3.455,11.136-6.555,11.469-6.888,1.061-1.061,1.149-1.522,1.149-5.974,0-3.994-.008-4.076-.462-4.5A1.43,1.43,0,0,0,68,55.554c-.463.374-.473.458-.534,4.3L67.4,63.763l-.638.471c-.944.7-19.423,11.322-19.692,11.322-.171,0-.229-3.005-.227-11.741l0-11.741,2.873-1.649c1.58-.907,2.927-1.649,2.994-1.649a34.129,34.129,0,0,1,.121,4.052c0,4.453.045,4.644,1.239,5.261.9.463,1.441.28,4.583-1.542,1.947-1.129,2.925-1.819,3.189-2.252.348-.571.38-1.065.381-5.85V43.221l2.6-1.5,2.6-1.5v4.769c0,5.06.081,5.578.931,5.965a1.166,1.166,0,0,0,1.54-.192l.527-.414V44.26c0-6.639-.034-6.877-1.151-7.994-.335-.335-5.5-3.43-11.47-6.88L46.944,23.115l-1.3-.054A6.622,6.622,0,0,0,44.046,23.131Zm41.277,2.159a5.133,5.133,0,0,1,1.428,7.535,5.264,5.264,0,0,1-7.695.57,4.727,4.727,0,0,1-1.518-3.7,4.6,4.6,0,0,1,1.494-3.68A5.173,5.173,0,0,1,85.323,25.291ZM10.377,24.97A5.226,5.226,0,0,1,11.833,33.4a5.206,5.206,0,0,1-5.97.842,5.123,5.123,0,0,1,.1-9.169A5.954,5.954,0,0,1,10.377,24.97ZM55.87,31.74c5.476,3.16,9.956,5.79,9.956,5.845a26.2,26.2,0,0,1-2.511,1.549L60.8,40.583l-10.028-5.81c-5.516-3.2-10.1-5.882-10.192-5.97C40.36,28.586,44.823,26,45.43,26,45.7,26,50.224,28.482,55.87,31.74Zm-4.73,6.709c3.517,2.038,6.386,3.779,6.374,3.869a8.107,8.107,0,0,1-1.628,1.092l-1.607.928-5.866-3.4c-3.226-1.869-7.665-4.436-9.863-5.706s-4.16-2.419-4.358-2.553c-.322-.218-.17-.355,1.376-1.243l1.738-1,3.72,2.152ZM40.948,40.085c5.5,3.167,10.061,5.818,10.144,5.889.218.186-5.1,3.2-5.641,3.2-.413,0-20.386-11.357-20.385-11.591a60.51,60.51,0,0,1,5.781-3.314C30.908,34.3,35.453,36.918,40.948,40.085Zm-3.5,8.207,6.3,3.637L43.8,63.764c.041,9.443,0,11.816-.2,11.739-.532-.2-19.455-11.19-19.786-11.487s-.35-1.125-.35-12.06V40.21l3.847,2.223Zm21.783.576v3.888l-1.386.81c-.763.445-1.527.863-1.7.929-.277.106-.312-.321-.307-3.748l.006-3.868,1.643-.944c.9-.519,1.665-.946,1.693-.949S59.234,46.73,59.234,48.868ZM10.377,67.936a5.229,5.229,0,0,1,1.481,8.4,5.189,5.189,0,0,1-6.006.858,5.127,5.127,0,0,1,.115-9.161A5.954,5.954,0,0,1,10.377,67.936ZM47.749,89.5a6.19,6.19,0,0,1,2.416,2.443,4.613,4.613,0,0,1,.368,2.2,4.315,4.315,0,0,1-1.363,3.565,4.426,4.426,0,0,1-3.725,1.523,4.426,4.426,0,0,1-3.725-1.523,5.341,5.341,0,0,1,0-7.129,5.457,5.457,0,0,1,2.325-1.457A6.673,6.673,0,0,1,47.749,89.5Z"
          transform="translate(-0.082 -0.085)"
          fill-rule="evenodd"
          fill="url(#linear-gradient)"
        />
      </svg>
      <span>Chain Agnostic Platform</span>
    </div>
  );
}
function TeamCard({ image }) {
  return (
    <div className="team__section__content__entry">
      <img
        src={image}
        alt="teamImg"
        className="team__section__content__entry__img"
      />
      <div className="team__section__content__entry__link">
        <a href="#" className="team__section__content__entry__link__entry">
          <Facebook size={20} color="currentColor" />
        </a>
        <a href="#" className="team__section__content__entry__link__entry">
          <Instagram size={20} color="currentColor" />
        </a>
        <a href="#" className="team__section__content__entry__link__entry">
          <Linkedin size={20} color="currentColor" />
        </a>
      </div>
      <div className="team__section__content__entry__content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="home__section">
          <img
            src={home__section__pic}
            alt="home__section__pic"
            className="home__section__pic"
          />
          <div className="home__section__heading">
            First tierless launchpad and incubator on Terra
          </div>
          <div className="home__section__buttons">
            <button className="home__section__buttons__btn home__section__buttons__btn__primary">
              Stake $LST
            </button>
            <button className="home__section__buttons__btn home__section__buttons__btn__secondary">
              Join Community
            </button>
          </div>
        </div>
        <div className="feature__section">
          <div className="feature__section__heading">Feature</div>
          <div className="feature__section__content">
            <FeatureEntry />
            <FeatureEntry />
            <FeatureEntry />
            <FeatureEntry />
            <FeatureEntry />
            <FeatureEntry />
          </div>
        </div>
        <div className="about__section">
          <div className="about__section__left">
            <img
              src={logoBig}
              alt="logoBig"
              className="about__section__left__img"
            />
          </div>
          <div className="about__section__right">
            <div className="about__section__right__heading">
              What is Lunastarter?
            </div>
            <div className="about__section__right__info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
        <div className="road__map__section">
          <img
            src={roadMapPic}
            alt="roadMapPic"
            className="road__map__section__img"
          />
          <div className="road__map__section__bottom">Road Map</div>
        </div>
        <div className="team__section">
          <div className="feature__section__heading">OUR TEAM</div>
          <div className="team__section__content">
            <TeamCard image={teamImg1} />
            <TeamCard image={teamImg2} />
            <TeamCard image={teamImg3} />
            <TeamCard image={teamImg4} />
          </div>
        </div>
        <div className="partner__section">
          <div className="feature__section__heading">Our Partners</div>
          <div className="partner__section__content">
            <div className="partner__section__content__entry">
              <img src={Iconawesomeyoutube} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconawesomeyoutube} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconpaymentapplepay} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconsimplesamsung} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconawesomefacebook} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconpaymentapplepay} alt="Iconawesomefacebook" />
            </div>
            <div className="partner__section__content__entry">
              <img src={Iconsimplesamsung} alt="Iconawesomefacebook" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
