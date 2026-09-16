/* =========================================================
   TANVI TUMBLER — SCRIPT
   ========================================================= */

/* ---------------------------------------------------------
   1) WHATSAPP NUMBER
   Change ONLY this line to update the number used everywhere.
   Format: country code + number, no spaces, no "+".
   Example: "919876543210"
--------------------------------------------------------- */
const WHATSAPP_NUMBER = "919549897552";

/* ---------------------------------------------------------
   2) PRODUCT DATA
   - Add / edit / remove products here.
   - Each product needs: id, name, price, image, description, category
   - category must be one of:
     "new-arrivals" | "best-sellers" | "travel" | "coffee" | "premium"
   - To add product #131, add another object and use images/img131.jpg
--------------------------------------------------------- */
const products = [
  {
    "id": 1,
    "name": "Sage Tumbler",
    "price": 599,
    "image": "img1.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "best-sellers"
  },
  {
    "id": 2,
    "name": "Ocean Travel Tumbler",
    "price": 699,
    "image": "img2.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "travel"
  },
  {
    "id": 3,
    "name": "Blush Coffee Tumbler",
    "price": 799,
    "image": "img3.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "coffee"
  },
  {
    "id": 4,
    "name": "Charcoal Sipper Bottle",
    "price": 899,
    "image": "img4.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "travel"
  },
  {
    "id": 5,
    "name": "Ivory Premium Tumbler",
    "price": 999,
    "image": "img5.jpeg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "premium"
  },
  {
    "id": 6,
    "name": "Mint Sports Bottle",
    "price": 1099,
    "image": "img6.jpeg",
    "description": "Sweat-proof sports bottle with a secure spill-free lid.",
    "category": "travel"
  },
  {
    "id": 7,
    "name": "Coral Classic Tumbler",
    "price": 1199,
    "image": "img7.jpeg",
    "description": "Everyday classic tumbler, simple and reliable for daily sips.",
    "category": "best-sellers"
  },
  {
    "id": 8,
    "name": "Slate Iced Coffee Cup",
    "price": 1299,
    "image": "img8.jpeg",
    "description": "Wide-mouth cup made for iced coffee and cold brews.",
    "category": "coffee"
  },
  {
    "id": 9,
    "name": "Olive Insulated Flask",
    "price": 499,
    "image": "img9.jpeg",
    "description": "Vacuum-insulated flask that locks in temperature for longer.",
    "category": "premium"
  },
  {
    "id": 10,
    "name": "Amber Everyday Tumbler",
    "price": 599,
    "image": "img10.jpeg",
    "description": "An easy-carry everyday tumbler with a comfortable grip.",
    "category": "new-arrivals"
  },
  {
    "id": 11,
    "name": "Rose Gold Tumbler",
    "price": 699,
    "image": "img11.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "new-arrivals"
  },
  {
    "id": 12,
    "name": "Steel Travel Tumbler",
    "price": 799,
    "image": "img12.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "travel"
  },
  {
    "id": 13,
    "name": "Emerald Coffee Tumbler",
    "price": 899,
    "image": "img13.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "coffee"
  },
  {
    "id": 14,
    "name": "Sand Sipper Bottle",
    "price": 999,
    "image": "img14.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "travel"
  },
  {
    "id": 15,
    "name": "Lavender Premium Tumbler",
    "price": 1099,
    "image": "img15.jpeg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "premium"
  },
  {
    "id": 16,
    "name": "Teal Sports Bottle",
    "price": 1199,
    "image": "img16.jpeg",
    "description": "Sweat-proof sports bottle with a secure spill-free lid.",
    "category": "travel"
  },
  {
    "id": 17,
    "name": "Moss Classic Tumbler",
    "price": 1299,
    "image": "img17.jpeg",
    "description": "Everyday classic tumbler, simple and reliable for daily sips.",
    "category": "best-sellers"
  },
  {
    "id": 18,
    "name": "Clay Iced Coffee Cup",
    "price": 499,
    "image": "img18.jpeg",
    "description": "Wide-mouth cup made for iced coffee and cold brews.",
    "category": "coffee"
  },
  {
    "id": 19,
    "name": "Pearl Insulated Flask",
    "price": 599,
    "image": "img19.jpeg",
    "description": "Vacuum-insulated flask that locks in temperature for longer.",
    "category": "premium"
  },
  {
    "id": 20,
    "name": "Graphite Everyday Tumbler",
    "price": 699,
    "image": "img20.jpeg",
    "description": "An easy-carry everyday tumbler with a comfortable grip.",
    "category": "new-arrivals"
  },
  {
    "id": 21,
    "name": "Peach Tumbler",
    "price": 799,
    "image": "img21.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "best-sellers"
  },
  {
    "id": 22,
    "name": "Sky Travel Tumbler",
    "price": 899,
    "image": "img22.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "new-arrivals"
  },
  {
    "id": 23,
    "name": "Forest Coffee Tumbler",
    "price": 999,
    "image": "img23.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "coffee"
  },
  {
    "id": 24,
    "name": "Cream Sipper Bottle",
    "price": 1099,
    "image": "img24.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "travel"
  },
  {
    "id": 25,
    "name": "Terracotta Premium Tumbler",
    "price": 1199,
    "image": "img25.jpeg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "premium"
  },
  {
    "id": 26,
    "name": "Frost Sports Bottle",
    "price": 1299,
    "image": "img26.jpeg",
    "description": "Sweat-proof sports bottle with a secure spill-free lid.",
    "category": "travel"
  },
  {
    "id": 27,
    "name": "Sunset Classic Tumbler",
    "price": 499,
    "image": "img27.jpeg",
    "description": "Everyday classic tumbler, simple and reliable for daily sips.",
    "category": "best-sellers"
  },
  {
    "id": 28,
    "name": "Stone Iced Coffee Cup",
    "price": 599,
    "image": "img28.jpeg",
    "description": "Wide-mouth cup made for iced coffee and cold brews.",
    "category": "coffee"
  },
  {
    "id": 29,
    "name": "Lilac Insulated Flask",
    "price": 699,
    "image": "img29.jpeg",
    "description": "Vacuum-insulated flask that locks in temperature for longer.",
    "category": "premium"
  },
  {
    "id": 30,
    "name": "Copper Everyday Tumbler",
    "price": 799,
    "image": "img30.jpeg",
    "description": "An easy-carry everyday tumbler with a comfortable grip.",
    "category": "new-arrivals"
  },
  {
    "id": 31,
    "name": "Sage Tumbler",
    "price": 899,
    "image": "img31.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "best-sellers"
  },
  {
    "id": 32,
    "name": "Ocean Travel Tumbler",
    "price": 999,
    "image": "img32.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "travel"
  },
  {
    "id": 33,
    "name": "Blush Coffee Tumbler",
    "price": 1099,
    "image": "img33.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "new-arrivals"
  },
  {
    "id": 34,
    "name": "Charcoal Sipper Bottle",
    "price": 1199,
    "image": "img34.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "travel"
  },
  {
    "id": 35,
    "name": "Ivory Premium Tumbler",
    "price": 1299,
    "image": "img35.jpeg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "premium"
  },
  {
    "id": 36,
    "name": "Mint Sports Bottle",
    "price": 499,
    "image": "img36.jpeg",
    "description": "Sweat-proof sports bottle with a secure spill-free lid.",
    "category": "travel"
  },
  {
    "id": 37,
    "name": "Coral Classic Tumbler",
    "price": 599,
    "image": "img37.jpeg",
    "description": "Everyday classic tumbler, simple and reliable for daily sips.",
    "category": "best-sellers"
  },
  {
    "id": 38,
    "name": "Slate Iced Coffee Cup",
    "price": 699,
    "image": "img38.jpeg",
    "description": "Wide-mouth cup made for iced coffee and cold brews.",
    "category": "coffee"
  },
  {
    "id": 39,
    "name": "Olive Insulated Flask",
    "price": 799,
    "image": "img39.jpeg",
    "description": "Vacuum-insulated flask that locks in temperature for longer.",
    "category": "premium"
  },
  {
    "id": 40,
    "name": "Amber Everyday Tumbler",
    "price": 899,
    "image": "img40.jpeg",
    "description": "An easy-carry everyday tumbler with a comfortable grip.",
    "category": "new-arrivals"
  },
  {
    "id": 41,
    "name": "Rose Gold Tumbler",
    "price": 999,
    "image": "img41.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "best-sellers"
  },
  {
    "id": 42,
    "name": "Steel Travel Tumbler",
    "price": 1099,
    "image": "img42.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "travel"
  },
  {
    "id": 43,
    "name": "Emerald Coffee Tumbler",
    "price": 1199,
    "image": "img43.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "coffee"
  },
  {
    "id": 44,
    "name": "Sand Sipper Bottle",
    "price": 1299,
    "image": "img44.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "new-arrivals"
  },
  {
    "id": 45,
    "name": "Lavender Premium Tumbler",
    "price": 499,
    "image": "img45.jpeg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "premium"
  },
  {
    "id": 46,
    "name": "Teal Sports Bottle",
    "price": 599,
    "image": "img46.jpeg",
    "description": "Sweat-proof sports bottle with a secure spill-free lid.",
    "category": "travel"
  },
  {
    "id": 47,
    "name": "Moss Classic Tumbler",
    "price": 699,
    "image": "img47.jpeg",
    "description": "Everyday classic tumbler, simple and reliable for daily sips.",
    "category": "best-sellers"
  },
  {
    "id": 48,
    "name": "Clay Iced Coffee Cup",
    "price": 799,
    "image": "img48.jpeg",
    "description": "Wide-mouth cup made for iced coffee and cold brews.",
    "category": "coffee"
  },
  {
    "id": 49,
    "name": "Pearl Insulated Flask",
    "price": 899,
    "image": "img49.jpeg",
    "description": "Vacuum-insulated flask that locks in temperature for longer.",
    "category": "premium"
  },
  {
    "id": 50,
    "name": "Graphite Everyday Tumbler",
    "price": 999,
    "image": "img50.jpeg",
    "description": "An easy-carry everyday tumbler with a comfortable grip.",
    "category": "new-arrivals"
  },
  {
    "id": 51,
    "name": "Peach Tumbler",
    "price": 1099,
    "image": "img51.jpeg",
    "description": "Double-wall insulated tumbler with a clean minimal design.",
    "category": "best-sellers"
  },
  {
    "id": 52,
    "name": "Sky Travel Tumbler",
    "price": 1199,
    "image": "img52.jpeg",
    "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
    "category": "travel"
  },
  {
    "id": 53,
    "name": "Forest Coffee Tumbler",
    "price": 1299,
    "image": "img53.jpeg",
    "description": "Slim coffee tumbler that keeps your brew hot for hours.",
    "category": "coffee"
  },
  {
    "id": 54,
    "name": "Cream Sipper Bottle",
    "price": 499,
    "image": "img54.jpeg",
    "description": "Lightweight sipper bottle designed for all-day hydration.",
    "category": "travel"
  },
  {
    "id": 55,
    "name": "Terracotta Premium Tumbler",
    "price": 599,
    "image": "img55.jpg",
    "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
    "category": "new-arrivals"
  },
  // {
  //   "id": 56,
  //   "name": "Frost Sports Bottle",
  //   "price": 699,
  //   "image": "img56.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 57,
  //   "name": "Sunset Classic Tumbler",
  //   "price": 799,
  //   "image": "img57.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 58,
  //   "name": "Stone Iced Coffee Cup",
  //   "price": 899,
  //   "image": "img58.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 59,
  //   "name": "Lilac Insulated Flask",
  //   "price": 999,
  //   "image": "img59.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 60,
  //   "name": "Copper Everyday Tumbler",
  //   "price": 1099,
  //   "image": "img60.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 61,
  //   "name": "Sage Tumbler",
  //   "price": 1199,
  //   "image": "img61.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 62,
  //   "name": "Ocean Travel Tumbler",
  //   "price": 1299,
  //   "image": "img62.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 63,
  //   "name": "Blush Coffee Tumbler",
  //   "price": 499,
  //   "image": "img63.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 64,
  //   "name": "Charcoal Sipper Bottle",
  //   "price": 599,
  //   "image": "img64.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 65,
  //   "name": "Ivory Premium Tumbler",
  //   "price": 699,
  //   "image": "img65.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 66,
  //   "name": "Mint Sports Bottle",
  //   "price": 799,
  //   "image": "img66.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 67,
  //   "name": "Coral Classic Tumbler",
  //   "price": 899,
  //   "image": "img67.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 68,
  //   "name": "Slate Iced Coffee Cup",
  //   "price": 999,
  //   "image": "img68.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 69,
  //   "name": "Olive Insulated Flask",
  //   "price": 1099,
  //   "image": "img69.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 70,
  //   "name": "Amber Everyday Tumbler",
  //   "price": 1199,
  //   "image": "img70.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 71,
  //   "name": "Rose Gold Tumbler",
  //   "price": 1299,
  //   "image": "img71.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 72,
  //   "name": "Steel Travel Tumbler",
  //   "price": 499,
  //   "image": "img72.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 73,
  //   "name": "Emerald Coffee Tumbler",
  //   "price": 599,
  //   "image": "img73.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 74,
  //   "name": "Sand Sipper Bottle",
  //   "price": 699,
  //   "image": "img74.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 75,
  //   "name": "Lavender Premium Tumbler",
  //   "price": 799,
  //   "image": "img75.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 76,
  //   "name": "Teal Sports Bottle",
  //   "price": 899,
  //   "image": "img76.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 77,
  //   "name": "Moss Classic Tumbler",
  //   "price": 999,
  //   "image": "img77.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 78,
  //   "name": "Clay Iced Coffee Cup",
  //   "price": 1099,
  //   "image": "img78.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 79,
  //   "name": "Pearl Insulated Flask",
  //   "price": 1199,
  //   "image": "img79.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 80,
  //   "name": "Graphite Everyday Tumbler",
  //   "price": 1299,
  //   "image": "img80.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 81,
  //   "name": "Peach Tumbler",
  //   "price": 499,
  //   "image": "img81.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 82,
  //   "name": "Sky Travel Tumbler",
  //   "price": 599,
  //   "image": "img82.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 83,
  //   "name": "Forest Coffee Tumbler",
  //   "price": 699,
  //   "image": "img83.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 84,
  //   "name": "Cream Sipper Bottle",
  //   "price": 799,
  //   "image": "img84.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 85,
  //   "name": "Terracotta Premium Tumbler",
  //   "price": 899,
  //   "image": "img85.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 86,
  //   "name": "Frost Sports Bottle",
  //   "price": 999,
  //   "image": "img86.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 87,
  //   "name": "Sunset Classic Tumbler",
  //   "price": 1099,
  //   "image": "img87.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 88,
  //   "name": "Stone Iced Coffee Cup",
  //   "price": 1199,
  //   "image": "img88.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 89,
  //   "name": "Lilac Insulated Flask",
  //   "price": 1299,
  //   "image": "img89.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 90,
  //   "name": "Copper Everyday Tumbler",
  //   "price": 499,
  //   "image": "img90.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 91,
  //   "name": "Sage Tumbler",
  //   "price": 599,
  //   "image": "img91.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 92,
  //   "name": "Ocean Travel Tumbler",
  //   "price": 699,
  //   "image": "img92.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 93,
  //   "name": "Blush Coffee Tumbler",
  //   "price": 799,
  //   "image": "img93.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 94,
  //   "name": "Charcoal Sipper Bottle",
  //   "price": 899,
  //   "image": "img94.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 95,
  //   "name": "Ivory Premium Tumbler",
  //   "price": 999,
  //   "image": "img95.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 96,
  //   "name": "Mint Sports Bottle",
  //   "price": 1099,
  //   "image": "img96.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 97,
  //   "name": "Coral Classic Tumbler",
  //   "price": 1199,
  //   "image": "img97.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 98,
  //   "name": "Slate Iced Coffee Cup",
  //   "price": 1299,
  //   "image": "img98.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 99,
  //   "name": "Olive Insulated Flask",
  //   "price": 499,
  //   "image": "img99.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 100,
  //   "name": "Amber Everyday Tumbler",
  //   "price": 599,
  //   "image": "img100.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 101,
  //   "name": "Rose Gold Tumbler",
  //   "price": 699,
  //   "image": "img101.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 102,
  //   "name": "Steel Travel Tumbler",
  //   "price": 799,
  //   "image": "img102.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 103,
  //   "name": "Emerald Coffee Tumbler",
  //   "price": 899,
  //   "image": "img103.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 104,
  //   "name": "Sand Sipper Bottle",
  //   "price": 999,
  //   "image": "img104.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 105,
  //   "name": "Lavender Premium Tumbler",
  //   "price": 1099,
  //   "image": "img105.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 106,
  //   "name": "Teal Sports Bottle",
  //   "price": 1199,
  //   "image": "img106.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 107,
  //   "name": "Moss Classic Tumbler",
  //   "price": 1299,
  //   "image": "img107.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 108,
  //   "name": "Clay Iced Coffee Cup",
  //   "price": 499,
  //   "image": "img108.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 109,
  //   "name": "Pearl Insulated Flask",
  //   "price": 599,
  //   "image": "img109.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 110,
  //   "name": "Graphite Everyday Tumbler",
  //   "price": 699,
  //   "image": "img110.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 111,
  //   "name": "Peach Tumbler",
  //   "price": 799,
  //   "image": "img111.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 112,
  //   "name": "Sky Travel Tumbler",
  //   "price": 899,
  //   "image": "img112.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 113,
  //   "name": "Forest Coffee Tumbler",
  //   "price": 999,
  //   "image": "img113.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 114,
  //   "name": "Cream Sipper Bottle",
  //   "price": 1099,
  //   "image": "img114.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 115,
  //   "name": "Terracotta Premium Tumbler",
  //   "price": 1199,
  //   "image": "img115.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 116,
  //   "name": "Frost Sports Bottle",
  //   "price": 1299,
  //   "image": "img116.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 117,
  //   "name": "Sunset Classic Tumbler",
  //   "price": 499,
  //   "image": "img117.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 118,
  //   "name": "Stone Iced Coffee Cup",
  //   "price": 599,
  //   "image": "img118.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 119,
  //   "name": "Lilac Insulated Flask",
  //   "price": 699,
  //   "image": "img119.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 120,
  //   "name": "Copper Everyday Tumbler",
  //   "price": 799,
  //   "image": "img120.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 121,
  //   "name": "Sage Tumbler",
  //   "price": 899,
  //   "image": "img121.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 122,
  //   "name": "Ocean Travel Tumbler",
  //   "price": 999,
  //   "image": "img122.jpg",
  //   "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
  //   "category": "travel"
  // },
  // {
  //   "id": 123,
  //   "name": "Blush Coffee Tumbler",
  //   "price": 1099,
  //   "image": "img123.jpg",
  //   "description": "Slim coffee tumbler that keeps your brew hot for hours.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 124,
  //   "name": "Charcoal Sipper Bottle",
  //   "price": 1199,
  //   "image": "img124.jpg",
  //   "description": "Lightweight sipper bottle designed for all-day hydration.",
  //   "category": "travel"
  // },
  // {
  //   "id": 125,
  //   "name": "Ivory Premium Tumbler",
  //   "price": 1299,
  //   "image": "img125.jpg",
  //   "description": "Premium stainless steel tumbler with a soft-touch matte finish.",
  //   "category": "premium"
  // },
  // {
  //   "id": 126,
  //   "name": "Mint Sports Bottle",
  //   "price": 499,
  //   "image": "img126.jpg",
  //   "description": "Sweat-proof sports bottle with a secure spill-free lid.",
  //   "category": "travel"
  // },
  // {
  //   "id": 127,
  //   "name": "Coral Classic Tumbler",
  //   "price": 599,
  //   "image": "img127.jpg",
  //   "description": "Everyday classic tumbler, simple and reliable for daily sips.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 128,
  //   "name": "Slate Iced Coffee Cup",
  //   "price": 699,
  //   "image": "img128.jpg",
  //   "description": "Wide-mouth cup made for iced coffee and cold brews.",
  //   "category": "coffee"
  // },
  // {
  //   "id": 129,
  //   "name": "Olive Insulated Flask",
  //   "price": 799,
  //   "image": "img129.jpg",
  //   "description": "Vacuum-insulated flask that locks in temperature for longer.",
  //   "category": "premium"
  // },
  // {
  //   "id": 130,
  //   "name": "Amber Everyday Tumbler",
  //   "price": 899,
  //   "image": "img130.jpg",
  //   "description": "An easy-carry everyday tumbler with a comfortable grip.",
  //   "category": "new-arrivals"
  // },
  // {
  //   "id": 131,
  //   "name": "Rose Gold Tumbler",
  //   "price": 999,
  //   "image": "img131.jpg",
  //   "description": "Double-wall insulated tumbler with a clean minimal design.",
  //   "category": "best-sellers"
  // },
  // {
  //   "id": 132,
//     "name": "Steel Travel Tumbler",
//     "price": 1099,
//     "image": "img132.jpg",
//     "description": "Leak-resistant travel tumbler built for busy mornings on the move.",
//     "category": "new-arrivals"
//   }
// 
];

/* ---------------------------------------------------------
   2b) RANDOM PRICING (ABOVE ₹1500) + DISCOUNT PRICE
   - Every product gets a random selling price above ₹1500.
   - originalPrice is set higher, so we can show a
     strike-through price and a discount % badge.
--------------------------------------------------------- */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

products.forEach((product) => {
  // Random selling price between ₹1500 and ₹4500 (rounded to nearest 10)
  const sellingPrice = Math.round(randomInt(1500, 4500) / 10) * 10;

  // Random discount percentage between 10% and 40%
  const discountPercent = randomInt(10, 40);

  // Original (MRP) price derived from the discount
  const originalPrice =
    Math.round((sellingPrice / (1 - discountPercent / 100)) / 10) * 10;

  product.price = sellingPrice;
  product.originalPrice = originalPrice;
  product.discountPercent = discountPercent;
});

/* ---------------------------------------------------------
   3) CATEGORY LABELS (for building WhatsApp message / filters)
--------------------------------------------------------- */
const CATEGORY_LABELS = {
  "all": "All",
  "new-arrivals": "New Arrivals",
  "best-sellers": "Best Sellers",
  "travel": "Travel",
  "coffee": "Coffee",
  "premium": "Premium"
};

/* ---------------------------------------------------------
   STATE
--------------------------------------------------------- */
const PAGE_SIZE = 24; // how many products load at a time
let currentFilter = "all";
let currentSearch = "";
let visibleCount = PAGE_SIZE;

/* ---------------------------------------------------------
   DOM REFERENCES
--------------------------------------------------------- */
const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const noResults = document.getElementById("noResults");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.getElementById("searchInput");
const filtersWrap = document.getElementById("filters");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Product modal
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalProductImage = document.getElementById("modalProductImage");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductOriginalPrice = document.getElementById(
  "modalProductOriginalPrice"
);
const modalProductDiscount = document.getElementById("modalProductDiscount");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalOrderBtn = document.getElementById("modalOrderBtn");

// Offer slider
const offerTrack = document.getElementById("offerTrack");
const offerDots = document.querySelectorAll(".offer-dot");

/* ---------------------------------------------------------
   WHATSAPP LINK BUILDING
--------------------------------------------------------- */
function buildWhatsappLink(product) {
  const message =
    `Hello Tanvi Tumbler!\n\n` +
    `I want to order this product:\n\n` +
    `Product: ${product.name}\n` +
    `Price: \u20B9${product.price}\n\n` +
    `Please share the availability and order details.`;

  return `https://wa.me/${9549897552}?text=${encodeURIComponent(message)}`;
}

function buildGeneralWhatsappLink() {
  const message =
    `Hello Tanvi Tumbler!\n\n` +
    `I'd like some help choosing the perfect tumbler.`;
  return `https://wa.me/${9549897552}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   FILTERING
--------------------------------------------------------- */
function getFilteredProducts() {
  const search = currentSearch.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      currentFilter === "all" || product.category === currentFilter;
    const matchesSearch =
      search === "" || product.name.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });
}

/* ---------------------------------------------------------
   RENDERING
--------------------------------------------------------- */
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image-wrap">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/400x400/E7F2EA/315C45?text=Tanvi+Tumbler';"
      >
    </div>
    <div class="product-body">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price-row">
        <span class="product-price">\u20B9${product.price}</span>
        <span class="product-original-price">\u20B9${product.originalPrice}</span>
        <span class="product-discount-badge">${product.discountPercent}% OFF</span>
      </div>
      <p class="product-desc">${product.description}</p>
      <button class="product-order-btn" type="button">
        Order on WhatsApp
      </button>
    </div>
  `;

  // Clicking anywhere on the card opens the product popup
  card.addEventListener("click", () => {
    openProductModal(product);
  });

  const orderBtn = card.querySelector(".product-order-btn");
  orderBtn.addEventListener("click", (e) => {
    // Don't let this click also trigger the card's modal open
    e.stopPropagation();
    window.open(buildWhatsappLink(product), "_blank", "noopener");
  });

  return card;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const visibleProducts = filtered.slice(0, visibleCount);

  productGrid.innerHTML = "";

  visibleProducts.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  // Empty state
  noResults.hidden = filtered.length !== 0;

  // Product count text
  productCount.textContent = `Showing ${visibleProducts.length} of ${filtered.length} products`;

  // Load more visibility
  if (visibleCount >= filtered.length) {
    loadMoreBtn.classList.add("hidden");
  } else {
    loadMoreBtn.classList.remove("hidden");
  }
}

/* ---------------------------------------------------------
   EVENTS: SEARCH
--------------------------------------------------------- */
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  visibleCount = PAGE_SIZE;
  renderProducts();
});

/* ---------------------------------------------------------
   EVENTS: CATEGORY FILTERS
--------------------------------------------------------- */
filtersWrap.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  currentFilter = btn.dataset.filter;
  visibleCount = PAGE_SIZE;
  renderProducts();
});

function applyFilterFromNav(filterKey) {
  currentFilter = filterKey;
  visibleCount = PAGE_SIZE;

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.filter === filterKey);
  });

  renderProducts();
}

// "New Arrivals" links in navbar & footer also set the filter
document.querySelectorAll('[data-filter="new-arrivals"]').forEach((link) => {
  link.addEventListener("click", () => {
    applyFilterFromNav("new-arrivals");
  });
});

/* ---------------------------------------------------------
   EVENTS: LOAD MORE
--------------------------------------------------------- */
loadMoreBtn.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderProducts();
});

/* ---------------------------------------------------------
   NAVBAR: MOBILE HAMBURGER MENU
--------------------------------------------------------- */
hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* ---------------------------------------------------------
   NAVBAR: SHADOW ON SCROLL
--------------------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY > 8) {
    navbar.style.boxShadow = "0 4px 14px rgba(49, 92, 69, 0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* ---------------------------------------------------------
   WHATSAPP LINKS: NAVBAR + CTA SECTION
--------------------------------------------------------- */
document.getElementById("navWhatsapp").href = buildGeneralWhatsappLink();
document.getElementById("ctaWhatsapp").href = buildGeneralWhatsappLink();

/* ---------------------------------------------------------
   PRODUCT DETAIL POPUP
--------------------------------------------------------- */
function openProductModal(product) {
  modalProductImage.src = product.image;
  modalProductImage.alt = product.name;

  modalProductCategory.textContent =
    CATEGORY_LABELS[product.category] || product.category;

  modalProductName.textContent = product.name;
  modalProductPrice.textContent = `\u20B9${product.price}`;
  modalProductOriginalPrice.textContent = `\u20B9${product.originalPrice}`;
  modalProductDiscount.textContent = `${product.discountPercent}% OFF`;
  modalProductDesc.textContent = product.description;

  modalOrderBtn.onclick = () => {
    window.open(buildWhatsappLink(product), "_blank", "noopener");
  };

  productModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeProductModal);

// Close when clicking outside the modal card
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    closeProductModal();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !productModal.hidden) {
    closeProductModal();
  }
});

/* ---------------------------------------------------------
   OFFER BANNER SLIDER
--------------------------------------------------------- */
let offerSlideIndex = 0;
const offerSlideCount = offerDots.length;
let offerAutoTimer = null;

function goToOfferSlide(index) {
  offerSlideIndex = (index + offerSlideCount) % offerSlideCount;

  offerTrack.style.transform = `translateX(-${offerSlideIndex * (100 / offerSlideCount)}%)`;

  offerDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === offerSlideIndex);
  });
}

function startOfferAutoplay() {
  stopOfferAutoplay();
  offerAutoTimer = setInterval(() => {
    goToOfferSlide(offerSlideIndex + 1);
  }, 4000);
}

function stopOfferAutoplay() {
  if (offerAutoTimer) {
    clearInterval(offerAutoTimer);
    offerAutoTimer = null;
  }
}

offerDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToOfferSlide(Number(dot.dataset.slide));
    startOfferAutoplay();
  });
});

goToOfferSlide(0);
startOfferAutoplay();

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
renderProducts();
