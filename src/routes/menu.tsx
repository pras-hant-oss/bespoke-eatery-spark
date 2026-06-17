import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Tibetan and Nepali Kitchen" },
      { name: "description", content: "Full menu: breakfast, thali, momos, thukpa, beverages, and bar at Tibetan and Nepali Kitchen, Kathmandu." },
      { property: "og:title", content: "Menu — Tibetan and Nepali Kitchen" },
      { property: "og:description", content: "Explore our full menu of Himalayan classics, snacks, beverages, and bar." },
    ],
  }),
  component: MenuPage,
});

type PriceVariant = { label: string; price: string };
type Item = {
  name: string;
  description?: string;
  price?: string; // simple price (e.g. "NPR 250")
  variants?: PriceVariant[]; // multi-price (e.g. Steam/Fried/Soup)
};
type Section = { title: string; items: Item[] };
type Tab = { id: string; label: string; sections: Section[] };

const tabs: Tab[] = [
  {
    id: "breakfast",
    label: "Breakfast & Desserts",
    sections: [
      {
        title: "Simple Breakfast Set",
        items: [
          {
            name: "Simple Breakfast Set",
            description: "2 pcs toast with butter or jam, tea or coffee, eggs any style, hash brown potato",
            price: "NPR 450",
          },
        ],
      },
      {
        title: "Toast",
        items: [
          { name: "Plain Toast", description: "2 pcs", price: "NPR 65" },
          { name: "Butter Toast", description: "2 pcs", price: "NPR 100" },
          { name: "Jam Toast", description: "2 pcs", price: "NPR 100" },
          { name: "Butter Jam Toast", description: "2 pcs", price: "NPR 130" },
          { name: "Cheese Tomato Grilled Toast", price: "NPR 400" },
        ],
      },
      {
        title: "Fresh Eggs",
        items: [
          { name: "Boiled Eggs", price: "NPR 150" },
          { name: "Poached Eggs", price: "NPR 150" },
          { name: "Plain Omelet", price: "NPR 150" },
          { name: "Fried Eggs", price: "NPR 150" },
          { name: "Scrambled Eggs", price: "NPR 180" },
          { name: "Masala Omelet", description: "Onion, tomato, garlic, coriander, green chilli", price: "NPR 200" },
        ],
      },
      {
        title: "Pancakes with Honey",
        items: [
          { name: "Plain Pancake", price: "NPR 180" },
          { name: "Banana Pancake", price: "NPR 200" },
          { name: "Chocolate Pancake", price: "NPR 250" },
          { name: "Mixed Pancake", price: "NPR 300" },
        ],
      },
      {
        title: "Home Made",
        items: [
          { name: "Plain Curd", price: "NPR 150" },
          { name: "Banana Curd", price: "NPR 200" },
          { name: "Fresh Fruit Curd", price: "NPR 300" },
          { name: "Muesli Fruit Curd", price: "NPR 350" },
          { name: "Plain Porridge", price: "NPR 200" },
          { name: "Banana Porridge", price: "NPR 250" },
        ],
      },
    ],
  },
  {
    id: "main",
    label: "Main Food & Snacks",
    sections: [
      {
        title: "Nepali Thali Set",
        items: [
          { name: "Vegetarian Thali", description: "Plain rice, fried dal, veg curry, achar, papad, curd, salad", price: "NPR 380" },
          { name: "Mutton Thali", description: "Plain rice, fried dal, veg curry, mutton curry, achar, papad, salad", price: "NPR 550" },
          { name: "Chicken Thali", description: "Plain rice, fried dal, veg curry, chicken curry, achar, papad, salad", price: "NPR 500" },
          { name: "Pork Thali", description: "Plain rice, fried dal, veg curry, pork curry, achar, papad, salad", price: "NPR 550" },
          { name: "Khutti (Achar) Thali", description: "Plain rice, fried dal, veg curry, achar, papad, spicy curd", price: "NPR 550" },
          { name: "Fish Thali", description: "Plain rice, fried dal, veg curry, fish curry, achar, papad, salad", price: "NPR 550" },
          { name: "Veg Dhido", description: "Dhido, fried dal, veg curry, achar, papad, salad, curd", price: "NPR 400" },
          { name: "Non-Veg Dhido", description: "Dhido, fried dal, veg curry, choice of pork, chicken or mutton curry, achar, papad, salad", price: "NPR 600" },
        ],
      },
      {
        title: "Curry",
        items: [
          { name: "Veg Curry", price: "NPR 200" },
          { name: "Chicken Curry", price: "NPR 300" },
          { name: "Mutton Curry", price: "NPR 400" },
          { name: "Keema Curry", description: "Buff or chicken", price: "NPR 350" },
          { name: "Pork Curry", price: "NPR 400" },
          { name: "Khutti Spicy Curry", price: "NPR 400" },
        ],
      },
      {
        title: "Tibetan Dishes & Momo",
        items: [
          {
            name: "Veg Momo",
            variants: [
              { label: "Steam", price: "NPR 220" },
              { label: "Fried", price: "NPR 220" },
              { label: "Khotey", price: "NPR 250" },
              { label: "Chilli", price: "NPR 300" },
              { label: "Soup", price: "NPR 330" },
            ],
          },
          {
            name: "Buff Momo",
            variants: [
              { label: "Steam", price: "NPR 250" },
              { label: "Fried", price: "NPR 250" },
              { label: "Khotey", price: "NPR 280" },
              { label: "Chilli", price: "NPR 330" },
              { label: "Soup", price: "NPR 350" },
            ],
          },
          {
            name: "Chicken Momo",
            variants: [
              { label: "Steam", price: "NPR 300" },
              { label: "Fried", price: "NPR 300" },
              { label: "Khotey", price: "NPR 320" },
              { label: "Chilli", price: "NPR 350" },
              { label: "Soup", price: "NPR 370" },
            ],
          },
          { name: "Veg Phaley", description: "2 pcs", price: "NPR 200" },
          { name: "Shyaphaley (Buff)", description: "2 pcs", price: "NPR 230" },
          { name: "Shyaphaley (Chicken)", description: "2 pcs", price: "NPR 270" },
        ],
      },
      {
        title: "Thukpa & Thenthuk",
        items: [
          {
            name: "Thukpa",
            variants: [
              { label: "Veg", price: "NPR 220" },
              { label: "Pork", price: "NPR 250" },
              { label: "Buff", price: "NPR 250" },
              { label: "Egg", price: "NPR 250" },
              { label: "Chicken", price: "NPR 250" },
              { label: "Mixed", price: "NPR 300" },
            ],
          },
          {
            name: "Thenthuk",
            variants: [
              { label: "Veg", price: "NPR 250" },
              { label: "Pork", price: "NPR 300" },
              { label: "Buff", price: "NPR 300" },
              { label: "Egg", price: "NPR 300" },
              { label: "Chicken", price: "NPR 300" },
              { label: "Mixed", price: "NPR 350" },
            ],
          },
          { name: "Keema Noodles", price: "NPR 370" },
        ],
      },
      {
        title: "Fried Noodles (Chow Mein) & Fried Rice",
        items: [
          {
            name: "Chow Mein",
            variants: [
              { label: "Veg", price: "NPR 230" },
              { label: "Egg", price: "NPR 250" },
              { label: "Buff", price: "NPR 300" },
              { label: "Chicken", price: "NPR 300" },
              { label: "Pork", price: "NPR 320" },
              { label: "Mixed", price: "NPR 370" },
            ],
          },
          {
            name: "Fried Rice",
            variants: [
              { label: "Veg", price: "NPR 230" },
              { label: "Buff", price: "NPR 300" },
              { label: "Chicken", price: "NPR 300" },
              { label: "Egg", price: "NPR 300" },
              { label: "Pork", price: "NPR 320" },
              { label: "Mixed", price: "NPR 370" },
            ],
          },
        ],
      },
      {
        title: "Non-Veg Snacks",
        items: [
          { name: "Buff Chilli", price: "NPR 400" },
          { name: "Chicken Chilli with Bone", price: "NPR 370" },
          { name: "Chicken Chilli Boneless", price: "NPR 450" },
          { name: "Chicken Roast", price: "NPR 500" },
          { name: "Sukuti Sandheko", price: "NPR 400" },
          { name: "Chicken Sandheko", price: "NPR 400" },
          { name: "Sausage Chilli", price: "NPR 450" },
          { name: "Sausage Fry", description: "Per piece", price: "NPR 100" },
          { name: "Chicken Lollipop", price: "NPR 500" },
          { name: "Khutti Achar (Pork)", price: "NPR 400" },
          { name: "Pork Chilli", price: "NPR 450" },
          { name: "Fish Fry", price: "NPR 370" },
          { name: "Pangra Fry", price: "NPR 370" },
          { name: "Pork Fry", price: "NPR 400" },
          { name: "Pork Tawa", price: "NPR 550" },
        ],
      },
      {
        title: "Vegetable Snacks",
        items: [
          { name: "Finger Chips", price: "NPR 250" },
          { name: "Chips Chilli", price: "NPR 300" },
          { name: "Aloo Achar", price: "NPR 300" },
          { name: "Bhatmas Sandheko", price: "NPR 250" },
          { name: "Nepali Salad", price: "NPR 300" },
          { name: "Green Salad", price: "NPR 300" },
          { name: "Paneer Chilli", price: "NPR 400" },
          { name: "Boiled Veg", description: "Seasonal", price: "NPR 370" },
          { name: "Veg Pakoda", price: "NPR 350" },
          { name: "Paneer Pakoda", price: "NPR 350" },
          { name: "Dry Papad", price: "NPR 150" },
          { name: "Fry Papad", price: "NPR 150" },
          { name: "Masala Papad", price: "NPR 350" },
          { name: "Peanut Sandheko", price: "NPR 280" },
          { name: "Cheese Pakoda", price: "NPR 500" },
        ],
      },
      {
        title: "Spring Rolls with Chips",
        items: [
          { name: "Veg Spring Roll", price: "NPR 300" },
          { name: "Chicken Spring Roll", price: "NPR 350" },
          { name: "Egg Spring Roll", price: "NPR 350" },
          { name: "Mixed Spring Roll", price: "NPR 400" },
        ],
      },
      {
        title: "Fresh Sandwiches",
        items: [
          { name: "Veg Sandwich", price: "NPR 300" },
          { name: "Omelet Sandwich", price: "NPR 350" },
          { name: "Boiled Egg Sandwich", price: "NPR 350" },
          { name: "Club Sandwich", description: "Egg, cheese, chicken", price: "NPR 400" },
          { name: "Cheese Sandwich", price: "NPR 380" },
          { name: "Chicken Sandwich", price: "NPR 350" },
        ],
      },
      {
        title: "Fresh Soups with Toast",
        items: [
          { name: "Mixed Veg Soup", price: "NPR 230" },
          { name: "Mushroom Soup", price: "NPR 280" },
          { name: "Tomato Cream Soup", price: "NPR 280" },
          { name: "Chicken Cream Soup", price: "NPR 280" },
          { name: "Chicken Noodle Soup", price: "NPR 280" },
          { name: "Chicken Mushroom Soup", price: "NPR 350" },
          { name: "Hot & Sour Soup (Veg)", price: "NPR 300" },
          { name: "Hot & Sour Soup (Non-Veg)", price: "NPR 350" },
        ],
      },
      {
        title: "Rice or Roti",
        items: [
          { name: "Plain Rice", price: "NPR 160" },
          { name: "Plain Roti", description: "Per piece", price: "NPR 40" },
        ],
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    sections: [
      {
        title: "Hot Beverages",
        items: [
          { name: "Milk Tea", variants: [{ label: "Cup", price: "NPR 80" }, { label: "Small Pot", price: "NPR 150" }, { label: "Big Pot", price: "NPR 280" }] },
          { name: "Black Tea", variants: [{ label: "Cup", price: "NPR 65" }, { label: "Small Pot", price: "NPR 120" }, { label: "Big Pot", price: "NPR 220" }] },
          { name: "Masala Tea", variants: [{ label: "Cup", price: "NPR 100" }, { label: "Small Pot", price: "NPR 180" }, { label: "Big Pot", price: "NPR 320" }] },
          { name: "Milk Coffee", variants: [{ label: "Cup", price: "NPR 170" }, { label: "Small Pot", price: "NPR 320" }, { label: "Big Pot", price: "NPR 550" }] },
          { name: "Americano", variants: [{ label: "Cup", price: "NPR 150" }, { label: "Small Pot", price: "NPR 280" }, { label: "Big Pot", price: "NPR 550" }] },
          { name: "Lemon Tea", variants: [{ label: "Cup", price: "NPR 85" }, { label: "Small Pot", price: "NPR 160" }, { label: "Big Pot", price: "NPR 300" }] },
          { name: "Hot Lemon", variants: [{ label: "Cup", price: "NPR 85" }, { label: "Small Pot", price: "NPR 160" }, { label: "Big Pot", price: "NPR 300" }] },
          { name: "Ginger Lemon Tea", variants: [{ label: "Cup", price: "NPR 130" }, { label: "Small Pot", price: "NPR 250" }, { label: "Big Pot", price: "NPR 480" }] },
          { name: "Ginger Lemon Honey Tea", variants: [{ label: "Cup", price: "NPR 160" }, { label: "Small Pot", price: "NPR 300" }, { label: "Big Pot", price: "NPR 550" }] },
          { name: "Jasmine Tea", variants: [{ label: "Cup", price: "NPR 85" }, { label: "Small Pot", price: "NPR 150" }, { label: "Big Pot", price: "NPR 300" }] },
          { name: "Mint Tea", variants: [{ label: "Cup", price: "NPR 85" }, { label: "Small Pot", price: "NPR 160" }, { label: "Big Pot", price: "NPR 300" }] },
          { name: "Butter (Tibetan) Tea", variants: [{ label: "Cup", price: "NPR 150" }, { label: "Small Pot", price: "NPR 280" }, { label: "Big Pot", price: "NPR 520" }] },
          { name: "Hot Chocolate", variants: [{ label: "Cup", price: "NPR 200" }, { label: "Small Pot", price: "NPR 380" }, { label: "Big Pot", price: "NPR 750" }] },
          { name: "Latte", variants: [{ label: "Cup", price: "NPR 190" }, { label: "Small Pot", price: "NPR 370" }, { label: "Big Pot", price: "NPR 720" }] },
          { name: "Cappuccino", variants: [{ label: "Cup", price: "NPR 190" }, { label: "Small Pot", price: "NPR 370" }, { label: "Big Pot", price: "NPR 720" }] },
          { name: "Mochachino", variants: [{ label: "Cup", price: "NPR 200" }, { label: "Small Pot", price: "NPR 380" }, { label: "Big Pot", price: "NPR 740" }] },
          { name: "Espresso Coffee", variants: [{ label: "Single", price: "NPR 135" }, { label: "Double", price: "NPR 250" }] },
        ],
      },
      {
        title: "Cold Drinks",
        items: [
          { name: "Coke / Fanta / Sprite", price: "NPR 120" },
          { name: "Plain Soda", price: "NPR 120" },
          { name: "Lemon Soda", price: "NPR 150" },
          { name: "Mineral Water", price: "NPR 60" },
          { name: "Can Juice", price: "NPR 250" },
          { name: "Red Bull", price: "NPR 250" },
          { name: "Red Bull Blue", price: "NPR 600" },
          { name: "Apple Cider", price: "NPR 300" },
        ],
      },
      {
        title: "Lassi & Milkshakes",
        items: [
          { name: "Plain Lassi", price: "NPR 150" },
          { name: "Sweet Lassi", price: "NPR 150" },
          { name: "Banana Lassi", price: "NPR 180" },
          { name: "Mango Lassi", price: "NPR 200" },
          { name: "Banana Milkshake", price: "NPR 180" },
          { name: "Coffee Milkshake", price: "NPR 180" },
          { name: "Mango Milkshake", price: "NPR 200" },
          { name: "Chocolate Milkshake", price: "NPR 200" },
        ],
      },
      {
        title: "Iced Tea & Coffee",
        items: [
          { name: "Ice Tea", price: "NPR 200" },
          { name: "Lemonade", price: "NPR 250" },
          { name: "Latte", price: "NPR 190" },
          { name: "Mochachino", price: "NPR 190" },
          { name: "Americano", price: "NPR 200" },
          { name: "Ice Chocolate", price: "NPR 230" },
        ],
      },
    ],
  },
  {
    id: "bar",
    label: "Bar & Liquor",
    sections: [
      {
        title: "Imported Drinks",
        items: [
          { name: "Red Label", variants: [{ label: "60ml", price: "NPR 900" }, { label: "Quarter", price: "NPR 2600" }] },
          { name: "Black Label", variants: [{ label: "60ml", price: "NPR 1000" }, { label: "Quarter", price: "NPR 2850" }] },
          { name: "Chivas Regal", variants: [{ label: "60ml", price: "NPR 1000" }, { label: "Quarter", price: "NPR 2850" }] },
          { name: "Vat 69", variants: [{ label: "60ml", price: "NPR 900" }, { label: "Quarter", price: "NPR 2600" }] },
          { name: "Absolut Vodka", variants: [{ label: "60ml", price: "NPR 900" }, { label: "Quarter", price: "NPR 2600" }] },
          { name: "Jack Daniels", variants: [{ label: "60ml", price: "NPR 1000" }, { label: "Quarter", price: "NPR 2850" }] },
        ],
      },
      {
        title: "Hard Drinks",
        items: [
          { name: "Signature", variants: [{ label: "60ml", price: "NPR 350" }, { label: "Quarter", price: "NPR 950" }, { label: "Half", price: "NPR 1800" }, { label: "Full", price: "NPR 3400" }] },
          { name: "Russland Vodka", variants: [{ label: "60ml", price: "NPR 350" }, { label: "Quarter", price: "NPR 950" }, { label: "Half", price: "NPR 1800" }, { label: "Full", price: "NPR 3400" }] },
          { name: "8848 Vodka", variants: [{ label: "60ml", price: "NPR 400" }, { label: "Quarter", price: "NPR 1100" }, { label: "Half", price: "NPR 2000" }, { label: "Full", price: "NPR 3700" }] },
          { name: "Khukuri Rum", variants: [{ label: "60ml", price: "NPR 350" }, { label: "Quarter", price: "NPR 950" }, { label: "Half", price: "NPR 1800" }, { label: "Full", price: "NPR 3400" }] },
          { name: "Blue Riband Gin", variants: [{ label: "60ml", price: "NPR 300" }, { label: "Quarter", price: "NPR 800" }, { label: "Half", price: "NPR 1450" }, { label: "Full", price: "NPR 2800" }] },
          { name: "Old Durbar", variants: [{ label: "60ml", price: "NPR 400" }, { label: "Quarter", price: "NPR 1100" }, { label: "Half", price: "NPR 2000" }, { label: "Full", price: "NPR 3700" }] },
          { name: "Old Durbar Chimney", variants: [{ label: "60ml", price: "NPR 500" }, { label: "Quarter", price: "NPR 1400" }, { label: "Half", price: "NPR 2700" }, { label: "Full", price: "NPR 5300" }] },
          { name: "McDowell's", variants: [{ label: "60ml", price: "NPR 300" }, { label: "Quarter", price: "NPR 800" }, { label: "Half", price: "NPR 1450" }, { label: "Full", price: "NPR 2800" }] },
          { name: "Smirnoff", variants: [{ label: "60ml", price: "NPR 400" }, { label: "Quarter", price: "NPR 1100" }, { label: "Half", price: "NPR 2000" }, { label: "Full", price: "NPR 3700" }] },
          { name: "J 89", variants: [{ label: "60ml", price: "NPR 430" }, { label: "Quarter", price: "NPR 1250" }, { label: "Half", price: "NPR 2400" }, { label: "Full", price: "NPR 4600" }] },
          { name: "Gorkhas Guns", variants: [{ label: "60ml", price: "NPR 430" }, { label: "Quarter", price: "NPR 1250" }, { label: "Half", price: "NPR 2400" }, { label: "Full", price: "NPR 4600" }] },
          { name: "Wine (Imported)", variants: [{ label: "Glass", price: "NPR 600" }, { label: "Bottle", price: "NPR 2500" }] },
          { name: "Wine (Local)", variants: [{ label: "Glass", price: "NPR 450" }, { label: "Bottle", price: "NPR 1800" }] },
        ],
      },
      {
        title: "Beer",
        items: [
          { name: "Tuborg", variants: [{ label: "650ml", price: "NPR 600" }, { label: "350ml", price: "NPR 350" }] },
          { name: "Gorkha Beer", variants: [{ label: "650ml", price: "NPR 600" }, { label: "350ml", price: "NPR 350" }] },
          { name: "Arna Beer", variants: [{ label: "350ml", price: "NPR 350" }] },
          { name: "Barahsinghe Beer", variants: [{ label: "650ml", price: "NPR 600" }, { label: "350ml", price: "NPR 350" }] },
          { name: "Carlsberg", variants: [{ label: "650ml", price: "NPR 650" }] },
          { name: "Nepal Ice", variants: [{ label: "650ml", price: "NPR 600" }] },
          { name: "Everest", variants: [{ label: "650ml", price: "NPR 600" }] },
          { name: "Hot Beer (Tongba)", price: "NPR 400" },
          { name: "Budweiser Beer", price: "NPR 600" },
        ],
      },
      {
        title: "Miscellaneous",
        items: [
          { name: "Surya Cigarette", description: "Per piece", price: "NPR 30" },
          { name: "Hookah (Shisha)", price: "NPR 500" },
        ],
      },
    ],
  },
];

function MenuPage() {
  const [active, setActive] = useState<string>(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/60 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="font-display text-2xl sm:text-3xl tracking-tight">
            Tibetan &amp; Nepali Kitchen
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">Our Menu</p>
        <h1 className="font-display text-4xl sm:text-6xl leading-tight">
          Honest Himalayan flavours
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          From breakfast to bar — every dish made fresh in our Kathmandu kitchen. Prices in Nepalese Rupees (NPR).
        </p>
      </section>

      {/* Tabs */}
      <div className="sticky top-[65px] z-20 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-3">
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={
                    "whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all border " +
                    (isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-transparent text-foreground/70 border-border hover:text-foreground hover:border-foreground/40")
                  }
                  aria-pressed={isActive}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="space-y-14">
          {activeTab.sections.map((section) => (
            <section key={section.title}>
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2 className="font-display text-2xl sm:text-3xl">{section.title}</h2>
                <div className="h-px flex-1 bg-border ml-4 mb-2" />
              </div>

              <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-medium text-base sm:text-lg text-foreground">
                        {item.name}
                      </h3>
                      <span className="flex-1 border-b border-dashed border-border/70 translate-y-[-4px]" />
                      {item.price && (
                        <span className="font-display text-lg text-primary tabular-nums">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.variants && (
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                        {item.variants.map((v) => (
                          <div key={v.label} className="text-sm">
                            <span className="text-muted-foreground">{v.label}</span>{" "}
                            <span className="font-display text-primary tabular-nums">{v.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-muted-foreground">
          Taxes and service charges may apply. Menu and pricing subject to change.
        </p>
      </main>
    </div>
  );
}
