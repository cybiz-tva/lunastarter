import { useLCDClient } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";

export default function Sales({ json, walletAddress }) {
  const integer = 1000000;
  const lcd = useLCDClient();
  const [salesData, setSalesData] = useState([]);
  const [bought, setBought] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [limit, setLimit] = useState(0);
  const [limitUsed, setLimitUsed] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(0);
  const [totalSoldOut, setTotalSoldOut] = useState(0);
  const [totalRemainingAmount, setTotalRemainingAmount] = useState(0);
  const [totalSoldOutAmount, setTotalSoldOutAmount] = useState(0);
  const [saleAmount, setSaleAmount] = useState("");
  const [rateLunastarter, setRateLunastarter] = useState(0);
  const [rateUSDT, setRateUSDT] = useState(0);
  useEffect(() => {
    async function getSale() {
      let result = await lcd.wasm.contractQuery(json.sale, {
        get_data: { addr: walletAddress },
      });
      setSalesData(result);
      setBought((result.user_data.limit_used / result.sale_data.limit) * 100);
      setRemaining(
        100 - (result.user_data.limit_used / result.sale_data.limit) * 100
      );
      setLimit(result.sale_data.limit / integer);
      setLimitUsed(result.user_data.limit_used / integer);
      setTotalSoldOut(result.sale_data.amount - result.sale_data.remaining);
      setTotalSoldOutAmount(
        (result.sale_data.amount - result.sale_data.remaining) / integer
      );
      setTotalRemaining(
        (result.sale_data.amount / result.sale_data.remaining) * 100
      );
      setTotalRemainingAmount(result.sale_data.remaining / integer);
      setRateLunastarter(parseInt(result.sale_data.rate_lunastarter));
      setRateUSDT(parseInt(result.sale_data.rate_usdt));
    }
    getSale();
  }, []);
  console.log(salesData);

  // {"user_data":{"last_bought_time":0,"limit_used":"0"},"sale_data":{"amount":"10000000000","remaining":"10000000000","limit":"100000000","start_time":1649067110,"end_time":1649096649,"rate_usdt":"1","rate_lunastarter":"2"}}

  return (
    <>
      <div className="sales__section">
        <div className="sales__section__stats">
          <div className="sales__section__stats__row">
            <div className="sales__section__stats__row__entry">
              {totalSoldOut}%
            </div>
            <div className="sales__section__stats__row__entry">
              {totalRemaining}%
            </div>
          </div>
          <div className="sales__section__stats__bar">
            <div
              className="sales__section__stats__bar__complete"
              style={{ width: totalSoldOut + "%" }}
            ></div>
            <div
              className="sales__section__stats__bar__un__complete"
              style={{ width: totalRemaining + "%" }}
            ></div>
          </div>
          <div className="sales__section__stats__row">
            <div className="sales__section__stats__row__entry">
              LST Sold Out ({totalSoldOutAmount})
            </div>
            <div className="sales__section__stats__row__entry">
              LST Remaining ({totalRemainingAmount})
            </div>
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
              defaultValue={0}
              value={(saleAmount * rateLunastarter) / rateUSDT}
            />
            <input
              type="number"
              placeholder="Enter Value"
              className="allowance__form__input"
              onChange={(e) => {
                setSaleAmount(e.target.value);
              }}
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
                LST limit
              </div>
              <div className="sales__section__content__right__sale__on__lst__entry">
                {limit}
              </div>
            </div>
            <div className="sales__section__content__right__swap__rate">
              <div className="sales__section__content__right__swap__rate__entry">
                LST bought by me
              </div>
              <div className="sales__section__content__right__swap__rate__entry">
                {limitUsed}
              </div>
            </div>
            <div className="sales__section__content__right__stats">
              <div className="sales__section__content__right__stats__row">
                <div className="sales__section__content__right__stats__row__entry">
                  {bought} %
                </div>
                <div className="sales__section__content__right__stats__row__entry">
                  {remaining} %
                </div>
              </div>
              <div className="sales__section__content__right__stats__bar">
                <div
                  className="sales__section__content__right__stats__bar__complete"
                  style={{
                    width: bought + "%",
                  }}
                ></div>
                <div
                  className="sales__section__content__right__stats__bar__un__complete"
                  style={{
                    width: remaining + "%",
                  }}
                ></div>
              </div>
              <div className="sales__section__content__right__stats__row">
                <div className="sales__section__content__right__stats__row__entry">
                  Bought
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
