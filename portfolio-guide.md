# Developer Portfolio — Complete Build Guide
> For a CS undergraduate applying for internships · Stack: React + Node.js

---

## Table of Contents
1. [Project Structure](#1-project-structure)
2. [Tech Stack & Tools](#2-tech-stack--tools)
3. [Setting Up the Project](#3-setting-up-the-project)
4. [Sections to Build](#4-sections-to-build)
5. [Design Guidelines](#5-design-guidelines)
6. [Backend — Contact Form & Blog API](#6-backend--contact-form--blog-api)
7. [Deployment](#7-deployment)
8. [GitHub README Tips](#8-github-readme-tips)
9. [Final Checklist](#9-final-checklist)

---

## 1. Project Structure

```
portfolio/
├── client/                  # React frontend
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── BlogPost.jsx
│   │   ├── data/
│   │   │   ├── projects.js      # Your project data
│   │   │   └── skills.js        # Your skills data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── routes/
│   │   ├── contact.js       # Contact form endpoint
│   │   └── blog.js          # Blog CRUD endpoints
│   ├── db/
│   │   └── database.js      # SQLite setup
│   ├── posts/               # Markdown blog post files
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 2. Tech Stack & Tools

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React + Vite | Fast dev server, modern setup |
| Styling | Tailwind CSS | Utility-first, responsive by default |
| Routing | React Router v6 | For blog post pages |
| Icons | Lucide React | Clean, consistent icons |
| Animations | Framer Motion | Smooth scroll reveals |
| Backend | Node.js + Express | API for contact form + blog |
| Database | SQLite (better-sqlite3) | Zero config, perfect for portfolio |
| Blog content | Markdown + marked.js | Write posts in `.md` files |
| Deployment | Vercel (frontend) + Render (backend) | Both free tier |

### Install dependencies

**Frontend:**
```bash
npm create vite@latest client -- --template react
cd client
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Backend:**
```bash
mkdir server && cd server
npm init -y
npm install express cors dotenv better-sqlite3 marked nodemailer
npm install -D nodemon
```

---

## 3. Setting Up the Project

### Tailwind config (`client/tailwind.config.js`)
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#2563EB",       // change to your chosen accent color
        dark: "#0F172A",
        surface: "#1E293B",
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### Environment variables

**`server/.env`:**
```
PORT=5000
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**`client/.env`:**
```
VITE_API_URL=http://localhost:5000
```

---

## 4. Sections to Build

### 4.1 Hero Section
The first thing a recruiter sees. Keep it punchy.

**Must have:**
- Your name (large, bold)
- A tagline: *"Full-Stack Developer · CS Graduate · Based in Colombo"*
- 2–3 sentence bio — who you are and what you're looking for
- Two CTA buttons: **View My Work** (scrolls to projects) and **Download CV** (links to your PDF)
- Social links: GitHub, LinkedIn

**Tips:**
- Add a subtle animated background (gradient, floating dots, or a noise texture)
- Animate the text on load using Framer Motion's `fadeInUp` pattern
- Do NOT use a profile photo unless it's professional quality

**Example structure:**
```jsx
<section id="hero">
  <motion.h1>Hi, I'm [Your Name]</motion.h1>
  <motion.p>Full-Stack Developer · CS Graduate · Colombo, Sri Lanka</motion.p>
  <motion.p>
    I build web applications with React and Node.js.
    Currently seeking software engineering internships.
  </motion.p>
  <div>
    <a href="#projects">View My Work</a>
    <a href="/cv.pdf" download>Download CV</a>
  </div>
</section>
```

---

### 4.2 Projects Section *(most important)*
Show only 2–3 projects. Each card needs:

- **Screenshot or GIF** of the project in action
- **Title** + one-line description
- **Tech stack** shown as small tags
- **Live Demo** link (required — deployed URL)
- **GitHub** link

Store project data in `src/data/projects.js`:
```js
export const projects = [
  {
    id: 1,
    title: "AI Finance Tracker",
    description: "Full-stack expense tracker with AI-generated spending insights and interactive charts.",
    image: "/images/finance-tracker.png",
    tags: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    liveUrl: "https://your-finance-app.vercel.app",
    githubUrl: "https://github.com/yourusername/finance-tracker",
    featured: true,
  },
  {
    id: 2,
    title: "This Portfolio",
    description: "Personal portfolio and blog built with React, Node.js, and a custom Markdown CMS.",
    image: "/images/portfolio.png",
    tags: ["React", "Node.js", "SQLite", "Tailwind CSS"],
    liveUrl: "https://yourname.dev",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
];
```

> **Note:** Yes, list the portfolio itself as a project. It's honest and shows you can ship real products.

---

### 4.3 Skills Section
Group by category. Do NOT use percentage bars.

```js
// src/data/skills.js
export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];
```

Render each category as a group with pill-style tags for each skill.

---

### 4.4 About / Education Section
Keep this brief — 1 short paragraph + your education card.

**Include:**
- University name, degree, expected graduation
- One sentence about your final year project
- 1–2 sentences about what you enjoy building or learning

**Do not include:**
- A long life story
- Hobbies that aren't tech-adjacent (recruiters don't care that you like cricket)

---

### 4.5 Blog Section (optional but impressive)
A simple list of your blog posts pulled from your Node.js backend.

**What to write about:**
- A technical deep-dive into your final year project
- Something you learned building the portfolio
- A beginner's guide to a topic you know well

Even 1–2 well-written posts shows communication skills, which most CS grads lack.

**Blog API (see Section 6 for implementation):**
```jsx
// Fetch posts from your backend
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/blog`)
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

---

### 4.6 Contact Section
A simple form + your contact details.

**Fields:** Name · Email · Message · Send button

**Important:** Wire the form to your backend (see Section 6). A form that doesn't actually send anything is worse than no form.

**Also show:**
- Email address (as a mailto link)
- LinkedIn URL
- GitHub URL

---

## 5. Design Guidelines

### Colors
Pick ONE accent color. Dark mode is recommended.

```css
/* Example: Deep blue accent on dark background */
:root {
  --bg: #0F172A;
  --surface: #1E293B;
  --accent: #3B82F6;
  --text: #E2E8F0;
  --muted: #94A3B8;
}
```

Good accent color options: `#3B82F6` (blue) · `#10B981` (emerald) · `#8B5CF6` (violet) · `#F59E0B` (amber)

### Typography
- **Headings:** Plus Jakarta Sans, Syne, or Clash Display (bold, distinctive)
- **Body:** DM Sans, Outfit, or Geist (clean, readable)
- **Code snippets:** JetBrains Mono or Fira Code

### Animations (Framer Motion)
Use this pattern for scroll-reveal on every section:

```jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Wrap sections:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* section content */}
</motion.div>
```

### What NOT to do
- No skill progress bars (e.g. "Python — 80%")
- No splash/loading screens before content appears
- No auto-playing audio or video
- No more than 3 font families
- No stock photos — use screenshots of your actual work
- No "Under Construction" placeholder sections

---

## 6. Backend — Contact Form & Blog API

### `server/index.js`
```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));
app.use("/api/blog", require("./routes/blog"));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);
```

### Contact form route (`server/routes/contact.js`)
```js
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields are required." });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio contact from ${name}`,
      text: message,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

module.exports = router;
```

> For Gmail, use an **App Password** (not your main password). Generate one at: Google Account → Security → 2-Step Verification → App Passwords.

### Blog route (`server/routes/blog.js`)
```js
const express = require("express");
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const router = express.Router();

const POSTS_DIR = path.join(__dirname, "../posts");

// GET all posts (metadata only)
router.get("/", (req, res) => {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const [, title, date, excerpt] = content.match(
      /^# (.+)\ndate: (.+)\n\n(.+)/
    ) || [];
    return { slug: file.replace(".md", ""), title, date, excerpt };
  });
  res.json(posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
});

// GET single post (full HTML)
router.get("/:slug", (req, res) => {
  const filePath = path.join(POSTS_DIR, `${req.params.slug}.md`);
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "Post not found." });
  const content = fs.readFileSync(filePath, "utf-8");
  res.json({ html: marked(content) });
});

module.exports = router;
```

**Blog post format** (`server/posts/my-first-post.md`):
```markdown
# Building My Finance Tracker — What I Learned
date: 2025-06-01

A brief excerpt that appears on the blog listing page (one paragraph).

---

Full post content here in Markdown...
```

---

## 7. Deployment

### Frontend → Vercel
1. Push your `client/` folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set **Framework Preset** to Vite
4. Set **Root Directory** to `client`
5. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
6. Deploy — you get a free `.vercel.app` URL instantly

### Backend → Render
1. Push your `server/` folder to GitHub (can be same repo)
2. Go to [render.com](https://render.com) → New Web Service
3. Set **Root Directory** to `server`
4. Build command: `npm install`
5. Start command: `node index.js`
6. Add environment variables: `EMAIL_USER`, `EMAIL_PASS`, `CLIENT_URL`
7. Deploy — free tier spins down after inactivity (normal)

### Custom Domain (optional but recommended)
- Get a free `.me` domain via **GitHub Student Developer Pack** at [education.github.com/pack](https://education.github.com/pack)
- Or buy `yourname.dev` for ~$10/year on Namecheap
- Point it to your Vercel deployment in Vercel's Domain Settings

---

## 8. GitHub README Tips

Your project repos matter. Recruiters do click through to GitHub.

Every repo should have a README with:
```markdown
# Project Name

> One-line description

![screenshot](./screenshot.png)

## Features
- Feature 1
- Feature 2

## Tech Stack
React · Node.js · PostgreSQL · ...

## Running Locally
\```bash
git clone https://github.com/you/project
cd project
npm install
npm run dev
\```

## Live Demo
[your-app.vercel.app](https://your-app.vercel.app)
```

---

## 9. Final Checklist

### Before publishing:
- [ ] All project links open a live deployed URL
- [ ] CV download link works and the PDF is up to date
- [ ] Contact form actually sends an email — test it
- [ ] Site is mobile responsive (test on your phone)
- [ ] No broken images or placeholder text left in
- [ ] Page loads in under 3 seconds
- [ ] Favicon is set (not the default Vite logo)
- [ ] Meta tags set for social sharing (title, description, og:image)

### Content:
- [ ] At least 2 projects with live demos
- [ ] GitHub links on every project
- [ ] Skills list is honest — only what you can discuss in an interview
- [ ] Education shows "Expected [Month] Year" with exams completed note
- [ ] At least one blog post published

### After publishing:
- [ ] Add the live URL to your CV and LinkedIn profile
- [ ] Add the portfolio repo to your GitHub pinned repos
- [ ] Share the URL in your internship applications

---

*Built with React + Node.js · Deployed on Vercel + Render*
