import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string; // Additional classes for the wrapper
  animationClass?: string; // Class to apply when in view (e.g., 'animate-slide-in-left')
  initialClass?: string; // Class to apply when out of view (e.g., 'opacity-0 -translate-x-10')
  threshold?: number; // Intersection threshold (0.0 - 1.0)
  rootMargin?: string; // Margin around the root
}

export const ScrollAnimation = ({
  children,
  className,
  animationClass = "opacity-100 translate-x-0 translate-y-0",
  initialClass = "opacity-0 -translate-x-20", // Default: Slide from left
  threshold = 0.1,
  rootMargin = "0px",
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const currentRef = ref.current;
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out", // Smooth transition for revert
        className,
        isVisible ? animationClass : initialClass
      )}
    >
      {children}
    </div>
  );
};
