import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Governance({}) {
  return (
    <div className="governance__section">
      <div className="governance__section__heading">Governance</div>
      <div className="governance__section__sub__heading">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also
      </div>
      <div className="governance__section__voting">
        <span>Voting Power</span> = 3545.6763
      </div>
      <div className="governance__section__content">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="governance__section__content__entry">
              <div className="governance__section__content__entry__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </div>
              <div className="governance__section__content__entry__time">
                <span>03</span> Days <span>34</span> Hours <span>36</span>{" "}
                Minutes <span>56</span> Seconds
              </div>
              <div
                className="sales__section__content__right__stats"
                style={{ marginBottom: "1em" }}
              >
                <div
                  className="sales__section__content__right__stats__row"
                  style={{ marginBottom: ".5em" }}
                >
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    YES
                  </div>
                  <div
                    className="sales__section__content__right__stats__row__entry"
                    style={{ fontWeight: "bold" }}
                  >
                    NO
                  </div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    34%
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    76%
                  </div>
                </div>
                <div className="sales__section__content__right__stats__bar">
                  <div className="sales__section__content__right__stats__bar__complete"></div>
                  <div className="sales__section__content__right__stats__bar__un__complete"></div>
                </div>
                <div className="sales__section__content__right__stats__row">
                  <div className="sales__section__content__right__stats__row__entry">
                    45345345
                  </div>
                  <div className="sales__section__content__right__stats__row__entry">
                    343434
                  </div>
                </div>
              </div>{" "}
              <div className="governance__section__content__entry__row">
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__primary">
                  YES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M7.719,16.625H1.781A1.781,1.781,0,0,0,0,18.406V36.219A1.781,1.781,0,0,0,1.781,38H7.719A1.781,1.781,0,0,0,9.5,36.219V18.406A1.781,1.781,0,0,0,7.719,16.625ZM4.75,35.031A1.781,1.781,0,1,1,6.531,33.25,1.781,1.781,0,0,1,4.75,35.031ZM28.5,6.045c0,3.148-1.927,4.914-2.47,7.017h7.55A4.435,4.435,0,0,1,38,17.374a5.374,5.374,0,0,1-1.443,3.651l-.008.008a6.2,6.2,0,0,1-.691,5.9,5.869,5.869,0,0,1-1.216,5.548,3.94,3.94,0,0,1-.456,3.313C32.671,37.969,28.917,38,25.742,38h-.211a21.306,21.306,0,0,1-8.874-2.355,11.68,11.68,0,0,0-3.908-1.2.891.891,0,0,1-.875-.89V17.688a.89.89,0,0,1,.264-.632c2.94-2.905,4.2-5.981,6.614-8.395a8.988,8.988,0,0,0,1.885-4.372C20.968,2.916,21.658,0,23.156,0,24.937,0,28.5.594,28.5,6.045Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button className="governance__section__content__entry__row__btn governance__section__content__entry__row__btn__secondary">
                  NO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path
                      id="Icon_awesome-thumbs-up"
                      data-name="Icon awesome-thumbs-up"
                      d="M35.062,19.25h6.875A2.062,2.062,0,0,1,44,21.313V41.938A2.062,2.062,0,0,1,41.937,44H35.062A2.062,2.062,0,0,1,33,41.938V21.313A2.062,2.062,0,0,1,35.062,19.25ZM38.5,40.563A2.063,2.063,0,1,0,36.437,38.5,2.062,2.062,0,0,0,38.5,40.563ZM11,7c0,3.645,2.232,5.69,2.86,8.125H5.118A5.135,5.135,0,0,0,0,20.118a6.222,6.222,0,0,0,1.671,4.228l.009.009a7.179,7.179,0,0,0,.8,6.829,6.8,6.8,0,0,0,1.408,6.424,4.562,4.562,0,0,0,.528,3.836C6.17,43.965,10.517,44,14.194,44h.244c4.15,0,7.546-1.512,10.275-2.726a13.525,13.525,0,0,1,4.525-1.39,1.032,1.032,0,0,0,1.013-1.031V20.481a1.03,1.03,0,0,0-.306-.732c-3.4-3.364-4.868-6.925-7.658-9.72-1.272-1.275-1.735-3.2-2.182-5.062C19.721,3.377,18.922,0,17.187,0,15.125,0,11,.688,11,7Z"
                      transform="translate(44 44) rotate(180)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Governance;
