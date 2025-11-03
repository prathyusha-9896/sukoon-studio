import React from "react";

type SafeSpaceProps = {
  overline?: string;
  title?: string;
  blurb?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  leftImgSrc?: string;
  leftImgAlt?: string;
  rightImgSrc?: string;
  rightImgAlt?: string;
  caption?: string;
  stats?: {
    value: string;
    label: string;
  }[];
};

export default function SafeSpace({
  overline = "What you’ll find here",
  title = "A safe space for your mind to rest and heal.",
  blurb = "Therapy here isn’t about fixing what’s wrong. It’s about understanding what hurts, learning to hold space for yourself, and finding small moments of peace that start to grow again.",
  ctaText = "Book Your First Session →",
  onCtaClick,
  leftImgSrc = "/image1.png",
  leftImgAlt = "Smiling person with folded arms",
  rightImgSrc = "/safespace.png",
  rightImgAlt = "Person relaxing during therapy",
  caption = "This is where you can slow down.",
  stats = [
    { value: "25+", label: "Years\nExperience" },
    { value: "20+", label: "Professional\nTherapist" },
    { value: "98%", label: "Clients\nSatisfaction" },
  ],
}: SafeSpaceProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header copy */}
        <div className="mx-auto max-w-3xl text-center pt-12 sm:pt-16">
          <div className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px]  text-[#2C3C44]">
            {overline}
          </div>

          <h2
              className="mb-6 md:text-[56px] text-[40px] font-semibold md:leading-[61.6px] leading-12 md:text-center text-left -tracking-[0.28px]"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',

              }}
          >
            {title}
          </h2>

          <p
            className="mx-auto my-4 max-w-3xl md:text-base text-[14px] leading-7 text-gray-600"
            style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
          >
            {blurb}
          </p>

          <button
            type="button"
            onClick={onCtaClick}
                className="rounded-full px-5 py-3 text-[14px] md:text-[16px] font-medium "
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                }}
          >
            {ctaText}
          </button>
        </div>

        {/* Media row */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left image card */}
          <figure className="relative overflow-hidden rounded-3xl bg-gray-50 shadow-sm ring-1 ring-black/5">
            <img
              src={leftImgSrc}
              alt={leftImgAlt}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </figure>

          {/* Right image card with caption pill */}
          <div className=" rounded-3xl ">
            <div className="relative">
            <img
              src={rightImgSrc}
              alt={rightImgAlt}
              className=""
            />
            <figcaption className="pointer-events-none absolute bottom-4 right-4">
              <span className="pointer-events-auto inline-block rounded-[12px] bg-[#F3EFED] px-4 py-3 md:text-[16px] text-[14px] text-[#64737A] ">
                {caption}
              </span>
            </figcaption>
            </div>
            
        {/* Stats */}
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 items-start gap-4 text-left md:mt-20">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div
                className="md:text-[42px] text-[32px] "
                style={{
                  color: "#2C3C44",
                  fontFamily:'"Fraunces", serif',
                  fontWeight: 600,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 whitespace-pre-line md:text-[16px] text-[14px] font-medium leading-5 text-[#64737A]"
                style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
