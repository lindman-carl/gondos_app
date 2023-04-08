import { Lato } from "next/font/google";

// components
import Hero from "@/components/Hero";
import Shop from "@/components/Shop/Shop";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const font = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  return (
    <main
      className={`${font.className} flex min-h-screen flex-col items-center justify-start`}
    >
      <Hero />
      <Shop />
      <NewsletterSubscription />
    </main>
  );
}
