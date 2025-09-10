import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "VP of Engineering",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "VisaExpert Pro helped us secure H-1B visas for 12 international engineers. Their attention to detail and deep knowledge of immigration law made what seemed impossible, possible. Highly recommend!",
      rating: 5,
      visaType: "H-1B"
    },
    {
      name: "Marcus Rodriguez",
      position: "Global HR Director",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "We've worked with several immigration attorneys, but none compare to the level of service and expertise we received. They guided us through complex L-1 cases with remarkable success.",
      rating: 5,
      visaType: "L-1"
    },
    {
      name: "Dr. Amina Patel",
      position: "Research Director",
      company: "BioMed Research Institute",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "As a researcher with unique qualifications, I needed an O-1 visa. The team understood the complexities of my case and presented my achievements in the best possible light. Approved without any issues!",
      rating: 5,
      visaType: "O-1"
    },
    {
      name: "James Thompson",
      position: "CEO",
      company: "Global Dynamics Inc.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Professional, responsive, and incredibly knowledgeable. They handled our company's entire immigration portfolio and achieved a 100% approval rate. Worth every penny.",
      rating: 5,
      visaType: "Multiple Visa Types"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Cases" },
    { number: "95%", label: "Approval Rate" },
    { number: "50+", label: "Countries Served" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what companies and individuals 
            say about their experience working with us.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-8 md:overflow-visible mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[85%] sm:min-w-0 bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 snap-center"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4 flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.position}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="text-blue-200 absolute -top-2 -left-2" size={28} />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="border-t pt-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.visaType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 text-sm sm:text-base mb-5">
              Let's discuss your immigration needs and create your own success story.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
