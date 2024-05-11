import { Link } from "react-router-dom";

import { ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-[60px] bg-primary_bg flex">
      <div className="w-[1170px] ml-auto mr-auto flex justify-between text-primary_text items-center">
        <Link to={"/"}>
          <div>
            <span className="font-bold text-2xl">Spare Parts</span>
          </div>
        </Link>

        <Link to={"/cart"} className="p-2">
          <ShoppingCart width={20} height={20}></ShoppingCart>
        </Link>
      </div>
    </header>
  );
};
