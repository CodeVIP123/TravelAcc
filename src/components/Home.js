import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">
          <u style={{ marginTop: 10, backgroundColor: 'white', color: 'orange' }}>
            TravelAcc - Your Best Tourist Partner
          </u>
        </h1>
        <div
          className="d-flex align-items-center my-5"
          style={{
            maxWidth: 900,
            margin: '20px auto 0 auto',
            textAlign: 'left',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          <div style={{ flex: 1, paddingRight: 30 }}>
            <p>
              <b>
                TravelAcc is your one-stop destination for all travel accessories, offering a wide range of products to make your journeys comfortable and hassle-free. Whether you're planning a weekend getaway or a long vacation, our website provides high-quality travel essentials designed to meet every traveler’s needs. Discover backpacks, luggage, organizers, and more, all curated to enhance your travel experience. With TravelAcc, you can travel smarter, safer, and in style.
              </b>
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/TravelAcc/home.webp"
              alt="Travel Accessories"
              style={{ width: '80%', height: 'auto', borderRadius: 10 }}
            />
          </div>
        </div>
        <h2 className="text-center">
          <u style={{ marginTop: 10, backgroundColor: 'white', color: 'orange' }}>
            Our Some Popular Products
          </u>
        </h2>
        {/* First row of cards */}
        <div
          className="d-flex justify-content-center"
          style={{
            gap: '200px',
            marginTop: '20px',
            alignItems: 'flex-start',
          }}
        >
          <div
            className="card"
            style={{
              width: '18rem',
              marginLeft: '20px',
            }}
          >
            <NavLink to="/shop/baggage">
              <img src="/TravelAcc/baggage.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Baggage</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/noise-cancel-headphones">
              <img src="/TravelAcc/noise-cancel-headphones.webp" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Noise Cancelation Headphones</h5>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: '18rem',
              marginRight: '20px',
            }}
          >
            <NavLink to="/shop/reusable-water-bottle">
              <img src="/TravelAcc/reusable-water-bottle.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Reusable Water Bottle</h5>
            </div>
          </div>
        </div>
        {/* Second row of cards */}
        <div
          className="d-flex justify-content-center"
          style={{
            gap: '200px',
            marginTop: '40px',
            alignItems: 'flex-start',
          }}
        >
          <div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
            <NavLink to="/shop/travel-pillow">
              <img src="/TravelAcc/travel-pillow.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Travel Pillow</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/power-bank">
              <img src="/TravelAcc/power-bank.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Power Bank</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', marginRight: '20px' }}>
            <NavLink to="/shop/travel-organizer">
              <img src="/TravelAcc/travel-organizer.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Travel Organizer</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
