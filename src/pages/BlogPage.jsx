// src/pages/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholderImage.jpeg";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");
  const [categories, setCategories] = useState(["Tech", "Career", "Lifestyle"]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "blogPost"]{
            title, excerpt, date, category, thumbnail, slug
          }`
        );
        setPosts(data);

        // Merge defaults with dynamic categories
        const dynamicCats = [...new Set(data.map((p) => p.category).filter(Boolean))];
        setCategories((prev) => Array.from(new Set([...prev, ...dynamicCats])));
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Sorting logic
  const now = new Date();
  const sortedPosts = [...posts].filter((post) => {
    const postDate = new Date(post.date);
    switch (sortOption) {
      case "week":
        return now - postDate <= 7 * 24 * 60 * 60 * 1000;
      case "month":
        return now - postDate <= 30 * 24 * 60 * 60 * 1000;
      case "year":
        return now - postDate <= 365 * 24 * 60 * 60 * 1000;
      case "oldest":
        return now - postDate > 365 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  }).sort((a, b) => {
    const dateA = new Date(a.date), dateB = new Date(b.date);
    return sortOption === "oldest" ? dateA - dateB : dateB - dateA;
  });

  // Filter by category
  const filteredPosts = sortedPosts.filter((p) =>
    filterCategory === "all" ? true : p.category === filterCategory
  );

  return (
    <section className="pt-20 px-4 bg-[var(--main-bg-color)] flex flex-col items-center">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 w-full max-w-5xl flex items-center space-x-2">
        <Link to="/" className="hover:underline text-[var(--accent)]">Home</Link>
        <span>›</span>
        <span className="text-[var(--main-text-color)]">Blog</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-[var(--main-text-color)]">All Blog Posts</h2>
        <p className="open-sans-200 text-md text-[var(--secondary-text-color)] mt-2">
          Explore all my writings
        </p>
      </div>

      {/* Filters + Sorting */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setFilterCategory("all")}
            className={`px-3 py-2 rounded-md text-sm ${filterCategory==="all"?"bg-[var(--accent)] text-[var(--main-bg-color)]":"bg-[var(--card-bg-color)] text-[var(--main-text-color)] hover:bg-[var(--accent)]/20"}`}>
            All
          </button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilterCategory(cat)}
              className={`px-3 py-2 rounded-md text-sm ${filterCategory===cat?"bg-[var(--accent)] text-[var(--main-bg-color)]":"bg-[var(--card-bg-color)] text-[var(--main-text-color)] hover:bg-[var(--accent)]/20"}`}>
              {cat}
            </button>
          ))}
        </div>
        <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)}
          className="px-3 py-2 rounded-md border bg-[var(--card-bg-color)] text-[var(--main-text-color)]">
          <option value="latest">Latest</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredPosts.length === 0 ? (
        <p className="mt-8 text-[var(--secondary-text-color)]">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <AnimatePresence>
            {filteredPosts.map((post)=>(
              <motion.div key={post.slug.current} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
                className="bg-[var(--card-bg-color)] rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="w-full h-56 overflow-hidden rounded-t-xl">
                  <img src={post.thumbnail?urlFor(post.thumbnail).url():placeholderImage} alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString()} • {post.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-sm mb-5 flex-grow">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug.current}`} className="px-3 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md">
                    Read more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
