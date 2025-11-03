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
    <section className="w-full bg-white pl-[120px] py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: copy */}
          <div className="max-w-xl">
              <div className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 text-[12px] md:text-[14px] text-[#2C3C44]">
                {overline}
              </div>

            <h2
                className="mb-auto mt-5 text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
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
                color: "var(--Colors-Text-Secondary, #64737A)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
              }}
            >
              {body}
            </p>

            <p
              className="mb-8 text-[14px] md:text-[16px] font-semibold md:leading-[25.6px] leading-[22.4px] text-left"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
              }}
            >
              {emphasis}
            </p>

            <button
              onClick={onCtaClick}
               className="rounded-full  px-5 py-3 text-[14px] md:text-[16px] font-medium"
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                }}
            >
              {ctaText}
            </button>
          </div>

          {/* RIGHT: photo with gradient caption */}
          <figure className="relative overflow-hidden rounded-2xl shadow-md ">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />

            {/* bottom-left gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* caption block */}
            <figcaption className="absolute flex gap-6 bottom-4 left-4 right-4">
              <div
                className="text-white text-[24px] leading-8 font-semibold drop-shadow-sm w-1/2"
                style={{
                  fontFamily:'"Fraunces", serif',
                  fontWeight: 600,
                }}
              >
                {photoTitle}
              </div>
              <p
                className="mt-2 w-[50%] text-[14px] leading-6 md:block hidden text-white/90"
                style={{ fontFamily:'"Fraunces", serif', }}
              >
                {photoDesc}
              </p>
            </figcaption>
          </figure>
        </div>
    </section>
  );
}
