import { useNavigate } from "react-router-dom";
import { FilterState } from "../interfaces/filter";
import { searchParams } from "../utils/searchParams";
import { useEffect } from "react";

const useQueryFilter = (toFilterState: FilterState) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      search: `?${searchParams(toFilterState)}`
    });
  }, [toFilterState]);
};

export default useQueryFilter;
