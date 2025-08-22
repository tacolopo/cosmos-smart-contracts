import React, { useState } from 'react';

const AppCard = ({ app }) => {
  const { title, description, logo, website, twitter, telegram } = app;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '32px',
      height: '100%',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div style={{ position: 'relative', marginRight: '24px', flexShrink: 0 }}>
          {!imageError ? (
            <img
              src={logo}
              alt={`${title} logo`}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '2px solid rgba(255, 255, 255, 0.1)'
              }}
              onError={handleImageError}
            />
          ) : (
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
                {getInitial(title)}
              </span>
            </div>
          )}
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-4px',
            width: '24px',
            height: '24px',
            background: '#10b981',
            borderRadius: '50%',
            border: '2px solid #1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ width: '12px', height: '12px', color: 'white' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '8px', lineHeight: '1.25' }}>
            {title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#10b981',
              borderRadius: '50%',
              marginRight: '8px'
            }}></div>
            <span style={{ fontSize: '0.875rem', color: '#666666' }}>Active on Cosmos Hub</span>
          </div>
        </div>
      </div>

      <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: '1.625', marginBottom: '32px' }}>
        {description}
      </p>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              background: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
            </svg>
            Launch App
          </a>
        )}

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flex: 1,
                transition: 'all 0.2s ease'
              }}
              title="Follow on Twitter"
            >
              <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
          )}

          {telegram && (
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flex: 1,
                transition: 'all 0.2s ease'
              }}
              title="Join Telegram"
            >
              <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          )}
        </div>
      </div>

      {/* Stats or Additional Info */}
      <div style={{
        marginTop: '32px',
        paddingTop: '24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#666666' }}>
            <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L9 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            Live on Mainnet
          </div>
          <div style={{ color: '#666666' }}>
            Cosmos Hub
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;