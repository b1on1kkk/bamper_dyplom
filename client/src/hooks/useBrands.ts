import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import type { BrandsAllData } from "../interfaces/brands";

import { ROOT } from "../constants/root";

const useBrands = () => {
  return useQuery<BrandsAllData, AxiosError>({
    queryKey: ["brands"],
    queryFn: async () => {
      return await axios
        .get(`${ROOT}brands/all`)
        .then((res) => res.data)
        .catch((err) => err);
    }
  });
};

export default useBrands;
