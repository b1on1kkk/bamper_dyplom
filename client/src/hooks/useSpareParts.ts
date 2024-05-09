import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { ROOT } from "../constants/root";

import type { SparePartsType } from "../interfaces/sparePartsType";

const useSpareParts = (
  page: number,
  filter: string,
  setPages: (c: number) => void
) => {
  return useQuery<Array<SparePartsType>, AxiosError>({
    queryKey: ["spare_parts"],
    queryFn: async () =>
      await axios
        .get(
          `${ROOT}spare_parts${
            filter ? `${filter}&page=${page}` : `?page=${page}`
          }`
        )
        .then((res) => {
          setPages(+res.headers["total_count"]);
          return res.data;
        })
        .catch((err) => err)
  });
};

export default useSpareParts;
