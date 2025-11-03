import React from "react";

type PeopleBehindProps = {
  overline?: string;
  title?: string;
  body?: string;
  emphasis?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  photoTitle?: string;
  photoDesc?: string;
};

export default function PeopleBehind({
  overline = "People Behind Sukoon",
  title = "The people who make this space feel safe",
  body = `Behind Sukoon Studio is a small team that believes healing begins with being truly heard. We are psychologists, listeners, and fellow humans who understand that sometimes, all you need is a space that feels kind — a space that reminds you it’s okay to slow down. Every message, every session, every silence here is met with warmth, patience, and genuine care.`,
  emphasis = `Our work is guided by empathy, not formality — and by the belief that peace can return to any life, with the right kind of support.`,
  ctaText = "Know More About Us →",
  onCtaClick,
  imageSrc = "/peoplebehind.png",
  imageAlt = "Founder portrait",
  photoTitle = "Sukoon Studio was founded by Kritika Khettry",
  photoDesc = `A psychologist who envisioned a softer kind of therapy — one that feels less like treatment and more like being gently understood. Her approach continues to shape the studio’s values: compassion, safety, and deep human connection.`,
}: PeopleBehindProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: copy */}
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
              {body}
            </p>

            <p
              className="mt-4 text-[15px] leading-7 text-[#2C3C44]"
              style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui", fontWeight: 600 }}
            >
              {emphasis}
            </p>

            <button
              onClick={onCtaClick}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#9CC89B] px-6 py-3 text-sm font-semibold text-[#2C3C44] shadow-sm ring-1 ring-inset ring-black/10 transition hover:brightness-95"
              style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
            >
              {ctaText}
            </button>
          </div>

          {/* RIGHT: photo with gradient caption */}
          <figure className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />

            {/* bottom-left gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* caption block */}
            <figcaption className="absolute flex gap-6 bottom-6 left-6 right-6">
              <div
                className="text-white drop-shadow-sm w-1/2"
                style={{
                  fontFamily:
                    '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "1.3",
                }}
              >
                {photoTitle}
              </div>
              <p
                className="mt-2 w-1/2 text-sm leading-6 text-white/90"
                style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
              >
                {photoDesc}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
