import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Menu, Phone, Quote, Star, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import photo0 from "../assets/restaurant-0.jpg.asset.json";
import photo1 from "../assets/restaurant-1.jpg.asset.json";
import photo2 from "../assets/restaurant-2.jpg.asset.json";
import photo4 from "../assets/restaurant-4.jpg.asset.json";
import photo5 from "../assets/restaurant-5.jpg.asset.json";
import photo6 from "../assets/restaurant-6.jpg.asset.json";
import photo7 from "../assets/restaurant-7.jpg.asset.json";
import photo8 from "../assets/restaurant-8.jpg.asset.json";
import photo9 from "../assets/restaurant-9.jpg.asset.json";
import thakaliPhoto from "../assets/thakali.jpg.asset.json";
import milkTeaPhoto from "../assets/milktea.jpg.asset.json";
import lassiPhoto from "../assets/lassi.jpg.asset.json";

const mapUrl = "https://maps.google.com/?cid=17582143241383883018";
const phoneUrl = "tel:+9779841451986";
const whatsappUrl = "https://wa.me/9779841451986?text=Hi%2C%20I%27d%20like%20to%20reserve%20a%20table%20at%20Tibetan%20and%20Nepali%20Kitchen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tibetan and Nepali Kitchen | Kathmandu" },
      { name: "description", content: "Authentic Tibetan and Nepali food in Kathmandu. Momos, thukpa and thali, open daily 9 AM–11 PM." },
      { property: "og:title", content: "Tibetan and Nepali Kitchen, Kathmandu" },
      { property: "og:description", content: "Honest Himalayan flavours, handmade with heart in Kathmandu." },
      { property: "og:image", content: photo0.url },
    ],
  }),
  component: Index,
});

interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
  blank?: boolean;
}

interface MenuSection {
  title: string;
  image: string;
  dishes: Dish[];
}

const menuSections: MenuSection[] = [
  {
    title: "From the steamer",
    image: photo0.url,
    dishes: [
      { name: "Buff Momo", description: "Hand-folded dumplings with tomato-sesame achar", price: "NPR 280", image: photo6.url },
      { name: "Chicken Momo", description: "Juicy chicken, Himalayan spices and fiery chilli paste", price: "NPR 320", image: photo8.url },
      { name: "", description: "", price: "", image: "", blank: true },
    ],
  },
  {
    title: "From the hearth",
    image: photo1.url,
    dishes: [
      { name: "Mutton Thali", description: "Goat curry, lentils, rice, vegetables, pickle and greens", price: "NPR 550", image: photo7.url },
      { name: "Chicken Thukpa", description: "Nourishing Tibetan noodle soup with vegetables", price: "NPR 250", image: photo4.url },
      { name: "Veg Thakali Set", description: "Traditional dal bhat with seasonal accompaniments", price: "NPR 350", image: thakaliPhoto.url },
    ],
  },
  {
    title: "Sweet & warming",
    image: photo2.url,
    dishes: [
      { name: "Himalayan Milk Tea", description: "Fragrant spiced tea, simmered with milk", price: "NPR 80", image: milkTeaPhoto.url },
      { name: "Lassi", description: "Cool, creamy and freshly blended", price: "NPR 150", image: lassiPhoto.url },
    ],
  },
];

const menuGallery = [
  { image: photo6.url, name: "Hand-folded Momos" },
  { image: photo4.url, name: "Chicken Thukpa" },
  { image: photo7.url, name: "Himalayan Favourites" },
  { image: photo8.url, name: "Steamed Dumplings & Broth" },
  { image: photo9.url, name: "House Chow Mein" },
];

function Index() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#top" className="font-display text-lg font-bold leading-none text-primary-foreground">
            Tibetan <span className="text-accent">&</span> Nepali<br/>
            <span className="text-xs font-sans font-medium uppercase tracking-[0.3em]">Kitchen</span>
          </a>
          <nav className="hidden gap-8 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground md:flex">
            <a href="#menu">Menu</a>
            <Link to="/menu">Full menu</Link>
            <a href="#story">Our story</a>
            <a href="#visit">Visit</a>
          </nav>
          <Button href={whatsappUrl} className="hidden sm:inline-flex">Reserve a table</Button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-primary-foreground sm:hidden"
            aria-label="Open menu"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em]">Menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-secondary text-secondary-foreground sm:hidden">
            <div className="flex h-full flex-col px-6 py-5">
              <div className="flex items-center justify-between">
                <a href="#top" onClick={() => setMobileMenuOpen(false)} className="font-display text-lg font-bold leading-none">
                  Tibetan <span className="text-accent">&</span> Nepali<br/>
                  <span className="text-xs font-sans font-medium uppercase tracking-[0.3em] text-secondary-foreground/70">Kitchen</span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-secondary-foreground"
                  aria-label="Close menu"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">Close</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6 text-2xl font-semibold tracking-tight">
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Menu</a>
                <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Full menu</Link>
                <a href="#story" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Our story</a>
                <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">Visit</a>
              </nav>
              <div className="mt-auto pb-8">
                <Button href={whatsappUrl} onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">Reserve a table</Button>
              </div>
            </div>
          </div>
        )}
      </header>
      <section id="top" className="relative flex min-h-[760px] items-end md:min-h-[840px] md:items-center"><img src={photo1.url} alt="A generous spread of Tibetan and Nepali dishes" className="absolute inset-0 h-full w-full object-cover"/><div className="hero-shade absolute inset-0"/><div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-10"><div className="reveal max-w-3xl"><p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-accent"><span className="h-px w-10 bg-accent"/> From the Himalayas to your table</p><h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.03em] text-primary-foreground sm:text-7xl md:text-8xl lg:text-9xl">Honest food.<br/><em className="font-medium text-accent">Warm hearts.</em></h1><p className="mt-7 max-w-xl text-base leading-8 text-primary-foreground/80 md:text-lg">Discover the soulful flavours of Nepal and Tibet—hand-folded momos, comforting thukpa, and generous thali made just as they should be.</p><div className="mt-9 flex flex-wrap gap-4"><Button href={whatsappUrl}>Reserve your table</Button><Button href="#menu" variant="outline" className="border-primary-foreground/40 text-primary-foreground">Explore the menu</Button></div><div className="mt-10 flex items-center gap-3 text-primary-foreground"><div className="flex text-accent">{[1,2,3,4,5].map(n=><Star key={n} className="h-4 w-4 fill-current"/>)}</div><strong>4.7</strong><span className="text-sm text-primary-foreground/65">from 257 Google reviews</span></div></div></div></section>
      <section id="menu" className="px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1.3fr] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">A taste of home</p><h2 className="mt-3 text-5xl font-semibold md:text-7xl">The menu</h2></div><p className="max-w-2xl leading-7 text-muted-foreground">Bold Himalayan spices, satisfying portions and recipes rooted in tradition. Prices and daily availability are confirmed at the restaurant.</p></div><div className="mt-12 grid gap-8 lg:grid-cols-3">{menuSections.map((section,index)=><article key={section.title} className="group"><div className="relative h-80 overflow-hidden"><img src={section.image} alt={`${section.title} dishes`} loading={index ? "lazy" : "eager"} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="image-shade absolute inset-0"/><p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">0{index+1}</p></div><h3 className="mt-7 text-3xl font-semibold">{section.title}</h3><div className="mt-5 space-y-4">{section.dishes.map((dish)=><button key={dish.name} onClick={() => setSelectedDish(dish)} className="w-full rounded-xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><div className="flex items-start gap-4"><img src={dish.image} alt={dish.name} loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover"/><div className="flex-1"><div className="flex items-center justify-between gap-3"><h4 className="font-sans text-sm font-bold uppercase tracking-[0.1em]">{dish.name}</h4><span className="shrink-0 text-sm font-semibold text-primary">{dish.price}</span></div><p className="mt-1 text-sm leading-6 text-muted-foreground">{dish.description}</p></div></div></button>)}</div></article>)}</div><div className="mt-20"><div className="mb-7 flex items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Made in our kitchen</p><h3 className="mt-2 text-4xl font-semibold md:text-5xl">More from the menu</h3></div><p className="hidden text-sm text-muted-foreground md:block">Real dishes photographed by our guests</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{menuGallery.map((item,index)=><figure key={item.name} className={`group relative overflow-hidden ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}><img src={item.image} alt={item.name} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="image-shade absolute inset-0"/><figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">{item.name}</figcaption></figure>)}</div></div></div></section>
      <section id="story" className="bg-secondary text-secondary-foreground"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="relative min-h-[540px]"><img src={photo5.url} alt="Authentic dishes served at Tibetan and Nepali Kitchen" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute -bottom-7 right-7 bg-primary px-6 py-5 text-primary-foreground"><strong className="font-display text-4xl">4.7</strong><span className="ml-2 text-xs uppercase tracking-widest">Guest rating</span></div></div><div className="flex items-center px-6 py-24 lg:px-20"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Our story</p><h2 className="mt-4 text-5xl font-semibold leading-none md:text-7xl">Food that feels<br/><em className="text-accent">like home.</em></h2><p className="mt-8 max-w-xl leading-8 text-secondary-foreground/75">Tucked into the heart of Kathmandu, Tibetan and Nepali Kitchen is a neighbourhood table built around genuine hospitality. Guests come for authentic, nourishing food and return for the friendly team, remarkable value and unforgettable flavours.</p><p className="mt-5 max-w-xl leading-8 text-secondary-foreground/75">From steaming momos to the much-loved mutton thali, everything is served without fuss—just generous, honest cooking.</p></div></div></div></section>
      <section className="px-5 py-24 text-center lg:py-32"><Quote className="mx-auto h-10 w-10 text-primary"/><blockquote className="mx-auto mt-8 max-w-4xl font-display text-3xl font-medium leading-tight md:text-5xl">“Amazing Nepali food—full of flavor and truly authentic. The service is very friendly, attentive, and professional.”</blockquote><p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-primary">Paweł Wróblewski · Google review</p></section>
      <section id="visit" className="grid bg-card lg:grid-cols-2"><a href={mapUrl} target="_blank" rel="noreferrer" className="relative min-h-[480px]"><iframe title="Map to Tibetan and Nepali Kitchen" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full" src="https://www.google.com/maps?q=27.7147318,85.3101005&z=17&output=embed"/></a><div className="px-6 py-20 md:px-16 lg:px-20 lg:py-24"><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Come share our table</p><h2 className="mt-4 text-5xl font-semibold md:text-7xl">Visit us</h2><div className="mt-10 space-y-8 border-y border-border py-9"><div className="flex gap-5"><MapPin className="mt-1 text-primary"/><div><strong>In the heart of Kathmandu</strong><p className="mt-1 text-sm text-muted-foreground">P876+V2X, Kathmandu 44600, Nepal</p></div></div><div className="flex gap-5"><Clock className="mt-1 text-primary"/><div><strong>Open every day</strong><p className="mt-1 text-sm text-muted-foreground">9:00 AM – 11:00 PM</p></div></div><div className="flex gap-5"><Phone className="mt-1 text-primary"/><div><strong>Call for a table</strong><p className="mt-1 text-sm text-muted-foreground">+977 984-1451986</p></div></div></div><div className="mt-9 flex flex-wrap gap-4"><Button href={phoneUrl}>Order by phone</Button><Button href={mapUrl} target="_blank" rel="noreferrer" variant="outline">Get directions</Button></div></div></section>
      <footer className="bg-secondary px-5 py-12 text-secondary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left"><div><p className="font-display text-2xl font-bold">Tibetan <span className="text-accent">&</span> Nepali Kitchen</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-secondary-foreground/55">Authentic Himalayan kitchen · Kathmandu</p></div><a href={mapUrl} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-accent">Google reviews</a><p className="text-xs text-secondary-foreground/45">© 2026 Tibetan and Nepali Kitchen</p></div></footer>

      <Modal isOpen={!!selectedDish} onClose={() => setSelectedDish(null)}>
        {selectedDish && (
          <div>
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold md:text-4xl">{selectedDish.name}</h3>
                <span className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  {selectedDish.price}
                </span>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{selectedDish.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={phoneUrl}>Order by phone</Button>
                <Button href="#visit" variant="outline" onClick={() => setSelectedDish(null)}>
                  Visit us
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}
