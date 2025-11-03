import React from "react";

type FeelingsMatterProps = {
  overline?: string;
  title?: string;
  points?: string[];
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
};

export default function FeelingsMatter({
  overline = "Your Feelings Matter",
  title = "If you’ve been feeling...",
  points = [
    "Overwhelmed, anxious, or unable to switch off your thoughts",
    "Emotionally drained, stuck, or unmotivated",
    "Disconnected from people around you",
    "Lost about what you want next in life",
    "Burdened by work, family, or expectations",
    "Unsure how to help your child through emotional struggles",
  ],
  imageSrc = "/image3.png",
  imageAlt = "Person feeling overwhelmed at a desk",
  caption = "Whatever you are feeling, it’s valid — and it’s okay to ask for help.",
}: FeelingsMatterProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Copy */}
          <div>
            {/* Overline pill */}
          <div className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px]  text-[#2C3C44]">
            {overline}
          </div>

            {/* Title */}
            <h2
              className="mb-7 mt-5 md:text-[42px] text-[32px] font-semibold md:leading-[61.6px] leading-12 text-left -tracking-[0.28px]"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',

              }}
            >
              {title}
            </h2>

            {/* Points */}
            <ul className="mt-6 space-y-3 text-[15px] leading-7 text-gray-600">
              {points.map((p, i) => (
                <li
                  key={i}
                  className="relative pl-5"
                  style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
                >
                  <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Image + caption */}
          <div>
            <figure className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </figure>

            <p
              className="mt-4 text-[32px] leading-10 italic text-[#2C3C44]"
              style={{
                fontFamily:'"Fraunces", serif',
              }}
            >
              {caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
