import { Button } from "@chakra-ui/react";
import styles from "./index.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam dui
            sem, fermentum vitae, sagittis id, malesuada in, quam. Nulla
            pulvinar eleifend sem. Vivamus porttitor turpis ac leo. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue
            id magna semper rutrum. In dapibus augue non sapien. Integer
            vulputate sem a nibh rutrum consequat. Proin mattis lacinia justo.
            Fusce aliquam vestibulum ipsum. Mauris dictum facilisis augue.
          </p>
          <div className={styles.headerButtonWrapper}>
            <Button colorScheme="red">Podpořte některé ze sbírek</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
