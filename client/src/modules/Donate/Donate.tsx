import CategorySelect from "./components/CategorySelect/CategorySelect";
import FileDonation from "./components/FileDonation/FileDonation";

import styles from "./Donate.module.css";

const Donate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Nový Příspěvek</h1>
        <img src="./assets/Progress.svg" role="none" alt="" />
        <FileDonation />
      </div>
    </div>
  );
};

export default Donate;
