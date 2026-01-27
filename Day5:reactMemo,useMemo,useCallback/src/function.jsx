import React from "react"

const Fun = React.memo(({value})=>{

  value();
  console.log("function")

  return (
    <>
    </>
  )
})

export default Fun;