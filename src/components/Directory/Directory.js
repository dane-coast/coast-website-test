import React from 'react';
// import ShopCollection from .
import ShopTubes from '../../assets/tubes.webp'
import ShopPhleb from '../../assets/butterfly.jpeg'
import ShopShipping from '../../assets/shipping.jpeg'
import './Directory.scss'

// collection containers
// collection supplies
// Clerical

const Directory = props => {
  return (
    <div className='directory'>
      {/* <div className="wrap"> */}
      <div className="item" style={{ backgroundImage: `url(${ShopTubes})` }}>
        <a>
          Shop Tubes
          </a>
      </div>
      <div className="item" style={{ backgroundImage: `url(${ShopPhleb})` }}>
        <a>
          Shop Phleb
          </a>
      </div>
      <div className="item" style={{ backgroundImage: `url(${ShopShipping})` }}>
        <a>
          Shop Shipping
          </a>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Directory