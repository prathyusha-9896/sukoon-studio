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
        className="rounded-[12px] gap-4 sm:gap-5 p-5 sm:p-8 mx-16 items-start"
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
        <div className="min-w-0">
          <h4
            className="text-[15px] sm:text-base font-semibold text-[#2C3C44]"
            style={{ fontFamily: '"Fraunces 72pt Soft", ui-serif, Georgia, serif' }}
          >
            {title}
          </h4>
          <p
            className="mt-1 text-[13px] sm:text-sm leading-6 text-gray-600"
            style={{ fontFamily: 'Giphurs, ui-sans-serif, system-ui' }}
          >
            {subtitle}
          </p>
        </div>
      </div>
  );
}

const LearnGerman: React.FC = () => {
  const { COLORS, items } = useLearnGerman();

  return (
    <section className="mx-auto max-w-[1700px] px-7 md:px-[120px] py-16 md:py-24 bg-[#ffffff]">
      {/* Sticky panel so BG doesn't move; only right column scrolls (hidden scrollbar) */}
      <div className="md:sticky md:top-20 ">
        <div className="bg-[#F3EFED] rounded-[24px] p-[28px] md:p-[56px] ring-1 ring-black/5 md:h-[calc(100vh-6rem)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_640px] gap-10 md:gap-14 md:h-full">
            {/* LEFT copy (sticky) */}
            <div className="md:sticky md:top-28 ">
              <div
                className="inline-block rounded-full px-3 py-1 mb-3"
                style={{
                  color: "#6B6A70",
                  fontFamily: "Raveo Display, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  backgroundColor: COLORS.bannerText,
                }}
              >
                How We Can Support You
              </div>

              <h2 className="text-[#242325] text-[28px] md:text-[40px] font-semibold leading-[50px]">
                Different journeys, one <br /> goal — helping you feel <br /> lighter.
              </h2>

              <button
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#9CC89B] px-6 py-3 text-sm font-semibold text-[#2C3C44] shadow-sm ring-1 ring-inset ring-black/10 transition hover:brightness-95"
                style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
              >
                Book Your First Session →
              </button>
            </div>

            {/* RIGHT cards — scrolls; scrollbar hidden */}
            <div className="flex flex-col gap-24 md:pt-6 md:h-full md:overflow-y-auto md:pr-1
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
