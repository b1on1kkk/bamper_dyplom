import { Header } from "../Header/Header";
import { Content } from "../Content/Content";

export const Main = () => {
  return (
    <div className="w-[1170px] ml-auto mr-auto relative">
      <Header />

      <Content />
    </div>
  );
};
