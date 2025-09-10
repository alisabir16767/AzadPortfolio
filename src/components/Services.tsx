import React from 'react';
import { Briefcase, Users, Star, Globe, FileText, Clock } from 'lucide-react';

const Services = () => {
  const visaTypes = [
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "UAE Work Visa",
      description: "Employment visa for professionals seeking jobs in Dubai, Abu Dhabi, and other Emirates.",
      features: ["Work permits", "Residence visa", "Medical test guidance", "Visa stamping"],
      processing: "2-4 weeks depending on employer and nationality"
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "Saudi Arabia Employment Visa",
      description: "Visa for skilled and unskilled workers to work legally in Saudi Arabia.",
      features: ["Iqama processing", "Sponsorship transfer", "Visa stamping", "Family visa support"],
      processing: "3-6 weeks based on employer and embassy"
    },
    {
      icon: <Star className="text-blue-600" size={32} />,
      title: "Qatar Work Visa",
      description: "Employment visa for professionals and workers in Qatar across industries.",
      features: ["Job offer verification", "Medical & fingerprint process", "Residence permit", "Family sponsorship"],
      processing: "2-4 weeks after employer approval"
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Oman Employment Visa",
      description: "Visa for foreign employees sponsored by Omani companies.",
      features: ["Labour clearance", "Employment visa", "Medical examination guidance", "Renewals & extensions"],
      processing: "2-3 weeks depending on documentation"
    },
    {
      icon: <FileText className="text-blue-600" size={32} />,
      title: "Russia Work Visa",
      description: "Visa for professionals and workers hired by Russian companies or contractors.",
      features: ["Single-entry work visa", "Multi-entry extension", "Work permit assistance", "Family visa support"],
      processing: "1-3 months depending on job category"
    },
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: "Bahrain & Kuwait Work Visa",
      description: "Employment visas for Bahrain and Kuwait across various industries.",
      features: ["Employment contract processing", "Work permit", "Medical test assistance", "Visa stamping"],
      processing: "2-6 weeks depending on employer and embassy"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Work Visa Solutions for Arab Countries & Russia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide complete visa services for Gulf countries and Russia — guiding you 
            through every step from job offer verification to visa stamping and residence permits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="mb-6">
                {visa.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{visa.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{visa.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                <ul className="space-y-2">
                  {visa.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Processing Time:</span>
                  <div className="mt-1 text-gray-700">{visa.processing}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need help with another country’s work visa? Contact us for personalized assistance.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Discuss Your Specific Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
