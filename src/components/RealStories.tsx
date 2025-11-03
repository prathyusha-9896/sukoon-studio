import React, { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  age?: number | string;
};

type RealStoriesProps = {
  overline?: string;
  title?: string;
  blurb?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  items?: Testimonial[];
  /** pixels per second */
  speed?: number;
};

export default function RealStories({
  overline = "Real Stories, Real Healing",
  title = "What people say after finding their Sukoon",
  blurb = "Every story here is shared with complete confidentiality. Names and details have been changed, but the feelings are real — because healing deserves to be felt, not measured.",
  ctaText = "Book a Session →",
  onCtaClick,
  items = [
    {
      quote:
        "Therapy made me realise that it’s okay to not have it all together. For the first time, I felt heard.",
      name: "Wade Warren",
      age: 28,
    },
    {
      quote:
        "I never thought talking online could feel this safe. It’s been life-changing.",
      name: "Marvin McKinney",
      age: 35,
    },
    {
      quote:
        "I used to wake up with constant anxiety. Now I wake up with hope.",
      name: "Dianne Russell",
      age: 21,
    },
    {
      quote:
        "Sukoon helped me find words for feelings I’d been carrying for years.",
      name: "Courtney Henry",
      age: 31,
    },
  ],
  speed = 60, // px/sec
}: RealStoriesProps) {
  /** Refs and state for the marquee */
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate once to create an infinite loop
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        el.scrollLeft += speed * dt;
        // When we've scrolled past the first half, snap back by half
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, speed, loopItems.length]);

  return (
    <section className="w-full  my-20">
        {/* Header row */}
        <div className="h-full px-32 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr_auto] md:items-start">
          <div>
              <div className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 text-[12px] md:text-[14px] text-[#2C3C44]">
                {overline}
              </div>
            <h2
                className="mt-auto text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
                style={{
                  color: "#2C3C44",
                  fontFamily: '"Fraunces", serif',
                }}
            >
              {title}
            </h2>
          </div>

          <p
              className="mt-auto text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-left"
              style={{
                color: "var(--Colors-Text-Secondary, #64737A)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
              }}
          >
            {blurb}
          </p>

          <div className="mt-2 md:mt-auto md:text-right">
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
        </div>

        {/* Marquee track */}
        <div
          ref={trackRef}
          className="mt-16 overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* hide webkit scrollbar */}
          <style>
            {`.hide-scrollbar::-webkit-scrollbar{display:none}`}
          </style>

          <div
            className="hide-scrollbar flex gap-4 sm:gap-6"
            // make the track wide enough and non-wrapping
            style={{ whiteSpace: "nowrap" }}
            aria-label="What people say"
          >
            {loopItems.map((t, i) => (
              <Card key={i} {...t} />
            ))}
          </div>
        </div>
    </section>
  );
}

/* ----- Card ----- */

function Card({ quote, name, age }: Testimonial) {
  return (
<figure
  className="
    relative w-[280px] h-[198px] sm:w-[320px] lg:w-[360px] shrink-0
    rounded-xl border border-black/10 bg-white p-4
    shadow-sm
    overflow-hidden
    flex flex-col
  "
>
  <p
    className="md:text-[24px] text-[20px] font-light leading-8 text-[#64737A] italic mb-auto"
    style={{
      fontFamily: "Giphurs, ui-sans-serif, system-ui",
      overflow: "hidden", // Ensures that overflow text doesn't escape the box
      display: "block",  // Forces the text to be in a block-level container
      wordWrap: "break-word",  // Ensures text wraps to the next line when it's too long
      whiteSpace: "normal", // Allows text to wrap naturally
    }}
  >
    {quote}
  </p>

  <figcaption className="mt-auto flex items-center justify-between">
    <div
      className="md:text-[16px] text-[14px] font-semibold text-[#64737A]"
      style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
    >
      {name}
      {age !== undefined ? (
        <span className="ml-1 md:text-[14px] text-[12px] font-light text-[#64737A]">, {age}</span>
      ) : null}
    </div>

    {/* Closing quote mark */}
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="none">
      <path d="M21.2659 1C21.2659 0.447715 21.7136 0 22.2659 0H38C38.5523 0 39 0.447715 39 1V18.0382C39 22.9809 37.2717 27.2102 33.815 30.7261C30.5955 34.0009 26.7457 35.7506 22.2658 35.9752C21.7142 36.0028 21.2659 35.5523 21.2659 35V28.1338C21.2659 27.5815 21.715 27.1399 22.2645 27.0845C24.3414 26.8754 26.1376 26.0001 27.6532 24.4586C29.1682 22.9176 30.0286 21.1104 30.2346 19.0368C30.2892 18.4872 29.8355 18.0382 29.2832 18.0382H22.2659C21.7136 18.0382 21.2659 17.5905 21.2659 17.0382V1ZM0 1C0 0.447715 0.447715 0 1 0H16.7341C17.2864 0 17.7341 0.447715 17.7341 1V18.0382C17.7341 22.9809 16.0058 27.2102 12.5491 30.7261C9.32956 34.0009 5.47982 35.7506 0.999898 35.9752C0.448306 36.0028 0 35.5523 0 35V28.1338C0 27.5815 0.449069 27.1399 0.998576 27.0845C3.07552 26.8754 4.87175 26.0001 6.38728 24.4586C7.90227 22.9176 8.76275 21.1104 8.96873 19.0368C9.02332 18.4872 8.56963 18.0382 8.01734 18.0382H1C0.447716 18.0382 0 17.5905 0 17.0382V1Z" fill="#DADADA"/>
    </svg>
  </figcaption>
</figure>
  );
}
