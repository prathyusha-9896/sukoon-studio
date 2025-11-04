import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Header is absolutely positioned over the video */}
      <div className="md:absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="mx-auto w-full md:pl-10">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          {/* Left copy */}
          <div className="flex flex-col justify-center md:px-[116px] px-6 h-full">
            <h1
              className="mb-6 md:text-[56px] text-[40px] font-semibold md:leading-[61.6px] leading-12 md:text-left text-center md:-tracking-[0.28px]"
              style={{
                color: "#2C3C44",
                fontFamily:
                  '"Fraunces",serif',

              }}
            >
              It’s okay to pause <br /> for a moment.
            </h1>

            <p
              className="mb-6 text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] md:text-left text-center"
              style={{
                color: "#64737A",
                fontFamily: "Giphurs",
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
                fontFamily: "Giphurs",
              }}
            >
              You don’t have to figure everything out alone.
            </p>

            <div className="md:flex flex-wrap md:gap-4 space-y-5 md:space-y-0">
              <a
                href="#"
                className="rounded-full border-[1px] border-[#2C3C44] text-[14px] md:text-[16px] font-medium  flex justify-center items-center md:px-5 px-3 py-3 text-sm"
                style={{
                  background: "#ffffff",
                  color: "#2C3C44",
                  fontFamily: "Giphurs",
                }}
              >
                Talk to a Therapist
              </a>

              <a
                href="#"
                className="rounded-full md:px-5 px-3 py-3 text-[14px] md:text-[16px] font-medium flex justify-center items-center "
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs",
                }}
              >
                See How It Works 
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.75 8.385H3.135V9.615H3.75V9V8.385ZM3.75 9V9.615H14.25V9V8.385H3.75V9Z" fill="#2C3C44"/>
                    <path d="M10.8151 11.5651L10.3803 12L11.25 12.8697L11.6849 12.4349L11.25 12L10.8151 11.5651ZM11.25 12L11.6849 12.4349L14.6849 9.43487L14.25 9L13.8151 8.56513L10.8151 11.5651L11.25 12Z" fill="#2C3C44"/>
                    <path d="M11.25 6L14.25 9" stroke="#2C3C44" stroke-width="1.23" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right video / media */}
          <div className="relative md:pt-2 pt-12 md:p-0 p-6 ">
            <div
              className="relative w-full overflow-hidden md:h-[880px] h-[440px]"
              style={{
                flex: "1 0 0",
                borderRadius: "var(--Scale-300, 12px)",
              }}
            >
              {/* Replace with your <video> if needed */}
              <video
                className="h-full w-full object-cover "
                poster="/hero.webm" // optional poster
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero.webm" type="video/mp4" />
              </video>

              {/* Optional bottom-left caption like in the mock */}
              <div className="pointer-events-none font-giphurs absolute inset-x-0 md:left-[22%] left-1/6 bottom-[40%] md:bottom-20 p-6">
                <div className="inline-block md:px-3 py-1 font-semibold text-center md:text-[20px] text-[16px] leading-8 text-[#FAF9F8]">
                  Exculsive care for depth <br className="md:hidden block" /> of your mind
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
