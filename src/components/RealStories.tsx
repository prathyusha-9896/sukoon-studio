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
    <section className="w-full ">
      <div className="mx-auto max-w-6xl ">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr_auto] md:items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600">
              {overline}
            </div>
            <h2
              className="mt-3 text-2xl sm:text-3xl lg:text-[28px] -tracking-[0.2px]"
              style={{
                color: "#2C3C44",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                fontWeight: 600,
                lineHeight: "1.2",
              }}
            >
              {title}
            </h2>
          </div>

          <p
            className="text-sm leading-6 text-gray-600"
            style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
          >
            {blurb}
          </p>

          <div className="mt-2 md:mt-0 md:text-right">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-full bg-[#9CC89B] px-5 py-2.5 text-sm font-semibold text-[#2C3C44] shadow-sm ring-1 ring-inset ring-black/10 transition hover:brightness-95"
              style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
            >
              {ctaText}
            </button>
          </div>
        </div>

        {/* Marquee track */}
        <div
          ref={trackRef}
          className="mt-6 overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none]"
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
      </div>
    </section>
  );
}

/* ----- Card ----- */

function Card({ quote, name, age }: Testimonial) {
  return (
    <figure
      className="
        relative w-[280px] sm:w-[320px] lg:w-[360px] shrink-0
        rounded-xl border border-black/10 bg-white p-4 sm:p-5
        shadow-sm
      "
    >
      <blockquote
        className="text-[15px] leading-7 text-gray-700 italic"
        style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
      >
        {quote}
      </blockquote>

      <figcaption className="mt-4 flex items-center justify-between">
        <div
          className="text-sm font-semibold text-[#2C3C44]"
          style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
        >
          {name}
          {age !== undefined ? (
            <span className="ml-1 font-normal text-gray-500">, {age}</span>
          ) : null}
        </div>

        {/* closing quote mark */}
        <span
          className="select-none text-2xl leading-none text-gray-300"
          aria-hidden="true"
        >
          ””
        </span>
      </figcaption>
    </figure>
  );
}
