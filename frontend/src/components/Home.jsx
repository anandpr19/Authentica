import React from 'react';
import Navbar from './Navbar';  
import {useNavigate} from 'react-router-dom';

const Homepage = () => {
  const router=useNavigate();

  return (
    <div className="bg-black w-full font-sans">
      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}
      <div 
        className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center"
      >
        {/* Blockchain Animation */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        
           src="https://img.freepik.com/free-vector/gradient-connection-background_52683-116380.jpg" 

        />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Welcome to AUTENTICA</h1>
          <h3 className="text-xl mt-4">
            Your trusted platform for authentication & security
          </h3>

          {/* Key Features */}
          <div className="mt-6 space-y-4 text-lg">
            <p>✔ Securely upload and store your documents</p>
            <p>✔ Verify document integrity using blockchain technology</p>
            <p>✔ Easily access documents through crypto wallets</p>
          </div>

          {/* Get Started Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition duration-300"
          onClick={() => router('/signup')}>
            Getting Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-md border border-white/10 py-8 text-center text-white">
        <p>&copy; {new Date().getFullYear()} AUTENTICA. All rights reserved.</p>
        <div className="mt-4">
          <p>📧 Email: support@autentica.com</p>
          <p>📞 Contact: +123 456 7890</p>
          <p>💬 Customer Support: Available 24/7</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
