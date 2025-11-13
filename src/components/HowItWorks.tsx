import React from "react";

type Step = {
  num: string;
  title: string;
  desc: string;
};

type HowItWorksProps = {
  overline?: string;
  headline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  steps?: Step[];
};
const StepItem: React.FC<{ step: Step; index: number }> = ({ step, index }) => (
  <li className="relative pl-14">
    <div
      className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${
        index === 0 ? "bg-[#2C3C44] text-white" : "bg-[#E5B5A3] text-[#2C3C44]"
      }`}
    >
      {step.num}
    </div>
    <h4
      className="md:text-[24px] text-[20px] font-semibold -tracking-[0.1px]"
      style={{
        color: "#2C3C44",
        fontFamily: '"Fraunces", serif',
      }}
    >
      {step.title}
    </h4>
    <p
      className="mt-1 md:text-[16px] text-[14px] leading-7 text-gray-600 max-w-prose"
      style={{ fontFamily: "Giphurs" }}
    >
      {step.desc}
    </p>
  </li>
);
const CTAButton: React.FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[14px] md:text-[16px] font-medium transition-all hover:opacity-90"
    style={{
      background: "#A8CFA1",
      color: "#2C3C44",
      fontFamily: "Giphurs",
    }}
  >
    {label}
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
);
const HowItWorks: React.FC<HowItWorksProps> = ({
  overline = "How It Works",
  headline = "Starting therapy can feel scary. We’ve kept it simple.",
  ctaText = "Start Your Journey",
  onCtaClick,
  imageSrc = "/howitworks.png",
  imageAlt = "Smiling person outdoors",
  steps = [
    {
      num: "01",
      title: "Reach Out",
      desc:
        "Choose your slot online and tell us a little about what’s been going on.",
    },
    {
      num: "02",
      title: "Talk in a Safe Space",
      desc:
        "You’ll meet your therapist online, from wherever you feel comfortable. There’s no pressure, no rush. Just a conversation.",
    },
    {
      num: "03",
      title: "Begin to Heal",
      desc:
        "With time, clarity and calm will start to feel a little more natural. You’ll begin to notice the shift within you.",
    },
  ],
}) => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto px-6 md:px-[120px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col justify-between h-full text-center lg:text-left lg:items-start items-center">
            <div
              className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px] font-light text-[#2C3C44]"
              style={{ fontFamily: "Giphurs" }}
            >
              {overline}
            </div>
            <h2
              className="py-6 text-[32px] md:text-[42px] font-semibold leading-12 md:leading-[61.6px] -tracking-[0.28px]"
              style={{
                color: "#2C3C44",
                fontFamily: '"Fraunces", serif',
              }}
            >
              {headline}
            </h2>
            <CTAButton label={ctaText} onClick={onCtaClick} />
          </div>
          <figure className="mt-6 lg:mt-0 lg:ml-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 max-w-sm mx-auto lg:mx-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </figure>
          <ol className="relative ml-2 flex flex-col">
            <div className="absolute left-5 top-7 bottom-7 w-px bg-gray-200" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepItem key={step.num} step={step} index={index} />
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
