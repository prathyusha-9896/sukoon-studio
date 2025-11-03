import React from "react";
import Header from "./Header";
export default function Hero() {
  return (
    <section className="w-full">
        <Header/>
      <div className="mx-auto max-w-7xl px-4 sm:pl-6 lg:pl-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div className="pt-6 lg:pt-10">
            <h1
              className="mb-6 text-left -tracking-[0.28px]"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "61.6px", // 110%
              }}
            >
              It’s okay to pause for a moment.
            </h1>

            <p
              className="mb-6 max-w-[560px] text-left"
              style={{
                color: "var(--Colors-Text-Secondary, #64737A)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "25.6px", // 160%
              }}
            >
              If you’ve been carrying too much lately — the thoughts that never
              stop, the emotions you can’t name, or the quiet heaviness that
              others don’t see — this is your space to breathe again.
            </p>

            <p
              className="mb-8 text-left"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "25.6px",
              }}
            >
              You don’t have to figure everything out alone.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full px-5 py-3 text-sm"
                style={{
                  background: "#2C3C44",
                  color: "#FFFFFF",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                  fontWeight: 600,
                }}
              >
                Talk to a Therapist
              </a>

              <a
                href="#"
                className="rounded-full px-5 py-3 text-sm ring-1 ring-black/10"
                style={{
                  background: "#E9F4EB",
                  color: "var(--Colors-Text-Primary, #2C3C44)",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                  fontWeight: 600,
                }}
              >
                See How It Works →
              </a>
            </div>
          </div>

          {/* Right video / media */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "880px",
                flex: "1 0 0",
                borderRadius: "var(--Scale-300, 12px)",
              }}
            >
              {/* Replace with your <video> if needed */}
              <video
                className="h-full w-full object-cover"
                poster="/hero.webm" // optional poster
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero.webm" type="video/mp4" />
              </video>

              {/* Optional bottom-left caption like in the mock */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                <div className="inline-block rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
                  Exclusive care for depth of you
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page-side gutters similar to the screenshot’s wide canvas */}
        <div className="hidden lg:block">
          <div className="h-6" />
        </div>
      </div>
    </section>
  );
}
