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
  ctaText = "Know More About Us",
  onCtaClick,
  imageSrc = "/peoplebehind.png",
  imageAlt = "Founder portrait",
  photoTitle = "Sukoon Studio was founded by Kritika Khettry",
  photoDesc = `A psychologist who envisioned a softer kind of therapy — one that feels less like treatment and more like being gently understood. Her approach continues to shape the studio’s values: compassion, safety, and deep human connection.`,
}: PeopleBehindProps) {
  return (
    <section className="w-full md:pl-[120px] py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ">
          {/* LEFT: copy */}
          <div className="max-w-xl px-6 md:px-0">
          <div style={{ fontFamily: "Giphurs" }} className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px] font-light  text-[#2C3C44]">
            {overline}
          </div>

            <h2
                className="mb-auto pt-4 text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
                style={{
                  color: "#2C3C44",
                  fontFamily: '"Fraunces", serif',
                }}
            >
              {title}
            </h2>

            <p
              className="pt-2 pb-6 text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-left"
              style={{
                color: "var(--Colors-Text-Secondary, #64737A)",
                fontFamily: "Giphurs",
              }}
            >
              {body}
            </p>

            <p
              className="mb-8 text-[14px] md:text-[16px] font-semibold md:leading-[25.6px] leading-[22.4px] text-left"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: "Giphurs",
              }}
            >
              {emphasis}
            </p>

            <button
              onClick={onCtaClick}
               className="rounded-full  px-5 py-3 text-[14px] md:text-[16px] font-medium justify-center items-center flex gap-3 w-full md:w-fit"
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs",
                }}
            >
              {ctaText}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 8.385H3.135V9.615H3.75V9V8.385ZM3.75 9V9.615H14.25V9V8.385H3.75V9Z" fill="#2C3C44"/>
                  <path d="M10.8151 11.5651L10.3803 12L11.25 12.8697L11.6849 12.4349L11.25 12L10.8151 11.5651ZM11.25 12L11.6849 12.4349L14.6849 9.43487L14.25 9L13.8151 8.56513L10.8151 11.5651L11.25 12Z" fill="#2C3C44"/>
                  <path d="M11.25 6L14.25 9" stroke="#2C3C44" stroke-width="1.23" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* RIGHT: photo with gradient caption */}
          <figure className="relative overflow-hidden rounded-2xl  mx-2.5 md:mx-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="md:h-full h-[444px] w-full object-cover"
            />

            {/* bottom-left gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/55 via-black/5 to-transparent" />

            {/* caption block */}
            <figcaption className="absolute flex gap-6 md:bottom-4 bottom-12 md:left-4 md:right-4">
              <div
                className="text-white text-[24px] px-5 leading-8 font-semibold md:w-1/2"
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
