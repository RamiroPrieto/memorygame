import React from "react"
import "./Cards.css"

const Cards = ({card , handleChoice, flipped, disabled}) =>{

    const handleClick = () =>{
        if(!disabled){
            handleChoice(card)
        }
    }

    return (
        <div className='card' key={card.id}> 
            <div className={flipped ? "flipped" : ""}> 
            <img className='front' src={card.src} alt="card front"></img>
            <img className='back' onClick={handleClick} src="/img/cover.png" alt="card back"></img>
            </div>
        </div>
    )
}

export default Cards;