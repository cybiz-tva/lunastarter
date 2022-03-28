import { useEffect, useState } from "react";
import { Lock, Unlock } from "react-feather";
import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import { MsgExecuteContract } from "@terra-money/terra.js";

export default function TableRow({
  data,
  connectedWallet,
  lock,
  getStakes,
  getAllowance,
  json,
}) {
  // console.log(data);
  const [disable, setDisable] = useState(false);
  let apr = "40%";
  if (data.locked === true && data.policy === 0) {
    apr = "40%";
  } else if (data.locked === true && data.policy === 1) {
    apr = "40%";
  } else if (data.locked === true && data.policy === 2) {
    apr = "40%";
  } else if (data.locked === false && data.policy === 0) {
    apr = "25%";
  } else if (data.locked === false && data.policy === 1) {
    apr = "25%";
  } else if (data.locked === false && data.policy === 2) {
    apr = "25%";
  }
  let claim_allowed_time =
    data.claim_allowed_time - (Date.now() / 1000).toFixed();
  if (claim_allowed_time < 0) {
    claim_allowed_time = 0;
  }
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (claim_allowed_time >= 3600 * 24) {
    days = Math.floor(claim_allowed_time / (3600 * 24));
  } else if (claim_allowed_time >= 3600) {
    hours = Math.floor(claim_allowed_time / 3600);
  } else if (claim_allowed_time >= 60) {
    minutes = Math.floor(claim_allowed_time / 60);
  } else {
    seconds = Math.floor(claim_allowed_time);
  }
  function claim() {
    connectedWallet
      .post({
        msgs: [
          new MsgExecuteContract(
            connectedWallet.walletAddress,
            json.stake,
            {
              claim: {
                index: data.index,
              },
            },
            {}
          ),
        ],
      })
      .then(() => {
        setDisable(true);
        setTimeout(() => {
          getAllowance();
          getStakes();
          // console.log("claim");
          setDisable(false);
        }, 10000);
      })
      .catch((err) => {
        console.log(err);
        setDisable(false);
      });
  }
  return (
    <div className="stake__table__content__row">
      <div className="stake__table__content__row__entry">
        {new Date(data.stake_time * 1000).getDate() +
          "-" +
          new Date(data.stake_time * 1000).getMonth() +
          "-" +
          new Date(data.stake_time * 1000).getFullYear()}
      </div>
      <div className="stake__table__content__row__entry">
        {data.amount / 1000000}
      </div>
      <div className="stake__table__content__row__entry">
        {days != 0
          ? days + " Days"
          : hours != 0
          ? hours + " Hours"
          : minutes != 0
          ? minutes + " Minutes"
          : seconds + " Seconds"}
      </div>
      <div className="stake__table__content__row__entry">
        {data.reward_amount / 1000000}
      </div>
      <div className="stake__table__content__row__entry">{apr}</div>
      <div className="stake__table__content__row__entry">
        <button
          className="stake__table__content__row__entry__button stake__table__content__row__entry__button__primary"
          onClick={claim}
          disabled={disable ? true : lock && claim_allowed_time != 0}
        >
          {lock === false && claim_allowed_time != 0 ? "Unstake" : "Claim"}
        </button>
      </div>
    </div>
  );
}
