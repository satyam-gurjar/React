import React from "react";


const Post = React.memo(({value})=>{
  console.log('Post')

return (
  <>
  <h1>hello {value.name} your age is {value.age}</h1>
  </>
)

})

export default Post;