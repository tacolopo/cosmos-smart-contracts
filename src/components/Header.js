import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '64px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px'
            }}>
              <svg style={{ width: '28px', height: '28px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>Cosmos Hub</div>
              <div style={{ color: '#a0a0a0', fontSize: '0.875rem' }}>Smart Contracts</div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a
              href="https://cosmos.network"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#a0a0a0', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Cosmos Network
            </a>
            <a
              href="https://hub.cosmos.network"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#a0a0a0', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Hub Docs
            </a>
            <a
              href="https://github.com/cosmos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontSize: '0.875rem'
              }}
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#10b981',
              borderRadius: '50%',
              marginRight: '8px'
            }}></div>
            <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Live on Cosmos Hub</span>
          </div>
          
          <h1 style={{ 
            fontSize: '3.75rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '24px',
            lineHeight: '1'
          }}>
            The Future of
            <br />
            <span style={{
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Smart Contracts
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#a0a0a0', 
            fontWeight: '300',
            maxWidth: '32rem',
            margin: '0 auto 32px',
            lineHeight: '1.625'
          }}>
            Explore cutting-edge decentralized applications built on the most advanced 
            blockchain infrastructure in the cosmos.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <a
              href="#applications"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '500'
              }}
            >
              Explore Applications
            </a>
            <a
              href="https://cosmos.network/learn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
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