import React from 'react';

const Header = () => {
  return (
    <header className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white">
                Cosmos Hub
              </h1>
              <p className="text-xl text-white font-light mt-2">
                Smart Contract Ecosystem
              </p>
            </div>
          </div>
          
          <p className="text-lg text-white font-light max-w-3xl mx-auto leading-relaxed">
            The Cosmos Hub is the heart of the Cosmos ecosystem, enabling secure and scalable 
            smart contract applications through the power of the Inter-Blockchain Communication (IBC) protocol.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
