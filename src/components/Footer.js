import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 mt-20">
      <div className="container">
        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Description */}
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Cosmos Hub Smart Contracts</div>
                <div className="text-gray-400 text-sm">Showcasing the Cosmos ecosystem</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-8">
              <a
                href="https://cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Cosmos Network
              </a>
              <a
                href="https://hub.cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Cosmos Hub
              </a>
              <a
                href="https://github.com/cosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              Built with ❤️ for the Cosmos community • Open source on{' '}
              <a
                href="https://github.com/username/cosmos-smart-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;