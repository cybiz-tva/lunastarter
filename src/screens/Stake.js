import { useEffect, useState } from "react";
import { Lock, Unlock } from "react-feather";
import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import { MsgExecuteContract } from "@terra-money/terra.js";
import contracts from "../assets/contracts.json";

function TableRow({ data, connectedWallet, lcd, lock }) {
  console.log(data);
  let apr = 1;
  if (data.locked === true && data.policy === 0) {
    apr = "140%";
  } else if (data.locked === true && data.policy === 1) {
    apr = "280%";
  } else if (data.locked === true && data.policy === 2) {
    apr = "420%";
  } else if (data.locked === false && data.policy === 0) {
    apr = "125%";
  } else if (data.locked === false && data.policy === 1) {
    apr = "250%";
  } else if (data.locked === false && data.policy === 2) {
    apr = "375%";
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
    const execute = new MsgExecuteContract(
      connectedWallet.walletAddress,
      contracts.stake,
      {
        claim: {
          index: data.index,
        },
      },
      {}
    );
    const executeTx = connectedWallet.post({
      msgs: [execute],
    });
    const executeTxResult = lcd.tx.broadcast(executeTx);
    console.log(executeTxResult);
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
          disabled={lock && claim_allowed_time != 0}
        >
          Claim
        </button>
      </div>
    </div>
  );
}
export default function Stake({ walletAddress }) {
  const integer = 1000000;
  const lcd = useLCDClient();
  const connectedWallet = useConnectedWallet();

  const [lock, setLock] = useState(true);
  const [totalStaked, setTotalStaked] = useState(0);
  const [myStakes, setMyStakes] = useState(0);
  const [stakeData, setStakeData] = useState([]);
  const [currentAllowance, setCurrentAllowance] = useState(0);
  const [allowanceAmount, setAllowanceAmount] = useState("");
  const [stakingAmount, setStakingAmount] = useState("");
  const [stakingOption, setStakingOption] = useState(0);
  // console.log(stakingAmount);
  // console.log(stakingOption);

  useEffect(() => {
    if (connectedWallet) {
      async function getAllowance() {
        let result = await lcd.wasm.contractQuery(contracts.token, {
          allowance: { owner: walletAddress, spender: contracts.stake },
        });
        setCurrentAllowance(result.allowance / integer);
      }
      getAllowance();
      async function getStakes() {
        let result = await lcd.wasm.contractQuery(contracts.stake, {
          get_data: { address: walletAddress },
        });
        setTotalStaked(result.state.total_staked / integer);
        let userStakeAmount = 0;
        result.user_stakes.map((item) => {
          userStakeAmount = userStakeAmount + parseInt(item.amount);
          setMyStakes(userStakeAmount / integer);
        });
        setStakeData(result.user_stakes);
        console.log(result);
      }
      getStakes();
    }
  }, [connectedWallet, lcd]);

  function increaseAllowance() {
    const execute = new MsgExecuteContract(
      connectedWallet.walletAddress,
      contracts.token,
      {
        increase_allowance: {
          spender: contracts.stake,
          amount: (allowanceAmount * integer).toString(),
        },
      },
      {}
    );
    const executeTx = connectedWallet.post({
      msgs: [execute],
    });
    const executeTxResult = lcd.tx.broadcast(executeTx);
    console.log(executeTxResult);
  }
  function decreaseAllowance() {
    const execute = new MsgExecuteContract(
      connectedWallet.walletAddress,
      contracts.token,
      {
        decrease_allowance: {
          spender: contracts.stake,
          amount: (allowanceAmount * integer).toString(),
        },
      },
      {}
    );
    const executeTx = connectedWallet.post({
      msgs: [execute],
    });
    const executeTxResult = lcd.tx.broadcast(executeTx);
    console.log(executeTxResult);
  }
  function stake(e) {
    if (stakingAmount > currentAllowance) {
      setAllowanceAmount(stakingAmount - currentAllowance);
    } else {
      const execute = new MsgExecuteContract(
        connectedWallet.walletAddress,
        contracts.stake,
        {
          stake: {
            amount: (stakingAmount * integer).toString(),
            locked: lock ? 0 : 1,
            policy: stakingOption,
          },
        },
        {}
      );
      const executeTx = connectedWallet.post({
        msgs: [execute],
      });
      const executeTxResult = lcd.tx.broadcast(executeTx);
      console.log("this works");
    }
  }
  return (
    <>
      <div className="stake__home__section">
        <div className="stake__home__section__heading">staking dashboard</div>
        <div className="stake__home__section__cards">
          <div className="stake__home__section__card stake__home__section__card__primary">
            <div className="stake__home__section__card__heading">
              {totalStaked}
            </div>
            <div className="stake__home__section__card__sub__heading">
              Total Stakes
            </div>
          </div>
          <div className="stake__home__section__card stake__home__section__card__secondary">
            <div className="stake__home__section__card__heading">
              {myStakes}
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
        <div className="stake__table__header">
          <div className="stake__table__header__entry">Staking Date</div>
          <div className="stake__table__header__entry">Amount</div>
          <div className="stake__table__header__entry">
            {lock ? (
              <>
                Unstaking Allowed After <span>(Remaining Days)</span>
              </>
            ) : (
              <>
                Shouldn't Unstake Before <span>(Remaining Days)</span>
              </>
            )}
          </div>
          <div className="stake__table__header__entry">Reward earned</div>
          <div className="stake__table__header__entry">APR</div>
          <div className="stake__table__header__entry"></div>
        </div>
        <div className="stake__table__content">
          {stakeData
            .filter((item) => item.locked === lock)
            .map((item, i) => (
              <TableRow
                key={i}
                data={item}
                connectedWallet={connectedWallet}
                lcd={lcd}
                lock={lock}
              />
            ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="allowance__form"
      >
        <div className="allowance__form__heading">Allowance</div>
        <div className="allowance__form__current">Current Allowance</div>
        <div className="allowance__form__current__value">
          {currentAllowance}
        </div>
        <input
          type="number"
          placeholder="Enter Value"
          className="allowance__form__input"
          value={allowanceAmount}
          onChange={(e) => {
            setAllowanceAmount(e.target.value);
          }}
        />
        <div className="allowance__form__buttons">
          <button
            className="allowance__form__buttons__primary"
            onClick={decreaseAllowance}
          >
            Decrease Allowance
          </button>
          <button
            className="allowance__form__buttons__secondary"
            onClick={increaseAllowance}
          >
            Increase Allowance
          </button>
        </div>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="allowance__form"
      >
        <div className="allowance__form__heading">STAKING</div>
        <input
          type="number"
          placeholder="Enter Value"
          className="allowance__form__input"
          onChange={(e) => {
            setStakingAmount(e.target.value);
          }}
        />
        <div className="allowance__form__duration">
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
              defaultChecked
              onChange={() => {
                setStakingOption(0);
              }}
            />
            <div className="allowance__form__duration__entry__content">
              45 Days
            </div>
          </div>
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
              onChange={() => {
                setStakingOption(1);
              }}
            />
            <div className="allowance__form__duration__entry__content">
              90 Days
            </div>
          </div>
          <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
              onChange={() => {
                setStakingOption(2);
              }}
            />
            <div className="allowance__form__duration__entry__content">
              180 Days
            </div>
          </div>
          {/* <div className="allowance__form__duration__entry">
            <input
              type="radio"
              name="allowance__form__duration__entry__input"
              className="allowance__form__duration__entry__input"
            />
            <div className="allowance__form__duration__entry__content">
              600 Days
            </div>
          </div> */}
        </div>
        <div className="allowance__form__buttons">
          <button
            className="allowance__form__buttons__secondary"
            onClick={stake}
          >
            Stake
          </button>
        </div>
      </form>
    </>
  );
}
