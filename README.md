# DevOps Portfolio

A modern and animated DevOps portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. It highlights cloud, Kubernetes, CI/CD, DevSecOps, infrastructure automation, and education in a futuristic cyberpunk-inspired layout.

## Highlights

- Responsive one-page portfolio layout
- Animated hero section and UI transitions
- Skills, projects, experience, education, and contact sections
- DevOps-themed workflow visualisation
- Downloadable resume PDF
- Fast local development with Vite

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Project Structure

```text
portfolio/
├── public/
│   └── SaiTeja_DevOps_Resume.pdf
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Prerequisites

Make sure the following are installed:

- Node.js 18 or newer
- npm 9 or newer

## Installation

From the project root, install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:3000
```

## Build for Production

Create a production build:

```bash
npm run build
```

The output will be generated in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Customize Content

You can update the portfolio content in:

- [src/App.jsx](src/App.jsx) for main sections and text
- [src/index.css](src/index.css) for styling
- [public/SaiTeja_DevOps_Resume.pdf](public/SaiTeja_DevOps_Resume.pdf) for the resume PDF

## Contact

Email: chsaitej50@gmail.com

## Deployment

This portfolio can be deployed on platforms such as:

- Vercel
- Netlify
- GitHub Pages

Use the default build command:

```bash
npm run build
```

## Notes

To replace the resume file, overwrite the PDF in the `public` folder with your updated file and keep the same name:

```text
SaiTeja_DevOps_Resume.pdf
```
