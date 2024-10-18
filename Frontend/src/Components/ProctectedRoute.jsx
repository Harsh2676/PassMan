import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProctectedRoute = () => {
    const a = "abc"
  return (
    <>
        {
            a === "abc" ? <Outlet /> : <Navigate to="/login" />
        }
    </>
  )
}

export default ProctectedRoute