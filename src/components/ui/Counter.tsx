
import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const Counter = ({ end, duration = 2000, suffix = "", delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = end / (duration / 16);
    let timeoutId: number;

    if (delay > 0) {
      timeoutId = window.setTimeout(() => {
        const timer = setInterval(() => {
          start += step;
          setCount(Math.floor(start));

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          }
        }, 16);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      const timer = setInterval(() => {
        start += step;
        setCount(Math.floor(start));

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, duration, delay, isVisible]);

  return (
    <span ref={countRef} className="inline-block animate-count-up opacity-0">
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
