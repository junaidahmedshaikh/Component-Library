import { ChevronLeft, ChevronRight } from "lucide-react";

import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  maxVisible?: number; // max number of page buttons shown
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  orientation = "horizontal",
  size = "md",
  maxVisible = 5,
}) => {
  const isVertical = orientation === "vertical";

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(currentPage - half, 1);
    const end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleKeyDown = (e: React.KeyboardEvent, page: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPageChange(page);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={`flex items-center gap-2 flex-wrap ${
        isVertical ? "flex-col md:flex-row" : "flex-row"
      }`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 border rounded-md ${
          sizeClasses[size]
        } transition
        ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
        }
        `}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        Prev
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          onKeyDown={(e) => handleKeyDown(e, page)}
          className={`border rounded-md ${
            sizeClasses[size]
          } transition focus:outline-none focus:ring-2 focus:ring-gray-300
            ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }
          `}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        type="button"
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 border rounded-md ${
          sizeClasses[size]
        } transition
        ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
        }
        `}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
