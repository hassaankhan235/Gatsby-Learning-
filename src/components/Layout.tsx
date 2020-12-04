import React from 'react'
import Footer from './Footer'
import Header from './header'

function Layout({children}) {
  return (
    <>
    <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
