import { useState, useEffect, useRef } from "react";
import { Tab } from "./Tabs.types";

interface TabsProps {
  tabs: Tab[];
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  orientation = "horizontal",
  size = "md",
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const isVertical = orientation === "vertical";

  const sizeClasses = {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-5",
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight" || (isVertical && e.key === "ArrowDown")) {
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft" || (isVertical && e.key === "ArrowUp")) {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }
    if (newIndex !== index) {
      e.preventDefault();
      setActiveIndex(newIndex);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div
      className={`flex ${
        isVertical ? "flex-col md:flex-row" : "flex-col"
      } ${className}`}
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`flex ${isVertical ? "flex-col" : "flex-row"} gap-2`}
      >
        {tabs.map((tab, index) => {
          const isSelected = index === activeIndex;
          const isDisabled = tab.disabled;

          return (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`flex items-center gap-2 border-b-2 ${
                sizeClasses[size]
              } transition-all duration-200 rounded-t-md outline-none
              ${
                isSelected
                  ? "text-gray-800 border-blue-500"
                  : "text-gray-500 border-transparent"
              }
              ${
                isDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
              }`}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
            >
              {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs.map((tab, index) =>
          index === activeIndex ? (
            <div
              key={index}
              id={`tabpanel-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              className="text-gray-700"
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
