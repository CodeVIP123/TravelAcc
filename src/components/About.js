import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">
          <u style={{ marginTop: 10, backgroundColor: 'white', color: 'orange' }}>
            About Us
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
              src="/TravelAcc/about.png"
              alt="Travel Accessories"
              style={{ width: '80%', height: 'auto', borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h2 className="text-center" style={{ color: 'orange' }}>
          Contact Us
        </h2>
        <div className="text-center mt-3">
          <p>
            <b>Address:</b> 123 Wanderlust Avenue, Suite 456, Mumbai, Maharashtra, 400001
          </p>
          <p>
            <b>Email:</b> contact@travelacc.com
          </p>
          <p>
            <b>Phone:</b> +91 98765 43210
          </p>
        </div>
      </div>
    </>
  )
}

export default About
