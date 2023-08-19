import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduce">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      
      <Head>
        <meta property="og:title" content="@devgrace" />
        <meta
          property="og:description"
          content="@devgrace is an open source library that provides useful React UI Components, React Custom Hooks, and various Utility Functions"
        />
        <meta property="og:url" content="https://team-grace.github.io/devgrace/" />
        <meta property="og:image" content="https://github.com/Team-Grace/devgrace/assets/64779472/276a5a68-160f-4bf4-8df6-d2d8d663d9b0" />
      </Head>
      
      <main></main>
    </Layout>
  );
}
