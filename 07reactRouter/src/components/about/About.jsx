// src/components/about/About.jsx


import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to the About page. This React app demonstrates routing using React Router.
      </p>
    </div>
  );
}
