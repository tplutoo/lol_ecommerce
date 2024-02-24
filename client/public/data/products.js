export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/abyssal-mask.webp",
    name: "Abyssal Mask",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    description: "After using an Ability, your next Attack deals additional damage and restores Mana",
    stats: "+10 ability haste, +60 magic resistance, +300 health"
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/anathemas-chains.webp",
    name: "Anathema's Chains",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    description: "At maximum stacks, your Nemesis has reduced Tenacity while near you.Active -Vow Choose a Nemesis to start building a Vendetta.",
    stats: "+20 ability haste, +100 health"
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/archangels-staff .webp",
    name: "Archangel's Staff",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/ardent-censer.webp",
    name: "Ardent Censer",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/axiom-arc.webp",
    name: "Axiom Arc",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/banshees-veil.webp",
    name: "Banshee's Veil",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/black-cleaver.webp",
    name: "Black Cleaver",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,

  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/blade-of-the-ruined-king.webp",
    name: "Blade of the Ruined King ",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/bloodsong.webp",
    name: "Bloodsong",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/bloodthirster.webp",
    name: "Bloodthirster",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,

  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/celestial-opposition.webp",
    name: "Celestial Opposition",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/chempunk-chainsword.webp",
    name: "Chempunk Chainsword",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/cosmic-drive.webp",
    name: "Cosmic Drive",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/dawncore.webp",
    name: "Dawncore",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
  },
];