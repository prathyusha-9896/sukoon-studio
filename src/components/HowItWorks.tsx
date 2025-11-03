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

export default function HowItWorks({
  overline = "How It Works",
  headline = "Starting therapy can feel scary. We’ve kept it simple.",
  ctaText = "Start Your Journey →",
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
}: HowItWorksProps) {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* LEFT: copy + image + CTA */}
          <div className="max-w-xl flex">
            <div>
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-600">
              {overline}
            </div>
            <h2
              className="mt-4 text-balance text-3xl sm:text-4xl lg:text-[40px] -tracking-[0.2px]"
              style={{
                color: "#2C3C44",
                fontFamily:
                  '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              {headline}
            </h2>
            <button
              onClick={onCtaClick}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#9CC89B] px-6 py-3 text-sm font-semibold text-[#2C3C44] shadow-sm ring-1 ring-inset ring-black/10 transition hover:brightness-95"
              style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
            >
              {ctaText}
            </button>
            </div>
            <div>
                            <figure className="mt-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 max-w-sm">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            </figure>
            </div>
          </div>

          {/* RIGHT: vertical stepper */}
          <ol className="relative ml-2">
            {/* vertical line */}
            <div className="absolute left-5 top-7 bottom-7 w-px bg-gray-200" />

            <div className="space-y-8">
              {steps.map((s, i) => (
                <li key={i} className="relative pl-14">
                  {/* number badge */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#2C3C44] text-white text-xs font-semibold">
                    {s.num}
                  </div>

                  <h4
                    className="text-lg -tracking-[0.1px]"
                    style={{
                      color: "#2C3C44",
                      fontFamily:
                        '"Fraunces 72pt Soft", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      fontWeight: 600,
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="mt-1 text-[15px] leading-7 text-gray-600 max-w-prose"
                    style={{ fontFamily: "Giphurs, ui-sans-serif, system-ui" }}
                  >
                    {s.desc}
                  </p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
