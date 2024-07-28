<!-- AUTO-GENERATED-CONTENT:START (VOICE OF TONES) -->
<p align="center">
  <a href="https://voiceoftones.com">
    <img alt="ofTones Logo" src="src/images/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Voice of Tones
</h1>

This is a custom built website for Voice of Tones, built using Gatsby and ReactJS, with a CMS integration using WordPress.

<h2>Table of Contents</h2>

1. 📖 Introduction
2. ✨ Features
3. 🛠️ Installation
4. 🚀 Usage
5. 💫 Deployment
6. 🤝 Contributing
7. 📜 License
8. 📧 Contact

## 1. 📖 Introduction

Voice of Tones is a website that showcases various audio and video content. The website is built using modern web technologies, including Gatsby for static site generation and ReactJS for building the user interface. The content is managed through a WordPress CMS.

## 2. ✨ Features

- **Static Site Generation:** Fast and optimized pages using Gatsby.
- **Modern UI:** Built with ReactJS.
- **CMS Integration:** Content managed via WordPress.
- **Responsive Design:** Fully responsive and mobile-friendly.
- **SEO Friendly:** Built-in SEO optimization with Gatsby.

## 3. 🛠️ Installation

### 3.1🎓 Prerequisites

Ensure you have the following installed on your machine:

1. Node.js (v14.x or later)
2. npm or yarn
3. Gatsby CLI (optional, but recommended for Gatsby projects)

### 3.2 📝 Setting Up

1. Clone the repository:
   git clone https://github.com/yourusername/voice-of-tones.git
   cd voice-of-tones

2. Install dependencies:
   npm install
   If you are using yarn:
   yarn install

3. Set up environment variables:
   Create a .env file in the root of your project and add any necessary environment variables:
   GATSBY_SITE_URL=https://your-site-url.com
   WORDPRESS_API_URL=https://your-wordpress-site.com/graphql

4. Start the development server:
   npm run develop
   If you are using yarn:
   yarn develop

5. Build the site:
   npm run build
   If you are using yarn:
   yarn build

6. Deploy the site:
   Follow the instructions in the Deployment section to deploy your site to a hosting provider like Netlify.

Optional: Using Gatsby CLI
If you haven't already, you can install Gatsby CLI globally:
Copy code: npm install -g gatsby-cli
Then, you can use Gatsby CLI commands like:
gatsby develop
gatsby build
gatsby serve

## 4. 🚀 Usage

### 4.1 💻 Development

To start the development server, run:

npm run develop or yarn develop
Open http://localhost:8000 to view it in the browser. The page will reload if you make edits.

### 4.2 📦 Production

To create a production build, run:

npm run build or yarn build
To serve the production build locally, run:
npm run serve or yarn serve
Open http://localhost:9000 to view the production build.

## 5. 💫 Deployment

To deploy the site, you can use any static site hosting service like Netlify, Vercel, or GitHub Pages.
[Netlify](https://netlify.com) provides an easy way to deploy your site.

### 5.1 🔧 Build, Deploy, and Host on Netlify

#### ✏️ Instructions

1. Deploying to Netlify
2. Create a new site on Netlify.
3. Connect your GitHub repository to Netlify.
4. Set the build command to gatsby build and the publish directory to public.
   For detailed instructions, refer to Netlify's documentation.

### 5.2 🌐 Using WordPress for headless CMS

#### ✏️ Instructions

This project utilizes WordPress for content management. Ensure your WordPress site is set up and properly configured to work with your Gatsby site.

1. Install the `gatsby-source-wordpress` plugin:
   npm install gatsby-source-wordpress
2. Configure the plugin in your gatsby-config.js:
   <code>module.exports = {
   plugins: [
   {
   resolve: `gatsby-source-wordpress`,
   options: {
   url: `https://your-wordpress-site.com/graphql`,
   },
   },
   ],
   }</code>

#### 💡 Other Hosting Options

You can also deploy your site using other static site hosting services like Vercel or GitHub Pages.

## 6. 🤝 Contributing

Contributions are not welcomed at this time.

## 7. 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 8. 📧 Contact

### 👩‍💻 Web Developer/Project Manager

For questions, support, contributions, or any feedback, please contact:

**Ty Ebanks**
Email: [ty.ebanks07@gmail.com](mailto:ty.ebanks07@gmail.com)
Portfolio: [tebanks.com](https://tebanks.com)

### 💼 Business Inquiries

For business inquiries related to Voice of Tones, please contact:

**Voice of Tones**
Email: [toniwoodburn@gmail.como](mailto:toniwoodburn@gmail.com)
Website: [https://voiceoftones.com](https://voiceoftones.com)

<!-- AUTO-GENERATED-CONTENT:END -->
