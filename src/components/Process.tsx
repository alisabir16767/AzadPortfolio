import React from 'react';
import { FileSearch, CheckSquare, Send, Clock, CheckCircle, Users } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Users className="text-white" size={24} />,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to understand your needs and assess your case",
      duration: "30 minutes",
      color: "bg-blue-600"
    },
    {
      icon: <FileSearch className="text-white" size={24} />,
      title: "Case Evaluation",
      description: "Comprehensive review of your situation and determination of the best visa strategy",
      duration: "1-2 days",
      color: "bg-indigo-600"
    },
    {
      icon: <CheckSquare className="text-white" size={24} />,
      title: "Document Preparation",
      description: "Gathering and preparing all required documents, forms, and supporting evidence",
      duration: "1-2 weeks",
      color: "bg-purple-600"
    },
    {
      icon: <Send className="text-white" size={24} />,
      title: "Application Filing",
      description: "Professional filing of your petition with USCIS or relevant government agency",
      duration: "1 day",
      color: "bg-pink-600"
    },
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Case Monitoring",
      description: "Regular updates on case status and handling any requests for additional evidence",
      duration: "Ongoing",
      color: "bg-red-600"
    },
    {
      icon: <CheckCircle className="text-white" size={24} />,
      title: "Approval & Next Steps",
      description: "Celebration of approval and guidance on next steps including visa stamping",
      duration: "Varies",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Our Process
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Simple, Streamlined Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've perfected our process over 10 years to ensure maximum efficiency 
            and success rates while keeping you informed every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold">
                      Timeline: {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mr-6 relative z-10`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <div className="text-sm text-blue-600 font-semibold">
                        Timeline: {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Visa Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation today and let's discuss how we can help 
              secure the visa you need for your business goals.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;