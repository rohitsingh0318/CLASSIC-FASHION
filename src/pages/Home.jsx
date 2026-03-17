import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import girlimg from '../assets/girlsimg.png';

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-brand-900 text-brand-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 -right-64 w-96 h-96 bg-brand-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-800 border border-brand-700 text-brand-200 text-sm font-medium mb-6 tracking-wide">
              Welcome to the Premium Fashion Jewellery Store
            </span>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Elegant Fashion <br className="hidden md:block" />
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-400">Jewellery for Women</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover our exclusive collection of beautifully crafted earrings
                 designed to enhance your style for every occasion. Available securely on Amazon.
            </p>
            <motion.button
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-50 text-brand-900 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(253,248,246,0.3)] hover:shadow-[0_0_30px_rgba(253,248,246,0.5)]"
            >
              Explore Products
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Collection" 
            subtitle="Browse our top-selling jewellery pieces on Amazon. Find the perfect match for any occasion."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className={index === 4 ? "sm:col-span-2 lg:col-span-1 xl:col-span-1 lg:col-start-2 xl:col-start-auto" : ""}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Seller Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-3 scale-105"></div>
                <img 
                  src={girlimg} 
                  alt="Jewellery Craftsmanship" 
                  className="relative rounded-3xl shadow-xl object-cover w-full h-[500px]"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-900 mb-6">About Our Brand</h2>
              <div className="w-20 h-1 bg-brand-500 mb-8 rounded-full"></div>
              
              <p className="text-lg text-brand-700 mb-6 leading-relaxed">
                <strong className="text-brand-900">CLASSIC FASHION Electricals</strong> is committed to providing each customer with the highest standard of customer service and premium quality fashion accessories.
              </p>
              <p className="text-lg text-brand-700 mb-10 leading-relaxed">
                We specialize in elegant, beautifully designed fashion jewellery for women and girls that complements both traditional and modern attire. Every piece is carefully crafted to ensure durability and stunning visual appeal.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-50 border border-brand-100 shadow-sm">
                  <div className="bg-brand-200 p-3 rounded-lg text-brand-700 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 text-lg">Quality Guaranteed</h4>
                    <p className="text-brand-600">Premium materials and excellent finish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return & Refund Section */}
      <section className="py-24 bg-brand-900 text-brand-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <SectionTitle 
            title={<span className="text-white">Returns & Refunds</span>} 
            subtitle={<span className="text-brand-300">Shop with confidence. We follow strict Amazon return policies to ensure your complete satisfaction.</span>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            <div className="bg-brand-800/40 border border-brand-700 p-8 rounded-2xl glass-dark" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 bg-brand-700 rounded-full flex items-center justify-center mb-6 text-brand-200">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">30 Days Return</h3>
              <p className="text-brand-300 mb-6 leading-relaxed">
                Not fully satisfied? You can return most items within 30 days of receipt of delivery for a full refund.
              </p>
              <a 
                href="https://www.amazon.in/gp/orc/returns/homepage.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-200 font-medium hover:text-white underline underline-offset-4 decoration-brand-500 transition-colors group"
              >
                Amazon Online Return Center
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-brand-800/40 border border-brand-700 p-8 rounded-2xl glass-dark" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 bg-brand-700 rounded-full flex items-center justify-center mb-6 text-brand-200">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Safe Shipping</h3>
              <p className="text-brand-300 mb-6 leading-relaxed">
                All our products are Fulfilled by Amazon (FBA) to ensure fast, safe, and reliable delivery right to your doorstep.
              </p>
              <a 
                href="https://www.amazon.in/gp/help/customer/display.html?nodeId=201910060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-200 font-medium hover:text-white underline underline-offset-4 decoration-brand-500 transition-colors group"
              >
                Amazon Shipping Policy
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
