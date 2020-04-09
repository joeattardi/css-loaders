import React from 'react';

import Helmet from 'react-helmet';

import Header from './Header';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Helmet title="CSS Loaders" />
      <Header />
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
