import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext'


// in this file we are learning about the context api to use the props in easeir way

const CompC = () => {
    const js = useContext(GlobalContext)
  return (
    <>
      <h2>The javascript library we are learning is {js} Js</h2>
    </>
  )
}

export default CompC
