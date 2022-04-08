import React, { useEffect, useState } from 'react'
import cardData from "../../api/cards.json"
import Card from '../Card/Card'
const Cards = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    setCards(cardData)
  }, [])
  
  return (
    <div className='container flex gap-4 my-16'>
      {
        cards && cards.map(card => (
          <Card key={card.id} card={card} />
        ))
      }
    </div>
  )
}

export default Cards