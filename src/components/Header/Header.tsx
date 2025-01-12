import { FC, useCallback, useEffect, useState } from "react";
import S from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/icons/menu.svg";
import closeMenu from "../../assets/icons/menu-close.svg";
import "../../styles/index.scss";
import { useAppContext } from "../../hooks/useAppContext";

const menuItems = [
  { name: "Мета", href: "#target", id: 1 },
  { name: "Бригада", href: "#about", id: 2 },
  { name: "Як це працює", href: "#howitworks", id: 3 },
];

const Header: FC = () => {
  const { toggleMenu, setIsMenuOpen, isMenuOpen } = useAppContext();

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

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback((e: Event) => {
    const window = e.currentTarget as Window;

    setY(window?.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header className={`${S.header} container ${y > 0 ? S.translucent : ""}`}>
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

        <ul className={`${S.header__list} ${isMenuOpen ? S.open : ""}`}>
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
