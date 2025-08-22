import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '64px 0 80px', marginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            {/* Logo and Description */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: window.innerWidth < 768 ? '24px' : '0'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: '600' }}>Cosmos Hub Smart Contracts</div>
                <div style={{ color: '#666666', fontSize: '0.875rem' }}>Showcasing the Cosmos ecosystem</div>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <a
                href="https://cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#666666', 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                Cosmos Network
              </a>
              <a
                href="https://hub.cosmos.network"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#666666', 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                Cosmos Hub
              </a>
              <a
                href="https://github.com/cosmos"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#666666', 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                GitHub
              </a>
            </div>
          </div>

          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666666', fontSize: '0.875rem' }}>
              Built with ❤️ for the Cosmos community • Open source on{' '}
              <a
                href="https://github.com/tacolopo/cosmos-smart-contracts"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none', transition: 'color 0.2s' }}
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