import React from 'react'
import styles from "./style.module.css"
function A() {
    console.log(styles);
  return (
    <div className={styles.title}>A</div>
  )
}
export default A;