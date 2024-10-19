import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const GenPassword = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  useEffect(() => {
    generatePassword();
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols, length])

  const generatePassword = () => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    // If no charset is selected, use a default set
    if (charset === '') {
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    // if (charset === '') {
    //   charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    // }

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    toast.success('Password copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-gradient-to-r from-lime-200 via-lime-100 to-emerald-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-lime-700">Generate Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Generate a password as long as possible for maximum security
        </p>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 border border-lime-300 rounded"
          />
        </div>
        <div className="mb-4">
        </div>
        <div className="mb-4">
          <button
            onClick={copyToClipboard}
            className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password Length: {length}</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-lime-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2"
            />
            Include Uppercase
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-2"
            />
            Include Lowercase
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>
        {!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols && <p className='text-center text-red-700 font-bold'>Uppercase & Lowercase Is set Default</p>}
      </div>
    </div>
  )
}

export default GenPassword

{/* <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-gradient-to-r from-lime-200 via-lime-100 to-emerald-200 animate-gradient-x">
        <div className="relative group">
          <div className="absolute inset-0 bg-lime-300 blur-3xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300"></div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-center py-20 relative z-10 transition-transform duration-300 group-hover:scale-105">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-emerald-700 hover:from-emerald-600 hover:to-lime-700 transition-all duration-300">
              Coming Soon
            </span>
          </h1>
        </div>
      </div> 
*/}