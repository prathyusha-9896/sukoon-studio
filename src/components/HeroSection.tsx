import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "You deserve peace. You deserve to be understood.",
  subtitle = `If you've been waiting for the right time to start therapy, maybe this is it. Take one small step. We'll walk with you the rest of the way.`,
  buttonLabel = "Book a Session",
  onButtonClick,
}) => {
  return (
    <section
      className="flex flex-col items-center justify-center h-full rounded-t-2xl text-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(44, 60, 68, 0.00) 0%, #2C3C44 95.19%), url('/Footer.png') lightgray 0px -146.516px / 100% 157.01% no-repeat",
        minHeight: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6">
        <h1
          className="mb-6 text-[40px] md:text-[56px] font-semibold leading-[1.2] md:leading-[61.6px] -tracking-[0.28px]"
          style={{
            color: "#FAF9F8",
            fontFamily: '"Fraunces", serif',
          }}
        >
          {title.split(" ").length > 6 ? (
            <>
              You deserve peace. <br className="hidden md:block" /> You deserve
              to be understood.
            </>
          ) : (
            title
          )}
        </h1>
        <p
          className="mb-6 text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[25.6px] max-w-[560px]"
          style={{
            color: "#F3EFED",
            fontFamily: "Giphurs",
          }}
        >
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="rounded-full px-5 py-3 text-[14px] md:text-[16px] font-medium transition-all hover:opacity-90"
          style={{
            background: "#A8CFA1",
            color: "#2C3C44",
            fontFamily: "Giphurs, ui-sans-serif, system-ui",
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
