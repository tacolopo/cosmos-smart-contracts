import React from 'react';
import Header from './components/Header';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import { smartContractApps } from './data/apps';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)', position: 'relative' }}>
      {/* Background overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        
        <main>
          {/* Hero Section */}
          <section style={{ padding: '80px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '24px',
                  lineHeight: '1.1'
                }}>
                  Smart Contract Applications
                </h1>
                <p style={{ 
                  fontSize: '1.25rem', 
                  color: '#a0a0a0', 
                  fontWeight: '300',
                  maxWidth: '48rem',
                  margin: '0 auto',
                  lineHeight: '1.625'
                }}>
                  Discover the next generation of decentralized applications built on Cosmos Hub. 
                  Experience the power of interoperability, security, and scalability.
                </p>
              </div>
            </div>
          </section>

          {/* Apps Grid */}
          <section id="applications" style={{ padding: '64px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                gap: '32px',
                marginBottom: '80px'
              }}>
                {smartContractApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>

              {/* Call to Action */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '48px',
                  maxWidth: '42rem',
                  margin: '0 auto'
                }}>
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px'
                    }}>
                      <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                      Submit Your Application
                    </h3>
                    <p style={{ color: '#a0a0a0', fontSize: '1.125rem', lineHeight: '1.625', marginBottom: '32px' }}>
                      Building something amazing on Cosmos Hub? Join our showcase and reach thousands 
                      of developers and users in the Cosmos ecosystem.
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <a
                      href="https://github.com/tacolopo/cosmos-smart-contracts"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 24px',
                        background: '#3b82f6',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: '500',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Submit on GitHub
                    </a>
                    <a
                      href="https://cosmos.network"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 24px',
                        background: 'transparent',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontWeight: '500',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Learn About Cosmos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;