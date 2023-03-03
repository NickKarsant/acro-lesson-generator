import { animalWalks } from "./animalWalks"
import { warmups } from "./warmups"
import { mains } from "./mains"
import { conditioning } from "./conditioning"




export const randomizedCurriculum = () => {

  return {
    animalWalks: fourRandomAnimalWalks(animalWalks),
    warmups: fourRandomWarmups(warmups),
    mains: fourRandomMains(mains),
    conditioning: fourRandomConditioning(conditioning)
   }
}

export const fourRandomWarmups = (warmups) => {
  let uniqueWarmups = []

  for(let i = 0; uniqueWarmups.length < 4; i++) {
    let index = Math.floor(Math.random() * warmups.length); 
    uniqueWarmups.push(warmups[index])
    const unique = [...new Set(uniqueWarmups.map(item => item))];
    uniqueWarmups = [...unique]
  }
  return uniqueWarmups

}

export const fourRandomAnimalWalks = (animalWalks) => {
  let uniqueWalks = []

  for(let i = 0; uniqueWalks.length < 4; i++) {

    let index = Math.floor(Math.random() * animalWalks.length); 

    uniqueWalks.push(animalWalks[index])
    const unique = [...new Set(uniqueWalks.map(item => item))];
    uniqueWalks = [...unique]

  }
  return uniqueWalks

}
export const fourRandomMains = (mains) => {
  let uniqueMains = []

  for(let i = 0; uniqueMains.length < 6; i++) {
    let index = Math.floor(Math.random() * mains.length); 
    uniqueMains.push(mains[index])
    const unique = [...new Set(uniqueMains.map(item => item))];
    uniqueMains = [...unique]
  }
  // const uniqueMainsSplit = [[...uniqueMains.slice(0,3)], [...uniqueMains.slice(3,6)]]
  return uniqueMains
}

export const fourRandomConditioning = (conditioning) => {
  let uniqueConditioning = []

  for(let i = 0; uniqueConditioning.length < 3; i++) {
    let index = Math.floor(Math.random() * conditioning.length); 
    uniqueConditioning.push(conditioning[index])
    const unique = [...new Set(uniqueConditioning.map(item => item))];
    uniqueConditioning = [...unique]
  }

  return uniqueConditioning
}