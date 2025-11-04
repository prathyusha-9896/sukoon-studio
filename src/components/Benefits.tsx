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
    <section className="w-full  md:pr-[120px] md:pl-2 md:py-16 py-8">
        <div className="grid grid-cols-1 md:gap-24 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: image card */}
          <figure className="overflow-hidden rounded-2xl md:block hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Right: copy */}
          <div className="max-w-xl px-6">
          <div style={{ fontFamily: "Giphurs" }} className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px] font-light  text-[#2C3C44]">
            {overline}
          </div>

            <h2
                className="mb-auto py-6 text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
                style={{
                  color: "#2C3C44",
                  fontFamily: '"Fraunces", serif',
                }}
            >
              {title}
            </h2>

            <p
              className="mb-6 text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-left"
              style={{
                color: "#64737A",
                fontFamily: "Giphurs",
              }}
            >
              {blurb}
            </p>

            {/* Features */}
            <div className="mt-6">
              <div
              className="md:mb-8 mb-3 text-[14px] md:text-[16px] font-semibold md:leading-[25.6px] leading-[22.4px] text-left"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: "Giphurs",
              }}
              >
                Features
              </div>
              <ul className="space-y-2">
                {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#64737A]" />
                  <span
                    className="text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-left"
                    style={{
                      color: "var(--Colors-Text-Secondary, #64737A)",
                      fontFamily: "Giphurs",
                    }}
                  >
                    {f}
                  </span>
                </li>

                ))}
              </ul>
            </div>
          </div>
                    {/* right: image card */}
          <figure className="overflow-hidden rounded-2xl md:hidden block mx-2.5">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-[444px] w-full object-cover"
            />
          </figure>
        </div>
    </section>
  );
}
