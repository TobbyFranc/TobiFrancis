// src/pages/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";
import NotFound from "./NotFound";
import placeholderImage from "../assets/placeholderImage.jpeg";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current post
        const data = await client.fetch(
          `*[_type == "blogPost" && slug.current == $slug][0]{
            title, excerpt, content, date, category, thumbnail, slug
          }`,
          { slug }
        );
        setPost(data);

        // Fetch all posts for navigation
        const all = await client.fetch(
          `*[_type == "blogPost"] | order(date desc){
            title, slug, date
          }`
        );
        setAllPosts(all);
      } catch (err) {
        console.error("Error fetching post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) return <p className="mt-20 text-center">Loading post...</p>;
  if (!post) return <NotFound />;

  // Next/Previous navigation
  const currentIndex = allPosts.findIndex((p) => p.slug.current === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="px-6 py-12 mt-20 max-w-3xl mx-auto bg-[var(--main-bg-color)]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:underline text-[var(--accent)]">Home</Link>
        <span>›</span>
        <Link to="/blog" className="hover:underline text-[var(--accent)]">Blog</Link>
        <span>›</span>
        <span className="text-[var(--main-text-color)]">{post.title}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--main-text-color)] mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()} • {post.category}
        </p>
      </div>

      {/* Thumbnail */}
      <div className="w-full h-64 overflow-hidden rounded mb-6">
        <img
          src={post.thumbnail ? urlFor(post.thumbnail).url() : placeholderImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none text-[var(--main-text-color)] mb-10">
        <PortableText value={post.content} />
      </div>

      {/* Next/Previous Navigation */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-6">
        {prevPost ? (
          <Link
            to={`/blog/${prevPost.slug.current}`}
            className="text-[var(--accent)] hover:underline"
          >
            ← {prevPost.title}
          </Link>
        ) : (
          <span />
        )}
        {nextPost ? (
          <Link
            to={`/blog/${nextPost.slug.current}`}
            className="text-[var(--accent)] hover:underline"
          >
            {nextPost.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
};

export default BlogPost;
