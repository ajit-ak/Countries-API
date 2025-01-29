import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Errorpage() {
  const error = useRouteError()
  return (
    <header>Something Went Wrong......{error.status}...details not found</header>
  )
}
