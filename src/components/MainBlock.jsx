import React from 'react';
import styles from '../styles/MainBlock.module.scss';

const MainBlock = () => {
  return (
    <section>
      <div className={styles.decoreLight}></div>
      <div className={styles.decoreCircle}></div>

      <div className={styles.info}>
        <h1>Зарабатывайте больше</h1>
        <b>с WELBEX</b>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>

      <div className={styles.consulting}>
        <h2>
          Вместе с <b>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</b> мы дарим:
        </h2>

        <div className={styles.gifts}>
          <div>
            <h3>ВИДЖЕТЫ</h3>
            <p>30 готовых решений</p>
          </div>

          <div>
            <h3>DASHBOARD</h3>
            <p>с показателями вашего бизнеса</p>
          </div>

          <div>
            <h3>SKYPE АУДИТ</h3>
            <p>отдела продаж и CRM системы</p>
          </div>

          <div>
            <h3>35 ДНЕЙ</h3>
            <p>использования CRM</p>
          </div>
        </div>

        <button>Получить консультацию</button>
      </div>

      <div className={styles.decoreLight}></div>
      <div className={styles.decoreCircle}></div>
    </section>
  );
};

export default MainBlock;
