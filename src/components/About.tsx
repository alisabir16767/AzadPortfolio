import { CheckCircle, BookOpen, Users, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    "Licensed Immigration Attorney with 10+ years experience",
    "Certified in Business Immigration Law",
    "Fluent in English, Urdu,Hindi,Bhojpuri"
  ];

  const expertise = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Corporate Immigration",
      description: "Specialized in helping businesses secure visas for international talent"
    },
    {
      icon: <BookOpen className="text-blue-600" size={24} />,
      title: "Complex Cases",
      description: "Successfully handled challenging applications with unique circumstances"
    },
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Compliance Expertise",
      description: "Ensure full regulatory compliance throughout the visa process"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text Section */}
          <div>
            <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
              About Me
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Immigration Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a dedicated immigration consultant, I specialize in helping individuals 
              and businesses from Arab countries and Russia secure work visas and 
              navigate the complex immigration process. With years of experience, 
              I provide professional and reliable visa services tailored to each client’s needs.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Qualifications:</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-12 lg:mb-0 text-center">
            <img
              src="/Azad.png"
              alt="Azad Ansari - Visa Consultant"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
            <p className="mt-4 text-gray-700 text-lg font-medium">
              <span className="font-bold">Azad Ansari</span>  
              <br /> Immigration & Visa Consultant  
              <br /> Specialist in Arab & Russian Work Visas
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
