function Sales({}) {
  return (
    <>
      <div className="sales__section">
        <div className="sales__section__stats">
          <div className="sales__section__stats__row">
            <div className="sales__section__stats__row__entry">34%</div>
            <div className="sales__section__stats__row__entry">76%</div>
          </div>
          <div className="sales__section__stats__bar">
            <div className="sales__section__stats__bar__complete"></div>
            <div className="sales__section__stats__bar__un__complete"></div>
          </div>
          <div className="sales__section__stats__row">
            <div className="sales__section__stats__row__entry">Sold Out</div>
            <div className="sales__section__stats__row__entry">Remaining</div>
          </div>
        </div>
        <div className="sales__section__content">
          <form className="sales__section__content__left">
            <div className="sales__section__content__left__heading">Sales</div>
            <div className="sales__section__content__left__sub__heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </div>
            <input
              type="number"
              placeholder="Enter Value"
              className="allowance__form__input"
              disabled={true}
              defaultValue={24252}
            />
            <input
              type="number"
              placeholder="Enter Value"
              className="allowance__form__input"
              onChange={(e) => {}}
            />
            <button
              className="home__section__buttons__btn home__section__buttons__btn__secondary"
              style={{
                padding: ".7em 2em",
                marginLeft: "0em",
                fontSize: 15,
              }}
            >
              Buy LST
            </button>
          </form>
          <div className="sales__section__content__right">
            <div className="sales__section__content__right__sale__on__lst">
              <div className="sales__section__content__right__sale__on__lst__entry">
                Sale on LST
              </div>
              <div className="sales__section__content__right__sale__on__lst__entry">
                343243243232.345
              </div>
            </div>
            <div className="sales__section__content__right__swap__rate">
              <div className="sales__section__content__right__swap__rate__entry">
                Sale on LST
              </div>
              <div className="sales__section__content__right__swap__rate__entry">
                343243243232.345
              </div>
            </div>
            <div className="sales__section__content__right__stats">
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
                  Sold Out
                </div>
                <div className="sales__section__content__right__stats__row__entry">
                  Remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
