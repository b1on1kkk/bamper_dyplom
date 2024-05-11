import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";

export const Main = () => {
  return (
    <>
      <Header />

      <div className="w-[1170px] ml-auto mr-auto relative">
        <Outlet />
      </div>
    </>
  );
};
