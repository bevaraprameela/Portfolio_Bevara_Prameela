🚀 Personal Portfolio Website (React.js)

A modern, responsive, and professional portfolio website built using React.js, Framer Motion, and Tailwind CSS.
This website showcases projects, skills, experience, and contact information.

📌 Features

⚡ Fully responsive design

🎨 Modern UI using Tailwind CSS

🎥 Smooth animations with Framer Motion

🧭 Dynamic navigation with active section highlight

🌙 Dark/Light mode toggle

🗂️ Organized project & skills section

📬 Working contact form (optional backend/mail service)

🛠️ Tech Stack
Category	Tools
Frontend	React.js, React Router
Styling	Tailwind CSS
Animations	Framer Motion
Icons	Lucide-react
Deployment	Netlify / Vercel / GitHub Pages
📂 Project Structure
portfolio-website/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── assets/
│   ├── App.js
│   ├── index.js
│── .gitignore
│── package.json
│── tailwind.config.js
│── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start


Your site will be available at:
👉 http://localhost:3000

🧪 Build for Production
npm run build

🌐 Deployment Options

You can deploy this project for free using any of the following:

Netlify

Go to https://netlify.com

Choose “Deploy site from GitHub/git repo”

Set build command:

npm run build


Publish directory:

build

Vercel

Go to https://vercel.com

Import project

Automatically detects React and deploys

Done! 🎉

GitHub Pages
npm install gh-pages --save-dev


Then add this to package.json:

"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}


Deploy:

npm run deploy
