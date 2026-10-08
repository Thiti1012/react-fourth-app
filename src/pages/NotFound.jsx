import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div>
      <Header />
        <h2 style={{ textAlign: 'center',color:'#ff0000'}}>404 Not Found</h2>
      <Footer />
    </div>
  )
}
