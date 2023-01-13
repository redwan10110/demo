import React from 'react'
import './CountryCard.css';
const CountryCard = ({country}) => {
    const {common,official} = country.name;
    const {png}= country.flags;
  return (
    <div className='card'>
        <h1>{common}</h1>
        <img src={png} alt="" />
        
    </div>
  )
}

export default CountryCard;