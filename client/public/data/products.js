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
    priceCents: 2400,
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
    priceCents: 2500,
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
    priceCents: 2900,
    description: "Increases Ability Power based on maximum Mana. Gain Ability Power equal to your bonus Mana.",
    stats: "+80 Ability Power +600 Mana +20 Ability Haste",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/ardent-censer.webp",
    name: "Ardent Censer",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 2300,
    description: "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage",
    stats: "+50 Ability Power +8% Heal and Shield Power +125% Base Mana Regen +8% Move Speed"
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
    description: "Whenever a Champion dies within 3 seconds of you having damaged them, refund part of your Ultimate Ability's total cooldown.",
    stats: "+55 Attack Damage +18 Lethality +25 Ability Haste",
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/banshees-veil.webp",
    name: "Banshee's Veil",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3100,
    description: "Periodically blocks enemy abilities",
    stats: "+120 Ability Power +50 Magic Resist",
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
    description: "Dealing physical damage to enemy champions reduces their Armor",
    stats: "+55 Attack Damage +400 Health +20 Ability Haste",
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/blade-of-the-ruined-king.webp",
    name: "Blade of the Ruined King ",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3200,
    description: "Deals damage based on target's Health, can steal Move Speed",
    stats: "+40 Attack Damage +25% Attack Speed +8% Life Steal",
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/bloodsong.webp",
    name: "Bloodsong",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 400,
    description: "After using an ability, your next basic attack within 10 seconds deals 150% base AD bonus physical damage on-hit and increases damage taken by the inflicted enemy champion for 6s.",
    stats: "+5 Gold Per 10 Seconds +75% Base Health Regen +75% Base Mana Regen +200 Health",
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
    description: "Grants Attack Damage, Life Steal and Life Steal now overheals",
    stats: "+55 Attack Damage +20% Critical Strike Chance +18% Life Steal",
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
    description: "Become Blessed to reduce incoming champion damage, lingering for 2 seconds after taking damage from a champion.",
    stats: "+5 Gold Per 10 Seconds +75% Base Health Regen +75% Base Mana Regen +200 Health",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/chempunk-chainsword.webp",
    name: "Chempunk Chainsword",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 2800,
    description: "Dealing physical damage applies 40% Grievous Wounds to enemy champions for 3 seconds.",
    stats: "+55 Attack Damage +250 Health +15 Ability Haste",
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/cosmic-drive.webp",
    name: "Cosmic Drive",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 3000,
    description: "Massive amounts of Cooldown Reduction",
    stats: "+80 Ability Power +250 Health +25 Ability Haste +5% Move Speed",
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/dawncore.webp",
    name: "Dawncore",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 2700,
    description: "Gain 3% Heal and Shield Power and 5 Ability Power per 100% Base Mana Regen.",
    stats: "+40 Ability Power +20 Ability Haste +150% Base Mana Regen",
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/dead-mans-plate.webp",
    name: "Dead Man's Plate",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 2900,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/deaths-dance.webp",
    name: "Death's Dance",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/dream-maker.webp",
    name: "Dream Maker",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/echoes-of-helia.webp",
    name: "Echoes of Helia",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/eclipse.webp",
    name: "Eclipse",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 2800,
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/edge-of-night.webp",
    name: "Edge of Night",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/essence-reaver.webp",
    name: "Essence Reaver",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/experimental-hexplate.webp",
    name: "Experimental Hexplate",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/force-of-nature.webp",
    name: "Force of Nature",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 2800,
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/frozen-heart.webp",
    name: "Frozen Heart",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/gaurdian-angel.webp",
    name: "Guardian Angel",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 3200,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/guinsoos-rageblade.webp",
    name: "Guinsoo's Rageblade",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/heartsteel.webp",
    name: "Heartsteel",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/hextech-rocketbelt.webp",
    name: "Hextech Rocketbelt",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/hollow-radiance.webp",
    name: "Hollow Radiance",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/horizon-focus.webp",
    name: "Horizon Focus",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/hubris.webp",
    name: "Hubris",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/hullbreaker.webp",
    name: "Hullbreaker",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/iceborn-guantlet.webp",
    name: "Iceborn Guantlet",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/immortal-shieldbow.webp",
    name: "Immortal Shieldbow",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 3000,
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/imperial-mandate.webp",
    name: "Imperial Mandate",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/infinity-edge.webp",
    name: "Infinity Edge",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3300,
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/jaksho.webp",
    name: "Jak Sho",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/kaenic-rookern.webp",
    name: "Kaenic Rookern",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/knights-vow.webp",
    name: "Knight's vow",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 2200,
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/kraken-slayer.webp",
    name: "Kraken Slayer",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3000,
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/liandrys-torment.webp",
    name: "Liandry's Torment",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 3000,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/lich-bane.webp",
    name: "Lich Bane",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
  }
];