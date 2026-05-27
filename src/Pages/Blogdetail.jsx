import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaArrowLeft,
  FaShare,
} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { blogdata } from "./blogdata";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogdata.find((p) => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Article Not Found ?
          </h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogdata
    .filter((p) => p.category === post.category && p.id !== post.id)
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
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-600 to-pink-400">
      {/* ── HERO IMAGE ── */}
      {/* Hero sirf image hai — koi button nahi andar */}
      <div className="relative h-40 sm:h-56 md:h-72">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Category Badge — hero ke andar neeche */}
        <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6">
          {/* <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
            {post.category}
          </span> */}
        </div>
      </div>

      {/* ── ARTICLE CONTENT ── */}
      <article className="max-w-4xl mx-auto px-3 sm:px-4 relative z-10 -mt-4 sm:-mt-8">
        {/* Back Button — hero ke bahar, article se pehle, navbar se safe */}
        <button
          onClick={() => navigate("/blog")}
          className="mb-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-white transition shadow-lg text-sm w-fit"
        >
          <FaArrowLeft />
          Back to Blog
        </button>

        {/* Article Header Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 mb-6 sm:mb-8 border border-gray-100">
          {/* Title */}
          {/* FIX 5: text-3xl → text-2xl on mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          {/* FIX 6: Share button — w-full on mobile, ml-auto on sm+ */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-gray-600 pb-5 border-b border-gray-200 mb-5 sm:mb-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-purple-500 shrink-0" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-pink-500 shrink-0" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-500 shrink-0" />
              <span>{post.readTime}</span>
            </div>
            {/* Share button — full width on mobile, auto on sm+ */}
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition text-sm whitespace-nowrap"
            >
              <FaShare />
              Share
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-xs sm:text-sm bg-linear-to-r from-purple-50 to-pink-50 text-purple-700 px-3 py-1.5 rounded-full font-medium"
              >
                <MdLocalOffer />
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <div className="bg-linear-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 sm:p-6 rounded-r-xl mb-6 sm:mb-8">
            <BiSolidQuoteAltLeft className="text-2xl sm:text-3xl text-purple-400 mb-2" />
            <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          {/* FIX 7: prose heading sizes reduced for mobile */}
          <div
            className="prose prose-sm sm:prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3 prose-h2:text-purple-700
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-3 prose-h3:text-pink-600
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-purple-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50
              prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:my-5 prose-blockquote:italic
              prose-blockquote:text-gray-700 prose-blockquote:rounded-r-xl
              prose-img:rounded-xl prose-img:shadow-lg prose-img:w-full
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* ── CTA SECTION ── */}
        {/* FIX 9: p-10 → p-6 sm:p-10 */}
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center text-white relative overflow-hidden shadow-2xl mb-10 sm:mb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-pink-300 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Explore our courses and take your practice to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-black transition shadow-lg text-sm sm:text-base"
              >
                View Courses
              </Link>
              <Link
                to="/blog"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition text-sm sm:text-base"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── FOOTER ── */}
      <div className="border-t border-white/20 pt-5 pb-6 sm:pb-8 text-center text-xs sm:text-sm text-black px-4">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}

export default BlogDetail;
