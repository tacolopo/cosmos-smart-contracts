import React from 'react';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container">
        <nav className="flex items-center justify-between mb-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg">Cosmos Hub</div>
              <div className="text-gray-300 text-sm">Smart Contracts</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://cosmos.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Cosmos Network
            </a>
            <a
              href="https://hub.cosmos.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Hub Docs
            </a>
            <a
              href="https://github.com/cosmos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg className="icon icon-sm mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-white/10 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-300">Live on Cosmos Hub</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smart Contracts
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Explore cutting-edge decentralized applications built on the most advanced 
            blockchain infrastructure in the cosmos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#applications"
              className="btn btn-primary"
            >
              Explore Applications
              <svg className="icon icon-sm ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://cosmos.network/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Learn About Cosmos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;