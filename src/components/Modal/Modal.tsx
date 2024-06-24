import { useAppContext } from "../../hooks/useAppContext";
import S from "./Modal.module.scss";
import closeMenu from "../../assets/icons/menu-close.svg";
import LinkedInLogo from "../../assets/icons/modal/devicon_linkedin.svg";
import TelegramLogo from "../../assets/icons/modal/logos_telegram.svg";
import FacebookLogo from "../../assets/icons/modal/logos_facebook.svg";
import Button from "../Button/Button";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from "react-share";

const Modal: React.FC = () => {
  const { isModalOpen, handleModal } = useAppContext();

  if (isModalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  const button = document.getElementById("button");

  if (button) {
    button.addEventListener("click", () =>
      writeClipboardText()
    );
  }

  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText('#');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {isModalOpen && (
        <div className={S.modal}>
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
              <LinkedinShareButton url={"#"} className={S.modal__icon}>
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className={S.modal__icon}
                />
              </LinkedinShareButton>

              <TelegramShareButton url={"#"} className={S.modal__icon}>
                <img
                  src={TelegramLogo}
                  alt="Telegram"
                  className={S.modal__icon}
                />
              </TelegramShareButton>

              <FacebookShareButton url={"#"} className={S.modal__icon}>
                <img src={FacebookLogo} alt="Facebook" />
              </FacebookShareButton>
            </div>

            <p className={S.modal__or}>Або</p>

            <div id="button" onClick={writeClipboardText}>
              <Button
                variant="copyLink"
                label="Скопіювати посилання"
                className={S.modal__button}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
