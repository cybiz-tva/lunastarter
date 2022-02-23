import React, { useCallback, useEffect, useState } from "react";
import { Lock, Unlock } from "react-feather";
import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import { Fee, MsgExecuteContract, MsgSend } from "@terra-money/terra.js";
import contracts from "../assets/contracts.json";
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  UserDenied,
} from "@terra-money/wallet-provider";

function TableRow() {
  return (
    <div className="stake__table__content__row">
      <div className="stake__table__content__row__entry">4 - 6 - 22</div>
      <div className="stake__table__content__row__entry">233795.332233</div>
      <div className="stake__table__content__row__entry">6 Days</div>
      <div className="stake__table__content__row__entry">343.3123</div>
      <div className="stake__table__content__row__entry">343.544</div>
      <div className="stake__table__content__row__entry">
        <button className="stake__table__content__row__entry__button stake__table__content__row__entry__button__primary">
          Claim Reward
        </button>
      </div>
      <div className="stake__table__content__row__entry">
        <button className="stake__table__content__row__entry__button stake__table__content__row__entry__button__secondary">
          Unstake
        </button>
      </div>
    </div>
  );
}
export default function Stake() {
  console.log(contracts.dummy);
  const [lock, setLock] = useState(true);
  const lcd = useLCDClient();
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    if (connectedWallet) {
      // lcd.bank.balance(connectedWallet.walletAddress).then(([coins]) => {
      //   setBank(coins.toString());
      // });
      async function get() {
        const terra = lcd;
        let result = await terra.wasm.contractQuery(
          contracts.dummy,
          {
            get_count: {},
          } // query msg
        );
        console.log(result);
      }
      get();
    }
  }, [connectedWallet, lcd]);
  console.log(connectedWallet);
  function increment() {
    console.log(connectedWallet.walletAddress);

    const execute = new MsgExecuteContract(
      connectedWallet.walletAddress, // sender
      contracts.dummy, // contract account address
      { increment: {} }, // handle msg
      {} // coins
    );
    const executeTx = connectedWallet.post({
      msgs: [execute],
    });

    const executeTxResult = terra.tx.broadcast(executeTx);
    console.log(executeTxResult);
  }
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
            onClick={() => setLock(true)}
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
            onClick={() => setLock(false)}
          />
          <div className="stake__types__entry__content">
            <Unlock size={15} color="currentColor" />
            <span>Unlocked</span>
          </div>
        </div>
      </div>
      <div className="stake__table">
        {lock ? (
          <>
            <div className="stake__table__header">
              <div className="stake__table__header__entry">Staking Date</div>
              <div className="stake__table__header__entry">Amount</div>
              <div className="stake__table__header__entry">
                Unstaking Allowed After <span>(Remaining Days)</span>
              </div>
              <div className="stake__table__header__entry">Reward earned</div>
              <div className="stake__table__header__entry">APR</div>
              <div className="stake__table__header__entry"></div>
              <div className="stake__table__header__entry"></div>
            </div>
            <div className="stake__table__content">
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </div>
          </>
        ) : (
          <>
            <div className="stake__table__header">
              <div className="stake__table__header__entry">Staking Date</div>
              <div className="stake__table__header__entry">Amount</div>
              <div className="stake__table__header__entry">
                Shouldn't Unstake Before<span>(Remaining Days)</span>
              </div>
              <div className="stake__table__header__entry">Reward earned</div>
              <div className="stake__table__header__entry">APR</div>
              <div className="stake__table__header__entry"></div>
              <div className="stake__table__header__entry"></div>
            </div>
            <div className="stake__table__content">
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </div>
          </>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="allowance__form"
      >
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
          <button
            className="allowance__form__buttons__secondary"
            onClick={increment}
          >
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
