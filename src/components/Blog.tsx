import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "H-1B Cap Season 2024: What Companies Need to Know",
      excerpt: "The H-1B cap season is approaching fast. Learn about the latest changes, lottery system updates, and strategies to maximize your chances of selection.",
      author: "Immigration Expert",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "H-1B Visas",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "L-1 Visa Trends: Remote Work and Global Mobility",
      excerpt: "How remote work policies are affecting L-1 visa applications and what multinational companies should consider when planning international transfers.",
      author: "Immigration Expert",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "L-1 Visas",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "PERM Labor Certification: Navigating New DOL Requirements",
      excerpt: "Recent Department of Labor updates have changed PERM processing. Stay compliant with the latest recruitment and wage requirements.",
      author: "Immigration Expert",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Green Cards",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "O-1 Visa Success: Building a Strong Case for Extraordinary Ability",
      excerpt: "Tips for professionals in sciences, arts, and business to document their extraordinary achievements for successful O-1 visa applications.",
      author: "Immigration Expert",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "O-1 Visas",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = ["All", "H-1B Visas", "L-1 Visas", "O-1 Visas", "Green Cards", "Policy Updates"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Immigration Insights
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Latest Immigration News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest immigration law changes, policy updates, 
            and practical insights to help you navigate the visa process successfully.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span className="mr-2">Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Immigration Law</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest immigration updates, policy changes, 
            and practical tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;