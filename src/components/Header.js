import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

function Header({ isOn }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
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
  const { status, wallets, availableConnections, connect, disconnect } =
    useWallet();

  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>

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

          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <>
              {availableConnections
                .filter((item, i) => i === 0)
                .map(({ type, name, icon, identifier = "" }) => (
                  <button
                    className="header__nav__link__btn"
                    key={"connection-" + type + identifier}
                    onClick={() => {
                      connect(type, identifier);
                      if (isOn === "stake") {
                        navigate("/");
                      }
                    }}
                  >
                    <span>Connect Wallet</span>
                    <div className="liquid"></div>
                  </button>
                ))}
            </>
          )}
          {status === WalletStatus.WALLET_CONNECTED && (
            <button
              className="header__nav__link__btn"
              onClick={() => disconnect()}
            >
              <span>Disconnect Wallet</span>
              <div className="liquid"></div>
            </button>
          )}
        </div>
        {isNavOpen ? (
          <div className="header__nav">
            <Link
              to="/ido"
              // onClick={() => {
              //   setTimeout(() => {
              //     document.getElementById("about__section").scrollIntoView();
              //   }, 300);
              // }}
              className="header__nav__link"
            >
              Apply for IDO
            </Link>{" "}
            <Link
              to="/sales"
              // onClick={() => {
              //   setTimeout(() => {
              //     document.getElementById("about__section").scrollIntoView();
              //   }, 300);
              // }}
              className="header__nav__link"
            >
              Sales
            </Link>
            {/*
            <Link
              to="/governance"
              // onClick={() => {
              //   setTimeout(() => {
              //     document.getElementById("about__section").scrollIntoView();
              //   }, 300);
              // }}
              className="header__nav__link"
            >
              Governance
            </Link> */}
            {/* <Link to="/stake" className="header__nav__link">
              Stake
            </Link> */}
            <a
              href="https://docs.lunastarter.io"
              target="_blank"
              className="header__nav__link"
            >
              Whitepaper
            </a>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById("footer").scrollIntoView();
                }, 300);
              }}
              className="header__nav__link"
            >
              Social Links
            </Link>
            {status === WalletStatus.WALLET_NOT_CONNECTED && (
              <>
                {availableConnections
                  .filter((item, i) => i === 0)
                  .map(({ type, name, icon, identifier = "" }) => (
                    <button
                      className="header__nav__link__btn"
                      key={"connection-" + type + identifier}
                      onClick={() => {
                        connect(type, identifier);
                        if (isOn === "stake") {
                          navigate("/");
                        }
                      }}
                    >
                      <span>Connect Wallet</span>
                      <div className="liquid"></div>
                    </button>
                  ))}
              </>
            )}
            {status === WalletStatus.WALLET_CONNECTED && (
              <button
                className="header__nav__link__btn"
                onClick={() => disconnect()}
              >
                <span>Disconnect Wallet</span>
                <div className="liquid"></div>
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
