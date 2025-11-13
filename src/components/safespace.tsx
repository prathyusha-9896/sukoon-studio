import { useState, useEffect } from "react";

type SafeSpaceProps = {
  overline?: string;
  title?: string;
  blurb?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  leftImgSrc?: string;
  leftImgAlt?: string;
  rightImgSrc?: string;
  rightImgAlt?: string;
  caption?: string[];
  stats?: {
    value: string;
    label: string;
  }[];
};

export default function SafeSpace({
  overline = "What you’ll find here",
  title = "A safe space for your mind to rest and heal.",
  blurb = "Therapy here isn’t about fixing what’s wrong. It’s about understanding what hurts, learning to hold space for yourself, and finding small moments of peace that start to grow again.",
  ctaText = "Book Your First Session",
  onCtaClick,
  leftImgSrc = "/image1.png",
  leftImgAlt = "Smiling person with folded arms",
  rightImgSrc = "/safespace.png",
  rightImgAlt = "Person relaxing during therapy",
  caption = [
    "This is where you can slow down.",
    "Where you can talk without being judged.",
    "Where your emotions are welcome - even the messy ones.",
  ],
  stats = [
    { value: "25+", label: "Years\nExperience" },
    { value: "20+", label: "Professional\nTherapist" },
    { value: "98%", label: "Clients\nSatisfaction" },
  ],
}: SafeSpaceProps) {
  const [visibleIndex, setVisibleIndex] = useState<number>(caption.length - 1);

  useEffect(() => {
    setVisibleIndex(caption.length - 1);
    const stepInterval = 1000;
    const pauseDuration = 2000;
    let timeoutId: any;
    const cycle = (currentState: 'visible' | 'hiding' | 'revealing', currentIdx: number) => {
      switch (currentState) {
        case 'visible':
          timeoutId = setTimeout(() => {
            setVisibleIndex(-1);
            cycle('hiding', -1);
          }, pauseDuration);
          break;
          
        case 'hiding':
          timeoutId = setTimeout(() => {
            setVisibleIndex(0);
            cycle('revealing', 0);
          }, pauseDuration);
          break;
          
        case 'revealing':
          if (currentIdx < caption.length - 1) {
            timeoutId = setTimeout(() => {
              setVisibleIndex(currentIdx + 1);
              cycle('revealing', currentIdx + 1);
            }, stepInterval); 
          } else {
            cycle('visible', currentIdx);
          }
          break;
      }
    };
    if (caption.length > 1) {
        cycle('visible', caption.length - 1);
    }
    return () => clearTimeout(timeoutId);
    
  }, [caption.length]);
  // --- END OF useEffect CHANGE ---

  return (
    <section className="w-full justify-center items-center flex flex-col">
      <div className="mx-auto max-w-3xl md:text-center md:justify-center md:items-center flex flex-col text-left pt-12 md:pt-16 space-y-4 md:px-0 px-6">
        <div
          style={{ fontFamily: "Giphurs" }}
          className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px] font-light text-[#2C3C44] w-fit"
        >
          {overline}
        </div>

        <h2
          className="md:text-[56px] text-[40px] font-semibold md:leading-[61.6px] leading-12 md:text-center text-left -tracking-[0.28px]"
          style={{
            color: "#2C3C44",
            fontFamily: '"Fraunces ",serif',
          }}
        >
          {title}
        </h2>

        <p
          className="mx-auto my-4 max-w-3xl md:text-base text-[14px] leading-7 text-[#64737A]"
          style={{ fontFamily: "Giphurs" }}
        >
          {blurb}
        </p>

        <button
          type="button"
          onClick={onCtaClick}
          className="rounded-full w-fit px-5 py-3 text-[14px] md:text-[16px] font-medium flex justify-center items-center gap-3"
          style={{
            background: "#A8CFA1",
            color: "#2C3C44",
            fontFamily: "Giphurs, ui-sans-serif, system-ui",
          }}
        >
          {ctaText}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3.75 8.385H3.135V9.615H3.75V9V8.385ZM3.75 9V9.615H14.25V9V8.385H3.75V9Z"
                fill="#2C3C44"
              />
              <path
                d="M10.8151 11.5651L10.3803 12L11.25 12.8697L11.6849 12.4349L11.25 12L10.8151 11.5651ZM11.25 12L11.6849 12.4349L14.6849 9.43487L14.25 9L13.8151 8.56513L10.8151 11.5651L11.25 12Z"
                fill="#2C3C44"
              />
              <path
                d="M11.25 6L14.25 9"
                stroke="#2C3C44"
                strokeWidth="1.23"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-[1fr_1.4fr]">
      <figure className="relative flex justify-center items-center overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 md:mx-0 mx-6">
  <img
    src={leftImgSrc}
    alt={leftImgAlt}
    className="
      object-cover rounded-3xl
      md:w-full w-[100%]
      md:aspect-[4/5] aspect-[4/3]
      md:h-auto h-[280px] sm:h-[320px]
      transition-all duration-500 ease-in-out
    "
    style={{
      objectPosition: "center top", 
    }}
    onError={(e) =>
      (e.currentTarget.src =
        'https://placehold.co/600x400/F3EFED/2C3C44?text=Therapist')
    }
  />
</figure>




        <div className="mx-auto md:pl-0 pl-6 overflow-hidden mt-6 grid w-full grid-cols-3 items-start gap-32 text-left md:mt-20 md:hidden ">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div
                className="md:text-[42px] text-[32px]"
                style={{
                  color: "#2C3C44",
                  fontFamily: '"Fraunces", serif',
                  fontWeight: 600,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 whitespace-pre-line md:text-[16px] text-[14px] font-medium leading-4 text-[#64737A]"
                style={{ fontFamily: "Giphurs" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl md:px-0 px-6">
          <div className="relative">
            <img
              src={rightImgSrc}
              alt={rightImgAlt}
              className="rounded-3xl"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/A8CFA1/2C3C44?text=Safe+Space')}
            />

            {/* --- CHANGE HERE: Removed flex-col-reverse and space-y-reverse --- */}
            <figcaption className="pointer-events-none absolute bottom-4 right-4 md:right-12 overflow-hidden flex flex-col items-end space-y-2">
              {caption.map((text, index) => (
                <span
                  key={index}
                  className={`
                    pointer-events-auto inline-block rounded-[12px]
                    md:bg-[#F3EFED] px-4 py-3 md:text-[16px] text-[14px]
                    md:text-[#64737A] text-[#FAF9F8]
                    transition-all duration-700 ease-out
                    ${
                      index <= visibleIndex
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 translate-x-6 translate-y-6"
                    }
                  `}
                  style={{
                  }}
                >
                  {text}
                </span>
              ))}
            </figcaption>
            {/* --- END OF CHANGES --- */}

          </div>
          <div className="md:block hidden">
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 items-start gap-4 text-left md:mt-20 ">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div
                    className="md:text-[42px] text-[32px]"
                    style={{
                      color: "#2C3C44",
                      fontFamily: '"Fraunces", serif',
                      fontWeight: 600,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 whitespace-pre-line md:text-[16px] text-[14px] font-medium leading-5 text-[#64737A]"
                    style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 sm:h-14" />
    </section>
  );
}