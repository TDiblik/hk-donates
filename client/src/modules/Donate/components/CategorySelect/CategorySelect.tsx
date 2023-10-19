import { Checkbox } from "@chakra-ui/react";
import { category } from "../../types";
import styles from "./CategorySelect.module.css";
import { subCategoriesMock } from "./constants";

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
                <div className={styles.categoryItemWrapper}>
                  <Checkbox colorScheme="red" defaultChecked></Checkbox>
                  <p>{category.name}</p>
                </div>
                <img src="./assets/FiChevronRight.svg" role="none" alt="" />
              </div>
            );
          })}
        </div>
        <div className={styles.categoryPreview}>
          <p className={styles.blueParagraph}>{">‘category.name’"}</p>
          <table border={1}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subCategoriesMock.map((subCategory, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Checkbox colorScheme="red" defaultChecked></Checkbox>
                    </td>
                    <td>{subCategory.heading}</td>
                    <td>{subCategory.description}</td>
                    <td>
                      <button>Action</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
