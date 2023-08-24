import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.banner}>
      <div className={styles.bannerContainer}>
        <h1
          className="hero__title"
          style={{ fontSize: '3.5rem', color: '#2e8555' }}>
          {siteConfig.title}
        </h1>
        <p className={styles.mainContentTitle}>
          <span>@devgrace</span> is an open source library that provides useful
          React UI Components, React Custom Hooks, and various Utility
          Functions.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduce">
            Getting Started
          </Link>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/Team-Grace/devgrace"
            target="_blank">
            Github
          </a>
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
      description="Provides React UI Components, React Custom Hooks, and Utility functions.">
      <HomepageHeader />

      <Head>
        <meta property="og:title" content="@devgrace" />
        <meta
          property="og:description"
          content="@devgrace is an open source library that provides useful React UI Components, React Custom Hooks, and various Utility Functions"
        />
        <meta
          property="og:url"
          content="https://team-grace.github.io/devgrace/"
        />
        <meta
          property="og:image"
          content="https://github.com/Team-Grace/devgrace/assets/64779472/dcf0fed7-0411-45b4-adbf-363bdf38a5d2"
        />
      </Head>

      <main>
        <div className={styles.mainContentWrapper}>
          <h2 className={styles.mainContentHead}>
            @devgrace/react
            <img src="https://img.shields.io/npm/v/@devgrace/react.svg" />
          </h2>
          <p className={styles.mainContentParagraph}>
            A library that provides useful Components and Custom Hooks related
            to React.
          </p>
          <h2 className={styles.mainContentHead}>
            @devgrace/utils
            <img src="https://img.shields.io/npm/v/@devgrace/utils.svg" />
          </h2>

          <p className={styles.mainContentParagraph}>
            A library that provides useful Utility functions related to client
            development.
          </p>
          <h2 className={styles.mainContentHead}>
            @devgrace/ui
            <img src="https://img.shields.io/npm/v/@devgrace/ui.svg" />
          </h2>

          <p className={styles.mainContentParagraph}>
            A library that provides React UI Components. (Example: Button,
            Select, Checkbox)
          </p>
        </div>
      </main>
    </Layout>
  );
}
