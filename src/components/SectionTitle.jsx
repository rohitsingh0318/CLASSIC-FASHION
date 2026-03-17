import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">{title}</h2>
      {subtitle && <p className="text-brand-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-brand-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
