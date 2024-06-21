import React, { useEffect, useState } from "react";
import S from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/icons/menu.svg";
import closeMenu from "../../assets/icons/menu-close.svg";
import "../../styles/index.scss";

const menuItems = [
  { name: "Мета", href: "#target", id: 1 },
  { name: "Бригада", href: "#about", id: 2 },
  { name: "Як це працює", href: "#howitworks", id: 3 },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listStyleMobile = isMenuOpen
    ? {
        opacity: 1,
        transform: "scaleX(1) translateY(100%)",
      }
    : {
        opacity: 0,
        transform: "scaleX(0) translateY(100%)",
      };

  const listStyle = width <= 768 ? listStyleMobile : {};

  return (
    <header className={`${S.header} container`}>
      <nav className={S.header__nav}>
        <img className={S.header__logo} src={logo} alt="Logo" />

        <button className={S.header__toggler}>
          <img
            src={menu}
            alt="Menu"
            onClick={toggleMenu}
            className={S.header__menuIcon}
          />
        </button>

        <ul className={S.header__list} style={listStyle}>
          <div className={S.header__list_container}>
            <button className={S.header__toggler}>
              <img
                src={closeMenu}
                alt="Menu"
                onClick={toggleMenu}
                className={S.header__menuIcon_close}
              />
            </button>

            <h3 className={S.header__list_title}>Меню</h3>
          </div>

          {menuItems.map((item) => {
            const { name, href, id } = item;

            return (
              <li key={id} className={S.header__item}>
                <a
                  href={href}
                  className={S.header__link}
                  onClick={(event) => {
                    handleMenuItemClick(event, href);
                  }}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
