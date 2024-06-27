import { FC, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Button from "../Button/Button";
import closeMenu from "../../assets/icons/menu-close.svg";
import LinkedInLogo from "../../assets/icons/modal/devicon_linkedin.svg";
import TelegramLogo from "../../assets/icons/modal/logos_telegram.svg";
import FacebookLogo from "../../assets/icons/modal/logos_facebook.svg";
import S from "./Modal.module.scss";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from "react-share";

const Modal: FC = () => {
  const {
    isModalOpen,
    handleModal,
    WEBSITE_URL,
    writeClipboardText,
    setIsModalOpen,
    isCopied,
  } = useAppContext();

  if (isModalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    e.target === e.currentTarget ? setIsModalOpen(false) : null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.key === "Escape" ? setIsModalOpen(false) : null;
    };

    if (!isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const copied = isCopied ? "Скопійовано" : "Скопіювати посилання";

  return (
    <>
      {isModalOpen && (
        <div className={S.modal} onClick={handleBackdropClick}>
          <div className={S.modal__body}>
            <h2 className={S.modal__title}>Поділіться сайтом з друзями!</h2>

            <button className={S.modal__toggler}>
              <img
                src={closeMenu}
                alt="Menu"
                onClick={handleModal}
                className={S.modal__menuIcon_close}
              />
            </button>

            <p className={S.modal__description}>
              Надішліть посилання на сайт через соціальні мережі
            </p>

            <div className={S.modal__container}>
              <LinkedinShareButton url={WEBSITE_URL} className={S.modal__icon}>
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className={S.modal__icon}
                />
              </LinkedinShareButton>

              <TelegramShareButton url={WEBSITE_URL} className={S.modal__icon}>
                <img
                  src={TelegramLogo}
                  alt="Telegram"
                  className={S.modal__icon}
                />
              </TelegramShareButton>

              <FacebookShareButton url={WEBSITE_URL} className={S.modal__icon}>
                <img
                  src={FacebookLogo}
                  alt="Facebook"
                  className={S.modal__icon}
                />
              </FacebookShareButton>
            </div>

            <p className={S.modal__or}>Або</p>

            <Button
              variant="copyLink"
              label={copied}
              onClick={writeClipboardText}
              id="button"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
