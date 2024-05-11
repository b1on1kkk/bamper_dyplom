import useCartContext from "../../hooks/useCartContext";

import { Title } from "../Title/Title";
import { ArchiveX } from "lucide-react";
import { SparePartCard } from "../SparePartCard/SparePartCard";

export const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <Title text="Корзина товаров"></Title>

      <main
        className={`bg-primary_bg p-3 shadow-lg rounded-md flex flex-col ${
          cart.length === 0
            ? "justify-center items-center min-h-[500px]"
            : "justify-normal"
        }`}
      >
        {cart.length > 0 ? (
          <>
            {cart.map((cart_item) => {
              return (
                <SparePartCard item={cart_item} key={cart_item.spare_id} />
              );
            })}
          </>
        ) : (
          <div className="flex flex-col items-center text-primary_text text-2xl font-semibold gap-3">
            <div>
              <ArchiveX width={60} height={60} />
            </div>
            <h1>В вашей корзине пока пусто</h1>
          </div>
        )}
      </main>
    </>
  );
};
