const express = require("express");
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const router = express.Router();

const POSTS_DIR = path.join(__dirname, "../posts");

// GET all posts (metadata only)
router.get("/", (req, res) => {
  if (!fs.existsSync(POSTS_DIR)) {
    return res.json([]);
  }
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const match = content.match(/^# (.+)\ndate: (.+)\n\n(.+)/);
    const title = match ? match[1] : file.replace(".md", "");
    const date = match ? match[2] : new Date().toISOString().split('T')[0];
    const excerpt = match ? match[3] : "";
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
