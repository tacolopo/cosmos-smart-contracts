import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-white font-semibold text-lg">Cosmos Hub Smart Contracts</span>
            </div>
            
            <p className="text-white font-light mb-4">
              Showcasing the innovative applications building on the Cosmos ecosystem
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                Cosmos Network
              </a>
              <a
                href="https://hub.cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                Cosmos Hub
              </a>
              <a
                href="https://github.com/cosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <p className="text-white font-light text-sm">
                Built with ❤️ for the Cosmos community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
