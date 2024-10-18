import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen bg-lime-50">
        <h1 className="text-4xl font-bold text-center mb-8 text-lime-700 animate-fade-in-down">About PassMan</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-lime-900 animate-fade-in">
            Welcome to PassMan, your all-in-one password management solution! Developed by a passionate solo developer, PassMan is designed to simplify and secure your digital life.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-lime-600 animate-slide-in-left">What We Offer</h2>
          <ul className="list-disc list-inside mb-6 text-lime-800">
            <li className="mb-2 animate-fade-in-up">Secure storage for all your passwords</li>
            <li className="mb-2 animate-fade-in-up delay-100">Advanced password generator</li>
            <li className="mb-2 animate-fade-in-up delay-200">User-friendly interface</li>
            <li className="mb-2 animate-fade-in-up delay-300">Cross-device synchronization</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-lime-600 animate-slide-in-right">Our Mission</h2>
          <p className="text-lg mb-6 text-lime-900 animate-fade-in">
            At PassMan, we believe in making online security accessible to everyone. Our mission is to provide a robust, easy-to-use platform that helps you manage your digital identities with confidence.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-lime-600 animate-slide-in-left">Why Choose PassMan?</h2>
          <p className="text-lg mb-6 text-lime-900 animate-fade-in">
            As a solo-developed project, PassMan offers a unique, personalized approach to password management. We're committed to continuous improvement and responsive support, ensuring that your needs are always our top priority.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md border border-lime-200 animate-bounce-in">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Get Started Today!</h3>
            <p className="text-lg text-lime-900">
              Join thousands of satisfied users who have taken control of their online security with PassMan. Sign up now and experience the peace of mind that comes with organized, secure password management.
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-lime-600 animate-slide-in-right">Contact the Developer</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-lime-200 animate-fade-in">
            <p className="text-lg mb-4 text-lime-900">
              Have questions, suggestions, or just want to say hello? I'd love to hear from you! As the solo developer behind PassMan, I'm always eager to connect with users and improve the application.
            </p>
            <ul className="text-lime-800">
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Email:</span> <a href="mailto:harshbharadiya8@gmail.com" className="text-lime-600 hover:underline">harshbharadiya8@gmail.com</a>
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/harsh-bharadiya-b3a73927a/" className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">Harsh Bharadiya</a>
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-semibold">GitHub:</span>  <a href="https://github.com/Harsh2676" className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">Harsh2676</a>
              </li>
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="font-semibold">Portfolio: </span> <a href="https://harsh-react-portfolio.vercel.app/" className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">Harsh's Portfolio</a>
              </li>
            </ul>
            <p className="text-lg mt-4 text-lime-900">
              Your feedback is invaluable in shaping the future of PassMan. Let's work together to make password management even better!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About