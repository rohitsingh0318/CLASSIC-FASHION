import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleAmazonClick = () => {
    window.open(product.amazonLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-100 flex flex-col h-full group transition-shadow hover:shadow-2xl"
    >
      <div className="relative overflow-hidden aspect-square">
        <motion.img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display font-semibold text-lg text-brand-900 line-clamp-2">{product.title}</h3>
          <span className="font-bold text-brand-600 ml-4 whitespace-nowrap">{product.price}</span>
        </div>
        
        <div className="mt-auto pt-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAmazonClick}
            className="w-full py-3 px-4 bg-brand-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-800 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            View on Amazon
            <ExternalLink size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
