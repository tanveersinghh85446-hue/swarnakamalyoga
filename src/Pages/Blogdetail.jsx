import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaArrowLeft, FaShare } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { blogdata } from "./blogdata";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogdata.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Article Not Found
          </h1>
          <p className="text-gray-500 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition text-sm"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogdata
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 relative z-10 pb-16">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="mb-4 flex items-center gap-1.5 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition"
        >
          <FaArrowLeft className="text-xs" />
          Back to Blog
        </button>

        {/* Article Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
          {/* Category + Share row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-600 transition font-medium"
            >
              <FaShare />
              Share
            </button>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-4 border-b border-gray-100 mb-5">
            <span className="font-medium text-gray-600">{post.author}</span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-pink-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-yellow-400" />
              {post.readTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full"
              >
                <MdLocalOffer className="text-[10px]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 italic border-l-2 border-purple-300 pl-3 mb-7 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Article Body */}
          <div
            className="prose prose-sm sm:prose max-w-none
              prose-headings:font-bold prose-headings:text-gray-800
              prose-h2:text-lg sm:prose-h2:text-xl prose-h2:mt-7 prose-h2:mb-2 prose-h2:text-purple-700
              prose-h3:text-base sm:prose-h3:text-lg prose-h3:mt-5 prose-h3:mb-2 prose-h3:text-pink-600
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-3
              prose-ul:my-3 prose-ul:pl-5 prose-li:text-gray-600 prose-li:mb-1
              prose-blockquote:border-l-2 prose-blockquote:border-purple-400
              prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-blockquote:px-4
              prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-600
              prose-strong:text-gray-800
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* CTA */}
        <div className="mt-6 bg-purple-600 rounded-2xl p-6 text-center text-white">
          <h2 className="text-lg font-bold mb-1">Enjoyed this article?</h2>
          <p className="text-sm text-purple-200 mb-4">
            Explore our courses and take your practice further
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              to="/courses"
              className="bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition text-sm"
            >
              View Courses
            </Link>
            <Link
              to="/blog"
              className="border border-white/60 text-white px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition text-sm"
            >
              More Articles
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-base font-bold text-gray-700 mb-3">
              Related Articles
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-purple-200 hover:shadow-sm transition group"
                >
                  <span className="text-[10px] font-semibold text-purple-500 uppercase tracking-wide">
                    {p.category}
                  </span>
                  <p className="text-sm font-semibold text-gray-800 mt-1 group-hover:text-purple-600 transition leading-snug">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 py-5 border-t border-gray-100">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}

export default BlogDetail;
