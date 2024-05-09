import { ChevronRight } from "lucide-react";

interface DividerTypes {
  onClick: () => void;
  extendedFilter: boolean;
}

export const Divider = ({ extendedFilter, onClick }: DividerTypes) => {
  return (
    <div>
      <button
        className="text-sm text-primary_text/70 hover:text-primary_text flex items-center gap-1 transition-colors"
        onClick={onClick}
      >
        <span>Больше параметров поиска</span>
        <div
          className={`${
            extendedFilter ? "rotate-90" : "rotate-0"
          } transition-transform`}
        >
          <ChevronRight width={13} height={13} />
        </div>
      </button>
    </div>
  );
};
