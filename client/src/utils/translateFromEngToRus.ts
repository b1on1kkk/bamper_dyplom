export function translateFromEngToRus(data: string) {
  switch (data) {
    case "sedan":
      return "Седан";
    case "hatchback":
      return "Хэтчбек";
    case "universal":
      return "Универсал";
    case "suv":
      return "Внедорожник";
    case "minivan":
      return "Минивэн";
    case "coupe":
      return "Купе";
    case "liftback":
      return "Лифтбек";
    case "pickup":
      return "Пикап";
    case "convertible":
      return "Кабриолет";
    case "van":
      return "Фургон";
    case "truck":
      return "Грузовик";
    case "flatbed":
      return "Бортовой";
    case "tractor":
      return "Ерактор";
    case "bus":
      return "Автобус";
    case "trailer":
      return "Прицеп";
    case "semi_trailer":
      return "Полуприцеп";
    case "forklift":
      return "Погрузчик";
    case "gasoline":
      return "Бензин";
    case "hybrid":
      return "Гибрид";
    case "diesel":
      return "Дизель";
    case "electric":
      return "Электро";
    case "automatic":
      return "АКПП";
    case "manual":
      return "МКПП";
    case "cvt":
      return "Вариатор";
    case "robotized":
      return "Робот";
    default:
      return data;
  }
}
