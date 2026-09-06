import React, { useMemo } from 'react';

function SparkleStar({ className, style, size = 12, color = "#FDE68A" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill={color}
      />
    </svg>
  );
}

export default function StarfieldBackground({ density = 45, showSparkles = true, className = "" }) {
  const stars = useMemo(() => {
    const starList = [];
    const colors = ["#FFFFFF", "#FDE68A", "#F59E0B", "#00F5FF", "#D97706", "#67E8F9"];
    
    for (let i = 0; i < density; i++) {
      starList.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.35,
        duration: Math.random() * 3 + 2.5,
        delay: Math.random() * 4,
      });
    }
    return starList;
  }, [density]);

  const sparkles = useMemo(() => {
    if (!showSparkles) return [];
    return [
      { id: 'sp1', x: 12, y: 18, size: 14, color: '#00F5FF', duration: 3.5, delay: 0 },
      { id: 'sp2', x: 84, y: 22, size: 16, color: '#F59E0B', duration: 4.2, delay: 1.2 },
      { id: 'sp3', x: 72, y: 65, size: 12, color: '#FDE68A', duration: 3.8, delay: 0.6 },
      { id: 'sp4', x: 25, y: 78, size: 15, color: '#FFFFFF', duration: 4.5, delay: 2.1 },
      { id: 'sp5', x: 48, y: 12, size: 10, color: '#00F5FF', duration: 3.2, delay: 1.8 },
      { id: 'sp6', x: 92, y: 82, size: 14, color: '#F59E0B', duration: 4.0, delay: 2.7 },
      { id: 'sp7', x: 8, y: 88, size: 11, color: '#FDE68A', duration: 3.6, delay: 0.9 },
      { id: 'sp8', x: 62, y: 38, size: 13, color: '#67E8F9', duration: 3.9, delay: 1.5 },
      { id: 'sp9', x: 38, y: 52, size: 12, color: '#F59E0B', duration: 4.1, delay: 2.4 },
    ];
  }, [showSparkles]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background Star Dots */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 4-Point Shimmer Sparkles */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="absolute"
          style={{
            left: `${sp.x}%`,
            top: `${sp.y}%`,
            animation: `sparkleShimmer ${sp.duration}s ease-in-out infinite`,
            animationDelay: `${sp.delay}s`,
            filter: `drop-shadow(0 0 6px ${sp.color})`,
          }}
        >
          <SparkleStar size={sp.size} color={sp.color} />
        </div>
      ))}
    </div>
  );
}
