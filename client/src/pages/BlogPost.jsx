import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blog/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-3xl font-heading font-bold text-white mb-4">Post not found</h1>
        <Link to="/" className="text-blue-400 hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div 
          className="prose prose-invert prose-blue max-w-none prose-headings:font-heading prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
