import type { Metadata } from 'next';
import BuilderPageHero from '../../components/BuilderPageHero';
import ContextualLinks from '../../components/ContextualLinks';
import OfficeLocation from '../../components/OfficeLocation';
import TollBrothersContent from '../../components/TollBrothersContent';
import TollBrothersFAQ from '../../components/TollBrothersFAQ';

export const metadata: Metadata = {
  title: 'Toll Brothers Near Aliante | Luxury New Homes, North Las Vegas 89084',
  description:
    'Toll Brothers does not currently build inside Aliante 89084. Compare Elkhorn Grove (89131), Skye Canyon, and Summerlin collections with Aliante builders. Independent buyer representation. Call (702) 707-7273.',
  keywords:
    'Toll Brothers near Aliante, Toll Brothers North Las Vegas, Elkhorn Grove 89131, Toll Brothers Skye Canyon, luxury new construction Las Vegas, Aliante buyer agent',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Toll Brothers Near Aliante | Luxury New Homes, North Las Vegas',
    description:
      "Honest Aliante comparison: Toll Brothers is not building in ZIP 89084. Tour Elkhorn Grove and valley collections with an independent buyer's agent.",
    url: 'https://www.aliantehomesforsale.com/builders/toll-brothers',
    type: 'website',
  },
};

export default function TollBrothers() {
  return (
    <main>
      <BuilderPageHero
        eyebrow="Luxury new construction · North Las Vegas"
        title="Toll Brothers Homes Near Aliante | Luxury New Construction, North Las Vegas"
        subtitle="Toll Brothers is not currently building inside Aliante 89084. The closest community is Elkhorn Grove in ZIP 89131. I represent you, not the builder."
      />
      <TollBrothersContent />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <TollBrothersFAQ />
      <OfficeLocation />
    </main>
  );
}
