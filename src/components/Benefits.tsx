import React from "react";

type Benefit = string;

type BenefitsProps = {
  overline?: string;
  title?: string;
  blurb?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Benefit[];
};

export default function Benefits({
  overline = "Benefits",
  title = "Healing that comes to you",
  blurb = `Online therapy at Sukoon Studio lets you begin your healing journey from the comfort of your own space. All you need is an internet connection and a willingness to talk. Our online sessions are private, flexible, and designed around your schedule so you can prioritise mental health without disrupting your life.`,
  imageSrc = "/benefits.png",
  imageAlt = "Smiling person in warm light",
  features = [
    "100% Confidential",
    "Flexible Scheduling",
    "Available Across India & Abroad",
    "Comfortable and Non-Judgmental",
  ],
}: BenefitsProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: image card */}
          <figure className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Right: copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600">
              {overline}
            </div>

            <h2
              className="mt-4 text-balance text-3xl sm:text-4xl lg:text-[40px] -tracking-[0.2px]"
              style={{
                color: "#2C3C44",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              {title}
            </h2>

            <p
              className="mt-4 text-[15px] leading-7 text-gray-600"
              style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
            >
              {blurb}
            </p>

            {/* Features */}
            <div className="mt-6">
              <div
                className="text-sm font-semibold text-[#2C3C44] mb-2"
                style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
              >
                Features
              </div>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span
                      className="text-[15px] leading-7 text-gray-700"
                      style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
