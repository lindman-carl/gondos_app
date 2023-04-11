export type Product = {
  name: string;
  id: string;
  colors: {
    primary: string;
    secondary: string;
  };
  marketingImages: string[];
  productImages: string[];
  price: number;
};

export const products: Product[] = [
  {
    name: "Blu Dolomiti",
    id: "blu_dolomiti",
    price: 899,
    colors: {
      primary: "hsl(213, 25%, 25%)",
      secondary: "hsl(211, 16%, 63%)",
    },
    marketingImages: [
      "blu_dolomiti_marketing_0.jpeg",
      "blu_dolomiti_marketing_1.jpeg",
      "blu_dolomiti_marketing_2.jpeg",
      "blu_dolomiti_marketing_3.jpeg",
    ],
    productImages: [
      "blu_dolomiti_product_0_transparent.webp",
      "blu_dolomiti_product_1_transparent.webp",
      "blu_dolomiti_product_2_transparent.webp",
    ],
  },
  {
    name: "Rosa Cardinale",
    id: "rosa_cardinale",
    price: 899,
    colors: {
      primary: "hsl(340, 66%, 36%)",
      secondary: "hsl(341, 41%, 66%)",
    },
    marketingImages: [
      "rosa_cardinale_marketing_0.jpeg",
      "rosa_cardinale_marketing_1.jpeg",
      "rosa_cardinale_marketing_2.jpeg",
      "rosa_cardinale_marketing_3.jpeg",
    ],
    productImages: [
      "rosa_cardinale_product_0_transparent.webp",
      "rosa_cardinale_product_1_transparent.webp",
      "rosa_cardinale_product_2_transparent.webp",
    ],
  },
  {
    name: "Grigio Petrolio",
    id: "grigio_petrolio",
    price: 899,
    colors: {
      primary: "hsl(200, 16%, 22%)",
      secondary: "hsl(264, 2%, 53%)",
    },
    marketingImages: [
      "grigio_petrolio_marketing_0.jpeg",
      "grigio_petrolio_marketing_1.jpeg",
      "grigio_petrolio_marketing_2.jpeg",
      "grigio_petrolio_marketing_3.jpeg",
    ],
    productImages: [
      "grigio_petrolio_product_0_transparent.webp",
      "grigio_petrolio_product_1_transparent.webp",
      "grigio_petrolio_product_2_transparent.webp",
    ],
  },
  {
    name: "Limoncello",
    id: "limoncello",
    price: 899,
    colors: {
      primary: "hsl(44, 95%, 65%)",
      secondary: "hsl(34, 72%, 60%)",
    },
    marketingImages: [
      "limoncello_marketing_0.jpeg",
      "limoncello_marketing_1.jpeg",
      "limoncello_marketing_2.jpeg",
      "limoncello_marketing_3.jpeg",
    ],
    productImages: [
      "limoncello_product_0_transparent.webp",
      "limoncello_product_1_transparent.webp",
      "limoncello_product_2_transparent.webp",
    ],
  },
  {
    name: "Nero Imperiale",
    id: "nero_imperiale",
    price: 899,
    colors: {
      primary: "hsl(45, 11%, 7%)",
      secondary: "hsl(30, 6%, 38%)",
    },
    marketingImages: [
      "nero_imperiale_marketing_0.jpeg",
      "nero_imperiale_marketing_1.jpeg",
      "nero_imperiale_marketing_2.jpeg",
      "nero_imperiale_marketing_3.jpeg",
    ],
    productImages: [
      "nero_imperiale_product_0_transparent.webp",
      "nero_imperiale_product_1_transparent.webp",
      "nero_imperiale_product_2_transparent.webp",
    ],
  },
  {
    name: "Verde Laguna",
    id: "verde_laguna",
    price: 899,
    colors: {
      primary: "hsl(43, 35%, 40%)",
      secondary: "hsl(288, 3%, 56%)",
    },
    marketingImages: [
      "verde_laguna_marketing_0.jpeg",
      "verde_laguna_marketing_1.jpeg",
      "verde_laguna_marketing_2.jpeg",
      "verde_laguna_marketing_3.jpeg",
    ],
    productImages: [
      "verde_laguna_product_0_transparent.webp",
      "verde_laguna_product_1_transparent.webp",
      "verde_laguna_product_2_transparent.webp",
    ],
  },
  {
    name: "Rosso Veneziano",
    id: "rosso_veneziano",
    price: 899,
    colors: {
      primary: "hsl(4, 80%, 50%)",
      secondary: "hsl(30, 80%, 55%)",
    },
    marketingImages: [
      "rosso_veneziano_marketing_0.jpeg",
      "rosso_veneziano_marketing_1.jpeg",
      "rosso_veneziano_marketing_2.jpeg",
      "rosso_veneziano_marketing_3.jpeg",
    ],
    productImages: [
      "rosso_veneziano_product_0_transparent.webp",
      "rosso_veneziano_product_1_transparent.webp",
      "rosso_veneziano_product_2_transparent.webp",
    ],
  },
  {
    name: "Grigio Amalfi",
    id: "grigio_amalfi",
    price: 899,
    colors: {
      primary: "hsl(216, 9%, 70%)",
      secondary: "hsl(332, 65%, 58%)",
    },
    marketingImages: [
      "grigio_amalfi_marketing_0.jpeg",
      "grigio_amalfi_marketing_1.jpeg",
      "grigio_amalfi_marketing_2.jpeg",
      "grigio_amalfi_marketing_3.jpeg",
    ],
    productImages: [
      "grigio_amalfi_product_0_transparent.webp",
      "grigio_amalfi_product_1_transparent.webp",
      "grigio_amalfi_product_2_transparent.webp",
    ],
  },
  {
    name: "Verde Toscana",
    id: "verde_toscana",
    price: 899,
    colors: {
      primary: "hsl(96, 42%, 50%)",
      secondary: "hsl(30, 80%, 55%)",
    },
    marketingImages: [
      "verde_toscana_marketing_0.jpeg",
      "verde_toscana_marketing_1.jpeg",
      "verde_toscana_marketing_2.jpeg",
      "verde_toscana_marketing_3.jpeg",
    ],
    productImages: [
      "verde_toscana_product_0_transparent.webp",
      "verde_toscana_product_1_transparent.webp",
      "verde_toscana_product_2_transparent.webp",
    ],
  },
];
