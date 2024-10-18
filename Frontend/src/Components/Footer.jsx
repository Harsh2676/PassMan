import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-800 to-emerald-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative group">
              {/* <img src="../../assets/Images/Logo.png" alt="PassMan Logo" className="w-40 transition-transform duration-300 group-hover:scale-105" /> */}
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-lime-300">PassMan</h2>
            <p className="text-sm text-center md:text-left max-w-xs leading-relaxed">
              Your trusted companion for secure and effortless password management
            </p>
            <div className="flex space-x-4 mt-2">
              <span className="text-lime-300 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7a1 1 0 10-2 0v3a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-lime-300 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-lime-300 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-lime-300 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/generate-password" className="hover:text-lime-300 transition-colors duration-300">Generate Password</Link></li>
              <li><a href="mailto:harshbharadiya8@gmail.com" className="hover:text-lime-300 transition-colors duration-300">Contact Developer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Password Tips</h3>
            <ul className="space-y-2">
              <li className="hover:text-lime-300 transition-colors duration-300 cursor-pointer">Use unique passwords</li>
              <li className="hover:text-lime-300 transition-colors duration-300 cursor-pointer">Enable two-factor auth</li>
              <li className="hover:text-lime-300 transition-colors duration-300 cursor-pointer">Update regularly</li>
              <li className="hover:text-lime-300 transition-colors duration-300 cursor-pointer">Avoid using personal information</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://harsh-react-portfolio.vercel.app/" className="hover:text-lime-300 transition-colors duration-300" aria-label="Portfolio">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harsh-bharadiya-b3a73927a/" className="hover:text-lime-300 transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Harsh2676" className="hover:text-lime-300 transition-colors duration-300" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            {/* <p className="text-sm">Stay updated:</p>
            <form className="mt-2 flex">
              <input type="email" placeholder="Enter your email" className="px-3 py-2 bg-white text-gray-800 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-lime-500 text-white px-4 py-2 rounded-r-md hover:bg-lime-600 transition-colors duration-300">Subscribe</button>
            </form> */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-lime-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} PassMan. All rights reserved.</p>
          <p className="text-xs mt-2">Made with ❤️ by Harsh Bharadiya</p>
          <p className="text-xs mt-2">Version 1.0.0 | Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-xs mt-2">Secure your digital life with PassMan - Your trusted password companion</p>
          <p className="text-xs mt-2">
            {/* <a href="#" className="hover:text-lime-300 transition-colors duration-300">FAQ</a> | 
            <a href="#" className="hover:text-lime-300 transition-colors duration-300 ml-2">Support</a> | 
            <a href="#" className="hover:text-lime-300 transition-colors duration-300 ml-2">Feedback</a> */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer