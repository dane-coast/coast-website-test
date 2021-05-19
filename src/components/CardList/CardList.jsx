import React from 'react'
import { Card } from './Card/Card';
import "@fontsource/metropolis";
import './CardList.css'

export const CardList = (props) => (
  <div className="card-list">
    {props.products.map(product => (
      <Card key={product.item} product={product} />
    ))}
  </div>
)
