import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blog`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading || posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Latest Writings</h2>
          <div className="w-20 h-1 bg-blue-500 rounded"></div>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-200 group-hover:text-blue-400 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-500 group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
