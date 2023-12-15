import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Contact() {
  const data = useLoaderData()
  return (
    <div>
      <h1>Follower : {data.followers}</h1>
    </div>
  )
}

export default Contact

export const  githubInfoLoader = async ()=>{
  const response = await fetch ("https://api.github.com/users/AmirSaudagar55")
  return response.json()
}