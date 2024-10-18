import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const MyPassword = () => {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [savedPasswords, setSavedPasswords] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSavedPasswords([...savedPasswords, { url, email, password }])
    setUrl('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Website URL"
              className="w-full p-2 border rounded"
              required
            />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedPasswords.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">{item.url}</h3>
              <p>Email: {item.email}</p>
              <p>Password: ••••••••</p>
            </div>
          ))}
        </div>
      </div>

      <hr className='fill-gray-900' />
      <div className="container mx-auto p-4"></div>
    </>
  )
}

export default MyPassword