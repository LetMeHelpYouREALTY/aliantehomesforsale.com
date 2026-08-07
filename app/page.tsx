import { HomeSectionsBottom, HomeSectionsTop } from './components/HomeSections';
import LatestNewsSection from './components/LatestNewsSection';

export default function Home() {
  return (
    <main>
      <HomeSectionsTop />
      <LatestNewsSection />
      <HomeSectionsBottom />
    </main>
  );
}
