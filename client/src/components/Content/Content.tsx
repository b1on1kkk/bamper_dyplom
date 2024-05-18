import { useState } from "react";
import useSpareParts from "../../hooks/useSpareParts";

import { Aside } from "./Aside/Aside";
import { MainContent } from "./MainContent/MainContent";

import { MyGlobalContext } from "../../context/MyGlobalContext";

export const Content = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfElements, setNumberOfElements] = useState<number>(0);

  const { data, isLoading, isError } = useSpareParts(
    currentPage,
    setNumberOfElements
  );

  return (
    <main className="flex">
      <MyGlobalContext.Provider
        value={{ numberOfElements, currentPage, setCurrentPage }}
      >
        <Aside />

        <MainContent isLoading={isLoading} isError={isError} parts={data} />
      </MyGlobalContext.Provider>
    </main>
  );
};
