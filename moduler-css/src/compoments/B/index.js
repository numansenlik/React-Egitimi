import React from 'react'
import styles from "./style.module.css";
function B() {
    console.log(styles);
  return (
    <div className={styles.title}>B</div>
  )
}
export default B;