import React from 'react';

const ProgressBar = ({loading}) => {
  return (
    loading ? 
      <div className="w-100 progness-bar text-center">
        <i className="fas fa-spinner fa-pulse fa-3x"></i>
      </div>      
    :
    ''
    
  )
}

export default ProgressBar;
