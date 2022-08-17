import React from 'react'

const Prop = (props) => {
    // const language = props.language
    // const technology = props.technology
    const {language, technology} = props
  return (
    <>
      {/* <h2> It is a {props.language} Class. It is mainly used for {props.technology} development</h2> */}
      <h2> It is a {language} Class. It is mainly used for {technology} development</h2>
    </>
  )
}

export default Prop
