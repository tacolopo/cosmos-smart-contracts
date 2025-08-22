import React from 'react';
import Header from './components/Header';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import { smartContractApps } from './data/apps';

function App() {
  return (
    <div className="min-h-screen cosmos-gradient">
      <Header />
      
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Smart Contract Applications
            </h2>
            <p className="text-xl text-white font-light max-w-2xl mx-auto">
              Discover innovative decentralized applications built on the Cosmos Hub, 
              leveraging the power of interoperability and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartContractApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Want to add your app?
              </h3>
              <p className="text-white font-light mb-6">
                If you have a smart contract application deployed on Cosmos Hub, 
                we'd love to showcase it here!
              </p>
              <a
                href="https://github.com/username/cosmos-smart-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Submit Your App
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
