import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    once = true,
    threshold = '0.1',
    animation = 'scroll-animate',
  } = options;

  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    element.classList.add('reveal-on-scroll');

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add(animation);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasAnimated.current && once) return;
          entry.target.classList.add(animation);
          hasAnimated.current = true;
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove(animation);
          hasAnimated.current = false;
        }
      },
      { threshold: parseFloat(threshold) }
    );

    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, [once, threshold, animation]);

  return ref;
};