import React from 'react';
import { Briefcase, Users, Star, Globe, FileText, Clock } from 'lucide-react';

const Services = () => {
  const visaTypes = [
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "H-1B Specialty Occupation",
      description: "For professionals in specialty occupations requiring theoretical or technical expertise",
      features: ["Initial petitions", "Extensions", "Transfers", "Amendments"],
      processing: "Regular: 3-5 months | Premium: 15 days"
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "L-1 Intracompany Transfer",
      description: "For executives, managers, and employees with specialized knowledge",
      features: ["L-1A Executive/Manager", "L-1B Specialized Knowledge", "Blanket L petitions"],
      processing: "Regular: 2-4 months | Premium: 15 days"
    },
    {
      icon: <Star className="text-blue-600" size={32} />,
      title: "O-1 Extraordinary Ability",
      description: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics",
      features: ["O-1A Sciences/Business", "O-1B Arts/Entertainment", "O-2 Support Personnel"],
      processing: "Regular: 2-3 months | Premium: 15 days"
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "TN NAFTA Professional",
      description: "For Canadian and Mexican professionals under NAFTA agreement",
      features: ["Initial applications", "Extensions", "Change of employer", "Port of entry filing"],
      processing: "At border: Same day | USCIS: 2-3 months"
    },
    {
      icon: <FileText className="text-blue-600" size={32} />,
      title: "E-2 Treaty Investor",
      description: "For investors from treaty countries making substantial investments",
      features: ["Initial petitions", "Extensions", "Family derivatives", "Business plans"],
      processing: "Consular: 2-4 months | USCIS: 3-5 months"
    },
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: "PERM Labor Certification",
      description: "First step in employment-based green card process",
      features: ["Recruitment process", "PWD applications", "PERM filing", "I-140 petitions"],
      processing: "PERM: 12-18 months | I-140: 6-12 months"
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
            Comprehensive Visa Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all types of employment-based visas with expertise, 
            ensuring your company can hire the best talent from around the world.
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
            Don't see the visa type you need? We handle many other immigration matters.
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