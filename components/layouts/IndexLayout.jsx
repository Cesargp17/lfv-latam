import Head from 'next/head'
import React from 'react'
import { Header } from '../ui/Header'
import { Navbar } from '../ui/Navbar'
import { SideMenu } from '../ui/SideMenu'

const origin = typeof window == 'undefined' ? '' : window.location.origin;

export const IndexLayout = ({ 
    children, title = 'LFV - Latam | Inicio', 
    pageDescription = 'LFV - Latam es una Liga de Fútbol Virtual de Clubes Pro FIFA 23' 
  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="César Pérez" />
            <meta name='description' content={ pageDescription } />
            <meta name="keywords" content='FIFA, Clubes Pro, Fútbol, Torneos, Virtual, FIFA 23, Liga, Copa, LFV' />

            <meta name='og:title' content={ title } />
            <meta name='og:description' content={ pageDescription } />
            <meta property="og:image" content={`${ origin }/img/banner.jpg`} />

            <meta property="Twitter:title" content={ title } />
            <meta property="Twitter:description" content={ pageDescription } />
            <meta property="Twitter:image" content={`${ origin }/img/banner.jpg`} />

            <meta property="og:image" content={`${ origin }/img/banner.jpg`} />
        </Head>

        <nav>
            <Navbar/>
        </nav>

        <Header/>
        <div className="custom-shape-divider-bottom-1672883067">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>

        <SideMenu/>

        <main style={{ margin: '80px auto', paddingLeft: 0, paddingRight: 0, paddingTop: 0, marginTop: 30 }}>
            { children }
        </main>
    </>
  )
}