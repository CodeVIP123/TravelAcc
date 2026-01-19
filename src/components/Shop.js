import React from 'react'
import { NavLink } from 'react-router-dom'

const Shop = () => {
  return (
    <>
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
              <img src="/baggage.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Baggage</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/noise-cancel-headphones">
              <img src="/noise-cancel-headphones.webp" className="card-img-top" alt="..." />
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
              <img src="/reusable-water-bottle.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Reusable Water Bottle</h5>
            </div>
          </div>
        </div>
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
              <img src="/travel-pillow.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Travel Pillow</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/power-bank">
              <img src="/power-bank.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Power Bank</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', marginRight: '20px' }}>
            <NavLink to="/shop/travel-organizer">
              <img src="/travel-organizer.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Travel Organizer</h5>
            </div>
          </div>
        </div>
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
            <NavLink to="/shop/universal-adapter">
              <img src="/universal-adapter.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Universal Adapter</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/packing-cubes-with-compression">
              <img src="/packing-cubes-with-compression.jpeg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Packing Cubes with Compression</h5>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: '18rem',
              marginRight: '20px',
            }}
          >
            <NavLink to="/shop/usb-data-blocker">
              <img src="/usb-data-blocker.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">USB Data Blocker</h5>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{
            gap: '200px',
            marginTop: '40px',
            alignItems: 'flex-start',
          }}
        >
          <div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
            <NavLink to="/shop/portable-door-lock">
              <img src="/portable-door-lock.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Portable Door Lock</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <NavLink to="/shop/self-sealing-dry-bag">
              <img src="/self-sealing-dry-bag.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Self Sealing Dry Bag</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', marginRight: '20px' }}>
            <NavLink to="/shop/travel-footrest">
              <img src="/travel-footrest.jpg" className="card-img-top" alt="..." />
            </NavLink>
            <div className="card-body text-center">
              <h5 className="card-title">Travel Footrest</h5>
            </div>
          </div>
        </div>
    </>
  )
}
export default Shop



