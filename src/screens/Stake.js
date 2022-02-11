import React from "react";
import { Lock, Unlock } from "react-feather";

export default function Stake() {
  return (
    <>
      <div className="stake__home__section">
        <div className="stake__home__section__heading">staking dashboard</div>
        <div className="stake__home__section__cards">
          <div className="stake__home__section__card stake__home__section__card__primary">
            <div className="stake__home__section__card__heading">
              24242424.242424
            </div>
            <div className="stake__home__section__card__sub__heading">
              Total Stakes
            </div>
          </div>
          <div className="stake__home__section__card stake__home__section__card__secondary">
            <div className="stake__home__section__card__heading">
              24242424.242424
            </div>
            <div className="stake__home__section__card__sub__heading">
              My Stakes
            </div>
          </div>
        </div>
      </div>
      <div className="stake__types">
        <div className="stake__types__entry">
          <input
            type="radio"
            className="stake__types__entry__input"
            name="stake__types__entry__input"
            defaultChecked
          />
          <div className="stake__types__entry__content">
            <Lock size={15} color="currentColor" />
            <span>Locked</span>
          </div>
        </div>
        <div className="stake__types__entry">
          <input
            type="radio"
            className="stake__types__entry__input"
            name="stake__types__entry__input"
          />
          <div className="stake__types__entry__content">
            <Unlock size={15} color="currentColor" />
            <span>Unlocked</span>
          </div>
        </div>
      </div>
      <form className="allowance__form">
        <div className="allowance__form__heading">Allowance</div>
        <div className="allowance__form__current">Current Allowance</div>
        <div className="allowance__form__current__value">2432432.343432</div>
        <input
          type="number"
          placeholder="Enter Value"
          className="allowance__form__input"
        />
        <div className="allowance__form__buttons">
          <button className="allowance__form__buttons__primary">
            Decrease Allowance
          </button>
          <button className="allowance__form__buttons__secondary">
            Increase Allowance
          </button>
        </div>
      </form>
      <form className="allowance__form">
        <div className="allowance__form__heading">STAKING</div>
        <input
          type="number"
          placeholder="Enter Value"
          className="allowance__form__input"
        />
        <div className="allowance__form__duration">
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
              defaultChecked
            />
            <div className="allowance__form__duration__entry__content">
              50 Days
            </div>
          </div>
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
            />
            <div className="allowance__form__duration__entry__content">
              100 Days
            </div>
          </div>
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
            />
            <div className="allowance__form__duration__entry__content">
              300 Days
            </div>
          </div>
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
            />
            <div className="allowance__form__duration__entry__content">
              600 Days
            </div>
          </div>
        </div>
        <div className="allowance__form__buttons">
          <button className="allowance__form__buttons__secondary">Stake</button>
        </div>
      </form>
    </>
  );
}
