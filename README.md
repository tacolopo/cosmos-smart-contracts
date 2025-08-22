# Cosmos Hub Smart Contracts

A beautiful, modern showcase of smart contract applications deployed on the Cosmos Hub. This React application highlights the innovative decentralized applications building on the Cosmos ecosystem.

## 🌟 Features

- **Modern UI/UX**: Beautiful, responsive design with Cosmos-themed gradients and animations
- **App Showcase**: Dedicated cards for each smart contract application
- **Social Links**: Direct links to Twitter, Telegram, and websites
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Lightweight React application with optimized assets

## 🚀 Featured Applications

### eSchrow
A decentralized escrow platform that allows users to create free, permissionless escrow contracts in ATOM. Secure, transparent, and trustless transactions for the Cosmos ecosystem.
- Website: [eschrow.com](https://eschrow.com)
- Twitter: [@eschrowcom](https://x.com/eschrowcom)

### PumpIt.ink
A memecoin generator and trading platform built on Cosmos Hub. Create, launch, and trade memecoins with ease while leveraging the security and interoperability of the Cosmos ecosystem.
- Website: [pumpit.ink](https://pumpit.ink)
- Twitter: [@pumpitink](https://x.com/pumpitink)
- Telegram: [pumpitink](https://t.me/pumpitink)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/cosmos-smart-contracts.git
cd cosmos-smart-contracts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/cosmos-smart-contracts"
```

2. Deploy:
```bash
npm run deploy
```

### Deploy to Other Platforms

The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 🎨 Customization

### Adding New Applications

1. Open `src/data/apps.js`
2. Add a new app object to the `smartContractApps` array:

```javascript
{
  id: 'your-app-id',
  title: 'Your App Name',
  description: 'Your app description...',
  logo: '/path-to-your-logo.png',
  website: 'https://yourapp.com',
  twitter: 'https://x.com/yourapp', // optional
  telegram: 'https://t.me/yourapp' // optional
}
```

3. Add your logo to the `public` folder

### Styling

The application uses a custom CSS framework with Cosmos-themed colors and utilities. Main styles are in:
- `src/index.css` - Global styles and utility classes
- Individual component files for component-specific styles

### Colors and Themes

The app uses a purple-to-blue gradient theme inspired by the Cosmos brand. You can modify colors in `src/index.css`:

```css
.cosmos-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📁 Project Structure

```
cosmos-smart-contracts/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── pumpit-logo.svg
├── src/
│   ├── components/
│   │   ├── AppCard.js
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── data/
│   │   └── apps.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🤝 Contributing

We welcome contributions from the Cosmos community! Here's how you can help:

### Adding Your Application

1. Fork this repository
2. Add your application to `src/data/apps.js`
3. Add your logo to the `public` folder
4. Create a pull request with:
   - App name and description
   - Logo (PNG, SVG, or JPG)
   - Website URL
   - Social media links (optional)
   - Proof that your app is deployed on Cosmos Hub

### Guidelines for Submissions

- Applications must be deployed on Cosmos Hub
- Provide a clear, concise description (max 200 characters)
- Include a high-quality logo (64x64px minimum)
- Ensure all links are working and secure (HTTPS)
- Follow the existing code style and structure

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Links

- [Cosmos Network](https://cosmos.network)
- [Cosmos Hub](https://hub.cosmos.network)
- [Cosmos GitHub](https://github.com/cosmos)

## 🙏 Acknowledgments

- Built with ❤️ for the Cosmos community
- Inspired by the innovation happening in the Cosmos ecosystem
- Thanks to all the developers building amazing applications on Cosmos Hub

---

**Note**: This is a community-driven project. We strive to showcase legitimate, high-quality applications. Please do your own research before using any featured applications.
