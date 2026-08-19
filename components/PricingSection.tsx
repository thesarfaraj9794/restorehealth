"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    plan: "Individual",
    price: "₹10,000",
    bestFor: "Individual",
  },
  {
    plan: "Floater",
    price: "₹20,000",
    bestFor: "Floater",
  },
  {
    plan: "Floater",
    price: "₹30,000",
    bestFor: "Floater",
  },
];

export default function PricingSection() {
  const router = useRouter();

  const handlePricingRedirect = () => {
    router.push("/Plans");
  };

  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-16 sm:py-20 lg:py-24 dark:bg-[#071c11]">
      {/* Soft Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a017]/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a8770a] dark:text-[#f2c94c]">
            Simple, Transparent Pricing
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#123b22] sm:text-4xl lg:text-[46px] dark:text-white">
            Plans Start At <span className="text-[#d4a017]">₹10,000</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#5e6b62] sm:text-base dark:text-gray-400">
            Choose the plan that suits your health and family needs.
          </p>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="mt-10 hidden overflow-hidden rounded-[24px] border border-[#d9cfb7] bg-white shadow-[0_18px_50px_rgba(18,59,34,0.08)] md:block dark:border-[#31503d] dark:bg-[#0d2518]">
          {/* Top Green + Gold Line */}
          <div className="h-1 w-full bg-gradient-to-r from-[#123b22] via-[#d4a017] to-[#123b22]" />

          {/* Table Header */}
          <div className="grid grid-cols-[1.2fr_0.9fr_1fr] border-b border-[#e7dfcf] bg-[#f8f4ea] dark:border-[#31503d] dark:bg-[#102d1c]">
            <div className="border-r border-[#e7dfcf] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#587060] dark:border-[#31503d] dark:text-gray-400">
              Plan
            </div>

            <div className="border-r border-[#e7dfcf] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#587060] dark:border-[#31503d] dark:text-gray-400">
              Starting At
            </div>

            <div className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#587060] dark:text-gray-400">
              Best For
            </div>
          </div>

          {/* Plans - Only 3 */}
          {pricingPlans.map((item, index) => (
            <div
              key={`${item.plan}-${item.price}`}
              className={`grid grid-cols-[1.2fr_0.9fr_1fr] transition-colors duration-300 hover:bg-[#fffaf0] dark:hover:bg-[#143521] ${
                index !== pricingPlans.length - 1
                  ? "border-b border-[#eee7da] dark:border-[#31503d]"
                  : ""
              }`}
            >
              <div className="flex items-center border-r border-[#eee7da] px-6 py-6 dark:border-[#31503d]">
                <span className="text-[15px] font-bold text-[#123b22] dark:text-white">
                  {item.plan}
                </span>
              </div>

              <div className="flex items-center border-r border-[#eee7da] px-6 py-6 dark:border-[#31503d]">
                <span className="text-[16px] font-extrabold text-[#c68a09] dark:text-[#f2c94c]">
                  {item.price}
                </span>
              </div>

              <div className="flex items-center px-6 py-6">
                <span className="text-[14px] text-[#5d6c62] dark:text-gray-400">
                  {item.bestFor}
                </span>
              </div>
            </div>
          ))}

          {/* Desktop Button - Redirect Only */}
          <div className="flex justify-end border-t border-[#e7dfcf] bg-[#faf7ef] px-6 py-5 dark:border-[#31503d] dark:bg-[#102d1c]">
            <button
              type="button"
              onClick={handlePricingRedirect}
              className="group inline-flex min-w-[185px] items-center justify-center gap-2 rounded-lg bg-[#123b22] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(18,59,34,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b512e]"
            >
              See Full Pricing
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* ================= MOBILE TABLE ================= */}
        <div className="mt-8 space-y-4 md:hidden">
          {pricingPlans.map((item) => (
            <div
              key={`${item.plan}-${item.price}`}
              className="overflow-hidden rounded-2xl border border-[#ded5c3] bg-white shadow-[0_8px_25px_rgba(18,59,34,0.06)] dark:border-[#31503d] dark:bg-[#0d2518]"
            >
              <div className="h-1 bg-gradient-to-r from-[#123b22] via-[#d4a017] to-[#123b22]" />

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b897f]">
                      Plan
                    </p>

                    <h3 className="mt-2 text-[18px] font-bold text-[#123b22] dark:text-white">
                      {item.plan}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b897f]">
                      Starting At
                    </p>

                    <p className="mt-2 text-[18px] font-extrabold text-[#c68a09] dark:text-[#f2c94c]">
                      {item.price}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#eee7da] pt-4 dark:border-[#31503d]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b897f]">
                    Best For
                  </p>

                  <p className="mt-1.5 text-sm text-[#58665d] dark:text-gray-400">
                    {item.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Button - Redirect Only */}
          <button
            type="button"
            onClick={handlePricingRedirect}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#123b22] px-6 py-4 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(18,59,34,0.22)] transition-all duration-300 hover:bg-[#1b512e]"
          >
            See Full Pricing
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
