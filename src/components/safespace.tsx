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
  rightImgSrc = "/image2.png",
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
          <div className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600">
            {overline}
          </div>

          <h2
            className="mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl -tracking-[0.2px]"
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
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600"
            style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
          >
            {blurb}
          </p>

          <button
            type="button"
            onClick={onCtaClick}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#9CC89B] px-6 py-3 text-sm font-semibold text-[#2C3C44] shadow-sm ring-1 ring-inset ring-black/10 transition hover:brightness-95"
            style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
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
          <figure className="relative overflow-hidden rounded-3xl shadow-md ring-1 ring-black/5">
            <img
              src={rightImgSrc}
              alt={rightImgAlt}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "16 / 10" }}
            />
            <figcaption className="pointer-events-none absolute bottom-4 right-4">
              <span className="pointer-events-auto inline-block rounded-full bg-white/90 px-4 py-2 text-xs text-gray-800 shadow-sm ring-1 ring-black/10 backdrop-blur">
                {caption}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 items-start gap-4 text-center sm:mt-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="text-2xl sm:text-3xl"
                style={{
                  color: "#2C3C44",
                  fontFamily:
                    '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  fontWeight: 600,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 whitespace-pre-line text-xs leading-5 text-gray-600"
                style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
