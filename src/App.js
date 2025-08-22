import React from 'react';
import Header from './components/Header';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import { smartContractApps } from './data/apps';

function App() {
  return (
    <div className="app-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
                Smart Contract Applications
              </h1>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
                Discover the next generation of decentralized applications built on Cosmos Hub. 
                Experience the power of interoperability, security, and scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section id="applications" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {smartContractApps.map((app, index) => (
                <div 
                  key={app.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <AppCard app={app} />
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="glass-card p-12 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Submit Your Application
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Building something amazing on Cosmos Hub? Join our showcase and reach thousands 
                    of developers and users in the Cosmos ecosystem.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/username/cosmos-smart-contracts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <svg className="icon icon-sm mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Submit on GitHub
                  </a>
                  <a
                    href="https://cosmos.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Learn About Cosmos
                    <svg className="icon icon-sm ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;