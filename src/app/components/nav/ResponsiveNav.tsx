import React from 'react'
import Header from './Header'

const ResponsiveNav = () => {
  return (
    <div>
      <Header />

      {/* ⬇️ This contains the actual content below the fixed mobile header */}
      <div className="mainContent">
        {/* <h1>Welcome to Sanjeeda!</h1> */}
        {/* <p>This is your home page content. Replace this with your components or sections.</p> */}
        {/* More components or sections here */}
      </div>
    </div>
  )
}

export default ResponsiveNav
