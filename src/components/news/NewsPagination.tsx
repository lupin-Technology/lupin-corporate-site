import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface NewsPaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export function NewsPagination({
  currentPage = 1,
  totalPages = 1,
}: NewsPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 pt-[60px]">
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-[4px] border border-[#e4e4e4] text-[#8e8e8e] transition-all hover:border-[#333] hover:text-[#333] disabled:pointer-events-none disabled:opacity-40"
        aria-label="前のページ"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          className={cn(
            "flex size-10 items-center justify-center rounded-[4px] border border-[#e4e4e4] text-sm font-medium transition-all",
            page === currentPage
              ? "border-[#333] bg-[#333] text-white"
              : "text-[#8e8e8e] hover:border-[#333] hover:bg-[#333] hover:text-white",
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-[4px] border border-[#e4e4e4] text-[#8e8e8e] transition-all hover:border-[#333] hover:text-[#333] disabled:pointer-events-none disabled:opacity-40"
        aria-label="次のページ"
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
