import React, { useEffect, useState } from 'react';
import { Phone, Mail, CheckCircle, Home, ChevronRight } from 'lucide-react';
import BlogArticle from './components/BlogArticle';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:862-453-7033';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Laurampsellsnj@gmail.com';
  };

  if (currentBlog) {
    return <BlogArticle onBack={() => setCurrentBlog(null)} articleId={currentBlog} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-black mr-3" />
              <span className="text-xl font-bold text-black">LauraMPSellsNJ.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-black transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
              <button 
                onClick={handleCall}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dswifq4zx/video/upload/v1752955078/7578552-uhd_3840_2160_30fps_vq1p1d.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Helping You Navigate New Jersey Real Estate with 
              <span className="text-yellow-500"> Confidence</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether buying or selling, Laura provides the personalized support you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCall}
                className="bg-yellow-500 text-black px-8 py-4 rounded-md hover:bg-yellow-400 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                View Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Laura Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet Laura Mitteer-Peart
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/DSC_1026_(2) (1).jpg" 
                alt="Laura Mitteer-Peart Professional"
                className="w-3/4 mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a passion for people and an eye for detail, Laura Mitteer-Peart delivers a seamless real estate experience for buyers and sellers across New Jersey. Backed by the power of Signature Realty, she combines local market knowledge, sharp negotiation skills, and a genuine commitment to her clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're buying your first home, selling your current one, or simply exploring your options, Laura is dedicated to making the process clear, professional, and stress-free.
              </p>
              <div className="mt-8 flex items-center">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Signature Realty</p>
                  <p className="text-gray-600">Licensed New Jersey Realtor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why List With Me Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why List With Me
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Tailored marketing strategies that sell homes faster',
              'Backed by a powerhouse brokerage: Signature Realty',
              'Honest pricing and market advice',
              'Client-focused from first showing to closing'
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CheckCircle className="h-6 w-6 text-black mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Search Help Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Home Search Help
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Looking for your next home? Laura makes your search seamless with the guidance and attention you deserve.
          </p>
          <button 
            onClick={handleCall}
            className="bg-yellow-500 text-black px-8 py-4 rounded-md hover:bg-yellow-400 transition-all duration-300 font-semibold inline-flex items-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Let's Talk - 862-453-7033
          </button>
        </div>
      </section>

      {/* Market Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Market Updates
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Essential Tips for First-Time Home Buyers in New Jersey",
                image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=400",
                articleId: "first-time-buyers"
              },
              {
                title: "3 Tips for Selling Your Home This Fall",
                image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
                articleId: "fall-selling"
              },
              {
                title: "Why Working With a Realtor Still Matters",
                image: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=400",
                articleId: "why-realtor"
              }
            ].map((article, index) => (
              <div
                key={index} 
                onClick={() => setCurrentBlog(article.articleId)}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer"
              >
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <div className="flex items-center text-black font-medium group-hover:text-yellow-500 transition-colors">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Homes That Inspire
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=400"
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image}
                  alt={`Luxury Home ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-black mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:862-453-7033" className="text-black hover:text-yellow-500 transition-colors">
                      862-453-7033
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-black mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:Laurampsellsnj@gmail.com" className="text-black hover:text-yellow-500 transition-colors">
                      Laurampsellsnj@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Home className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">LauraMPSellsNJ</span>
            </div>
            <p className="text-gray-300">© 2025 LauraMPSellsNJ.com. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;