import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
      <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-lime-100 to-lime-300 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-lime-800 mb-8 animate-fade-in-down">
            Welcome to PassMan
          </h1>
          <p className="text-xl sm:text-2xl text-lime-700 mb-12 animate-fade-in">
            Your secure, all-in-one password management solution
          </p>
          <div className="flex justify-center space-x-4 mb-16">
            <NavLink to="my-passwords" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
              Get Started
            </NavLink>
            <NavLink to="/about-us" className="bg-white text-lime-600 font-bold py-3 px-6 rounded-lg border-2 border-lime-600 hover:bg-lime-100 transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in delay-150">
              Learn More
            </NavLink>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <svg className="w-12 h-12 text-lime-500 mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="text-xl font-semibold text-lime-800 mb-2 transition-colors duration-300 ease-in-out hover:text-lime-600">Secure Storage</h3>
            <p className="text-lime-600 transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">Keep all your passwords safe and encrypted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <svg className="w-12 h-12 text-lime-500 mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <h3 className="text-xl font-semibold text-lime-800 mb-2 transition-colors duration-300 ease-in-out hover:text-lime-600">Auto-Sync</h3>
            <p className="text-lime-600 transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">Access your passwords across all devices</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home