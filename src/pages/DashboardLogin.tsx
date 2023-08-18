import { FunctionComponent } from "react";
import styles from "./DashboardLogin.module.css";
const DashboardLogin: FunctionComponent = () => {
  return (
    <div className={styles.dashboardLogin}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <div className={styles.form}>
        <div className={styles.username}>
          <div className={styles.rectangle} />
          <div className={styles.username1}>Username</div>
          <img className={styles.userIcon} alt="" src="/user.svg" />
        </div>
        <div className={styles.password}>
          <div className={styles.rectangle} />
          <div className={styles.username1}>password</div>
          <img className={styles.lockIcon} alt="" src="/lock.svg" />
        </div>
        <div className={styles.loginBtn}>
          <div className={styles.rectangle2} />
          <div className={styles.login}>login</div>
        </div>
        <div className={styles.forgotPassword}>Forgot password?</div>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default DashboardLogin;
