import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { ROOT } from "../constants/root";

import type { SparePartsType } from "../interfaces/sparePartsType";
import { useLocation } from "react-router-dom";

const useSpareParts = (
  page: number,
  setNumberOfElements: (c: number) => void
) => {
  const location = useLocation();

  return useQuery<SparePartsType, AxiosError>({
    queryKey: ["spare_parts"],
    queryFn: async () => {
      const response = await axios.get(
        `${ROOT}spare_parts${
          location.search ? `${location.search}&page=${page}` : `?page=${page}`
        }`
      );
      setNumberOfElements(+response.headers["total_count"]);
      return response.data;
    }
  });
};

export default useSpareParts;
