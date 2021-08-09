import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components/layout.module.scss'

import config from "../lib/config";
import { WSAEINVALIDPROVIDER } from 'node:constants';

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
  const [headerBg, setHeaderBg] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  const updateHeaderBg = () => {
    window.pageYOffset >= 60 ? setHeaderBg(true) : setHeaderBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      updateHeaderBg()
    })
  })

  return (
      <header className={`${styles.header} ${headerBg ? styles.scroll : ''}`}>
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
