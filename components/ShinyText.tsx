'use client'

import React from 'react'
import styles from './ShinyText.module.css'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 4, 
  className = '' 
}) => {
  if (disabled) {
    return <span className={className}>{text}</span>
  }

  return (
    <span 
      className={`${styles.shinyText} ${className}`}
      style={{ '--animation-duration': `${speed}s` } as React.CSSProperties}
    >
      {text}
    </span>
  );
};

export default ShinyText;
