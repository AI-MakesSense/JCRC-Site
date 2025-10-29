import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the indicator when the section is in view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown
          size={28}
          className="text-warm-gold"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}
