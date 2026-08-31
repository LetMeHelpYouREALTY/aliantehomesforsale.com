'use client';

import { useId, useMemo, useState } from 'react';

function monthlyPrincipalAndInterest(
  loanAmount: number,
  annualRatePercent: number,
  termYears: number
): number | null {
  if (!(loanAmount > 0) || !(termYears > 0) || annualRatePercent < 0) {
    return null;
  }
  const monthlyRate = annualRatePercent / 100 / 12;
  const n = termYears * 12;
  if (monthlyRate === 0) {
    return loanAmount / n;
  }
  const factor = (1 + monthlyRate) ** n;
  return (loanAmount * (monthlyRate * factor)) / (factor - 1);
}

function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * P&I estimate from numbers the visitor enters. Not a rate lock or lender quote.
 */
export default function MortgagePaymentEstimator() {
  const priceId = useId();
  const downId = useId();
  const rateId = useId();
  const termId = useId();

  const [price, setPrice] = useState('');
  const [downPercent, setDownPercent] = useState('20');
  const [rate, setRate] = useState('');
  const [termYears, setTermYears] = useState('30');

  const result = useMemo(() => {
    const purchase = Number(price);
    const down = Number(downPercent);
    const annualRate = Number(rate);
    const years = Number(termYears);
    if (!Number.isFinite(purchase) || purchase <= 0) return null;
    if (!Number.isFinite(down) || down < 0 || down >= 100) return null;
    if (!Number.isFinite(annualRate) || rate.trim() === '') return null;
    if (!Number.isFinite(years) || years <= 0) return null;
    const loan = purchase * (1 - down / 100);
    const monthly = monthlyPrincipalAndInterest(loan, annualRate, years);
    if (monthly === null || !Number.isFinite(monthly)) return null;
    return { loan, monthly };
  }, [price, downPercent, rate, termYears]);

  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="mortgage-estimator-heading">
      <div className="max-w-3xl mx-auto">
        <h2
          id="mortgage-estimator-heading"
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#1a365d' }}
        >
          Estimate principal and interest
        </h2>
        <p className="text-gray-700 mb-8">
          Enter the purchase price, down payment, rate, and term your lender quoted. This is
          principal and interest only — taxes, insurance, HOA, and PMI are extra. I am your realtor,
          not your loan officer.
        </p>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-xl p-6 sm:p-8 shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor={priceId} className="block text-sm font-bold mb-2 text-[#1a365d]">
              Purchase price (USD)
            </label>
            <input
              id={priceId}
              name="price"
              type="number"
              inputMode="decimal"
              min={1}
              step={1000}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <div>
            <label htmlFor={downId} className="block text-sm font-bold mb-2 text-[#1a365d]">
              Down payment (%)
            </label>
            <input
              id={downId}
              name="downPercent"
              type="number"
              inputMode="decimal"
              min={0}
              max={99}
              step={0.5}
              value={downPercent}
              onChange={(e) => setDownPercent(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <div>
            <label htmlFor={rateId} className="block text-sm font-bold mb-2 text-[#1a365d]">
              Annual interest rate (%)
            </label>
            <input
              id={rateId}
              name="rate"
              type="number"
              inputMode="decimal"
              min={0}
              step={0.125}
              placeholder="Rate your lender quoted"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <div>
            <label htmlFor={termId} className="block text-sm font-bold mb-2 text-[#1a365d]">
              Term (years)
            </label>
            <input
              id={termId}
              name="termYears"
              type="number"
              inputMode="numeric"
              min={1}
              max={40}
              step={1}
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </form>

        <output className="mt-6 block rounded-lg px-4 py-4 bg-white border border-gray-200 text-[#1a365d]">
          {result ? (
            <p className="text-lg">
              Estimated P&amp;I: <strong>{formatUsd(result.monthly)}</strong> per month on a{' '}
              {formatUsd(result.loan)} loan. Confirm taxes, insurance, HOA, and PMI with your
              lender.
            </p>
          ) : (
            <p>
              Enter a purchase price and the rate your lender quoted to see principal and interest.
            </p>
          )}
        </output>
      </div>
    </section>
  );
}
