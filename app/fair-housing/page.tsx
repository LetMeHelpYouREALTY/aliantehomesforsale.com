import { pageMetadata } from '../../lib/seo/page-metadata';
import AboutHero from '../components/AboutHero';
import LegalContent from '../components/LegalContent';

export const metadata = pageMetadata('/fair-housing');

export default function FairHousing() {
  return (
    <main>
      <AboutHero
        title="Fair Housing statement"
        subtitle="Equal professional service. We do not use protected-class proxies in marketing."
      />
      <LegalContent title="Fair Housing and Equal Opportunity Statement">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Dr. Jan Duffy and Aliante Homes For Sale are committed to full compliance with the Fair
            Housing Act and all applicable federal, state, and local fair housing and civil rights
            laws. We are dedicated to ensuring equal professional service and access to housing
            opportunities for all persons regardless of race, color, religion, sex, disability,
            familial status, national origin, sexual orientation, gender identity, or any other
            characteristic protected by law.
          </p>

          <p className="leading-relaxed">
            The Fair Housing Act prohibits discrimination in the sale, rental, and financing of
            dwellings, and in other housing-related transactions, based on protected
            characteristics. This prohibition extends to all aspects of the real estate transaction,
            including advertising, showing properties, negotiating purchase terms, financing
            arrangements, and providing brokerage services. We take these obligations seriously and
            maintain strict policies and procedures to ensure compliance with all fair housing
            requirements.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
            Our Commitment to Equal Housing Opportunity
          </h3>

          <p className="leading-relaxed">
            We provide professional real estate services to all clients and customers without regard
            to protected characteristics. All persons shall have equal access to our services,
            properties, and housing opportunities. We do not engage in discriminatory practices in
            any form, including steering (directing people toward or away from certain
            neighborhoods), redlining, discriminatory advertising, or providing different terms or
            conditions based on protected characteristics.
          </p>

          <p className="leading-relaxed">
            Our advertising and marketing materials comply with fair housing requirements by using
            inclusive language and imagery that welcomes all prospective buyers and renters. We do
            not make, print, or publish any statement with respect to the sale or rental of a
            dwelling that indicates any preference, limitation, or discrimination based on protected
            characteristics. All property listings and marketing materials focus on the features and
            attributes of the properties themselves, not on the characteristics of the surrounding
            neighborhood's residents.
          </p>

          <p className="leading-relaxed">
            If you believe you have experienced discrimination in a housing transaction, you have
            the right to file a complaint with the U.S. Department of Housing and Urban Development
            (HUD) by calling 1-800-669-9777 or visiting www.hud.gov. Complaints may also be filed
            with the Nevada Equal Rights Commission. We take all discrimination complaints seriously
            and will cooperate fully with any investigation of fair housing practices.
          </p>
        </div>
      </LegalContent>
    </main>
  );
}
