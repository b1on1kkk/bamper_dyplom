import useGlobalContext from "../../../hooks/useGlobalContext";

import { Pagination, Spinner } from "@nextui-org/react";
import { SparePartCard } from "../../SparePartCard/SparePartCard";

import type { MainContentType } from "../../../interfaces/mainContentType";

export const MainContent = ({ isLoading, isError, parts }: MainContentType) => {
  const { numberOfElements, currentPage, setCurrentPage } = useGlobalContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  console.log(isLoading);

  return (
    <div
      className={`flex-1 bg-primary_bg w-full p-3 shadow-lg rounded-md ml-[270px] min-h-[500px] flex ${
        isLoading ? "justify-center" : "justify-normal"
      } flex-col`}
    >
      {!isLoading && !isError && parts ? (
        <>
          <main className="flex flex-col flex-1">
            {parts.data.length > 0 ? (
              <>
                {parts!.data.map((item) => {
                  return <SparePartCard item={item} key={item.spare_id} />;
                })}
              </>
            ) : (
              <div className="text-center text-2xl text-primary_text">
                Объявления не найдены
              </div>
            )}
          </main>

          <div className="flex py-5 justify-center">
            <Pagination
              total={Math.ceil(numberOfElements / 20)}
              size="sm"
              variant="light"
              page={currentPage}
              initialPage={1}
              classNames={{
                item: "text-primary_text hover:text-primary_bg"
              }}
              onChange={(e) => {
                scrollToTop();

                setTimeout(() => {
                  setCurrentPage(e);
                }, 800);
              }}
            />
          </div>
        </>
      ) : (
        <Spinner color="primary" />
      )}
    </div>
  );
};
