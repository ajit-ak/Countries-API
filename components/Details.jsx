import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const parms = useParams();
  console.log(parms)
  return (
    <h1>Contact US</h1>
  )
}
