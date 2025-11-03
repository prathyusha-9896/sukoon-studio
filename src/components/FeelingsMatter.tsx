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
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600">
              {overline}
            </div>

            {/* Title */}
            <h3
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
            </h3>

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
                style={{ aspectRatio: "4 / 3" }}
              />
            </figure>

            <p
              className="mt-4 text-[15px] italic text-gray-800"
              style={{
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                lineHeight: "1.6",
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
