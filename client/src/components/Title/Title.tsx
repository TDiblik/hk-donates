import { ReactNode } from "react";

import styles from "./Title.module.css";

interface Props {
  children: ReactNode;
}

const Title = (props: Props) => {
  return <h1 className={styles.title}>{props.children}</h1>;
};

export default Title;
