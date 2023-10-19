import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img src="./assets/BiDonateHeart.svg" role="none" alt="" />
        hk-donates
      </div>
      <Button className={styles.donateButton} colorScheme="red">
        Přispět <img src="./assets/BsHeartFill.svg" role="none" alt="" />
      </Button>
    </div>
  );
};

export default Navbar;
