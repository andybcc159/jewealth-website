import { findImages } from "./media";

export type PortfolioItem = {
  slug: string;
  title: string;
  titleThai: string;
  gemstone: string;
  availableSetting: string;
  category: string;
  categoryThai: string;
  startingPrice: string;
  description: string;
  images: string[];
};

type PortfolioItemInput = Omit<PortfolioItem, "images">;

// Add new pieces by appending an object below, then create a folder
// public/selectedworks/<slug>/ and drop numbered photos in it (1.jpg, 2.jpg, ...).
// The first photo becomes the card cover; every photo in the folder shows on
// that piece's detail page. No code changes needed beyond this list.
const portfolioItemsInput: PortfolioItemInput[] = [
  {
    slug: "eternitybaziring",
    title: "Eternity Bazi mixed cut ring",
    titleThai: "แหวนแถวปาจื่อ",
    gemstone: "Sapphire",
    availableSetting: "Silver92.5, 9K Gold, 14K Gold, 18K Gold, Platinum 950",
    category: "Ring",
    categoryThai: "แหวน",
    startingPrice: "฿9,000",
    description:
      "The Bazi Mixed Cut eternity ring from Jewealth is a high-end, custom-made jewelry masterpiece that seamlessly fuses ancient astrological wisdom with modern gem design—tailored to empower your personal energy while reflecting an undeniably sophisticated taste.",
  },
  {
    slug: "bazistackring",
    title: "Bazi stack ring",
    titleThai: "แหวนซ้อนปาจื่อ",
    gemstone: "Sapphire",
    availableSetting: "Silver92.5, 9K Gold, 14K Gold, 18K Gold, Platinum 950",
    category: "Ring",
    categoryThai: "แหวน",
    startingPrice: "฿4,900",
    description:
      "The Bazi Mixed Cut eternity ring from Jewealth is a high-end, custom-made jewelry masterpiece that seamlessly fuses ancient astrological wisdom with modern gem design—tailored to empower your personal energy while reflecting an undeniably sophisticated taste.",
  },
];

// Server-only: resolves each item's photos from public/selectedworks/<slug>/.
export function getPortfolioItems(): PortfolioItem[] {
  return portfolioItemsInput.map((item) => ({
    ...item,
    images: findImages(`selectedworks/${item.slug}`),
  }));
}

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  const item = portfolioItemsInput.find((i) => i.slug === slug);
  if (!item) return undefined;
  return { ...item, images: findImages(`selectedworks/${item.slug}`) };
}

export function getPortfolioSlugs(): string[] {
  return portfolioItemsInput.map((item) => item.slug);
}
