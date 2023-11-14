import React from 'react';
import styles from './pagination.module.css';
export default function Paginatoin() {
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled>Previous</button>
        <button className={styles.button}>Next</button>
    </div>
  )
}
