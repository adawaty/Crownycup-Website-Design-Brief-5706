import React from 'react';

const SafeIcon = ({ icon: Icon, className = "", ...props }) => {
  if (!Icon) {
    return <div className={`w-6 h-6 ${className}`} {...props} />;
  }
  
  return <Icon className={className} {...props} />;
};

export default SafeIcon;