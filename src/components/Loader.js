import React from 'react';

import styles from './Loader.module.scss';

export default function Loader({ children }) {
  return (
    <div className={styles.loader}>
      {children}
    </div>
  );
}
