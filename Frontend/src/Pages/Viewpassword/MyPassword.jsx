import React, { useState, useRef } from 'react'
import { FaExternalLinkAlt, FaEye, FaEyeSlash } from 'react-icons/fa'

const MyPassword = () => {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [savedPasswords, setSavedPasswords] = useState([])
  const [error, setError] = useState('')
  const urlInputRef = useRef(null)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const focusFirstInput = () => {
    if (urlInputRef.current) {
      scrollToTop();
      urlInputRef.current.focus();
      // urlInputRef.current.scrollIntoView({
      //   behavior: 'auto', block: 'start'
      // });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (url.includes(' ')) {
      setError('URL cannot contain spaces')
      return
    }
    //  else {
    setError('')
    setSavedPasswords([...savedPasswords, { url, email, password }])
    setUrl('')
    setEmail('')
    setPassword('')
    // }
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className='text-2xl font-extrabold cursor-default mb-4 text-lime-800'>Add Password</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Website URL (e.g. www.youtube.com)"
              className="w-full p-2 border rounded"
              required
              ref={urlInputRef}
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <div className="flex-1 mb-4 sm:mb-0 sm:mr-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1 sm:ml-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="rounded-xl bg-lime-500 py-3 px-10 text-gray-800 hover:bg-lime-600 hover:text-white transition-all duration-300 transform hover:scale-105">Save Password</button>
          </div>
        </form>

        {/* <hr className='fill-gray-900 mb-4' /> */}

        <hr className="border-t border-lime-700 my-8" />

        <h1 className='text-3xl font-extrabold mb-6 text-lime-800 cursor-default'>My Passwords</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {!savedPasswords.length && (
            <div className="col-span-full flex flex-col items-center justify-center bg-gradient-to-r from-lime-100 to-emerald-100 p-8 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-48 h-48 mb-6">
                <path fill="#4CAF50" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <h2 className="text-2xl font-bold text-lime-800 mb-4">Your Password Vault is Empty</h2>
              <p className="text-lg text-gray-700 text-center mb-6">Start securing your online presence by adding your first password above.</p>
              <button
                onClick={focusFirstInput}
                className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Add Your First Password
              </button>
            </div>
          )}


          {savedPasswords.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-lime-100 to-emerald-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-lime-300">
              <h3 className="font-bold mb-2 truncate text-lime-800">{item.url}</h3>
              <div className="mb-2">
                <span className="text-emerald-700">Email:</span>
                <span className="ml-2 text-lime-700">{item.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <span className="text-emerald-700">Password:</span>
                  <span className="ml-2 font-mono text-lime-700">
                    {item.showPassword ? item.password : '•'.repeat(Math.min(8, item.password.length))}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const updatedPasswords = savedPasswords.map((pass, i) =>
                      i === index ? { ...pass, showPassword: !pass.showPassword } : pass
                    );
                    setSavedPasswords(updatedPasswords);
                  }}
                  className="ml-2 p-2 text-sm bg-lime-200 hover:bg-lime-300 rounded-full transition-colors"
                >
                  {item.showPassword ? <FaEyeSlash className="text-emerald-600" /> : <FaEye className="text-emerald-600" />}
                </button>
                <a
                  href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 p-2 text-sm bg-lime-200 hover:bg-lime-300 rounded-full transition-colors"
                >
                  <FaExternalLinkAlt className="text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyPassword