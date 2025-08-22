# Submit Your Cosmos Hub Smart Contract Application

Welcome to the Cosmos Hub Smart Contracts showcase! This repository features innovative decentralized applications built on the Cosmos Hub. If you've built something amazing on Cosmos Hub, we'd love to showcase it to the community.

## 🚀 How to Submit Your Application

### Quick Submission Process

1. **Fork this repository** on GitHub
2. **Add your application** to the showcase
3. **Submit a pull request** with your app details

### Step-by-Step Instructions

#### 1. Fork the Repository
- Click the "Fork" button at the top right of this repository
- Clone your forked repository to your local machine:
```bash
git clone https://github.com/YOUR_USERNAME/cosmos-smart-contracts.git
cd cosmos-smart-contracts
```

#### 2. Add Your Application Data
Open the file `src/data/apps.js` and add your application to the `smartContractApps` array:

```javascript
{
  id: 'your-app-id', // unique identifier (lowercase, no spaces)
  title: 'Your App Name',
  description: 'A compelling description of your app (max 200 characters)',
  logo: '/your-logo.png', // path to your logo in the public folder
  website: 'https://yourapp.com',
  twitter: 'https://x.com/yourapp', // optional
  telegram: 'https://t.me/yourapp' // optional (set to null if not applicable)
}
```

#### 3. Add Your Logo
- Place your logo file in the `public/` folder
- Supported formats: PNG, SVG, JPG
- Recommended size: 64x64px minimum (square aspect ratio)
- File naming: Use lowercase with hyphens (e.g., `my-app-logo.png`)

#### 4. Create a Pull Request
- Commit your changes:
```bash
git add .
git commit -m "Add [Your App Name] to showcase"
git push origin main
```
- Go to your forked repository on GitHub
- Click "New Pull Request"
- Fill out the pull request template with your app details

## 📋 Submission Requirements

### ✅ Required Information
- **App Name**: Clear, concise name
- **Description**: Brief description (max 200 characters)
- **Logo**: High-quality logo file
- **Website**: Working HTTPS URL to your application
- **Cosmos Hub Deployment**: Your app must be deployed on Cosmos Hub

### 🎯 Optional Information
- **Twitter**: Your project's Twitter/X handle
- **Telegram**: Your project's Telegram channel or group
- **Additional social links**: Can be discussed in the PR

### 📝 Pull Request Template

When submitting your PR, please include:

```
## Application Submission

**App Name**: Your App Name
**Website**: https://yourapp.com
**Description**: Brief description of what your app does

**Cosmos Hub Integration**: 
- [ ] Deployed smart contracts on Cosmos Hub
- [ ] Uses ATOM or Cosmos Hub features
- [ ] Interacts with Cosmos Hub ecosystem

**Verification**:
- [ ] All links work and use HTTPS
- [ ] Logo is high quality and properly sized
- [ ] App is live and functional
- [ ] Description is under 200 characters

**Additional Notes**: 
Any additional context about your application...
```

## 🔍 Review Process

1. **Automated Checks**: We verify all links work and the format is correct
2. **Community Review**: The Cosmos community can review and provide feedback
3. **Final Approval**: Maintainers approve legitimate Cosmos Hub applications
4. **Go Live**: Your app appears on the showcase within 24-48 hours

## ✨ Guidelines for Success

### Quality Standards
- **Legitimate Project**: Real, working application deployed on Cosmos Hub
- **Professional Presentation**: Clean logo, clear description, working website
- **Community Value**: Adds value to the Cosmos Hub ecosystem
- **Functional**: App should be live and accessible to users

### Logo Guidelines
- **Format**: PNG, SVG, or JPG
- **Size**: Minimum 64x64px, maximum 512x512px
- **Aspect Ratio**: Square (1:1) preferred
- **Quality**: High resolution, clear visibility on dark backgrounds
- **Content**: Avoid text-heavy logos; simple, recognizable symbols work best

### Description Best Practices
- **Concise**: Maximum 200 characters
- **Clear**: Explain what your app does in simple terms
- **Value-focused**: Highlight the benefit to users
- **Cosmos-relevant**: Mention Cosmos Hub integration when relevant

## 🚫 What We Don't Accept

- Applications not deployed on Cosmos Hub
- Broken or non-functional applications
- Duplicate submissions
- Applications that violate terms of service
- Spam or low-quality submissions
- Applications involved in illegal activities

## 📞 Need Help?

- **Questions about submission**: Open an issue in this repository
- **Technical problems**: Check existing issues or create a new one
- **General inquiries**: Contact the maintainers through GitHub

## 🌟 Featured Applications

Once approved, your application will be featured alongside other innovative Cosmos Hub projects, reaching thousands of developers and users in the Cosmos ecosystem.

---

**Ready to showcase your Cosmos Hub application?** [Fork this repository](https://github.com/tacolopo/cosmos-smart-contracts/fork) and submit your app today!