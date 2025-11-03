import React from "react";

type Step = {
  num: string;
  title: string;
  desc: string;
};

type HowItWorksProps = {
  overline?: string;
  headline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  steps?: Step[];
};

export default function HowItWorks({
  overline = "How It Works",
  headline = "Starting therapy can feel scary. We’ve kept it simple.",
  ctaText = "Start Your Journey →",
  onCtaClick,
  imageSrc = "/howitworks.png",
  imageAlt = "Smiling person outdoors",
  steps = [
    {
      num: "01",
      title: "Reach Out",
      desc:
        "Choose your slot online and tell us a little about what’s been going on.",
    },
    {
      num: "02",
      title: "Talk in a Safe Space",
      desc:
        "You’ll meet your therapist online, from wherever you feel comfortable. There’s no pressure, no rush. Just a conversation.",
    },
    {
      num: "03",
      title: "Begin to Heal",
      desc:
        "With time, clarity and calm will start to feel a little more natural. You’ll begin to notice the shift within you.",
    },
  ],
}: HowItWorksProps) {
  return (
    <section className="w-full py-16 ">
      <div className="mx-auto px-[120px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          {/* LEFT: copy + CTA + image */}
          <div className="flex flex-col lg:flex-row items-start justify-between lg:h-full">
            {/* Text & CTA */}
            <div className="h-full flex flex-col items-center lg:items-start text-center lg:text-left flex-grow">
              {/* Overline */}
              <div className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 text-[12px] md:text-[14px] text-[#2C3C44]">
                {overline}
              </div>

              {/* Headline */}
              <h2
                className="mb-auto mt-5 text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
                style={{
                  color: "#2C3C44",
                  fontFamily: '"Fraunces", serif',
                }}
              >
                {headline}
              </h2>

              {/* CTA Button */}
              <button
                className="rounded-full  px-5 py-3 text-[14px] md:text-[16px] font-medium"
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                }}
                onClick={onCtaClick}
              >
                {ctaText}
              </button>
            </div>
          </div>

          {/* Image */}
          <figure className="mt-6 lg:mt-0 lg:ml-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 max-w-sm">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </figure>

          {/* RIGHT: vertical stepper */}
          <ol className="relative ml-2 flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-5 top-7 bottom-7 w-px bg-gray-200" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((s, i) => (
                <li key={i} className="relative pl-14">
                  {/* Step number */}
                  <div
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full  text-xs font-semibold ${
                      i > 0 ? "bg-[#E5B5A3] text-[#2C3C44]" : "bg-[#2C3C44] text-white" // Apply color only for steps 2 and 3
                    }`}
                  >
                    {s.num}
                  </div>

                  {/* Step title */}
                  <h4
                    className="md:text-[24px] text-[20px] font-semibold -tracking-[0.1px]"
                    style={{
                      color: "#2C3C44",
                      fontFamily: '"Fraunces", serif',
                      fontWeight: 600,
                    }}
                  >
                    {s.title}
                  </h4>

                  {/* Step description */}
                  <p
                    className="mt-1 md:text-[16px] text-[14px] leading-7 text-gray-600 max-w-prose"
                    style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
                  >
                    {s.desc}
                  </p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
