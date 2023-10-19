import { Checkbox } from "@chakra-ui/react";
import { category } from "../../types";
import styles from "./CategorySelect.module.css";

interface Props {
  categories: category[];
}

const CategorySelect = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Výběr subjektu</h3>
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.categorySidebar}>
          {props.categories.map((category: category) => {
            return (
              <div className={styles.categoryItem}>
                <Checkbox borderColor={"#C4001F"} defaultChecked></Checkbox>
                <p>{category.name}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.categoryPreview}></div>
      </div>
    </div>
  );
};

export default CategorySelect;
