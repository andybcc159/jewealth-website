import { siteConfig } from "@/lib/site-config";

// Structured data (schema.org JewelryStore) — helps Google understand this
// is a local jewelry business and can power rich results (knowledge panel,
// map pack) for searches like "เครื่องประดับ กรุงเทพ" / "jewelry Bangkok".
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/wordmark.png`,
    image: `${siteConfig.url}/opengraph-image.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    areaServed: "TH",
    priceRange: "฿฿",
    sameAs: [
      siteConfig.instagram,
      siteConfig.facebook,
      siteConfig.tiktok,
      siteConfig.shopee,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
