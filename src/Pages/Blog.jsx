import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaArrowRight, FaSearch } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { PiStarFour } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import { blogdata, categories } from "./blogdata";

const marqueeItems = [
  "Meditation",
  "Breathwork",
  "Wellness",
  "Pranayama",
  "Mindfulness",
  "Yoga Therapy",
  "Ayurveda",
  "Nutrition",
  "Healing",
  "Peace",
  "Balance",
  "Strength",
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogdata.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-pink-50 pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <BiSolidQuoteAltLeft className="text-yellow-300" />
            <span className="text-sm font-medium">Wisdom & Wellness</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Our <span className="text-yellow-300">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Insights, stories, and knowledge from the world of yoga, wellness,
            and holistic living
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-10 -mt-6 mb-8">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-3 inline-flex items-center gap-2 text-purple-700 font-semibold text-sm bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 shadow-lg"
            >
              <PiStarFour className="text-xs text-yellow-500" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      {/* SEARCH & FILTERS */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-purple-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-purple-400 focus:outline-none transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No articles found 🔍</p>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 bg-linear-to-br from-purple-200 via-pink-200 to-yellow-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-purple-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-pink-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-linear-to-r from-purple-50 to-pink-50 text-purple-700 px-2 py-1 rounded-full"
                      >
                        <MdLocalOffer className="text-xs" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives
              through our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-black transition shadow-lg"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="border-t border-gray-200 mt-10 pt-6 pb-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}

export default Blog;
