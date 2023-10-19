import { ReactNode } from "react";

import styles from "./Layout.module.css";
import { Navbar } from "../Navbar";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
};

export default Layout;
