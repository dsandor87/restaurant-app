const SHOP_DATA = [
  {
    id: 1,
    title: "starters & appetisers",
    items: [
      {
        id: 1,
        name: "Hummus With Spiced Summer Squash and Lamb",
        imageUrl: "https://i.ibb.co/82QqSyh/Print-Picky-Eaters-Hummus.webp",
        price: 15,
      },
      {
        id: 2,
        name: "Pancetta- and Sesame-Coated Turnips",
        imageUrl: "https://i.ibb.co/6PHDW5Y/1.webp",
        price: 10,
      },
      {
        id: 3,
        name: "Green Hummus With Sizzled Dolmades",
        imageUrl: "https://i.ibb.co/Gp6GSCX/0519-green-hummus-lede.webp",
        price: 16,
      },
      {
        id: 4,
        name: "Crispy Olives With Calabrian Chile Sauce",
        imageUrl: "https://i.ibb.co/xmjfCzd/Crispy-olives-chile-sauce.webp",
        price: 12,
      },
      {
        id: 5,
        name: "Zucchini, Potato, and Fontina Pizzettas",
        imageUrl:
          "https://i.ibb.co/cN0bqSB/zucchini-potato-and-fontina-pizzettas.webp",
        price: 13,
      },
      {
        id: 6,
        name: "Aloo Tikki With Hari Chutney",
        imageUrl: "https://i.ibb.co/4TQdTFq/Basically-Aloo-Tikki.webp",
        price: 14,
      },
      {
        id: 7,
        name: "Tostones With Creamy Green Sauce",
        imageUrl: "https://i.ibb.co/2M1JJr0/Basically-Tostones-01.webp",
        price: 15,
      },
      {
        id: 8,
        name: "Endive Cups with Blue Cheese, Celery, and Croutons",
        imageUrl: "https://i.ibb.co/vXPSgB2/endive-cups.webp",
        price: 13,
      },
    ],
  },
  {
    id: 2,
    title: "soups",
    items: [
      {
        id: 9,
        name: "Udon in Buttery Tomato and Soy Broth",
        imageUrl:
          "https://i.ibb.co/Rbm0g1B/Spices-Udon-in-Buttery-Tomato-and-Soy-Broth.webp",
        price: 15,
      },
      {
        id: 10,
        name: "Rustic Leek and Potato Soup",
        imageUrl: "https://i.ibb.co/qCkLhnv/Basically-Leek-Potato-Soup.webp",
        price: 18,
      },
      {
        id: 11,
        name: "Bloody Mary Salmorejo",
        imageUrl: "https://i.ibb.co/Y3ZvQrb/Bloody-Mary-Salmorejo.webp",
        price: 15,
      },
      {
        id: 12,
        name: "Creamy Cauliflower Soup With Cheesy Mustard Croutons",
        imageUrl:
          "https://i.ibb.co/nz6GvwS/20220118-Cauliflower-Soup-LEDE.webp",
        price: 25,
      },
      {
        id: 13,
        name: "Five-Spice Short Rib and Daikon Soup",
        imageUrl: "https://i.ibb.co/V9KTSyg/20220118-Beef-and-Radish-LEDE.webp",
        price: 18,
      },
      {
        id: 14,
        name: "Spiced Coconut Carrot Soup",
        imageUrl: "https://i.ibb.co/mvzCqd8/20171019-WEB16130-2.webp",
        price: 14,
      },
      {
        id: 15,
        name: "Good Luck Beef and Korean Rice Cake Soup (Tteokguk)",
        imageUrl:
          "https://i.ibb.co/vYRv3JH/good-luck-beef-and-korean-rice-cake-soup.webp",
        price: 18,
      },
      {
        id: 16,
        name: "Spring Minestrone Verde with Pistachio Pesto",
        imageUrl:
          "https://i.ibb.co/mRQVjxy/spring-minestrone-verde-with-pistachio-pesto.webp",
        price: 14,
      },
      {
        id: 17,
        name: "Vegan Umami Broth",
        imageUrl: "https://i.ibb.co/xqS7bXr/Vegan-Broth.webp",
        price: 16,
      },
    ],
  },

  {
    id: 3,
    title: "Main",
    items: [
      {
        id: 18,
        name: "Hoisin-and-Balsamic-Glazed Lamb Chops",
        imageUrl:
          "https://i.ibb.co/c87PVZq/Go-Live-Hoisin-Balsamic-Lamb-Chops-new.webp",
        price: 32,
      },
      {
        id: 19,
        name: "Kalbi-Style Steak and Mushroom Lettuce Wraps",
        imageUrl:
          "https://i.ibb.co/YP6HnXZ/0623-diana-yen-steak-mushroom-lede.webp",
        price: 35,
      },
      {
        id: 20,
        name: "Pork Shoulder with Pineapple and Sesame Broccoli",
        imageUrl:
          "https://i.ibb.co/h9S4JjF/pork-shoulder-with-pineapple-and-sesame-broccoli.webp",
        price: 30,
      },
      {
        id: 21,
        name: "Saucy Chicken Puttanesca",
        imageUrl: "https://i.ibb.co/k5MjQHF/HLY-Chicken-Puttanesca-16x9.webp",
        price: 34,
      },
      {
        id: 22,
        name: "Fried Fish With Piri-Piri Sauce",
        imageUrl:
          "https://i.ibb.co/PYv8VT6/20211022-0222-Fam-Meal-AOTT-Opener16633.webp",
        price: 34,
      },
    ],
  },
  {
    id: 4,
    title: "Salads",
    items: [
      {
        id: 23,
        name: "Summer Goddess Chicken Salad",
        imageUrl:
          "https://i.ibb.co/jHgSPYz/0622-Summer-Goddess-Chicken-Salad.webp",
        price: 17,
      },
      {
        id: 24,
        name: "Asian Pear–Shiso Salad With Quinoa",
        imageUrl:
          "https://i.ibb.co/Czkm89G/20211023-SHI-F21-PDP-TOP-25-Emma-Fishman-Real-Girl2188-horizontal.webp",
        price: 17,
      },
      {
        id: 25,
        name: "Sheet-Pan Chicken and Squash Salad",
        imageUrl:
          "https://i.ibb.co/QHFYkLC/20211022-0222-Fam-Meal-AOTT-Opener16544.webp",
        price: 23,
      },
      {
        id: 26,
        name: "Salad Ramen",
        imageUrl: "https://i.ibb.co/wrMnmn0/HLY-Salad-Ramen-Horizontal.webp",
        price: 23,
      },
    ],
  },
  {
    id: 5,
    title: "Desserts",
    items: [
      {
        id: 30,
        name: "Double Banana Cake",
        imageUrl: "https://i.ibb.co/w6kQ4p2/0328-double-banana-cake-lede.webp",
        price: 12,
      },
      {
        id: 31,
        name: "Chocolate Chip Cookie Ice Cream Sandwiches",
        imageUrl: "https://i.ibb.co/vDfZwcb/0627-chipwich-recipe-lede.webp",
        price: 20,
      },
      {
        id: 32,
        name: "Strawberry-Halva Shortcakes",
        imageUrl:
          "https://i.ibb.co/dk8pp7J/0821-Strawberry-Halva-Shortcakes.webp",
        price: 15,
      },
      {
        id: 33,
        name: "Blueberry and Peach Graham Galette",
        imageUrl:
          "https://i.ibb.co/9gw2GTy/0821-Blueberry-and-Peach-Graham-Galette.webp",
        price: 15,
      },
    ],
  },
];

export default SHOP_DATA;
