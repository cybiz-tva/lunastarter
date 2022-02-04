import React, { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import logo from "../assets/logo.png";

function Header() {
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
  return (
    <div className="header">
      <div className="header__wrapper">
        <img src={logo} alt="logo" className="header__logo" />
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
          <button className="header__nav__link__btn">
            <span>Connect Wallet</span>
            <div class="liquid"></div>
          </button>
        </div>
        {isNavOpen ? (
          <div className="header__nav">
            <a href="#" className="header__nav__link">
              About
            </a>
            <a href="#" className="header__nav__link">
              Buy Now
            </a>
            <a href="#" className="header__nav__link">
              Governance
            </a>
            <a href="#" className="header__nav__link">
              Whitepaper
            </a>
            <button className="header__nav__link__btn">
              <span>Connect Wallet</span>
              <div class="liquid"></div>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
