import React from "react";
import Button from "../Button/Button";
import styles from "./HowItWorks.module.scss";

const HowItWorks: React.FC = () => {
  return (
    <section className={`${styles.howItWorks} container`} id="howitworks">
      <h2 className={styles.tittle}>Як це працює</h2>
      <div className={styles.wrap}>
        {/* <div className={styles.wrapTabl}> */}
        <p className={styles.text}>
          Ваша підтримка може бути такою ж простою, як чашка кави на день. Кожен
          внесок, навіть найменший, безпосередньо спрямовується на придбання
          дронів для української військової бригади.
        </p>
        <div className={styles.wrapIcons}>
          <div className={styles.firstGroupIcons}>
            <svg className={styles.icons} width={43} height={53}>
              <use href="/iconsGroup.svg#icon-cup"></use>
            </svg>
            <svg className={styles.icons} width={88} height={57}>
              <use href="/iconsGroup.svg#icon-people"></use>
            </svg>
          </div>
          <div className={styles.thirdGroupIcons}>
            <svg className={styles.icons} width={45} height={30}>
              <use href="/iconsGroup.svg#icon-arrow-desk"></use>
            </svg>
            <svg className={styles.icons} width={83} height={31}>
              <use href="/iconsGroup.svg#icon-drone"></use>
            </svg>

            <svg className={styles.icons} width={45} height={30}>
              <use href="/iconsGroup.svg#icon-arrow1"></use>
            </svg>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="support" label="Підтримати" />
          <Button variant="share" label="Поділитися" />
        </div>
        <p className={styles.text}>
          Ваш донат - це не просто фінансова підтримка, це реальна допомога у
          збереженні життів. Разом ми наближаємо перемогу та мир в Україні.
        </p>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
