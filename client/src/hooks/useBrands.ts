import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import type { Brands } from "../interfaces/brands";

import { ROOT } from "../constants/root";

const useBrands = () => {
  return useQuery<Array<Brands>, AxiosError>({
    queryKey: ["brands"],
    queryFn: async () => {
      return await axios
        .get(`${ROOT}brands/all`)
        .then((res) => res.data)
        .catch((err) => err);
    },
    enabled: false
  });
};

export default useBrands;
