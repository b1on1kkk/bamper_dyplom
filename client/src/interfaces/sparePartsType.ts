export interface Parts {
  article: number;
  body: string;
  category: string;
  description: string;
  engine_volume: number;
  fuel: string;
  img_link: string;
  price: number;
  spare_id: string;
  title: string;
  transmission: string;
  year: number;
}

export interface SparePartsType {
  status: number;
  message: string;
  data: Array<Parts>;
}
