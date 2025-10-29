import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Show the indicator if the section is in view (top of element is above viewport or in viewport)
      // and not scrolled past (bottom of element is still visible)
      const isInView =
        rect.top < viewportHeight && rect.bottom > 0;

      setIsVisible(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
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
