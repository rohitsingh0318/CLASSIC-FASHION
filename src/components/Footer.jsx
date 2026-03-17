import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-brand-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
          <div className="max-w-md">
            <h3 className="text-2xl font-display font-bold mb-4">CLASSIC FASHION Electricals</h3>
            <p className="text-brand-300 leading-relaxed">
              Customer satisfaction is our priority. Discover elegant fashion jewellery built with quality and style, available securely on Amazon.
            </p>
          </div>
          <div>
            <div className="inline-block p-5 rounded-2xl bg-brand-800/50 backdrop-blur-sm border border-brand-700 shadow-inner">
              <p className="font-medium flex flex-col items-center sm:items-start gap-1">
                <span className="text-brand-200 text-sm">Official Seller</span>
                <span className="text-lg">All products available on Amazon</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-400">
          <p>© 2026 Classic Fashion Electricals. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-current" /> for Amazon Shoppers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
