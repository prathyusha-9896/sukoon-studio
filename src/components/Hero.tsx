import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Header is absolutely positioned over the video */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="mx-auto w-full px-4 sm:pl-6 lg:pl-10">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          {/* Left copy */}
          <div className="flex flex-col justify-center px-[116px] h-full">
            <h1
              className="mb-6 md:text-[56px] text-[40px] font-semibold md:leading-[61.6px] leading-12 text-left -tracking-[0.28px]"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',

              }}
            >
              It’s okay to pause for a moment.
            </h1>

            <p
              className="mb-6 text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-left"
              style={{
                color: "var(--Colors-Text-Secondary, #64737A)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
              }}
            >
              If you’ve been carrying too much lately — the thoughts that never
              stop, the emotions you can’t name, or the quiet heaviness that
              others don’t see — this is your space to breathe again.
            </p>

            <p
              className="mb-8 text-[14px] md:text-[16px] font-semibold md:leading-[25.6px] leading-[22.4px] text-left"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: "Giphurs, ui-sans-serif, system-ui",
              }}
            >
              You don’t have to figure everything out alone.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full border-[1px] border-[#2C3C44] text-[14px] md:text-[16px] font-medium  px-5 py-3 text-sm"
                style={{
                  background: "#ffffff",
                  color: "#2C3C44",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                }}
              >
                Talk to a Therapist
              </a>

              <a
                href="#"
                className="rounded-full px-5 py-3 text-[14px] md:text-[16px] font-medium "
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs, ui-sans-serif, system-ui",
                }}
              >
                See How It Works →
              </a>
            </div>
          </div>

          {/* Right video / media */}
          <div className="relative pt-2">
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
              <div className="pointer-events-none font-giphurs absolute inset-x-0 left-[22%] bottom-20 p-6">
                <div className="inline-block px-3 py-1 font-semibold text-[20px] leading-[32px] text-[#FAF9F8]">
                  Exculsive care for depth of your mind
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
