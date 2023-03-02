import React from 'react'
import { Exercise } from "../components/Exercise";

export default function SimpleList({animalWalks}) {

  const allWalks = animalWalks?.map((animal) => {
    return <Exercise exer={animal}/>
  })

  return (
    <div>
    {allWalks}
    </div>
  )
}
