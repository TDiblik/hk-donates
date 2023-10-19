import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img src="./assets/BiDonateHeart.svg" role="none" alt="" />
        hk-donates
      </div>
      <Menu>
        <MenuButton
          as={Button}
          background={"#C4001F"}
          _active={{ background: "#A3001A" }}
          _hover={{ background: "#A3001A" }}
          color={"white"}
          className={styles.donateButton}
          rightIcon={<img src="./assets/BsHeartFill.svg" role="none" alt="" />}
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem _hover={{ background: "#C4001F", color: "#fff" }} onClick={() => navigate("/login")}>
            Login
          </MenuItem>
          <MenuItem _hover={{ background: "#C4001F", color: "#fff" }} onClick={() => navigate("/register")}>
            Register
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Navbar;
