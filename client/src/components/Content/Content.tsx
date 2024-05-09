import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSpareParts from "../../hooks/useSpareParts";

import { Aside } from "./Aside/Aside";
import { Pagination, Spinner } from "@nextui-org/react";
import { SparePartCard } from "../SparePartCard/SparePartCard";

export const Content = () => {
  const location = useLocation();

  console.log(location);

  // think and optimize it
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const { data, refetch, isLoading } = useSpareParts(
    page,
    location.search,
    setPages
  );

  useEffect(() => {
    refetch();
  }, [location.search, page]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="flex">
      <Aside />

      <div
        className={`flex-1 bg-primary_bg w-full p-3 shadow-lg rounded-md ml-[270px] min-h-[500px] flex ${
          isLoading ? "justify-center" : "justify-normal"
        } flex-col`}
      >
        {!isLoading ? (
          <main className="flex flex-col flex-1">
            {data && data.length > 0 ? (
              <>
                {data.map((item) => {
                  return <SparePartCard item={item}></SparePartCard>;
                })}
              </>
            ) : (
              <div className="text-center text-2xl text-primary_text">
                Объявления не найдены
              </div>
            )}
          </main>
        ) : (
          <Spinner color="primary" />
        )}

        <div className="flex py-5 justify-center">
          <Pagination
            total={pages}
            size="sm"
            variant="light"
            page={page}
            onChange={(e) => {
              scrollToTop();
              setPage(e);
            }}
          />
        </div>
      </div>
    </main>
  );
};
