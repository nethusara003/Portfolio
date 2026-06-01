import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-heading font-bold text-white tracking-tight">
              Nethusara<span className="text-blue-500">.dev</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/#hero" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
            <a href="/#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="/#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a>
            <a href="/#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
            <a href="/#blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Blog</a>
            <a href="/#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
