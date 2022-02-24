import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

function Header({ setWalletAddress }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);
  const { status, wallets, availableConnections, connect } = useWallet();

  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>

        {/* {status === WalletStatus.WALLET_CONNECTED && (
          <button onClick={() => disconnect()}>Disconnect</button>
        )} */}
        <div className="header__btns">
          <button
            className="header__menu"
            onClick={() => {
              isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
          {wallets.map((item, i) => (
            <span key={i} className="header__nav__link__value">
              {item.terraAddress}
            </span>
          ))}

          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <>
              {availableConnections
                .filter((item, i) => i === 0)
                .map(({ type, name, icon, identifier = "" }) => (
                  <button
                    className="header__nav__link__btn"
                    key={"connection-" + type + identifier}
                    onClick={() => connect(type, identifier)}
                  >
                    <span>Connect Wallet</span>
                    <div class="liquid"></div>
                  </button>
                ))}
            </>
          )}
        </div>
        {isNavOpen ? (
          <div className="header__nav">
            <a href="#" className="header__nav__link">
              About
            </a>
            <a href="#" className="header__nav__link">
              Buy Now
            </a>
            <Link to="/stake" className="header__nav__link">
              Stake
            </Link>
            <a href="#" className="header__nav__link">
              Whitepaper
            </a>
            {status === WalletStatus.WALLET_NOT_CONNECTED && (
              <>
                {availableConnections
                  .filter((item, i) => i === 0)
                  .map(({ type, name, icon, identifier = "" }) => (
                    <button
                      className="header__nav__link__btn"
                      key={"connection-" + type + identifier}
                      onClick={() => connect(type, identifier)}
                    >
                      <span>Connect Wallet</span>
                      <div class="liquid"></div>
                    </button>
                  ))}
              </>
            )}
            {wallets.map((item) => {
              setWalletAddress(item.terraAddress);
              return (
                <span className="header__nav__link__value">
                  {item.terraAddress}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
