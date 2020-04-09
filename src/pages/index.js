import React from 'react';

import Layout from '../components/Layout';

import Loader from '../components/Loader';

import Circle from '../loaders/Circle';
import Pulse from '../loaders/Pulse';

import styles from './index.module.scss';

export default function IndexPage() {
  return (
    <Layout>
      <div id={styles.loaders}>
        <Loader><Circle /></Loader>
        <Loader><Pulse /></Loader>
      </div>
    </Layout>
  );
}
