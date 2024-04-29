import React, { useState } from 'react';
import { button, input } from '@material-tailwind/react';

interface NetworkProps {}

const NetworkC: React.FC<NetworkProps> = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Coming Soon</h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
            Our website is under construction.
          </p>
        </div>
        <div className="mt-10">
          <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-gray-500 dark:border-gray-300 py-2">
              <label
                htmlFor="email"
                className="sr-only"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded dark:bg-cyan-600 dark:hover:bg-cyan-800 dark:border-cyan-600 ${
                  !email ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                type="submit"
                aria-label="Notify me"
                disabled={!email}
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300 text-xs">
            We'll notify you when we launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkC;