import React from 'react'

import { GetStaticProps } from "next";
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components/layout.module.scss'

import config from "../lib/config";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
          <title>{config.site_title}</title>
          <meta name="description" content={config.site_description} />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        siteTitle={config.site_title}
      />
      <main>
          {children}
      </main>
    </>
  );
}

const Header = ({ siteTitle }) => {
  return (
      <header className={styles.header}>
          <div className={styles.container}>
              <Link href='/' passHref>
                  <div className={styles.logo}>
                    {siteTitle}
                  </div>
              </Link>
              <Nav />
          </div >
      </header >
  )
}

const Nav = () => {
  return (
      <nav className={styles.nav}>
          <ul>
              <li>Fresh.</li>
              <li>Me.</li>
          </ul>
      </nav>
  )
}
