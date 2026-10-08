import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'
import Productlink from '../components/Productlink'
export default function Product() {
  return (
    <div>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: 'center',color:'#ff0000'}}>Product Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <Productlink url="/product/computer" title="COMPUTER" />
        <Productlink url="/product/smartphone" title="SMARTPHONE" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae modi, explicabo dolorem sit repellat dolores necessitatibus aspernatur mollitia quae pariatur corporis minus tempora expedita perferendis nisi natus iusto voluptas quibusdam. Nostrum voluptatibus ducimus minus vel voluptas corporis ea, laudantium amet rem rerum consectetur quod voluptatem minima velit magni sit?</p>
      <Footer />
    </div>
  )
}
