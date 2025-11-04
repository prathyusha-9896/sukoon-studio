import React from "react";
import useLearnGerman from "./useLearnGerman";

/** Card shell (icon on LEFT, title+subtitle on RIGHT) */
function FeatureCard({
  title,
  subtitle,
  iconSrc,
  accent = "#FAF9F8",   // light card bg like screenshot
}: {
  title: string;
  subtitle: string;
  iconSrc: string;      // << image path (public/ or imported)
  accent?: string;
}) {
  return (
      <div
        className="rounded-xl p-5 sm:p-8 md:mx-16 items-start"
        style={{ backgroundColor: accent }}
      >
        {/* Icon container (left) */}
          <img
            src={iconSrc}
            alt=""
            className=""
            aria-hidden="true"
          />

        {/* Text */}
        <div className="min-w-0 ">
          <h4
            className="md:text-[32px] text-[24px] pt-4 font-semibold leading-10 text-[#2C3C44]"
            style={{fontFamily:'"Fraunces", serif', }}
          >
            {title}
          </h4>
          <p
            className="mt-1 md:text-[16px] text-sm leading-6 text-[#2C3C44] "
            style={{ fontFamily: 'Giphurs' }}
          >
            {subtitle}
          </p>
        </div>
      </div>
  );
}

const LearnGerman: React.FC = () => {
  const {  items } = useLearnGerman();

  return (
    <section className="mx-auto max-w-[1700px] px-6 md:px-[120px] py-16 md:py-24 ">
      {/* Sticky panel so BG doesn't move; only right column scrolls (hidden scrollbar) */}
      <div className="md:sticky md:top-20 ">
        <div className="bg-[#F3EFED] rounded-3xl p-4 md:p-14 md:h-[calc(100vh-6rem)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_640px] gap-10 md:gap-14 md:h-full">
            {/* LEFT copy (sticky) */}
            <div className="md:sticky md:top-28 ">
              <div style={{ fontFamily: "Giphurs" }} className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#FAF9F8] px-3 py-1 md:text-[14px] text-[12px] font-light  text-[#2C3C44]">
                How We Can Support You
              </div>

              <h2 
              className="mb-7 mt-5 md:text-[42px] text-[32px] font-semibold md:leading-[61.6px] leading-10 text-left md:-tracking-[0.28px]"
              style={{
                color: "#2C3C44",
                fontFamily:'"Fraunces", serif',
              }}
              >
                Different journeys, one <br className="md:block hidden" /> goal — helping you feel <br className="md:block hidden"/> lighter.
              </h2>

              <button
                className="rounded-full px-5 py-3 text-[14px] md:w-fit w-full md:text-[16px] font-medium "
                style={{
                  background: "#A8CFA1",
                  color: "#2C3C44",
                  fontFamily: "Giphurs",
                }}
              >
                Book Your First Session →
              </button>
            </div>

            {/* RIGHT cards — scrolls; scrollbar hidden */}
            <div className="flex flex-col md:gap-24 gap-6 md:pt-6 md:h-full md:overflow-y-auto md:pr-1
                            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((f, i) => (
                <FeatureCard
                  key={i}
                  title={f.title}
                  subtitle={f.subtitle}
                  iconSrc={f.iconSrc}      // << image icon
                  accent="#FAF9F8"
                />
              ))}
              <div className="h-2 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnGerman;
