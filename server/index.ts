import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import brandsRouter from "./routes/brands";
import sparePartsRouter from "./routes/spare_parts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    exposedHeaders: "total_count"
  })
);

app.use("/brands", brandsRouter);
app.use("/spare_parts", sparePartsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// type type_body =
//   | "седан"
//   | "хэтчбек"
//   | "универсал"
//   | "внедорожник"
//   | "минивэн"
//   | "купе"
//   | "лифтбек"
//   | "пикап"
//   | "кабриолет"
//   | "фургон"
//   | "грузовик"
//   | "бортовой"
//   | "трактор"
//   | "автобус"
//   | "прицеп"
//   | "полуприцеп"
//   | "погрузчик";

// type type_fuel = "бензин" | "дизель" | "гибрид" | "электро";

// type type_transmission = "АКПП" | "МКПП" | "робот" | "вариатор";

// interface brands_type {
//   brand_id: number;
//   model_id: number;
//   title: string;
//   description: string;
//   article: string;
//   category: string;
//   img_link: string;
//   spared_id: string;
//   price: number;
//   year: string;
//   body: type_body;
//   fuel: type_fuel;
//   transmission: type_transmission;
//   engine_volume: string;
// }

// interface type_brands {
//   id: number;
//   code: string;
//   name: string;
// }

// interface type_models {
//   id: number;
//   brand_id: number;
//   code: string;
//   name: string;
// }

// function translateRussionToEnglishTransmission(russianWord: type_transmission) {
//   switch (russianWord) {
//     case "АКПП":
//       return "automatic";
//     case "МКПП":
//       return "manual";
//     case "вариатор":
//       return "cvt";
//     case "робот":
//       return "robotized";
//     default:
//       return "manual";
//   }
// }

// function translateRussianToEnglishFuel(russianWord: type_fuel) {
//   switch (russianWord) {
//     case "бензин":
//       return "gasoline";
//     case "гибрид":
//       return "hybrid";
//     case "дизель":
//       return "diesel";
//     case "электро":
//       return "electric";
//     default:
//       return "diesel";
//   }
// }

// function translateRussianToEnglish(russianWord: type_body) {
//   switch (russianWord) {
//     case "седан":
//       return "sedan";
//     case "хэтчбек":
//       return "hatchback";
//     case "универсал":
//       return "universal";
//     case "внедорожник":
//       return "suv";
//     case "минивэн":
//       return "minivan";
//     case "купе":
//       return "coupe";
//     case "лифтбек":
//       return "liftback";
//     case "пикап":
//       return "pickup";
//     case "кабриолет":
//       return "convertible";
//     case "фургон":
//       return "van";
//     case "грузовик":
//       return "truck";
//     case "бортовой":
//       return "flatbed";
//     case "трактор":
//       return "tractor";
//     case "автобус":
//       return "bus";
//     case "прицеп":
//       return "trailer";
//     case "полуприцеп":
//       return "semi_trailer";
//     case "погрузчик":
//       return "forklift";
//     default:
//       return "semi_trailer";
//   }
// }

// fs.readFile(
//   path.join(__dirname, "data", "bamper_data_cars_123.json"),
//   "utf8",
//   (err, data: string) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const brands: brands_type[] = JSON.parse(data);

//     brands.forEach(async (item, idx) => {
//       // console.log(item.brand_id);
//       // console.log(item.model_id);
//       // await prisma.model.create({
//       //   data: {
//       //     brand_id: item.brand_id,
//       //     code: item.code,
//       //     name: item.name
//       //   }
//       // });

//       // await prisma.model.create({
//       //   data: {
//       //     id: item.id,
//       //     brand_id: item.brand_id,
//       //     code: item.code,
//       //     name: item.name
//       //   }
//       // });

//       console.log("----------------------");
//       console.log(item);

//       await prisma.spare_parts.create({
//         data: {
//           id: idx + 1,
//           brand_id: item.brand_id,
//           model_id: item.model_id,
//           title: item.title,
//           category: item.category,
//           description: item.description,
//           article: +item.article,
//           img_link: item.img_link,
//           spare_id: item.spared_id,
//           price: item.price,
//           year: +item.year,
//           engine_volume: parseFloat(item.engine_volume),
//           body: translateRussianToEnglish(item.body),
//           fuel: translateRussianToEnglishFuel(item.fuel),
//           transmission: translateRussionToEnglishTransmission(item.transmission)
//         }
//       });

//       console.log("--------worked---------");
//       console.log(translateRussianToEnglish(item.body).length > 0);
//     });
//   }
// );
