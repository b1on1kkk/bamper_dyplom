import useCartContext from "../../hooks/useCartContext";

import { CarFront, Plus, X } from "lucide-react";

import { translateFromEngToRus } from "../../utils/translateFromEngToRus";

import type { Parts } from "../../interfaces/sparePartsType";

export const SparePartCard = ({ item }: { item: Parts }) => {
  const { cart, setCart } = useCartContext();

  return (
    <div
      className="flex h-[200px] gap-5 p-3 border-b-[1px] border-primary_border animate-[slide-up_0.3s] overflow-hidden"
      key={item.article}
    >
      <div className="p-2 border-[1px] border-primary_border rounded-md">
        <img
          src={item.img_link}
          alt={item.category}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="text-primary_text">
          <h1 className="font-semibold">{item.title}</h1>
        </div>

        <div className="flex items-center gap-1 text-primary_text mt-2">
          <div>
            <CarFront width={18} height={18} />
          </div>
          <div className="flex">
            <span className="text-sm">{translateFromEngToRus(item.body)}/</span>
            <span className="text-sm">{translateFromEngToRus(item.fuel)}/</span>
            <span className="text-sm">
              {translateFromEngToRus(item.transmission)}
            </span>
          </div>
        </div>

        <div className="mt-1">
          <p className="line-clamp-1 text-primary_text/50">
            {item.description}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <div>
            <span className="text-primary_text text-sm">
              Артикул: {item.article}
            </span>
          </div>

          <div>
            <span className="text-primary_text/50 text-sm">
              Номер запчасти: {item.spare_id}
            </span>
          </div>
        </div>
      </div>

      <div className="ml-5 text-end flex flex-col">
        <div className="flex-1">
          <div className="text-primary_text text-2xl mb-2">
            <span>{item.price} р.</span>
          </div>
          <div className="text-primary_text/50 text-sm">
            <span>~{Math.round(item.price / 3)}$</span>
          </div>
          <div className="text-primary_text/50 text-sm">
            <span>~{Math.round(item.price * 27)}₽</span>
          </div>
        </div>
        <div>
          {cart.some(
            (cart_item) => JSON.stringify(cart_item) === JSON.stringify(item)
          ) ? (
            <button
              title="Удалить из корзины"
              className="p-2 text-white hover:bg-red-500 rounded-lg transition-colors bg-gray-600 active:translate-y-[2px] drop-shadow-md active:drop-shadow-none"
              onClick={() =>
                setCart([
                  ...cart.filter(
                    (cart_item) =>
                      JSON.stringify(cart_item) !== JSON.stringify(item)
                  )
                ])
              }
            >
              <X width={18} height={18} />
            </button>
          ) : (
            <>
              <button
                title="Добавить в корзину"
                className="p-2 text-white hover:bg-green-500 rounded-lg transition-colors bg-gray-600 active:translate-y-[2px] drop-shadow-md active:drop-shadow-none"
                onClick={() => setCart([...cart, item])}
              >
                <Plus width={18} height={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
