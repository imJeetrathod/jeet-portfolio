'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setIsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: [0.2, 0.3, 0.4, 0.5], ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}