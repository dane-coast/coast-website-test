import React from 'react';

import './Card.css'

export const Card = (props) => (
  <div className='card-container'>
    <div className="image-container">
      <h4 className="center capitalize">{props.product.title}</h4>
      <img className="product-image" src={process.env.PUBLIC_URL + props.product.image} alt="monster" />
    </div>
    {/* <ul>
      <li>{props.product.description}</li>
      <li className="smaller">Item: {props.product.item}</li>
      <li className="small">Package Quantity: <span className="bold">{props.product.packageQty}</span></li>
      <li className="small">Volume: {props.product.volume}</li>
      <li className="small">Size: {props.product.dimensions}</li>
    </ul> */}
    <div className="pad">
      <div className="smaller capitalize center">{props.product.description}</div>
      <table className="small">
        <tr>
          <td>Item:</td>
          <td>{props.product.item}</td>
        </tr>
        <tr>
          <td>Package Quantity:</td>
          <td className="bold">{props.product.packageQty}</td>
        </tr>
        {props.product.volume && <tr>
          <td>Volume:</td>
          <td>{props.product.volume}</td>
        </tr>}
        {props.product.dimensions && <tr>
          <td>Size:</td>
          <td>{props.product.dimensions}</td>
        </tr>}
      </table>

    </div>
  </div>
)