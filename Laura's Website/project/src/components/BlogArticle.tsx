import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogArticleProps {
  onBack: () => void;
  articleId: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ onBack, articleId }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = {
    'first-time-buyers': {
      title: '5 Essential Tips for First-Time Home Buyers in New Jersey',
      date: 'December 15, 2024',
      image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: (
        <>
          <p className="text-xl text-gray-800 font-medium">
            Buying your first home is one of life's biggest milestones. As a New Jersey realtor, I've helped countless first-time buyers navigate this exciting journey. Here are my top tips to make your home buying experience smooth and successful.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Get Pre-Approved for Your Mortgage</h2>
          <p>
            Before you start house hunting, get pre-approved for a mortgage. This gives you a clear picture of your budget and shows sellers you're a serious buyer. In New Jersey's competitive market, having pre-approval can make the difference between getting your dream home or losing it to another buyer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Understand New Jersey's Property Taxes</h2>
          <p>
            New Jersey has some of the highest property taxes in the nation, so it's crucial to factor this into your budget. Don't just look at the mortgage payment – consider the total monthly cost including taxes, insurance, and HOA fees if applicable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Research the Neighborhood</h2>
          <p>
            Drive through potential neighborhoods at different times of day and week. Check school ratings if you have children, look at commute times to work, and consider future development plans that might affect property values.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Don't Skip the Home Inspection</h2>
          <p>
            A professional home inspection can save you thousands of dollars by identifying potential issues before you buy. In New Jersey's older housing stock, this step is especially important to uncover any hidden problems.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Work with a Local Expert</h2>
          <p>
            Choose a realtor who knows the local market inside and out. Every town in New Jersey has its own character, market trends, and unique considerations. A local expert can guide you to the right neighborhood and help you avoid costly mistakes.
          </p>
        </>
      )
    },
    'fall-selling': {
      title: '3 Tips for Selling Your Home This Fall',
      date: 'November 28, 2024',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: (
        <>
          <p className="text-xl text-gray-800 font-medium">
            Fall can be an excellent time to sell your home in New Jersey. While many sellers think spring is the only good time to list, autumn offers unique advantages. Here are my top three strategies for a successful fall sale.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Embrace the Season with Curb Appeal</h2>
          <p>
            Fall foliage creates a beautiful natural backdrop for your home. Keep your lawn raked and add seasonal touches like pumpkins or mums to your front entrance. Clean gutters and ensure your home's exterior is well-maintained. The cozy autumn atmosphere can actually make your property more appealing to buyers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Create a Warm, Inviting Interior</h2>
          <p>
            As temperatures drop, buyers want to feel warmth and comfort when they enter your home. Consider lighting a fireplace during showings, add soft throws to seating areas, and ensure your home is well-lit as daylight hours decrease. The goal is to help buyers envision cozy evenings in their potential new home.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Price Strategically for Less Competition</h2>
          <p>
            With fewer homes on the market in fall, you'll face less competition. However, serious buyers in autumn are often motivated by job relocations or life changes. Price your home competitively to attract these motivated buyers and potentially receive multiple offers.
          </p>
        </>
      )
    },
    'why-realtor': {
      title: 'Why Working With a Realtor Still Matters in 2024',
      date: 'December 8, 2024',
      image: 'https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: (
        <>
          <p className="text-xl text-gray-800 font-medium">
            In today's digital age, some people wonder if they still need a realtor. With online listings and virtual tours readily available, it might seem like you can handle buying or selling on your own. However, working with a professional realtor remains more valuable than ever.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Market Expertise You Can't Google</h2>
          <p>
            While you can find listing prices online, understanding true market value requires deep local knowledge. As your realtor, I analyze recent comparable sales, current market trends, and neighborhood-specific factors that online tools simply can't capture. This expertise helps you price correctly whether buying or selling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Negotiation Skills That Save Money</h2>
          <p>
            Real estate transactions involve complex negotiations that go far beyond price. From inspection contingencies to closing timelines, having an experienced negotiator on your side can save you thousands of dollars and prevent costly mistakes. I've seen too many DIY deals fall apart over issues that could have been easily resolved.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Network Access</h2>
          <p>
            Realtors have established relationships with mortgage lenders, home inspectors, contractors, and other professionals you'll need during your transaction. This network can expedite your process and often provide better service than finding these professionals on your own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Protection and Peace of Mind</h2>
          <p>
            Real estate contracts are complex legal documents. One mistake can cost you significantly or even void your transaction. Working with a licensed realtor provides you with professional guidance and protection throughout the process.
          </p>
        </>
      )
    }
  };

  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button 
            onClick={onBack}
            className="text-black hover:text-yellow-500 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
        
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>By Laura Mitteer-Peart</span>
              </div>
            </div>
          </header>

          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {article.content}

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
              <p className="mb-4">
                As your New Jersey realtor, I'm here to guide you through every step of your real estate journey. From finding the perfect home to negotiating the best deal, I'll be your advocate and advisor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:862-453-7033"
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-center"
                >
                  Call: 862-453-7033
                </a>
                <a 
                  href="mailto:Laurampsellsnj@gmail.com"
                  className="border-2 border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-colors text-center"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <img 
                src="/DSC_1026_(2) (1).jpg"
                alt="Laura Mitteer-Peart"
                className="w-16 h-16 rounded-full mr-4 object-cover object-center"
              />
              <div>
                <h4 className="font-bold text-gray-900">Laura Mitteer-Peart</h4>
                <p className="text-gray-600">Licensed New Jersey Realtor | Signature Realty</p>
                <p className="text-gray-600">LauraMPSellsNJ.com</p>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;