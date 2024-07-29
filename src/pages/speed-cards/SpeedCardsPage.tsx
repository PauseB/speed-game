import React, { CSSProperties, useEffect, useState } from "react"
import { Card } from "./game"
import "./speed-cards.css"
import { cn } from "@/lib/utils"
import { leftpad } from "@/utils"

type CardComponentProps = {
  card: Card,
  className?: string,
  style?: CSSProperties,
}
function CardComponent({ card, className, style }: CardComponentProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={cn("card-scene", className)} style={style}>
      <div 
        className={cn("card", isFlipped && "is-flipped")} 
        onClick={() => setIsFlipped(f => !f)}
      >
        <img src="/assets/card-large/card_back.png" className="card-face"/>
        <img src={`/assets/card-large/card_${card.suit}_${card.rank}.png`} className="card-face"/>
      </div>
    </div>
  )
}


function GameStartAnimation() {
  const [animStep, setAnimStep] = useState(0)

  useEffect(() => {
    const animStepsDuration = [1000, 1000, 1000]
    let accDelay = 0
    const animStepsDelay = animStepsDuration.map((v) => { accDelay += v; return accDelay })
    const animTimeouts = animStepsDelay.map((animStepDelay, index) => {
      const nextStep = index + 1
      return setTimeout(() => {
        setAnimStep(nextStep)
      }, animStepDelay)
    })

    return () => {
      animTimeouts.forEach(clearTimeout)
    }
  }, [])


  return (
    <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {
        Array.from({ length: 5 }, (v, _) => _).map(i => (
          <CardComponent className="fly-in-out" style={{ animationDelay: `${i * 40}ms` }} card={{ suit: "spades", rank: "A" }} key={i}/>
        ))
      }
    </div>
  )
}

export default function SpeedCardsPage() {
  return (
    <div className="h-full w-full relative">
      {/* <CardComponent card={{ suit: "spades", rank: "A" }}/> */}
      <GameStartAnimation/>
    </div>
  )
}