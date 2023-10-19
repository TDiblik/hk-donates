import { ReactNode } from "react";

import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Layout;
